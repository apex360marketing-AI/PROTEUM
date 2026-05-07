"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { QuizAnswer } from "@/content/quiz-questions";
import {
  createSupabaseBrowserClient,
  isSupabaseConfigured,
} from "@/lib/supabase/client";

type AnswerMap = Record<string, QuizAnswer>;

type QuizState = {
  /** Supabase row ID for this session — created lazily on first answer. */
  sessionId: string | null;
  /** Local fallback ID used when Supabase isn't configured. */
  isLocalSession: boolean;
  /** ms since epoch when the session began. */
  startedAt: number | null;
  /** All answers keyed by question id. */
  answers: AnswerMap;
  /** 1-based current question index. 0 means "intro/start". */
  currentOrder: number;
  /** True after first hydrate from localStorage. */
  hydrated: boolean;
  /** True while a Supabase write is in flight. */
  saving: boolean;
  /** Set when the user finishes — gates results page from showing prematurely. */
  completedAt: number | null;
};

type QuizActions = {
  /** Mark the store as hydrated after rehydration finishes. */
  setHydrated: () => void;
  /** Update an answer locally and queue a debounced Supabase write. */
  setAnswer: (questionId: string, answer: QuizAnswer) => void;
  /** Move to a specific 1-based order. */
  goToOrder: (order: number) => void;
  /** Stamp completion + persist metadata to Supabase. */
  completeSession: (metadata: SessionMetadata) => Promise<void>;
  /** Wipe local state and start fresh. */
  resetSession: () => void;
  /** True if there's an in-progress session that the user can resume. */
  canResume: () => boolean;
};

export type SessionMetadata = {
  primaryGoal?: string | null;
  ageRange?: string | null;
  symptomsCount?: number | null;
};

type Store = QuizState & QuizActions;

const STORAGE_KEY = "proteum.quiz.v2";

// Debounced Supabase write timer per question id.
const writeTimers = new Map<string, ReturnType<typeof setTimeout>>();
const DEBOUNCE_MS = 500;

async function ensureSession(
  state: QuizState,
  set: (partial: Partial<QuizState>) => void,
): Promise<{ id: string; isLocal: boolean } | null> {
  if (state.sessionId) {
    return { id: state.sessionId, isLocal: state.isLocalSession };
  }

  if (!isSupabaseConfigured()) {
    const id = `local-${crypto.randomUUID()}`;
    set({
      sessionId: id,
      isLocalSession: true,
      startedAt: state.startedAt ?? Date.now(),
    });
    return { id, isLocal: true };
  }

  try {
    const supabase = createSupabaseBrowserClient();
    const { data, error } = await supabase
      .from("quiz_sessions")
      .insert({
        user_agent:
          typeof navigator !== "undefined" ? navigator.userAgent : null,
        referrer:
          typeof document !== "undefined" ? document.referrer || null : null,
      })
      .select("id")
      .single();

    if (error || !data) {
      console.warn("PROTEUM: quiz session create failed", error?.message);
      // Fall back to a local id so the user can continue offline.
      const id = `local-${crypto.randomUUID()}`;
      set({
        sessionId: id,
        isLocalSession: true,
        startedAt: state.startedAt ?? Date.now(),
      });
      return { id, isLocal: true };
    }

    set({
      sessionId: data.id,
      isLocalSession: false,
      startedAt: state.startedAt ?? Date.now(),
    });
    return { id: data.id, isLocal: false };
  } catch (err) {
    console.warn("PROTEUM: quiz session create errored", err);
    return null;
  }
}

async function persistAnswer(
  sessionId: string,
  questionId: string,
  answer: QuizAnswer,
) {
  if (sessionId.startsWith("local-")) return;
  if (!isSupabaseConfigured()) return;

  try {
    const supabase = createSupabaseBrowserClient();
    await supabase.from("quiz_answers").insert({
      session_id: sessionId,
      question_key: questionId,
      answer_value: answer,
    });
  } catch (err) {
    console.warn("PROTEUM: quiz answer persist failed", err);
  }
}

export const useQuizStore = create<Store>()(
  persist(
    (set, get) => ({
      sessionId: null,
      isLocalSession: false,
      startedAt: null,
      answers: {},
      currentOrder: 0,
      hydrated: false,
      saving: false,
      completedAt: null,

      setHydrated: () => set({ hydrated: true }),

      setAnswer: (questionId, answer) => {
        // Update local state immediately for responsive UI.
        set((state) => ({
          answers: { ...state.answers, [questionId]: answer },
          startedAt: state.startedAt ?? Date.now(),
        }));

        // Debounced Supabase write — clear any in-flight timer for this q.
        const existing = writeTimers.get(questionId);
        if (existing) clearTimeout(existing);

        const timer = setTimeout(async () => {
          writeTimers.delete(questionId);
          set({ saving: true });
          try {
            const session = await ensureSession(get(), (p) => set(p));
            if (!session) return;
            await persistAnswer(session.id, questionId, answer);
          } finally {
            set({ saving: false });
          }
        }, DEBOUNCE_MS);

        writeTimers.set(questionId, timer);
      },

      goToOrder: (order) => set({ currentOrder: order }),

      completeSession: async (metadata) => {
        // Flush any pending writes before marking complete.
        const pending = Array.from(writeTimers.values());
        writeTimers.clear();
        pending.forEach((t) => clearTimeout(t));

        const state = get();
        const session = await ensureSession(state, (p) => set(p));
        if (!session) {
          set({ completedAt: Date.now() });
          return;
        }

        // Persist any answers whose debounce timer was cleared above.
        const writePromises = Object.entries(state.answers).map(([qid, ans]) =>
          persistAnswer(session.id, qid, ans),
        );
        await Promise.all(writePromises);

        const completionSeconds = state.startedAt
          ? Math.max(1, Math.round((Date.now() - state.startedAt) / 1000))
          : null;

        if (!session.isLocal && isSupabaseConfigured()) {
          try {
            const supabase = createSupabaseBrowserClient();
            await supabase
              .from("quiz_sessions")
              .update({
                completed_at: new Date().toISOString(),
                primary_goal: metadata.primaryGoal ?? null,
                age_range: metadata.ageRange ?? null,
                symptoms_count: metadata.symptomsCount ?? null,
                completion_seconds: completionSeconds,
              })
              .eq("id", session.id);
          } catch (err) {
            console.warn("PROTEUM: quiz session complete failed", err);
          }
        }

        set({ completedAt: Date.now() });
      },

      resetSession: () => {
        // Cancel any pending writes.
        Array.from(writeTimers.values()).forEach((t) => clearTimeout(t));
        writeTimers.clear();
        set({
          sessionId: null,
          isLocalSession: false,
          startedAt: null,
          answers: {},
          currentOrder: 0,
          completedAt: null,
        });
      },

      canResume: () => {
        const s = get();
        return (
          s.hydrated &&
          s.completedAt === null &&
          Object.keys(s.answers).length > 0
        );
      },
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => {
        if (typeof window === "undefined") {
          return {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {},
          };
        }
        return window.localStorage;
      }),
      // Don't persist transient flags.
      partialize: (state) => ({
        sessionId: state.sessionId,
        isLocalSession: state.isLocalSession,
        startedAt: state.startedAt,
        answers: state.answers,
        currentOrder: state.currentOrder,
        completedAt: state.completedAt,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    },
  ),
);
