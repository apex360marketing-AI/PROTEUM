"use client";

/**
 * Concept D — "Molecular bond"
 * Each letter is built from molecular nodes (small chrome circles) connected by sapphire bond lines.
 * Nodes pop into existence one at a time, bonds draw between them, then the letter solidifies.
 * Builds the full wordmark left → right.
 */
import { motion } from "framer-motion";
import { LETTERS, type LogoAnimationProps } from "./shared";

export default function LogoAnimationD({
  duration = 7000,
  size = 72,
  className,
  onComplete,
}: LogoAnimationProps) {
  const seconds = duration / 1000;
  const perLetter = (seconds * 0.85) / LETTERS.length;
  const nodeDuration = perLetter * 0.35;
  const bondDuration = perLetter * 0.3;
  const solidifyDuration = perLetter * 0.35;

  return (
    <div
      className={`relative flex items-center justify-center ${className ?? ""}`}
      style={{ minHeight: size * 1.6 }}
      onAnimationEnd={onComplete}
    >
      <div className="relative flex items-baseline" style={{ gap: size * 0.04 }}>
        {LETTERS.map((letter, i) => {
          const baseDelay = i * perLetter;
          // Three nodes per letter: top-left, top-right, bottom-center
          type Node = { x: number; y: number };
          const nodes: readonly [Node, Node, Node] = [
            { x: -size * 0.18, y: -size * 0.32 },
            { x: size * 0.18, y: -size * 0.32 },
            { x: 0, y: size * 0.18 },
          ];
          return (
            <span
              key={`${letter}-${i}`}
              className="relative inline-block"
              style={{ width: size * 0.62, height: size }}
            >
              {/* Bond lines (drawn between nodes) */}
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0"
                viewBox={`-${size / 2} -${size / 2} ${size} ${size}`}
                style={{ overflow: "visible" }}
              >
                <motion.line
                  x1={nodes[0].x}
                  y1={nodes[0].y}
                  x2={nodes[1].x}
                  y2={nodes[1].y}
                  stroke="#60A5FA"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 0.8, 0.4] }}
                  transition={{
                    duration: bondDuration,
                    delay: baseDelay + nodeDuration,
                    ease: "easeOut",
                  }}
                />
                <motion.line
                  x1={nodes[0].x}
                  y1={nodes[0].y}
                  x2={nodes[2].x}
                  y2={nodes[2].y}
                  stroke="#60A5FA"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 0.8, 0.4] }}
                  transition={{
                    duration: bondDuration,
                    delay: baseDelay + nodeDuration + 0.05,
                    ease: "easeOut",
                  }}
                />
                <motion.line
                  x1={nodes[1].x}
                  y1={nodes[1].y}
                  x2={nodes[2].x}
                  y2={nodes[2].y}
                  stroke="#60A5FA"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 0.8, 0.4] }}
                  transition={{
                    duration: bondDuration,
                    delay: baseDelay + nodeDuration + 0.1,
                    ease: "easeOut",
                  }}
                />
              </svg>

              {/* Nodes */}
              {nodes.map((n, ni) => (
                <motion.span
                  key={ni}
                  className="absolute left-1/2 top-1/2 rounded-full"
                  style={{
                    width: 6,
                    height: 6,
                    marginLeft: -3,
                    marginTop: -3,
                    transform: `translate(${n.x}px, ${n.y}px)`,
                    background:
                      "linear-gradient(135deg, #6B7180 0%, #E8ECF2 50%, #6B7180 100%)",
                    boxShadow: "0 0 8px rgba(232, 236, 242, 0.55)",
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.4, 1], opacity: [0, 1, 0.8] }}
                  transition={{
                    duration: nodeDuration,
                    delay: baseDelay + ni * 0.05,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                />
              ))}

              {/* Solidified letter */}
              <motion.span
                className="absolute inset-0 flex items-center justify-center font-sans font-medium text-proteum-bone"
                style={{
                  fontSize: size,
                  letterSpacing: "0.04em",
                  lineHeight: 1,
                }}
                initial={{ opacity: 0, scale: 0.85, filter: "blur(6px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{
                  duration: solidifyDuration,
                  delay: baseDelay + nodeDuration + bondDuration,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
              >
                {letter}
              </motion.span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
