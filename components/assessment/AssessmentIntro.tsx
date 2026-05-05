"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Clock, FileLock2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useQuiz } from "@/components/assessment/QuizProvider";

const meta = [
  { icon: Clock, label: "Five minutes" },
  { icon: FileLock2, label: "No account required" },
  { icon: Sparkles, label: "Free, always" },
] as const;

export function AssessmentIntro() {
  const router = useRouter();
  const { resetSession } = useQuiz();
  const [agreed, setAgreed] = useState(false);

  const begin = () => {
    if (!agreed) return;
    resetSession();
    router.push("/assessment/1");
  };

  return (
    <div className="mx-auto max-w-2xl">
      <Eyebrow tone="purple">Assessment</Eyebrow>
      <h1 className="mt-6 text-balance font-display text-display-md md:text-display-lg text-proteum-bone">
        Tell us what you're trying to do.
      </h1>
      <p className="mt-6 text-proteum-mist md:text-lg">
        A structured assessment that maps your goals, training context, and
        baseline familiarity to a ranked, evidence-graded peptide brief. Your
        answers stay anonymous — no account, no email, no follow-up sales push.
      </p>

      <ul className="mt-10 grid gap-3 sm:grid-cols-3">
        {meta.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-proteum-deep/40 px-4 py-3"
          >
            <Icon size={16} className="text-proteum-purple-glow" />
            <span className="text-sm text-proteum-bone">{label}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10 rounded-2xl border border-white/[0.06] bg-proteum-deep/60 p-6 md:p-8">
        <label className="flex cursor-pointer items-start gap-4">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 size-4 shrink-0 cursor-pointer accent-proteum-purple-glow"
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

      <div className="mt-10">
        <Button onClick={begin} disabled={!agreed} size="lg">
          Begin
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
}
