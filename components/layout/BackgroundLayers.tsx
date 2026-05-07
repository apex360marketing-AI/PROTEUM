"use client";

import { useEffect, useState } from "react";

/**
 * Lit / depth background system. Rendered once at the layout level,
 * fixed-position behind all content with pointer-events disabled.
 *
 * Layers (back-to-front):
 *   1. Base proteum-void color (set on body via globals.css)
 *   2. Primary radial sapphire orb — upper third, breathes, drifts at 0.3x scroll
 *   3. Secondary radial sapphire-glow orb — diagonal offset
 *   4. Tertiary cyan whisper at bottom-left
 *   5. SVG film-grain overlay (mix-blend overlay)
 *   6. Diagonal scanline overlay
 *   7. Bottom vignette
 *
 * Opacities are driven by CSS variables so Mode A vs Mode B (set on <html>)
 * controls intensity without re-rendering the tree.
 */
export function BackgroundLayers() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const update = () => {
      // Orbs drift down at 0.3x scroll speed.
      setScrollOffset(window.scrollY * 0.3);
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${scrollOffset}px, 0)` }}
      >
        {/* Primary sapphire orb */}
        <div
          className="absolute left-1/2 top-[-15%] h-[1600px] w-[1600px] -translate-x-1/2 rounded-full animate-breathe"
          style={{
            background:
              "radial-gradient(circle, rgba(37, 99, 235, var(--orb-opacity)) 0%, rgba(37, 99, 235, 0) 60%)",
            filter: "blur(40px)",
          }}
        />

        {/* Secondary sapphire-glow orb */}
        <div
          className="absolute right-[-10%] top-[40%] h-[1000px] w-[1000px] rounded-full animate-breathe"
          style={{
            background:
              "radial-gradient(circle, rgba(96, 165, 250, var(--orb-glow-opacity)) 0%, rgba(96, 165, 250, 0) 65%)",
            filter: "blur(40px)",
            animationDelay: "-3s",
          }}
        />

        {/* Tertiary cyan whisper */}
        <div
          className="absolute left-[-15%] bottom-[-10%] h-[700px] w-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(94, 234, 212, 0.05) 0%, rgba(94, 234, 212, 0) 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Film-grain overlay — fixed (does not parallax) */}
      <div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          opacity: "var(--grain-opacity)",
        }}
      />

      {/* Diagonal scanline overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(232,236,242,1) 0px, rgba(232,236,242,1) 1px, transparent 1px, transparent 6px)",
          opacity: "var(--scanline-opacity)",
        }}
      />

      {/* Bottom vignette */}
      <div
        className="absolute inset-x-0 bottom-0 h-[40vh]"
        style={{
          background:
            "linear-gradient(to top, rgba(5, 8, 16, 0.6) 0%, rgba(5, 8, 16, 0) 100%)",
        }}
      />
    </div>
  );
}

/**
 * Localized hero glow — a brighter sapphire orb scoped to hero / final CTA sections.
 * Sits inside the section, not fixed, so it scrolls with content.
 */
export function HeroGlow({ tone = "sapphire" }: { tone?: "sapphire" | "sapphire-glow" }) {
  const color = tone === "sapphire-glow" ? "96, 165, 250" : "37, 99, 235";
  const opacityVar = tone === "sapphire-glow" ? "0.22" : "var(--orb-hero-opacity)";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
      <div
        className="absolute left-1/2 top-[-30%] h-[1100px] w-[1100px] -translate-x-1/2 rounded-full animate-breathe"
        style={{
          background: `radial-gradient(circle, rgba(${color}, ${opacityVar}) 0%, rgba(${color}, 0) 60%)`,
          filter: "blur(20px)",
        }}
      />
    </div>
  );
}
