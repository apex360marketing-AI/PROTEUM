import type { Compound } from "@/content/knowledge-base/types";

export const lTheanine: Compound = {
  id: "l-theanine",
  name: "L-Theanine",
  category: "cofactor",
  classification: "foundational",
  tagline:
    "Amino acid found in tea leaves; produces relaxation without sedation, often paired with caffeine for focus.",
  longDescription: `L-Theanine is a non-protein amino acid almost exclusively found in tea (Camellia sinensis), with significant quantities also in some species of mushroom. It is the compound responsible for tea's distinctive umami flavor and, more importantly, for the characteristic "calm focus" associated with green tea consumption — distinct from the more activating effect of equivalent caffeine doses without theanine present.

L-theanine crosses the blood-brain barrier and acts on multiple neurotransmitter systems. It increases alpha brainwave activity (associated with relaxed alertness), modulates GABA, glutamate, and dopamine levels, and reduces cortisol and stress responses to acute stressors. Critically, it produces these effects without sedation — users remain alert and cognitively functional, distinguishing theanine from GABAergic anxiolytics.

The most-cited use case is the L-theanine + caffeine combination, where theanine smooths caffeine's stimulant effects: reduced jitter, improved focus duration, and cleaner cognitive performance. Multiple RCTs support this synergy, typically using 100 mg theanine + 50 mg caffeine.

Beyond focus stacks, L-theanine has emerging evidence in anxiety reduction (modest effects), sleep quality (especially in users with stress-driven insomnia), and as an adjunct in attention-related conditions. The safety profile is excellent, with no known meaningful side effects at supplemented doses.

L-theanine is one of the few supplements with both consumer popularity and a credible underlying evidence base. PROTEUM treats it as a foundational stress-resilience and focus support compound.`,
  primaryUses: [
    "Calm focus, especially paired with caffeine",
    "Stress and anxiety reduction without sedation",
    "Sleep quality in stress-driven insomnia",
    "Cognitive performance support",
  ],
  mechanism: `L-theanine's structure is similar to glutamate and glutamine, which allows it to cross the blood-brain barrier and interact with multiple CNS systems. It increases alpha-frequency brain wave activity (8–13 Hz) — the EEG signature of relaxed alertness, distinct from the slower theta and delta of sleep or the faster beta of stress. It modulates GABA inhibitory tone (without binding GABA-A receptors directly), reduces glutamate excitotoxicity, and increases dopamine and serotonin in some brain regions. Together these effects produce the characteristic "alert calm" — increased focus and reduced anxiety without sedation. The cortisol-reducing effect under acute stress is well-documented and underlies the stress-resilience use case.`,
  studiedFor: [
    {
      domain: "Caffeine synergy / focus",
      evidenceLevel: "established",
      summary:
        "Multiple RCTs confirm L-theanine + caffeine improves attention, focus duration, and reduces caffeine-induced jitter compared to caffeine alone.",
    },
    {
      domain: "Anxiety reduction",
      evidenceLevel: "emerging",
      summary:
        "Modest anxiolytic effects in clinical and subclinical anxiety populations; effect sizes are smaller than benzodiazepines but tolerability is excellent.",
    },
    {
      domain: "Sleep quality",
      evidenceLevel: "preliminary",
      summary:
        "Improvements in sleep quality have been shown in stressed populations; less evidence in primary insomnia.",
    },
    {
      domain: "Stress response",
      evidenceLevel: "emerging",
      summary:
        "Multiple studies show reduced cortisol and subjective stress responses to acute stressors with L-theanine.",
    },
  ],
  typicalProtocol: {
    range:
      "100–200 mg per dose, 1–3 times daily. Often paired with 50–100 mg caffeine for focus.",
    duration:
      "Open-ended; well-tolerated long-term.",
    caveats:
      "Effect is mild; expect a noticeable but subtle calming. Not a benzodiazepine substitute.",
  },
  contraindications: [
    "Blood pressure medications — modest BP-lowering effects.",
    "Pregnancy and lactation — limited data.",
  ],
  keyResearch: [
    {
      title:
        "The combination of L-theanine and caffeine improves cognitive performance and increases subjective alertness",
      authors: "Owen GN, Parnell H, De Bruin EA, Rycroft JA",
      year: 2008,
      journal: "Nutr Neurosci",
      url: "https://pubmed.ncbi.nlm.nih.gov/18681988/",
    },
    {
      title:
        "L-theanine, a natural constituent in tea, and its effect on mental state",
      authors: "Nobre AC, Rao A, Owen GN",
      year: 2008,
      journal: "Asia Pac J Clin Nutr",
      url: "https://pubmed.ncbi.nlm.nih.gov/18296328/",
    },
    {
      title:
        "Effects of L-theanine on attention and reaction time response",
      authors: "Higashiyama A, Htay HH, Ozeki M, et al.",
      year: 2011,
      journal: "J Funct Foods",
    },
    {
      title:
        "L-theanine reduces psychological and physiological stress responses",
      authors: "Kimura K, Ozeki M, Juneja LR, Ohira H",
      year: 2007,
      journal: "Biol Psychol",
      url: "https://pubmed.ncbi.nlm.nih.gov/16930802/",
    },
  ],
  relatedCompounds: ["ashwagandha", "magnesium-glycinate", "glycine"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "anxiety_low_mood",
      weight: 5,
      reasoning:
        "Modest anxiolytic effect without sedation; useful in mild to moderate anxiety contexts.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "brain_fog",
      weight: 5,
      reasoning:
        "Combined with caffeine, theanine supports focus and reduces cognitive friction.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "poor_sleep",
      weight: 4,
      reasoning:
        "Modest sleep quality effects, particularly in stress-driven insomnia.",
    },
    {
      questionId: "mood_state",
      answerValue: "up_down",
      weight: 4,
      reasoning:
        "Stress-driven mood variability is a plausible target.",
    },
    {
      questionId: "cognitive_state",
      answerValue: "functional",
      weight: 5,
      reasoning:
        "Theanine + caffeine is the highest-yield focus stack for users with mild cognitive friction.",
    },
    {
      questionId: "cognitive_state",
      answerValue: "foggy",
      weight: 4,
      reasoning:
        "Cognitive support in mild fog states; not for serious cognitive decline.",
    },
    {
      questionId: "primary_goal",
      answerValue: "perform_higher",
      weight: 4,
      reasoning:
        "Cognitive performance support without stimulant downsides.",
    },
  ],
  legalStatus: {
    region: "global",
    status: "approved-supplement",
    note: "Widely available as an approved dietary supplement globally.",
  },
};
