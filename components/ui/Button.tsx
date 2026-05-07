import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "chrome-ghost" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium tracking-[0.02em] " +
  "will-change-transform select-none disabled:pointer-events-none disabled:opacity-50 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-proteum-sapphire-glow " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-proteum-void";

const variantMap: Record<Variant, string> = {
  // Sapphire CTA — the canonical primary action treatment
  primary: "btn-sapphire",
  // Chrome ghost — secondary action, transparent fill, chrome border
  "chrome-ghost": "btn-chrome-ghost",
  // Quiet text-only ghost — for tertiary actions
  ghost:
    "bg-transparent text-proteum-mist hover:text-proteum-bone transition-colors duration-200",
};

const sizeMap: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-[15px]",
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
