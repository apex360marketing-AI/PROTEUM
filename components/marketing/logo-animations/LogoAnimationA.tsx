"use client";

/**
 * Concept A — "Convergence"
 * Letters slide in from random 3D directions, rotate, land in position with subtle bounce.
 * Final reveal: a sapphire glow pulses outward from the assembled wordmark.
 */
import { motion } from "framer-motion";
import { LETTERS, type LogoAnimationProps } from "./shared";

const startPositions = [
  { x: -180, y: -120, z: 80, r: -28 },
  { x: 200, y: -80, z: -120, r: 22 },
  { x: -140, y: 160, z: 120, r: 35 },
  { x: 160, y: 180, z: -80, r: -18 },
  { x: -200, y: -40, z: -160, r: 14 },
  { x: 180, y: 100, z: 100, r: -24 },
  { x: -80, y: -200, z: 160, r: 30 },
];

export default function LogoAnimationA({
  duration = 5500,
  size = 72,
  className,
  onComplete,
}: LogoAnimationProps) {
  const letterDuration = 0.9;
  const stagger = 0.12;
  const totalLetters = LETTERS.length * stagger + letterDuration;
  const haloDelay = totalLetters - 0.2;
  const seconds = duration / 1000;

  return (
    <div
      className={`relative flex items-center justify-center ${className ?? ""}`}
      style={{ minHeight: size * 1.4 }}
      onAnimationEnd={onComplete}
    >
      {/* Final sapphire halo */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: [0, 0.85, 0], scale: [0.6, 1.4, 1.7] }}
        transition={{
          duration: 1.4,
          delay: haloDelay,
          ease: "easeOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(96, 165, 250, 0.55) 0%, rgba(96, 165, 250, 0) 60%)",
          filter: "blur(20px)",
        }}
      />

      <div
        className="flex items-baseline"
        style={{ perspective: 1200, gap: size * 0.04 }}
      >
        {LETTERS.map((letter, i) => {
          const start = startPositions[i % startPositions.length];
          return (
            <motion.span
              key={`${letter}-${i}`}
              className="font-sans font-medium text-proteum-bone"
              style={{
                fontSize: size,
                letterSpacing: "0.04em",
                transformStyle: "preserve-3d",
                display: "inline-block",
                willChange: "transform, opacity",
              }}
              initial={{
                opacity: 0,
                x: start.x,
                y: start.y,
                z: start.z,
                rotateZ: start.r,
                rotateX: start.r * 0.5,
              }}
              animate={{ opacity: 1, x: 0, y: 0, z: 0, rotateZ: 0, rotateX: 0 }}
              transition={{
                duration: letterDuration * (seconds / 5.5),
                delay: i * stagger * (seconds / 5.5),
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}
