import { cn } from "@/lib/utils/cn";

export function QuizProgress({
  current,
  total,
  className,
}: {
  current: number;
  total: number;
  className?: string;
}) {
  const pct = Math.min(100, Math.max(0, (current / total) * 100));

  return (
    <div className={cn("w-full", className)}>
      <div
        className="flex items-center justify-between font-mono text-[11px] uppercase text-proteum-mist"
        style={{ letterSpacing: "0.18em" }}
      >
        <span>
          Step {current} of {total}
        </span>
        <span>{Math.round(pct)}%</span>
      </div>
      <div className="mt-3 h-1 overflow-hidden rounded-full bg-proteum-chrome-low/15">
        <div
          className="h-full bg-gradient-to-r from-proteum-sapphire to-proteum-sapphire-glow transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
