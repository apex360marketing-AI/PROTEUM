"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type ParallaxLayerProps = {
  children: ReactNode;
  /**
   * Speed multiplier. < 1 moves slower than scroll (drift behind), > 1 moves faster.
   * Default 0.3 — gentle drift suitable for hero orbs / section backgrounds.
   */
  speed?: number;
  className?: string;
};

/**
 * ParallaxLayer — translates Y based on scroll position * (speed - 1).
 * Wraps absolutely-positioned background elements that should drift relative to scroll.
 * Honors prefers-reduced-motion (skips updates).
 */
export function ParallaxLayer({ children, speed = 0.3, className }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      // Distance from the viewport center → drives the translate.
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(center * (speed - 1));
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{ transform: `translate3d(0, ${offset}px, 0)` }}
    >
      {children}
    </div>
  );
}
