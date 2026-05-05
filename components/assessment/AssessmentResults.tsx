"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import { Sparkles, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useQuiz } from "@/components/assessment/QuizProvider";
import { quizQuestions } from "@/content/quiz-questions";

export function AssessmentResults() {
  const { answers, completeSession, resetSession, ready } = useQuiz();

  useEffect(() => {
    if (!ready) return;
    if (Object.keys(answers).length === 0) return;
    void completeSession();
  }, [ready, answers, completeSession]);

  const summary = useMemo(() => {
    return quizQuestions.map((q) => {
      const value = answers[q.key];
      const values = Array.isArray(value) ? value : value ? [value] : [];
      const labels = values
        .map((v) => q.options.find((opt) => opt.value === v)?.label ?? v)
        .filter(Boolean) as string[];
      return { key: q.key, prompt: q.prompt, labels };
    });
  }, [answers]);

  const hasAnswers = summary.some((s) => s.labels.length > 0);

  return (
    <div className="mx-auto max-w-2xl">
      <Eyebrow tone="purple">
        <Sparkles size={11} />
        Results
      </Eyebrow>
      <h1 className="mt-6 text-balance font-display text-display-md md:text-display-lg text-proteum-bone">
        Your personalized peptide protocol is being prepared.
      </h1>

      <div className="mt-8 rounded-2xl border border-white/[0.06] bg-proteum-deep/60 p-6 md:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-proteum-cyan">
          Phase B placeholder
        </p>
        <p className="mt-3 text-proteum-bone">
          The recommendation engine, peptide briefs, and vetted vendor matches
          will appear here when Phase B ships. For now, your answers are
          captured below — they're the inputs the engine will use.
        </p>
      </div>

      {hasAnswers ? (
        <section className="mt-12">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-proteum-mist">
            Your answers
          </h2>
          <dl className="mt-4 divide-y divide-white/[0.06] overflow-hidden rounded-2xl border border-white/[0.06] bg-proteum-deep/40">
            {summary.map((s) => (
              <div key={s.key} className="grid gap-1 px-6 py-5 md:grid-cols-12 md:px-8">
                <dt className="text-sm text-proteum-mist md:col-span-5">{s.prompt}</dt>
                <dd className="text-proteum-bone md:col-span-7">
                  {s.labels.length > 0 ? s.labels.join(" · ") : (
                    <span className="text-proteum-mist">No answer</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ) : (
        <p className="mt-12 text-proteum-mist">
          You haven't completed the assessment yet.{" "}
          <Link href="/assessment" className="text-proteum-bone underline underline-offset-4">
            Start here.
          </Link>
        </p>
      )}

      <div className="mt-12 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <Button variant="secondary" onClick={resetSession}>
          <RotateCcw size={14} />
          Start over
        </Button>
        <Button variant="ghost" href="/">
          Return home
        </Button>
      </div>
    </div>
  );
}
