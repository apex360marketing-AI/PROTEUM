import { cn } from "@/lib/utils/cn";

type EyebrowProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: "default" | "purple" | "cyan";
};

const toneMap = {
  default: "text-proteum-mist border-white/10",
  purple: "text-proteum-purple-glow border-proteum-purple/30",
  cyan: "text-proteum-cyan border-proteum-cyan/30",
} as const;

export function Eyebrow({
  tone = "default",
  className,
  children,
  ...props
}: EyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border bg-white/[0.02] px-3 py-1",
        "font-mono text-[10px] uppercase tracking-[0.22em]",
        toneMap[tone],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
