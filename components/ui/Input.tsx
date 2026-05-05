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
        "h-11 w-full rounded-lg border border-white/10 bg-proteum-deep/60 px-4 text-sm text-proteum-bone",
        "placeholder:text-proteum-mist/60",
        "transition-colors focus:border-proteum-purple-glow focus:outline-none focus:ring-1 focus:ring-proteum-purple-glow",
        className,
      )}
      {...props}
    />
  );
});
