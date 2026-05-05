"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
};

export function Reveal({ children, delay = 0, className, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;
  const className_ = cn("reveal", className);

  if (Tag === "section") {
    return (
      <section ref={setRef as React.Ref<HTMLElement>} className={className_} style={style}>
        {children}
      </section>
    );
  }
  if (Tag === "article") {
    return (
      <article ref={setRef as React.Ref<HTMLElement>} className={className_} style={style}>
        {children}
      </article>
    );
  }
  if (Tag === "li") {
    return (
      <li ref={setRef as React.Ref<HTMLLIElement>} className={className_} style={style}>
        {children}
      </li>
    );
  }
  return (
    <div ref={setRef as React.Ref<HTMLDivElement>} className={className_} style={style}>
      {children}
    </div>
  );
}
