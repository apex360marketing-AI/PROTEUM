import type { LifestyleRecommendation } from "@/content/knowledge-base/types";

/**
 * Lifestyle interventions surface in the recommendation engine alongside
 * peptides and vitamins. Their match signals are simpler and broader.
 */
export const lifestyleRecommendations: LifestyleRecommendation[] = [
  {
    id: "sleep-protocol",
    name: "Sleep optimization protocol",
    tagline:
      "Light timing, temperature, consistency — the substrate everything else builds on.",
    rationale:
      "Sleep upstream of every other recommendation. Without 7+ hours of quality sleep, peptides, supplements, and training programs all underperform. Foundations are: morning bright-light exposure, cool dark sleeping environment (60–67°F), consistent wake time including weekends, no caffeine after noon, no screens 60 minutes pre-bed.",
    matchSignals: [
      {
        questionId: "current_symptoms",
        answerValue: "poor_sleep",
        weight: 10,
        reasoning: "The most direct match — sleep optimization is the first move.",
      },
      {
        questionId: "sleep_quality",
        answerValue: "poor",
        weight: 9,
        reasoning: "Sleep complaints are the highest-yield lifestyle target.",
      },
      {
        questionId: "sleep_quality",
        answerValue: "inconsistent",
        weight: 7,
        reasoning: "Inconsistency is mostly a behavioral and environmental problem.",
      },
      {
        questionId: "current_symptoms",
        answerValue: "low_energy",
        weight: 6,
        reasoning: "Most chronic fatigue starts as a sleep deficit.",
      },
      {
        questionId: "current_symptoms",
        answerValue: "anxiety_low_mood",
        weight: 5,
        reasoning: "Sleep and mood are bidirectionally connected.",
      },
      {
        questionId: "current_symptoms",
        answerValue: "brain_fog",
        weight: 5,
        reasoning: "Cognitive complaints with a sleep component are common.",
      },
      {
        questionId: "current_symptoms",
        answerValue: "slow_recovery",
        weight: 5,
        reasoning: "Recovery is largely a sleep-driven process.",
      },
    ],
  },
  {
    id: "resistance-training",
    name: "Resistance training cadence",
    tagline:
      "3–4 sessions per week of compound lifts, periodized. The most-evidenced longevity intervention.",
    rationale:
      "Resistance training is the single most-evidenced lifestyle intervention for body composition, sarcopenia prevention, glucose tolerance, bone density, and longevity. The dose-response: minimum 2 sessions per week for general health, 3–4 for body composition or performance, with progressive overload over time. Compound movements (squat, deadlift, press, pull) belong at the center of any program.",
    matchSignals: [
      {
        questionId: "primary_goal",
        answerValue: "perform_higher",
        weight: 9,
        reasoning: "Foundational for performance contexts.",
      },
      {
        questionId: "primary_goal",
        answerValue: "feel_younger",
        weight: 8,
        reasoning: "Most-evidenced single longevity intervention.",
      },
      {
        questionId: "body_composition",
        answerValue: "build_muscle",
        weight: 9,
        reasoning: "Direct match — strength training is the signal.",
      },
      {
        questionId: "body_composition",
        answerValue: "recomp",
        weight: 8,
        reasoning: "Recomp without resistance training mostly produces underweight people.",
      },
      {
        questionId: "body_composition",
        answerValue: "lose_fat",
        weight: 6,
        reasoning: "Resistance training preserves lean mass during fat-loss phases.",
      },
      {
        questionId: "current_symptoms",
        answerValue: "loss_strength_libido",
        weight: 7,
        reasoning: "Direct strength and lean mass interventions reverse much of this.",
      },
      {
        questionId: "current_symptoms",
        answerValue: "stubborn_fat",
        weight: 6,
        reasoning: "Improves metabolic substrate for fat-loss work.",
      },
      {
        questionId: "activity_level",
        answerValue: "sedentary",
        weight: 8,
        reasoning: "Highest-yield intervention for sedentary populations starting out.",
      },
      {
        questionId: "activity_level",
        answerValue: "moderate",
        weight: 5,
        reasoning: "Optimization rather than introduction.",
      },
      {
        questionId: "age_range",
        answerValue: "46_60",
        weight: 6,
        reasoning: "Sarcopenia prevention is critical in this band.",
      },
      {
        questionId: "age_range",
        answerValue: "over_60",
        weight: 7,
        reasoning: "Strongest fit — sarcopenia prevention is the highest-yield 60+ intervention.",
      },
    ],
  },
  {
    id: "sauna-heat",
    name: "Sauna / heat exposure",
    tagline:
      "20+ min per session, 3+ times per week. Cardiovascular and longevity evidence is unusually strong.",
    rationale:
      "Finnish prospective cohort data (Laukkanen et al.) shows sauna use 4–7 times per week is associated with substantially reduced cardiovascular and all-cause mortality vs once per week. Mechanisms include heat shock protein induction, blood pressure adaptation, and improved endothelial function. Practical implementation: 20+ minutes at 80–100°C (175–212°F), 3+ times per week, with adequate hydration.",
    matchSignals: [
      {
        questionId: "primary_goal",
        answerValue: "feel_younger",
        weight: 7,
        reasoning: "Strong observational longevity evidence.",
      },
      {
        questionId: "current_symptoms",
        answerValue: "slow_recovery",
        weight: 6,
        reasoning: "Heat exposure supports cardiovascular and recovery adaptation.",
      },
      {
        questionId: "current_symptoms",
        answerValue: "anxiety_low_mood",
        weight: 5,
        reasoning: "Acute mood benefits documented in trials.",
      },
      {
        questionId: "primary_goal",
        answerValue: "perform_higher",
        weight: 5,
        reasoning: "Heat acclimation transfers to athletic performance gains.",
      },
      {
        questionId: "age_range",
        answerValue: "46_60",
        weight: 5,
        reasoning: "Cardiovascular evidence base is strongest in middle-aged populations.",
      },
      {
        questionId: "age_range",
        answerValue: "over_60",
        weight: 5,
        reasoning: "Same evidence base extends to older bands.",
      },
    ],
  },
  {
    id: "cold-exposure",
    name: "Cold exposure",
    tagline:
      "Brief cold-water immersion or end-of-shower cold. Signals stress resilience and sympathetic adaptation.",
    rationale:
      "Brief, deliberate cold exposure (cold shower, cold-water immersion at 50–60°F for 1–5 minutes) elevates norepinephrine, supports brown adipose tissue activity, and has emerging evidence for mood resilience and inflammation modulation. Effects on athletic recovery are mixed and dose-dependent — large doses post-training can blunt adaptation. Best used away from training sessions.",
    matchSignals: [
      {
        questionId: "current_symptoms",
        answerValue: "anxiety_low_mood",
        weight: 5,
        reasoning: "Norepinephrine elevation and stress-resilience adaptation are the main use case.",
      },
      {
        questionId: "current_symptoms",
        answerValue: "low_energy",
        weight: 4,
        reasoning: "Acute alertness boost; longer-term effects on energy state vary.",
      },
      {
        questionId: "primary_goal",
        answerValue: "perform_higher",
        weight: 4,
        reasoning: "Niche use for stress resilience and cold-acclimation.",
      },
      {
        questionId: "primary_goal",
        answerValue: "feel_younger",
        weight: 4,
        reasoning: "Hormetic stressor; metabolic and resilience signals.",
      },
    ],
  },
  {
    id: "breath-work",
    name: "Breath work / vagal tone training",
    tagline:
      "Slow nasal breathing protocols and controlled CO2 tolerance practices. HRV improvements emerge over weeks.",
    rationale:
      "Daily 5–10 minutes of slow, controlled nasal breathing (e.g., 4-second inhale, 4-second hold, 6-second exhale) improves heart rate variability, parasympathetic tone, and stress recovery. CO2 tolerance practices (controlled breath holds) extend the benefits. Box breathing and Wim Hof–style protocols are popular variants. Effects on subjective stress and sleep are emerging in controlled trials.",
    matchSignals: [
      {
        questionId: "current_symptoms",
        answerValue: "anxiety_low_mood",
        weight: 6,
        reasoning: "Direct effects on parasympathetic tone and acute anxiety.",
      },
      {
        questionId: "current_symptoms",
        answerValue: "poor_sleep",
        weight: 5,
        reasoning: "Slow breathing pre-bed supports sleep onset.",
      },
      {
        questionId: "mood_state",
        answerValue: "up_down",
        weight: 4,
        reasoning: "Stress reactivity benefits from vagal-tone training.",
      },
      {
        questionId: "primary_goal",
        answerValue: "fix_specific",
        weight: 3,
        reasoning: "Stress and anxiety contexts align.",
      },
    ],
  },
  {
    id: "time-restricted-eating",
    name: "Time-restricted eating",
    tagline:
      "Confine eating to an 8–10 hour window. Modest body composition and metabolic benefits with simple implementation.",
    rationale:
      "Eating windows of 8–10 hours daily produce modest weight loss and improvements in metabolic markers in many trials, particularly when implemented earlier in the day. Effects on body composition without caloric restriction are smaller but real. Simplest implementation: skip late dinner or breakfast, depending on daily routine. Not appropriate for users with eating disorder history or pregnancy.",
    matchSignals: [
      {
        questionId: "current_symptoms",
        answerValue: "stubborn_fat",
        weight: 5,
        reasoning: "Modest body composition effects via metabolic flexibility.",
      },
      {
        questionId: "body_composition",
        answerValue: "lose_fat",
        weight: 5,
        reasoning: "Useful adjunct to direct caloric management.",
      },
      {
        questionId: "primary_goal",
        answerValue: "feel_younger",
        weight: 4,
        reasoning: "Metabolic flexibility is a longevity signal.",
      },
      {
        questionId: "current_symptoms",
        answerValue: "low_energy",
        weight: 3,
        reasoning: "Some users see improved energy stability with consistent eating windows.",
      },
    ],
  },
];
