import { notFound } from "next/navigation";
import { QuizQuestion } from "@/components/assessment/QuizQuestion";
import { getQuestionByStep, totalSteps } from "@/content/quiz-questions";

export function generateStaticParams() {
  return Array.from({ length: totalSteps }, (_, i) => ({
    step: String(i + 1),
  }));
}

export default function AssessmentStepPage({
  params,
}: {
  params: { step: string };
}) {
  const stepNum = Number.parseInt(params.step, 10);
  if (!Number.isFinite(stepNum) || stepNum < 1) {
    notFound();
  }

  const question = getQuestionByStep(stepNum);
  if (!question) {
    notFound();
  }

  return <QuizQuestion question={question} />;
}
