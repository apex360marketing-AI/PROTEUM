"use client";

/**
 * Concept C — "Helix unwind"
 * Letters appear traced along a DNA helix that unwinds and lays flat.
 * Sapphire-glow helix lines fade as letters become solid.
 * Final state: a chrome shine sweeps left → right across the wordmark.
 */
import { motion } from "framer-motion";
import { LETTERS, type LogoAnimationProps } from "./shared";

export default function LogoAnimationC({
  duration = 5500,
  size = 72,
  className,
  onComplete,
}: LogoAnimationProps) {
  const seconds = duration / 1000;
  const helixDuration = seconds * 0.55;
  const letterStagger = 0.08;
  const shineDelay = helixDuration + LETTERS.length * letterStagger * (seconds / 5.5) + 0.1;

  return (
    <div
      className={`relative flex items-center justify-center ${className ?? ""}`}
      style={{ minHeight: size * 1.4 }}
      onAnimationEnd={onComplete}
    >
      {/* Helix backdrop — two sine paths that fade out */}
      <motion.svg
        aria-hidden
        viewBox="0 0 600 200"
        className="pointer-events-none absolute"
        style={{ width: size * 7, height: size * 1.8 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0] }}
        transition={{ duration: helixDuration, ease: "easeInOut" }}
      >
        <motion.path
          d="M 0 100 C 75 30, 150 30, 225 100 S 375 170, 450 100 S 600 30, 600 100"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="1.5"
          strokeOpacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: helixDuration, ease: "easeInOut" }}
        />
        <motion.path
          d="M 0 100 C 75 170, 150 170, 225 100 S 375 30, 450 100 S 600 170, 600 100"
          fill="none"
          stroke="#2563EB"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: helixDuration, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* Wordmark with letter-by-letter solidify */}
      <div className="relative flex items-baseline overflow-hidden" style={{ gap: size * 0.04 }}>
        {LETTERS.map((letter, i) => (
          <motion.span
            key={`${letter}-${i}`}
            className="font-sans font-medium text-proteum-bone"
            style={{
              fontSize: size,
              letterSpacing: "0.04em",
              display: "inline-block",
            }}
            initial={{ opacity: 0, y: -size * 0.25, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.6,
              delay: helixDuration + i * letterStagger * (seconds / 5.5),
              ease: [0.2, 0.8, 0.2, 1],
            }}
          >
            {letter}
          </motion.span>
        ))}

        {/* Chrome shine sweep */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -inset-x-1/4"
          initial={{ x: "-120%" }}
          animate={{ x: "120%" }}
          transition={{ duration: 1.2, delay: shineDelay, ease: [0.4, 0, 0.2, 1] }}
          style={{
            background:
              "linear-gradient(105deg, transparent 30%, rgba(232, 236, 242, 0.55) 50%, transparent 70%)",
            mixBlendMode: "overlay",
          }}
        />
      </div>
    </div>
  );
}
