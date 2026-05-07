"use client";

import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { QuizProgress } from "@/components/assessment/QuizProgress";
import {
  DEFAULT_OTHER_LABEL,
  isAnswerComplete,
  OTHER_VALUE,
  type QuizAnswer,
  type QuizQuestion as QQ,
  totalSteps,
} from "@/content/quiz-questions";
import { useQuizStore } from "@/lib/stores/quiz-store";
import { cn } from "@/lib/utils/cn";

const MAX_OTHER_CHARS = 500;

type Props = { question: QQ };

export function QuizQuestion({ question }: Props) {
  const router = useRouter();
  const setAnswer = useQuizStore((s) => s.setAnswer);
  const goToOrder = useQuizStore((s) => s.goToOrder);
  const stored = useQuizStore((s) => s.answers[question.id]);
  const hydrated = useQuizStore((s) => s.hydrated);

  // Working copy of the answer — synced to store on every change.
  const [answer, setLocalAnswer] = useState<QuizAnswer>(() =>
    stored ?? defaultAnswer(),
  );
  const [exiting, setExiting] = useState(false);
  const otherTextareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Re-sync when navigating across questions.
  useEffect(() => {
    setLocalAnswer(stored ?? defaultAnswer());
    setExiting(false);
    goToOrder(question.order);
  }, [question.id, stored, goToOrder, question.order]);

  const isOtherSelected = answer.selected.includes(OTHER_VALUE);
  const complete = isAnswerComplete(question, answer);
  const isLast = question.order >= totalSteps;

  const allOptions = useMemo(() => {
    const base = question.options ?? [];
    if (!question.allowOther || question.type === "free_text") return base;
    return [
      ...base,
      {
        value: OTHER_VALUE,
        label: question.otherLabel ?? DEFAULT_OTHER_LABEL,
      },
    ];
  }, [question]);

  // Persist answers to the store on every change.
  useEffect(() => {
    setAnswer(question.id, answer);
  }, [answer, question.id, setAnswer]);

  // Auto-focus the Other textarea when it appears.
  useEffect(() => {
    if (isOtherSelected && otherTextareaRef.current) {
      otherTextareaRef.current.focus();
    }
  }, [isOtherSelected]);

  const toggleOption = (value: string) => {
    setLocalAnswer((prev) => {
      if (question.type === "single_select") {
        return { ...prev, selected: [value] };
      }
      // multi_select
      const has = prev.selected.includes(value);
      if (has) {
        return { ...prev, selected: prev.selected.filter((v) => v !== value) };
      }
      const cap = question.maxSelections ?? Infinity;
      // Other always appends without counting against the cap visually,
      // but we still respect the cap for parity with select counts.
      if (prev.selected.length >= cap) return prev;
      return { ...prev, selected: [...prev.selected, value] };
    });
  };

  const setOtherText = (text: string) =>
    setLocalAnswer((prev) => ({ ...prev, otherText: text }));

  const setFreeText = (text: string) =>
    setLocalAnswer((prev) => ({ ...prev, text }));

  const onBack = () => {
    if (question.order <= 1) {
      router.push("/assessment");
      return;
    }
    setExiting(true);
    setTimeout(() => {
      router.push(`/assessment/${question.order - 1}`);
    }, 200);
  };

  const onNext = () => {
    if (!complete && !(question.type === "free_text" && !question.required)) {
      return;
    }
    setExiting(true);
    setTimeout(() => {
      if (isLast) {
        router.push("/assessment/processing");
      } else {
        router.push(`/assessment/${question.order + 1}`);
      }
    }, 200);
  };

  const skipFreeText = () => {
    setLocalAnswer({ selected: [], text: "" });
    setExiting(true);
    setTimeout(() => router.push("/assessment/processing"), 200);
  };

  // Keyboard navigation.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!hydrated) return;
      const tag = (e.target as HTMLElement | null)?.tagName?.toLowerCase();
      const inEditable =
        tag === "input" || tag === "textarea" || (e.target as HTMLElement | null)?.isContentEditable;

      if (e.key === "Enter" && !inEditable) {
        if (complete) {
          e.preventDefault();
          onNext();
        }
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault();
        onBack();
        return;
      }
      // Number keys for quick-select on select questions.
      if (
        (question.type === "single_select" || question.type === "multi_select") &&
        !inEditable
      ) {
        const n = Number.parseInt(e.key, 10);
        if (Number.isFinite(n) && n >= 1 && n <= allOptions.length) {
          e.preventDefault();
          const opt = allOptions[n - 1];
          if (opt) toggleOption(opt.value);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [complete, allOptions, hydrated, question.type, question.id]);

  return (
    <div
      className={cn(
        "transition-all duration-300 ease-out",
        exiting ? "opacity-0 -translate-y-3" : "opacity-100 translate-y-0",
      )}
    >
      <QuizProgress
        current={question.order}
        total={totalSteps}
        section={question.section}
      />

      <div className="mt-12">
        <h1
          className="text-balance font-display font-light text-proteum-bone"
          style={{
            fontVariationSettings: '"opsz" 96',
            fontSize: "clamp(2rem, 4vw, 2.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {question.prompt}
        </h1>
        {question.helper && (
          <p className="mt-4 text-[16px] leading-relaxed text-proteum-mist">
            {question.helper}
          </p>
        )}
      </div>

      <div className="mt-16">
        {question.type === "free_text" ? (
          <FreeTextArea
            value={answer.text ?? ""}
            onChange={setFreeText}
            placeholder="Take as much space as you need…"
          />
        ) : (
          <>
            {question.type === "multi_select" && question.maxSelections ? (
              <p
                className="mb-4 font-mono text-[11px] uppercase text-proteum-mist-low"
                style={{ letterSpacing: "0.18em" }}
              >
                Selected{" "}
                <span className="text-proteum-sapphire-glow">
                  {answer.selected.filter((v) => v !== OTHER_VALUE).length}
                </span>{" "}
                of {question.maxSelections}
              </p>
            ) : null}

            <ul className="flex flex-col gap-3">
              {allOptions.map((opt, i) => {
                const isSelected = answer.selected.includes(opt.value);
                return (
                  <li key={opt.value}>
                    <OptionCard
                      label={opt.label}
                      number={i + 1}
                      selected={isSelected}
                      onSelect={() => toggleOption(opt.value)}
                      multi={question.type === "multi_select"}
                    />
                  </li>
                );
              })}
            </ul>

            {/* Slide-in textarea when "Other" is selected */}
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-300 ease-out",
                isOtherSelected
                  ? "mt-4 grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="min-h-0">
                <OtherTextarea
                  ref={otherTextareaRef}
                  value={answer.otherText ?? ""}
                  onChange={setOtherText}
                  questionId={question.id}
                />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mt-16 flex items-center justify-between gap-4">
        <Button
          variant="chrome-ghost"
          onClick={onBack}
          aria-label="Previous step"
        >
          <ArrowLeft size={16} />
          Back
        </Button>

        {question.type === "free_text" && !question.required ? (
          <div className="flex items-center gap-3">
            <Button variant="ghost" onClick={skipFreeText}>
              Skip — nothing to add
            </Button>
            <Button onClick={onNext} size="lg">
              {isLast ? "See your protocol" : "Continue"}
              <ArrowRight size={16} />
            </Button>
          </div>
        ) : (
          <Button onClick={onNext} disabled={!complete} size="lg">
            {isLast ? "See your protocol" : "Continue"}
            <ArrowRight size={16} />
          </Button>
        )}
      </div>
    </div>
  );
}

function defaultAnswer(): QuizAnswer {
  return { selected: [], otherText: "", text: "" };
}

// ─────────────── Option card ───────────────

type OptionProps = {
  label: string;
  number: number;
  selected: boolean;
  onSelect: () => void;
  multi: boolean;
};

function OptionCard({ label, number, selected, onSelect, multi }: OptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={cn(
        "group relative flex w-full items-start gap-4 rounded-2xl border bg-proteum-surface/40 p-4 text-left",
        "backdrop-blur-[16px] transition-all duration-200 ease-out",
        "hover:-translate-y-0.5 hover:bg-proteum-surface/70",
        selected
          ? "border-proteum-sapphire bg-proteum-sapphire/[0.08] shadow-[0_0_24px_-6px_rgba(96,165,250,0.5)]"
          : "border-proteum-chrome-low/25 hover:border-proteum-sapphire-glow/60",
      )}
      style={{
        // Hairline 1px on selected, 0.5 otherwise.
        borderWidth: selected ? 1 : 0.5,
      }}
    >
      <span
        aria-hidden
        className={cn(
          "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full font-mono text-[11px] transition-colors",
          multi
            ? selected
              ? "bg-proteum-sapphire-glow text-proteum-void"
              : "border border-proteum-chrome-low/40 text-proteum-mist-low group-hover:border-proteum-chrome-mid/60"
            : selected
              ? "bg-proteum-sapphire-glow text-proteum-void"
              : "border border-proteum-chrome-low/40 text-proteum-mist-low group-hover:border-proteum-chrome-mid/60",
        )}
      >
        {selected ? <Check size={13} strokeWidth={3} /> : number}
      </span>
      <span
        className="flex-1 font-display font-light text-proteum-bone"
        style={{
          fontVariationSettings: '"opsz" 24',
          fontSize: "1.0625rem",
          lineHeight: 1.4,
          letterSpacing: "-0.005em",
        }}
      >
        {label}
      </span>

      {/* Selected indicator dot top-right */}
      {selected ? (
        <span
          aria-hidden
          className="absolute right-4 top-4 size-2 rounded-full bg-proteum-sapphire-glow"
          style={{ boxShadow: "0 0 8px rgba(96, 165, 250, 0.7)" }}
        />
      ) : null}
    </button>
  );
}

// ─────────────── Other textarea ───────────────

type OtherProps = {
  value: string;
  onChange: (next: string) => void;
  questionId: string;
};

const OtherTextarea = forwardRef<HTMLTextAreaElement, OtherProps>(
  function OtherTextarea({ value, onChange, questionId }, ref) {
    const id = `other-${questionId}`;
    const remaining = MAX_OTHER_CHARS - value.length;
    return (
      <div className="glass rounded-xl p-4">
        <label htmlFor={id} className="sr-only">
          Describe in your own words
        </label>
        <textarea
          ref={ref}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value.slice(0, MAX_OTHER_CHARS))}
          rows={4}
          maxLength={MAX_OTHER_CHARS}
          placeholder="Describe in your own words…"
          className={cn(
            "w-full resize-none bg-transparent text-[15px] text-proteum-bone outline-none",
            "placeholder:text-proteum-mist-low",
          )}
        />
        <div
          className="mt-2 flex justify-end font-mono text-[11px] text-proteum-mist-low"
          style={{ letterSpacing: "0.12em" }}
        >
          {remaining} / {MAX_OTHER_CHARS}
        </div>
      </div>
    );
  },
);

// ─────────────── Free-text question (D4) ───────────────

function FreeTextArea({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (s: string) => void;
  placeholder?: string;
}) {
  const remaining = MAX_OTHER_CHARS - value.length;
  return (
    <div className="glass rounded-2xl p-5">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, MAX_OTHER_CHARS))}
        rows={6}
        maxLength={MAX_OTHER_CHARS}
        placeholder={placeholder}
        className={cn(
          "w-full resize-none bg-transparent text-[16px] leading-relaxed text-proteum-bone outline-none",
          "placeholder:text-proteum-mist-low",
        )}
      />
      <div
        className="mt-2 flex justify-end font-mono text-[11px] text-proteum-mist-low"
        style={{ letterSpacing: "0.12em" }}
      >
        {remaining} / {MAX_OTHER_CHARS}
      </div>
    </div>
  );
}
