"use client";

import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  to: number;
  /** ms */
  duration?: number;
  /** Suffix appended (e.g. "+", "%", "k") */
  suffix?: string;
  className?: string;
};

/**
 * Mono-styled counter that animates from 0 → `to` once on viewport entry.
 * Honors prefers-reduced-motion (jumps straight to final value).
 */
export function StatCounter({
  to,
  duration = 1600,
  suffix = "",
  className,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(to);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(Math.round(eased * to));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className} aria-label={`${to}${suffix}`}>
      {value}
      {suffix}
    </span>
  );
}
