import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      className={cn(
        "h-11 w-full rounded-lg border border-proteum-chrome-low/25 bg-proteum-surface/60 px-4 text-sm text-proteum-bone",
        "placeholder:text-proteum-mist-low",
        "transition-colors focus:border-proteum-sapphire-glow focus:outline-none focus:ring-1 focus:ring-proteum-sapphire-glow",
        className,
      )}
      {...props}
    />
  );
});
