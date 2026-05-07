"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Clock, FileLock2, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useQuizStore } from "@/lib/stores/quiz-store";
import { totalSteps } from "@/content/quiz-questions";

const meta = [
  { icon: Clock, label: "Five minutes" },
  { icon: FileLock2, label: "No account required" },
  { icon: Sparkles, label: "Free, always" },
] as const;

export function AssessmentIntro() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const hydrated = useQuizStore((s) => s.hydrated);
  const currentOrder = useQuizStore((s) => s.currentOrder);
  const completedAt = useQuizStore((s) => s.completedAt);
  const answersCount = useQuizStore((s) => Object.keys(s.answers).length);
  const resetSession = useQuizStore((s) => s.resetSession);

  const canResume = hydrated && completedAt === null && answersCount > 0;

  useEffect(() => {
    // If a previous completion lingers, scrub it so the user gets a fresh start
    // when they hit the intro page again.
    if (hydrated && completedAt !== null) {
      // Don't auto-reset — they may be coming back to view results. Just don't
      // surface a "Resume" affordance in that case.
    }
  }, [hydrated, completedAt]);

  const begin = () => {
    if (!agreed) return;
    resetSession();
    router.push("/assessment/1");
  };

  const resume = () => {
    if (!canResume) return;
    const target = Math.max(1, Math.min(totalSteps, currentOrder || 1));
    router.push(`/assessment/${target}`);
  };

  return (
    <div>
      <Eyebrow tone="sapphire">Assessment</Eyebrow>
      <h1
        className="mt-6 text-balance font-display font-light text-proteum-bone"
        style={{
          fontVariationSettings: '"opsz" 144',
          fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        }}
      >
        Tell us what you&apos;re trying to do.
      </h1>
      <p className="mt-6 text-[17px] leading-relaxed text-proteum-mist md:text-[19px]">
        15 questions. Your answers map your goals, current state, and history
        onto a personalized, evidence-graded peptide brief. No account, no
        email, no follow-up sales push.
      </p>

      {canResume && (
        <div className="glass mt-10 flex items-center justify-between gap-4 rounded-2xl p-5">
          <div>
            <p
              className="font-mono text-[11px] uppercase text-proteum-sapphire-glow"
              style={{ letterSpacing: "0.18em" }}
            >
              Resume your assessment
            </p>
            <p className="mt-2 text-sm text-proteum-mist">
              You answered{" "}
              <span className="text-proteum-bone">
                {answersCount} of {totalSteps}
              </span>{" "}
              last time. Pick up where you left off.
            </p>
          </div>
          <Button onClick={resume} size="md">
            Resume
            <ArrowRight size={16} />
          </Button>
        </div>
      )}

      <ul className="mt-10 grid gap-3 sm:grid-cols-3">
        {meta.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="glass flex items-center gap-3 rounded-xl px-4 py-3"
          >
            <Icon size={16} className="text-proteum-sapphire-glow" />
            <span className="text-sm text-proteum-bone">{label}</span>
          </li>
        ))}
      </ul>

      <div className="glass mt-10 rounded-2xl p-6 md:p-8">
        <label className="flex cursor-pointer items-start gap-4">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 size-4 shrink-0 cursor-pointer accent-proteum-sapphire-glow"
          />
          <span className="text-sm text-proteum-bone/90">
            I am 18 or older and I understand this assessment provides{" "}
            <strong className="text-proteum-bone">educational information only</strong>.
            It is not medical advice, does not diagnose or treat any condition,
            and does not direct me to consume any substance. I will consult a
            qualified healthcare professional before acting on anything I learn here.
          </span>
        </label>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <Button onClick={begin} disabled={!agreed} size="lg">
          {canResume ? "Start over" : "Begin"}
          <ArrowRight size={16} />
        </Button>
        {canResume && (
          <Button variant="ghost" onClick={resetSession}>
            <RotateCcw size={14} />
            Discard saved progress
          </Button>
        )}
      </div>
    </div>
  );
}
