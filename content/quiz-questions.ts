export type QuizOption = {
  value: string;
  label: string;
  description?: string;
};

export type QuizQuestion = {
  key: string;
  step: number;
  type: "single" | "multi";
  prompt: string;
  helper?: string;
  options: QuizOption[];
};

// Phase A placeholder questions — Phase B will replace with the production schema.
export const quizQuestions: QuizQuestion[] = [
  {
    key: "primary_goal",
    step: 1,
    type: "single",
    prompt: "What's your primary goal right now?",
    helper:
      "Pick the outcome that matters most. You'll be able to layer in secondary goals later.",
    options: [
      {
        value: "performance",
        label: "Performance & output",
        description: "Train harder, recover faster, hit higher peaks.",
      },
      {
        value: "recovery",
        label: "Recovery & repair",
        description: "Tendons, joints, soft tissue, post-injury.",
      },
      {
        value: "longevity",
        label: "Longevity & healthspan",
        description: "Compound the inputs that age you slower.",
      },
      {
        value: "body_composition",
        label: "Body composition",
        description: "Lean mass, fat loss, metabolic health.",
      },
    ],
  },
  {
    key: "training_context",
    step: 2,
    type: "single",
    prompt: "How would you describe your training context?",
    helper:
      "Be honest — this calibrates the kind of evidence we surface.",
    options: [
      {
        value: "competitive",
        label: "Competitive athlete",
        description: "Sport-specific programming, periodized blocks.",
      },
      {
        value: "serious",
        label: "Serious recreational",
        description: "Most days a week, structured progression.",
      },
      {
        value: "consistent",
        label: "Consistent generalist",
        description: "A few sessions a week, broad fitness.",
      },
      {
        value: "rebuilding",
        label: "Rebuilding or returning",
        description: "Coming back from a layoff or injury.",
      },
    ],
  },
  {
    key: "experience_level",
    step: 3,
    type: "single",
    prompt: "How familiar are you with peptide research already?",
    helper:
      "We'll calibrate how much background context to surface in your brief.",
    options: [
      {
        value: "new",
        label: "New to this",
        description: "I've heard the term, that's about it.",
      },
      {
        value: "exploring",
        label: "Exploring",
        description: "I've read a few articles or podcasts.",
      },
      {
        value: "studied",
        label: "Self-studied",
        description: "I've gone deep on at least a couple of molecules.",
      },
      {
        value: "clinical",
        label: "Clinically informed",
        description: "I read primary literature comfortably.",
      },
    ],
  },
];

export const totalSteps = quizQuestions.length;

export function getQuestionByStep(step: number): QuizQuestion | undefined {
  return quizQuestions.find((q) => q.step === step);
}
