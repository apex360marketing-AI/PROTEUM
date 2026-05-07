import { cn } from "@/lib/utils/cn";

type EyebrowTone = "default" | "sapphire" | "cyan" | "gold" | "chrome";

type EyebrowProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: EyebrowTone;
  /** Render bare (no pill chrome) — used for hero / section openers. */
  bare?: boolean;
};

const toneText: Record<EyebrowTone, string> = {
  default: "text-proteum-mist",
  sapphire: "text-proteum-sapphire-glow",
  cyan: "text-proteum-cyan",
  gold: "text-proteum-gold-dim",
  chrome: "text-proteum-chrome-mid",
};

const toneBorder: Record<EyebrowTone, string> = {
  default: "border-proteum-chrome-low/25",
  sapphire: "border-proteum-sapphire-glow/30",
  cyan: "border-proteum-cyan/30",
  gold: "border-proteum-gold-dim/40",
  chrome: "border-proteum-chrome-mid/30",
};

export function Eyebrow({
  tone = "sapphire",
  bare = false,
  className,
  children,
  ...props
}: EyebrowProps) {
  if (bare) {
    return (
      <div
        className={cn(
          "inline-flex items-center font-mono text-[12px] uppercase",
          toneText[tone],
          className,
        )}
        style={{ letterSpacing: "0.18em" }}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border bg-proteum-surface/40 px-3 py-1",
        "font-mono text-[11px] uppercase",
        "backdrop-blur-sm",
        toneText[tone],
        toneBorder[tone],
        className,
      )}
      style={{ letterSpacing: "0.18em" }}
      {...props}
    >
      {children}
    </div>
  );
}
