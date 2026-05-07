"use client";

/**
 * Concept B — "Particle assembly"
 * Wordmark starts as a cloud of small chrome dots that converge into letterforms.
 * Once assembled, dots solidify into solid letters. A gold-dim halo pulses once at the end.
 */
import { motion } from "framer-motion";
import { useMemo } from "react";
import { LETTERS, type LogoAnimationProps } from "./shared";

type Particle = {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  size: number;
};

function generateParticles(width: number, height: number, count: number, seed = 1): Particle[] {
  // Deterministic pseudo-random so SSR / CSR match.
  const rand = (n: number) => {
    const x = Math.sin(seed + n * 12.9898) * 43758.5453;
    return x - Math.floor(x);
  };
  const particles: Particle[] = [];
  for (let i = 0; i < count; i += 1) {
    particles.push({
      id: i,
      startX: (rand(i * 2) - 0.5) * width * 1.6,
      startY: (rand(i * 2 + 1) - 0.5) * height * 2,
      endX: (rand(i * 2 + 7) - 0.5) * width * 0.85,
      endY: (rand(i * 2 + 11) - 0.5) * height * 0.45,
      size: 1.5 + rand(i * 3) * 1.5,
    });
  }
  return particles;
}

export default function LogoAnimationB({
  duration = 6000,
  size = 72,
  className,
  onComplete,
}: LogoAnimationProps) {
  const seconds = duration / 1000;
  const wordWidth = size * 5.2;
  const wordHeight = size * 1.1;

  const particles = useMemo(
    () => generateParticles(wordWidth, wordHeight, 80),
    [wordWidth, wordHeight],
  );

  const dotPhase = 0.55 * seconds; // cloud → converged
  const letterPhase = 0.25 * seconds; // letters fade in over dots
  const haloDelay = dotPhase + letterPhase * 0.5;

  return (
    <div
      className={`relative flex items-center justify-center ${className ?? ""}`}
      style={{ minHeight: size * 1.4 }}
      onAnimationEnd={onComplete}
    >
      {/* Particle cloud */}
      <div className="pointer-events-none absolute inset-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              width: p.size,
              height: p.size,
              background:
                "linear-gradient(135deg, #C8CDD6 0%, #E8ECF2 100%)",
              boxShadow: "0 0 4px rgba(232, 236, 242, 0.4)",
            }}
            initial={{ x: p.startX, y: p.startY, opacity: 0 }}
            animate={{
              x: [p.startX, p.endX, p.endX],
              y: [p.startY, p.endY, p.endY],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: dotPhase + letterPhase,
              times: [0, dotPhase / (dotPhase + letterPhase), 1],
              ease: [0.2, 0.8, 0.2, 1],
            }}
          />
        ))}
      </div>

      {/* Solidified wordmark */}
      <div className="relative flex items-baseline" style={{ gap: size * 0.04 }}>
        {LETTERS.map((letter, i) => (
          <motion.span
            key={`${letter}-${i}`}
            className="font-sans font-medium text-proteum-bone"
            style={{
              fontSize: size,
              letterSpacing: "0.04em",
              display: "inline-block",
            }}
            initial={{ opacity: 0, scale: 0.92, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{
              duration: letterPhase,
              delay: dotPhase + i * 0.04,
              ease: [0.2, 0.8, 0.2, 1],
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Gold-dim halo pulse */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 0.6, 0], scale: [0.8, 1.3, 1.5] }}
        transition={{ duration: 1.4, delay: haloDelay, ease: "easeOut" }}
        style={{
          background:
            "radial-gradient(circle, rgba(201, 169, 97, 0.4) 0%, rgba(201, 169, 97, 0) 60%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
}
