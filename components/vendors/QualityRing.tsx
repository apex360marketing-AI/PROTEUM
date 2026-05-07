import { cn } from "@/lib/utils/cn";

type Props = {
  /** 0–100. */
  score: number;
  /** Outer diameter in px. */
  size?: number;
  className?: string;
};

/**
 * SVG ring that visualizes a 0–100 quality score. Color tier shifts with the
 * score — gold for recommended (≥90), sapphire for acceptable (75–89),
 * chrome-mid for cautious (60–74).
 */
export function QualityRing({ score, size = 56, className }: Props) {
  const clamped = Math.max(0, Math.min(100, score));
  const stroke = Math.max(3, Math.round(size * 0.085));
  const r = size / 2 - stroke / 2;
  const circumference = 2 * Math.PI * r;
  const dash = (clamped / 100) * circumference;

  const color =
    clamped >= 90
      ? "#C9A961" // gold
      : clamped >= 75
        ? "#60A5FA" // sapphire
        : clamped >= 60
          ? "#C8CDD6" // chrome-mid
          : "#6B7180";

  const fontSize = Math.round(size * 0.34);

  return (
    <div
      className={cn("relative inline-flex shrink-0 items-center justify-center", className)}
      style={{ width: size, height: size }}
      aria-label={`Quality score ${clamped} of 100`}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
        aria-hidden
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="transparent"
          stroke="rgba(200, 205, 214, 0.18)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="transparent"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={`${dash} ${circumference - dash}`}
          strokeLinecap="round"
        />
      </svg>
      <span
        className="absolute font-display font-light text-proteum-bone"
        style={{
          fontSize,
          letterSpacing: "-0.02em",
          fontVariationSettings: '"opsz" 36',
        }}
      >
        {clamped}
      </span>
    </div>
  );
}
