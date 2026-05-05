import { cn } from "@/lib/utils/cn";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "article" | "main";
  spacing?: "default" | "tight" | "loose";
};

const spacingMap = {
  tight: "py-16 md:py-20",
  default: "py-24 md:py-32",
  loose: "py-32 md:py-44",
} as const;

export function Section({
  as: Tag = "section",
  spacing = "default",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn("relative", spacingMap[spacing], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
