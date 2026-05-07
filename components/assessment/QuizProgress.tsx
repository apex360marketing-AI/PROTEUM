"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";
import { SECTION_LABELS, type QuizSection } from "@/content/quiz-questions";

type Props = {
  current: number;
  total: number;
  section: QuizSection;
  className?: string;
};

export function QuizProgress({ current, total, section, className }: Props) {
  const pct = Math.min(100, Math.max(0, (current / total) * 100));
  const display = useAnimatedInt(current);

  return (
    <div className={cn("w-full", className)}>
      <p
        className="font-mono text-[11px] uppercase text-proteum-mist-low"
        style={{ letterSpacing: "0.18em" }}
      >
        {SECTION_LABELS[section]}
      </p>

      <div
        className="mt-4 flex items-center justify-between font-mono text-[12px] uppercase text-proteum-mist"
        style={{ letterSpacing: "0.18em" }}
      >
        <span>
          Question{" "}
          <span className="text-proteum-bone">
            <span aria-hidden>{display}</span>
            <span className="sr-only">{current}</span>
          </span>{" "}
          of {total}
        </span>
        <span className="text-proteum-mist-low">{Math.round(pct)}%</span>
      </div>

      <div className="mt-3 h-1 overflow-hidden rounded-full bg-proteum-chrome-mid/20">
        <div
          className="h-full bg-gradient-to-r from-proteum-sapphire to-proteum-sapphire-glow transition-[width] duration-500 ease-out"
          style={{
            width: `${pct}%`,
            boxShadow: "0 0 12px rgba(96, 165, 250, 0.5)",
          }}
        />
      </div>
    </div>
  );
}

/**
 * Smoothly animates the question number when it changes. Quick (~250ms),
 * monotype-friendly. Honors prefers-reduced-motion via CSS in globals.
 */
function useAnimatedInt(target: number) {
  const [value, setValue] = useState(target);

  useEffect(() => {
    if (target === value) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(target);
      return;
    }
    const start = value;
    const delta = target - start;
    const duration = 250;
    const startTs = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTs) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(start + delta * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return value;
}
