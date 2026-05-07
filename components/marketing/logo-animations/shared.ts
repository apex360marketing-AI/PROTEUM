export const LETTERS = ["P", "R", "O", "T", "E", "U", "M"] as const;

export type LogoAnimationProps = {
  duration?: number;
  /** Approx pixel size of each letter (display height). */
  size?: number;
  className?: string;
  /** Optional callback fired when the assembly animation finishes. */
  onComplete?: () => void;
};
