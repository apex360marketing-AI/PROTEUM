"use client";

/**
 * Concept E — "Light sweep" (default)
 * Wordmark starts invisible. A vertical sapphire light beam sweeps left → right.
 * As the beam passes each letter position, that letter materializes in chrome silver.
 * After the sweep completes, the entire wordmark gets a gentle gold-dim glow that fades.
 */
import { motion } from "framer-motion";
import { LETTERS, type LogoAnimationProps } from "./shared";

export default function LogoAnimationE({
  duration = 5000,
  size = 72,
  className,
  onComplete,
}: LogoAnimationProps) {
  const seconds = duration / 1000;
  const sweepDuration = seconds * 0.7;
  const haloStart = sweepDuration + 0.05;

  return (
    <div
      className={`relative flex items-center justify-center ${className ?? ""}`}
      style={{ minHeight: size * 1.4 }}
      onAnimationEnd={onComplete}
    >
      <div
        className="relative flex items-baseline overflow-hidden"
        style={{ gap: size * 0.04, padding: `${size * 0.2}px ${size * 0.5}px` }}
      >
        {/* Sweeping sapphire beam */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-y-0"
          style={{
            width: size * 0.4,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(96, 165, 250, 0.65) 35%, #60A5FA 50%, rgba(96, 165, 250, 0.65) 65%, transparent 100%)",
            filter: "blur(2px)",
            mixBlendMode: "screen",
          }}
          initial={{ x: "-150%" }}
          animate={{ x: "850%" }}
          transition={{ duration: sweepDuration, ease: [0.4, 0, 0.2, 1] }}
        />

        {/* Letters */}
        {LETTERS.map((letter, i) => {
          // Letter materializes when beam crosses ~its position
          const beamProgress = (i + 0.5) / LETTERS.length;
          const letterDelay = beamProgress * sweepDuration - 0.05;
          return (
            <motion.span
              key={`${letter}-${i}`}
              className="chrome-text font-sans font-medium relative"
              style={{
                fontSize: size,
                letterSpacing: "0.04em",
                display: "inline-block",
              }}
              initial={{ opacity: 0, filter: "blur(8px)", y: size * 0.05 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.6,
                delay: Math.max(0, letterDelay),
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>

      {/* Final gold-dim halo */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: [0, 0.55, 0], scale: [0.85, 1.25, 1.4] }}
        transition={{ duration: 1.2, delay: haloStart, ease: "easeOut" }}
        style={{
          background:
            "radial-gradient(circle, rgba(201, 169, 97, 0.4) 0%, rgba(201, 169, 97, 0) 60%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
}
