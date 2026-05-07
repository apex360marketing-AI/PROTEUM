/**
 * PROTEUM intake quiz schema — 15 questions across 4 sections.
 * Each `single_select` and `multi_select` question follows the
 * "3 options + describe other" pattern unless explicitly noted.
 */

export type QuestionOption = {
  /** Stable machine value persisted to Supabase. Lower-snake. */
  value: string;
  /** User-facing label. */
  label: string;
};

export type QuizSection = "A" | "B" | "C" | "D";

export type QuizQuestion = {
  id: string;
  section: QuizSection;
  /** 1-based global order across all sections. */
  order: number;
  prompt: string;
  helper?: string;
  type: "single_select" | "multi_select" | "free_text";
  /** For multi_select. */
  maxSelections?: number;
  /** For select types. */
  options?: QuestionOption[];
  /** True adds an "Other / describe" option that reveals a textarea. */
  allowOther: boolean;
  /** Custom Other label, default "Something else — describe". */
  otherLabel?: string;
  required: boolean;
};

export const SECTION_LABELS: Record<QuizSection, string> = {
  A: "Section A — Goals",
  B: "Section B — Current state",
  C: "Section C — Body & physical",
  D: "Section D — History & context",
};

export const OTHER_VALUE = "__other__";
export const DEFAULT_OTHER_LABEL = "Something else — describe";

