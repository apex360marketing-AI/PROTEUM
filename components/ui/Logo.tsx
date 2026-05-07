import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type LogoProps = {
  className?: string;
  href?: string;
  withMark?: boolean;
  /** 32px in nav, 24 inline. */
  size?: "sm" | "md";
};

export function Logo({
  className,
  href = "/",
  withMark = true,
  size = "md",
}: LogoProps) {
  const markPx = size === "sm" ? 24 : 32;
  const wordPx = size === "sm" ? "text-[13px]" : "text-[15px]";

  const inner = (
    <span className={cn("inline-flex items-center gap-3", className)}>
      {withMark && <LogoMark px={markPx} />}
      <span
        className={cn(
          "font-sans font-medium text-proteum-bone uppercase",
          wordPx,
        )}
        style={{ letterSpacing: "0.08em" }}
      >
        PROTEUM
      </span>
    </span>
  );

  if (!href) return inner;

  return (
    <Link href={href} aria-label="PROTEUM home" className="inline-flex items-center">
      {inner}
    </Link>
  );
}

/**
 * Chrome-and-sapphire molecular mark. Three nodes connected by sapphire bonds,
 * the central node a chrome highlight that catches light. Visually echoes the
 * full 3D logo asset without trying to be a flat replica.
 */
function LogoMark({ px = 32 }: { px?: number }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width={px}
      height={px}
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="proteum-chrome-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B7180" />
          <stop offset="50%" stopColor="#E8ECF2" />
          <stop offset="100%" stopColor="#6B7180" />
        </linearGradient>
        <radialGradient id="proteum-sapphire-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="1" />
        </radialGradient>
      </defs>

      {/* Bonds */}
      <line x1="16" y1="16" x2="6" y2="9" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="16" y1="16" x2="26" y2="9" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="16" y1="16" x2="16" y2="27" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round" />

      {/* Outer nodes — chrome */}
      <circle cx="6" cy="9" r="3" fill="url(#proteum-chrome-grad)" />
      <circle cx="26" cy="9" r="3" fill="url(#proteum-chrome-grad)" />
      <circle cx="16" cy="27" r="3" fill="url(#proteum-chrome-grad)" />

      {/* Center node — sapphire glow */}
      <circle cx="16" cy="16" r="4" fill="url(#proteum-sapphire-glow)" />
      <circle cx="16" cy="16" r="4" fill="none" stroke="#E8ECF2" strokeOpacity="0.4" strokeWidth="0.5" />
    </svg>
  );
}
