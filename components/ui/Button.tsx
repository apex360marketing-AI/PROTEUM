import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 will-change-transform " +
  "disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 " +
  "focus-visible:ring-proteum-purple-glow focus-visible:ring-offset-2 focus-visible:ring-offset-proteum-black";

const variantMap: Record<Variant, string> = {
  primary:
    "bg-proteum-purple text-proteum-bone hover:bg-proteum-purple-glow hover:-translate-y-px shadow-glow-purple",
  secondary:
    "bg-transparent text-proteum-bone border border-white/15 hover:border-white/30 hover:bg-white/[0.03]",
  ghost:
    "bg-transparent text-proteum-mist hover:text-proteum-bone hover:bg-white/[0.03]",
};

const sizeMap: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type AnchorProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

function isAnchor(props: AnchorProps | ButtonProps): props is AnchorProps {
  return typeof (props as AnchorProps).href === "string";
}

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  AnchorProps | ButtonProps
>(function Button(props, ref) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variantMap[variant], sizeMap[size], className);

  if (isAnchor(props)) {
    const { href, external, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    void _v; void _s; void _c; void _ch;
    if (external || href.startsWith("http")) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={classes}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
  void _v; void _s; void _c; void _ch;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...rest}
    >
      {children}
    </button>
  );
});
