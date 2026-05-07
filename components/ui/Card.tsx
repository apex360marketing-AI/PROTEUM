import { cn } from "@/lib/utils/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
  variant?: "glass" | "solid" | "outline";
  /**
   * When true, renders a thin chrome-mid top accent that catches light.
   * Used on pillars / built-for cards.
   */
  chromeAccent?: boolean;
};

export function Card({
  interactive = false,
  variant = "glass",
  chromeAccent = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 md:p-8",
        variant === "glass" && "glass",
        variant === "glass" && interactive && "glass-hover",
        variant === "solid" && "bg-proteum-surface border border-proteum-chrome-low/20 shadow-elev-2",
        variant === "outline" && "border border-proteum-chrome-low/25 bg-transparent",
        className,
      )}
      {...props}
    >
      {chromeAccent && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-6 top-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, rgba(232,236,242,0.32) 50%, transparent 100%)",
          }}
        />
      )}
      {children}
    </div>
  );
}

export function CardEyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center font-mono text-[11px] uppercase tracking-[0.18em] text-proteum-mist",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        "font-display text-[22px] md:text-2xl font-light tracking-tight text-proteum-bone",
        className,
      )}
      style={{ fontVariationSettings: '"opsz" 144' }}
    >
      {children}
    </h3>
  );
}

export function CardBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-proteum-mist leading-relaxed", className)}>{children}</p>
  );
}
