"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { QuizProgress } from "@/components/assessment/QuizProgress";
import { useQuiz } from "@/components/assessment/QuizProvider";
import type { QuizQuestion as QQ } from "@/content/quiz-questions";
import { totalSteps } from "@/content/quiz-questions";
import { cn } from "@/lib/utils/cn";

export function QuizQuestion({ question }: { question: QQ }) {
  const router = useRouter();
  const { answers, setAnswer } = useQuiz();
  const stored = answers[question.key];

  const initialSelected: string[] = Array.isArray(stored)
    ? stored
    : typeof stored === "string"
      ? [stored]
      : [];

  const [selected, setSelected] = useState<string[]>(initialSelected);
  const [pending, startTransition] = useTransition();
  const [submitting, setSubmitting] = useState(false);

  const isMulti = question.type === "multi";
  const isLast = question.step >= totalSteps;
  const canContinue = selected.length > 0;

  const toggle = (value: string) => {
    if (isMulti) {
      setSelected((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
      );
    } else {
      setSelected([value]);
    }
  };

  const onBack = () => {
    if (question.step <= 1) {
      router.push("/assessment");
    } else {
      router.push(`/assessment/${question.step - 1}`);
    }
  };

  const onNext = async () => {
    if (!canContinue || submitting) return;
    setSubmitting(true);
    try {
      const valueToStore = isMulti ? selected : (selected[0] ?? "");
      await setAnswer(question.key, valueToStore);
      startTransition(() => {
        if (isLast) {
          router.push("/assessment/results");
        } else {
          router.push(`/assessment/${question.step + 1}`);
        }
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <QuizProgress current={question.step} total={totalSteps} />

      <h1 className="mt-12 text-balance font-display text-display-md text-proteum-bone">
        {question.prompt}
      </h1>
      {question.helper && (
        <p className="mt-4 text-proteum-mist">{question.helper}</p>
      )}

      <fieldset className="mt-10 space-y-3">
        <legend className="sr-only">{question.prompt}</legend>
        {question.options.map((opt) => {
          const isSelected = selected.includes(opt.value);
          return (
            <label
              key={opt.value}
              className={cn(
                "group flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition-all md:p-6",
                isSelected
                  ? "border-proteum-purple-glow bg-proteum-purple/[0.08] shadow-glow-purple"
                  : "border-white/[0.06] bg-proteum-deep/40 hover:border-white/[0.14] hover:bg-proteum-deep/70",
              )}
            >
              <input
                type={isMulti ? "checkbox" : "radio"}
                name={question.key}
                value={opt.value}
                checked={isSelected}
                onChange={() => toggle(opt.value)}
                className="sr-only"
              />
              <span
                aria-hidden
                className={cn(
                  "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors",
                  isSelected
                    ? "border-proteum-purple-glow bg-proteum-purple-glow text-proteum-black"
                    : "border-white/20 group-hover:border-white/40",
                )}
              >
                {isSelected && <Check size={12} strokeWidth={3} />}
              </span>
              <span className="flex-1">
                <span className="block font-display text-base text-proteum-bone md:text-lg">
                  {opt.label}
                </span>
                {opt.description && (
                  <span className="mt-1 block text-sm text-proteum-mist">
                    {opt.description}
                  </span>
                )}
              </span>
            </label>
          );
        })}
      </fieldset>

      <div className="mt-12 flex items-center justify-between gap-4">
        <Button
          variant="ghost"
          onClick={onBack}
          disabled={pending || submitting}
          aria-label="Previous step"
        >
          <ArrowLeft size={16} />
          Back
        </Button>
        <Button
          onClick={onNext}
          disabled={!canContinue || pending || submitting}
          size="lg"
        >
          {isLast ? "See your protocol" : "Continue"}
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
}
