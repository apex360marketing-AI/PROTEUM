import type { Metadata } from "next";
import { QuizShell } from "@/components/assessment/QuizShell";

export const metadata: Metadata = {
  title: "Assessment",
  description:
    "A structured assessment that translates your goals into a personalized peptide research brief.",
  robots: { index: false, follow: false },
};

export default function AssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QuizShell>{children}</QuizShell>;
}
