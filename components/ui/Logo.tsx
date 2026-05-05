import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type LogoProps = {
  className?: string;
  href?: string;
  withMark?: boolean;
};

export function Logo({ className, href = "/", withMark = true }: LogoProps) {
  const inner = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {withMark && <LogoMark />}
      <span className="font-display text-base tracking-[0.18em] text-proteum-bone">
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

function LogoMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="text-proteum-purple-glow"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
    </svg>
  );
}
