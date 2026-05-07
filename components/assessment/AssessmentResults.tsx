"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Sparkles, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useQuiz } from "@/components/assessment/QuizProvider";
import { quizQuestions } from "@/content/quiz-questions";
import LogoAnimationE from "@/components/marketing/logo-animations/LogoAnimationE";

const LOADING_DURATION_MS = 5500;

export function AssessmentResults() {
  const { answers, completeSession, resetSession, ready } = useQuiz();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!ready) return;
    if (Object.keys(answers).length === 0) {
      setLoaded(true);
      return;
    }
    void completeSession();
    const t = setTimeout(() => setLoaded(true), LOADING_DURATION_MS);
    return () => clearTimeout(t);
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

  if (!loaded) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center text-center">
        <p
          className="font-mono text-[12px] uppercase text-proteum-sapphire-glow"
          style={{ letterSpacing: "0.18em" }}
        >
          Synthesizing your protocol
        </p>
        <div className="mt-10">
          <LogoAnimationE duration={LOADING_DURATION_MS} size={64} />
        </div>
        <p className="mt-12 max-w-md text-sm text-proteum-mist">
          Cross-referencing peptide briefs against your inputs. This takes a few
          seconds.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl">
      <Eyebrow tone="sapphire">
        <Sparkles size={11} />
        Results
      </Eyebrow>
      <h1
        className="mt-6 text-balance font-display font-light text-proteum-bone"
        style={{
          fontVariationSettings: '"opsz" 144',
          fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        }}
      >
        Your personalized peptide protocol is being prepared.
      </h1>

      <div className="glass mt-8 rounded-2xl p-6 md:p-8">
        <p
          className="font-mono text-[11px] uppercase text-proteum-cyan"
          style={{ letterSpacing: "0.18em" }}
        >
          Phase B placeholder
        </p>
        <p className="mt-3 text-proteum-bone">
          The recommendation engine, peptide briefs, and vetted vendor matches
          will appear here when Phase B ships. For now, your answers are
          captured below — they&apos;re the inputs the engine will use.
        </p>
      </div>

      {hasAnswers ? (
        <section className="mt-12">
          <h2
            className="font-mono text-[11px] uppercase text-proteum-mist"
            style={{ letterSpacing: "0.18em" }}
          >
            Your answers
          </h2>
          <dl className="glass mt-4 overflow-hidden rounded-2xl">
            {summary.map((s, i) => (
              <div
                key={s.key}
                className={`grid gap-1 px-6 py-5 md:grid-cols-12 md:px-8 ${
                  i < summary.length - 1
                    ? "border-b border-proteum-chrome-low/15"
                    : ""
                }`}
              >
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
          You haven&apos;t completed the assessment yet.{" "}
          <Link
            href="/assessment"
            className="text-proteum-sapphire-glow underline underline-offset-4"
          >
            Start here.
          </Link>
        </p>
      )}

      <div className="mt-12 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <Button variant="chrome-ghost" onClick={resetSession}>
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
