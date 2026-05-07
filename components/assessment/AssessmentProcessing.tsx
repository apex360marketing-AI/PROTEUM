"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import LogoAnimationE from "@/components/marketing/logo-animations/LogoAnimationE";
import { useQuizStore } from "@/lib/stores/quiz-store";
import { OTHER_VALUE } from "@/content/quiz-questions";

const MIN_DURATION_MS = 5500;

const PHASES = [
  { from: 0, to: 2000, label: "Analyzing your responses" },
  { from: 2000, to: 4500, label: "Cross-referencing 247 studies" },
  { from: 4500, to: Number.POSITIVE_INFINITY, label: "Building your protocol" },
] as const;

export function AssessmentProcessing() {
  const router = useRouter();
  const answers = useQuizStore((s) => s.answers);
  const completeSession = useQuizStore((s) => s.completeSession);
  const completedAt = useQuizStore((s) => s.completedAt);
  const hydrated = useQuizStore((s) => s.hydrated);

  const [elapsed, setElapsed] = useState(0);
  const startedAt = useRef<number | null>(null);
  const completing = useRef(false);

  // If the user lands here without ever taking the quiz, send them home.
  useEffect(() => {
    if (!hydrated) return;
    if (Object.keys(answers).length === 0) {
      router.replace("/assessment");
    }
  }, [hydrated, answers, router]);

  // Kick off the timer + the real Supabase write.
  useEffect(() => {
    if (!hydrated) return;
    if (Object.keys(answers).length === 0) return;
    if (completing.current) return;
    completing.current = true;

    startedAt.current = performance.now();

    const metadata = {
      primaryGoal: pickFirstSelected(answers["primary_goal"]),
      ageRange: pickFirstSelected(answers["age_range"]),
      symptomsCount:
        answers["current_symptoms"]?.selected.filter((v) => v !== OTHER_VALUE)
          .length ?? null,
    };

    const persistPromise = completeSession(metadata).catch(() => undefined);

    let raf = 0;
    const tick = () => {
      if (startedAt.current == null) return;
      const ms = performance.now() - startedAt.current;
      setElapsed(ms);
      if (ms < MIN_DURATION_MS + 250) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);

    Promise.all([
      persistPromise,
      new Promise((r) => setTimeout(r, MIN_DURATION_MS)),
    ]).then(() => {
      router.replace("/assessment/results");
    });

    return () => cancelAnimationFrame(raf);
  }, [hydrated, answers, completeSession, router]);

  // After completedAt is stamped, if for some reason we're still here past
  // the min duration, redirect.
  useEffect(() => {
    if (!completedAt) return;
    const remaining = startedAt.current
      ? Math.max(0, MIN_DURATION_MS - (performance.now() - startedAt.current))
      : 0;
    const t = setTimeout(() => router.replace("/assessment/results"), remaining);
    return () => clearTimeout(t);
  }, [completedAt, router]);

  const phase = useMemo(() => {
    return PHASES.find((p) => elapsed >= p.from && elapsed < p.to) ?? PHASES[2];
  }, [elapsed]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p
        className="font-mono text-[12px] uppercase text-proteum-sapphire-glow"
        style={{ letterSpacing: "0.18em" }}
      >
        Synthesizing your protocol
      </p>

      <div className="relative mt-12 flex h-44 w-[320px] items-center justify-center">
        <LogoAnimationE duration={MIN_DURATION_MS} size={56} />
      </div>

      <PhaseLabel label={phase.label} />

      <p
        className="mt-12 max-w-md text-sm leading-relaxed text-proteum-mist"
      >
        Cross-referencing peptide briefs against your inputs. This takes a few
        seconds.
      </p>
    </div>
  );
}

function PhaseLabel({ label }: { label: string }) {
  return (
    <p
      key={label}
      className="mt-10 text-[16px] text-proteum-mist transition-opacity duration-500"
      style={{ animation: "fadeIn 400ms ease-out both" }}
    >
      {label}
      <span
        aria-hidden
        className="ml-0.5 inline-block text-proteum-sapphire-glow"
        style={{ animation: "pulse-dot 1.4s ease-in-out infinite" }}
      >
        .
      </span>
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; text-shadow: 0 0 8px rgba(96, 165, 250, 0.7); }
        }
      `}</style>
    </p>
  );
}

function pickFirstSelected(answer: { selected: string[] } | undefined): string | null {
  if (!answer) return null;
  const real = answer.selected.find((v) => v !== OTHER_VALUE);
  return real ?? null;
}
