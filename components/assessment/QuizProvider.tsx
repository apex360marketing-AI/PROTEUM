"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/client";

type AnswerMap = Record<string, string | string[]>;

type QuizState = {
  sessionId: string | null;
  answers: AnswerMap;
};

type QuizContextValue = QuizState & {
  setAnswer: (questionKey: string, value: string | string[]) => Promise<void>;
  completeSession: () => Promise<void>;
  resetSession: () => void;
  ready: boolean;
};

const STORAGE_KEY = "proteum.quiz.v1";

const QuizContext = createContext<QuizContextValue | null>(null);

function loadFromStorage(): QuizState {
  if (typeof window === "undefined") return { sessionId: null, answers: {} };
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { sessionId: null, answers: {} };
    const parsed = JSON.parse(raw) as QuizState;
    if (parsed && typeof parsed === "object") return parsed;
  } catch {
    // ignore corrupt storage
  }
  return { sessionId: null, answers: {} };
}

function persistToStorage(state: QuizState) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // storage may be unavailable (private mode) — silent fallback
  }
}

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<QuizState>({ sessionId: null, answers: {} });
  const [ready, setReady] = useState(false);
  const supabaseEnabled = useRef(isSupabaseConfigured());

  useEffect(() => {
    setState(loadFromStorage());
    setReady(true);
  }, []);

  const ensureSession = useCallback(async (): Promise<string | null> => {
    if (state.sessionId) return state.sessionId;
    if (!supabaseEnabled.current) {
      const fallbackId = `local-${crypto.randomUUID()}`;
      const next: QuizState = { sessionId: fallbackId, answers: state.answers };
      setState(next);
      persistToStorage(next);
      return fallbackId;
    }

    const supabase = createSupabaseBrowserClient();
    const { data, error } = await supabase
      .from("quiz_sessions")
      .insert({
        user_agent:
          typeof navigator !== "undefined" ? navigator.userAgent : null,
        referrer: typeof document !== "undefined" ? document.referrer || null : null,
      })
      .select("id")
      .single();

    if (error || !data) {
      console.warn("PROTEUM: quiz session create failed", error?.message);
      return null;
    }

    const next: QuizState = { sessionId: data.id, answers: state.answers };
    setState(next);
    persistToStorage(next);
    return data.id;
  }, [state.sessionId, state.answers]);

  const setAnswer = useCallback(
    async (questionKey: string, value: string | string[]) => {
      const sessionId = await ensureSession();

      setState((prev) => {
        const next: QuizState = {
          sessionId: sessionId ?? prev.sessionId,
          answers: { ...prev.answers, [questionKey]: value },
        };
        persistToStorage(next);
        return next;
      });

      if (sessionId && supabaseEnabled.current && !sessionId.startsWith("local-")) {
        try {
          const supabase = createSupabaseBrowserClient();
          await supabase.from("quiz_answers").insert({
            session_id: sessionId,
            question_key: questionKey,
            answer_value: value,
          });
        } catch (err) {
          console.warn("PROTEUM: quiz answer persist failed", err);
        }
      }
    },
    [ensureSession],
  );

  const completeSession = useCallback(async () => {
    const sessionId = state.sessionId;
    if (!sessionId || sessionId.startsWith("local-") || !supabaseEnabled.current) return;
    try {
      const supabase = createSupabaseBrowserClient();
      await supabase
        .from("quiz_sessions")
        .update({ completed_at: new Date().toISOString() })
        .eq("id", sessionId);
    } catch (err) {
      console.warn("PROTEUM: quiz session complete failed", err);
    }
  }, [state.sessionId]);

  const resetSession = useCallback(() => {
    const next: QuizState = { sessionId: null, answers: {} };
    setState(next);
    persistToStorage(next);
  }, []);

  const value = useMemo<QuizContextValue>(
    () => ({
      sessionId: state.sessionId,
      answers: state.answers,
      setAnswer,
      completeSession,
      resetSession,
      ready,
    }),
    [state.sessionId, state.answers, setAnswer, completeSession, resetSession, ready],
  );

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error("useQuiz must be used within a QuizProvider");
  return ctx;
}
