"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils/cn";

type ScrollRevealProps = {
  children: ReactNode;
  /** Delay in ms before animation starts after element enters viewport. */
  delay?: number;
  /** Polymorphic tag — defaults to div. */
  as?: ElementType;
  className?: string;
  /** Disable horizontal/vertical translate, only fade. */
  fadeOnly?: boolean;
};

/**
 * ScrollReveal — fade + 12px upward translate over 600ms (cubic-bezier(0.4, 0, 0.2, 1))
 * when the element enters the viewport. Respects prefers-reduced-motion (CSS handles
 * this via the global rule in globals.css). Uses native IntersectionObserver — no
 * runtime dependency.
 */
export function ScrollReveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
  fadeOnly = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

  return (
    <Tag
      ref={setRef}
      className={cn(
        "transition-all duration-[600ms]",
        fadeOnly ? "" : "will-change-transform",
        visible ? "opacity-100 translate-y-0" : fadeOnly ? "opacity-0" : "opacity-0 translate-y-3",
        className,
      )}
      style={{
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDelay: delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </Tag>
  );
}
