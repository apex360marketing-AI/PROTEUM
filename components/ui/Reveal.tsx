"use client";

import type { ReactNode, ElementType } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Back-compat alias — older sections import { Reveal }. New code should use
 * { ScrollReveal } directly.
 */
export function Reveal({ children, delay = 0, className, as }: RevealProps) {
  return (
    <ScrollReveal as={as} delay={delay} className={className}>
      {children}
    </ScrollReveal>
  );
}