export const quizQuestions: readonly QuizQuestion[] = [
  // ─────────────── Section A — Primary goals ───────────────
  {
    id: "primary_goal",
    section: "A",
    order: 1,
    prompt: "What's the single biggest reason you're here today?",
    helper: "We'll build your protocol around this.",
    type: "single_select",
    options: [
      {
        value: "perform_higher",
        label:
          "I want to perform at a higher level — strength, endurance, recovery",
      },
      {
        value: "feel_younger",
        label: "I want to feel younger — energy, libido, longevity markers",
      },
      {
        value: "fix_specific",
        label: "I want to fix something specific — pain, injury, sleep, mood",
      },
    ],
    allowOther: true,
    otherLabel: "Something else — tell us in your own words",
    required: true,
  },
  {
    id: "90_day_win",
    section: "A",
    order: 2,
    prompt: "What outcome would make this a clear win in 90 days?",
    helper: "Be specific. We'll measure progress against this.",
    type: "single_select",
    options: [
      {
        value: "physical_change",
        label:
          "Measurable physical change — leaner, stronger, faster recovery",
      },
      {
        value: "mental_change",
        label:
          "Measurable mental change — better focus, mood, cognitive sharpness",
      },
      {
        value: "health_markers",
        label: "Measurable health markers — bloodwork, sleep score, biomarkers",
      },
    ],
    allowOther: true,
    required: true,
  },

  // ─────────────── Section B — Current state ───────────────
  {
    id: "current_symptoms",
    section: "B",
    order: 3,
    prompt: "Which of these are you currently dealing with?",
    helper:
      "Select up to 3. We'll prioritize compounds that address what matters most.",
    type: "multi_select",
    maxSelections: 3,
    options: [
      { value: "low_energy", label: "Low energy or chronic fatigue" },
      {
        value: "poor_sleep",
        label: "Poor sleep — falling asleep, staying asleep, or quality",
      },
      { value: "brain_fog", label: "Brain fog or poor focus" },
      {
        value: "anxiety_low_mood",
        label: "Anxiety, low mood, or emotional flatness",
      },
      {
        value: "slow_recovery",
        label: "Slow recovery from training or stress",
      },
      {
        value: "nagging_pain",
        label: "Nagging pain or injuries that won't heal",
      },
      {
        value: "loss_strength_libido",
        label: "Loss of strength, muscle, or libido",
      },
      {
        value: "stubborn_fat",
        label: "Stubborn fat or body composition plateaus",
      },
      {
        value: "skin_hair_aging",
        label: "Skin, hair, or visible aging concerns",
      },
      {
        value: "gut_inflammation",
        label: "Gut, digestion, or inflammation issues",
      },
    ],
    allowOther: true,
    otherLabel: "Something specific — describe",
    required: true,
  },
  {
    id: "energy_state",
    section: "B",
    order: 4,
    prompt: "How would you describe your energy levels?",
    type: "single_select",
    options: [
      {
        value: "good",
        label: "Generally good — occasional dips but mostly stable",
      },
      {
        value: "variable",
        label: "Variable — strong mornings, crash by afternoon",
      },
      {
        value: "low",
        label: "Low — I push through but I'm running on fumes",
      },
    ],
    allowOther: true,
    required: true,
  },
  {
    id: "sleep_quality",
    section: "B",
    order: 5,
    prompt: "How would you describe your sleep quality?",
    type: "single_select",
    options: [
      {
        value: "solid",
        label: "Solid — I fall asleep, stay asleep, wake up rested",
      },
      {
        value: "inconsistent",
        label: "Inconsistent — some great nights, some bad",
      },
      {
        value: "poor",
        label: "Poor — restless, light, or I wake up tired",
      },
    ],
    allowOther: true,
    required: true,
  },
  {
    id: "recovery_state",
    section: "B",
    order: 6,
    prompt: "How would you describe your recovery from exercise or stress?",
    type: "single_select",
    options: [
      { value: "quick", label: "Quick — I bounce back fast" },
      {
        value: "average",
        label: "Average — sometimes sore for days, sometimes not",
      },
      {
        value: "slow",
        label: "Slow — soreness or fatigue lingers longer than it should",
      },
    ],
    allowOther: true,
    required: true,
  },
  {
    id: "cognitive_state",
    section: "B",
    order: 7,
    prompt: "How is your mental clarity and focus?",
    type: "single_select",
    options: [
      { value: "sharp", label: "Sharp — I focus well and think clearly" },
      {
        value: "functional",
        label: "Functional — I get through but I notice the friction",
      },
      {
        value: "foggy",
        label: "Foggy — focus is harder than it used to be",
      },
    ],
    allowOther: true,
    required: true,
  },
  {
    id: "mood_state",
    section: "B",
    order: 8,
    prompt: "How would you describe your mood overall?",
    type: "single_select",
    options: [
      { value: "stable", label: "Stable and positive most days" },
      { value: "up_down", label: "Up and down — context-dependent" },
      {
        value: "flat_low",
        label: "Flat, low, or persistently anxious",
      },
    ],
    allowOther: true,
    required: true,
  },

  // ─────────────── Section C — Body & physical ───────────────
  {
    id: "pain_injury",
    section: "C",
    order: 9,
    prompt: "Are you dealing with any persistent pain or injury?",
    type: "single_select",
    options: [
      { value: "none", label: "No — I'm physically clean" },
      {
        value: "specific",
        label: "Yes — a specific injury or area I'm working on",
      },
      {
        value: "generalized",
        label: "Yes — generalized aches, stiffness, or inflammation",
      },
    ],
    allowOther: true,
    required: true,
  },
  {
    id: "body_composition",
    section: "C",
    order: 10,
    prompt: "How would you describe your body composition goals?",
    type: "single_select",
    options: [
      { value: "lose_fat", label: "Lose fat — I want to be leaner" },
      {
        value: "build_muscle",
        label: "Build muscle — I want more strength and size",
      },
      {
        value: "recomp",
        label: "Recomposition — lose fat and build muscle simultaneously",
      },
    ],
    allowOther: true,
    otherLabel: "Different goal — describe",
    required: true,
  },
  {
    id: "activity_level",
    section: "C",
    order: 11,
    prompt: "How active are you currently?",
    type: "single_select",
    options: [
      {
        value: "very_active",
        label: "Very active — training 4+ times per week",
      },
      {
        value: "moderate",
        label: "Moderately active — 2–3 times per week",
      },
      {
        value: "sedentary",
        label: "Mostly sedentary — I want to change that",
      },
    ],
    allowOther: true,
    required: true,
  },

  // ─────────────── Section D — History & context ───────────────
  {
    id: "prior_attempts",
    section: "D",
    order: 12,
    prompt: "What have you already tried for these issues?",
    helper: "We won't recommend things you've ruled out.",
    type: "single_select",
    options: [
      {
        value: "supplements",
        label: "Standard supplements — vitamins, protein, basic stacks",
      },
      {
        value: "lifestyle",
        label:
          "Lifestyle changes — diet, sleep hygiene, exercise programs",
      },
      {
        value: "clinical",
        label:
          "Medications or clinical treatments — prescribed by a doctor",
      },
    ],
    allowOther: true,
    otherLabel: "Other — describe what you've tried",
    required: true,
  },
  {
    id: "current_supplements",
    section: "D",
    order: 13,
    prompt: "Are you currently taking any supplements or medications?",
    helper: "This helps us avoid redundant recommendations.",
    type: "single_select",
    options: [
      { value: "none", label: "No — clean slate" },
      {
        value: "basics",
        label: "A few basics — multivitamin, vitamin D, omega-3, etc.",
      },
      {
        value: "advanced",
        label:
          "An advanced stack — multiple targeted supplements or compounds",
      },
    ],
    allowOther: true,
    otherLabel: "List what you're currently taking",
    required: true,
  },
  {
    id: "age_range",
    section: "D",
    order: 14,
    prompt: "What's your age range?",
    helper:
      "Different decades respond to different protocols. This shapes our recommendations.",
    type: "single_select",
    options: [
      { value: "under_30", label: "Under 30" },
      { value: "30_45", label: "30 to 45" },
      { value: "46_60", label: "46 to 60" },
      { value: "over_60", label: "Over 60" },
    ],
    allowOther: false,
    required: true,
  },
  {
    id: "additional_context",
    section: "D",
    order: 15,
    prompt: "Anything else important for us to know?",
    helper:
      "Health conditions, allergies, goals, concerns — anything that should shape your protocol.",
    type: "free_text",
    allowOther: false,
    required: false,
  },
];

export const totalSteps = quizQuestions.length;

export function getQuestionByOrder(order: number): QuizQuestion | undefined {
  return quizQuestions.find((q) => q.order === order);
}

export function getQuestionById(id: string): QuizQuestion | undefined {
  return quizQuestions.find((q) => q.id === id);
}

/**
 * Answer shape persisted to Supabase. For select types, `selected` is the
 * array of chosen option values (single_select stores a single-element array).
 * If the user picked "Other", `otherText` carries their free-text. For
 * free_text questions, `text` carries the body and `selected` is empty.
 */
export type QuizAnswer = {
  selected: string[];
  otherText?: string;
  text?: string;
};

export function isAnswerComplete(
  question: QuizQuestion,
  answer: QuizAnswer | undefined,
): boolean {
  if (!question.required) return true;
  if (!answer) return false;

  if (question.type === "free_text") {
    return Boolean(answer.text && answer.text.trim().length > 0);
  }

  if (answer.selected.length === 0) return false;

  // If "Other" is selected, the textarea must have content.
  if (answer.selected.includes(OTHER_VALUE)) {
    return Boolean(answer.otherText && answer.otherText.trim().length > 0);
  }

  return true;
}
