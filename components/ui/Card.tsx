import { cn } from "@/lib/utils/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
  tone?: "default" | "raised";
};

export function Card({
  interactive = false,
  tone = "default",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border border-white/[0.06] p-6 md:p-8",
        tone === "default" ? "bg-proteum-deep/60" : "bg-proteum-surface/80 shadow-elev-2",
        interactive &&
          "transition-all duration-300 hover:border-white/[0.12] hover:bg-proteum-deep hover:-translate-y-0.5",
        "backdrop-blur-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardEyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center font-mono text-[11px] uppercase tracking-[0.2em] text-proteum-mist",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={cn("font-display text-xl md:text-2xl tracking-tight text-proteum-bone", className)}>
      {children}
    </h3>
  );
}

export function CardBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("text-proteum-mist leading-relaxed", className)}>{children}</p>;
}
