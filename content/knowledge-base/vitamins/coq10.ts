import type { Compound } from "@/content/knowledge-base/types";

export const coq10: Compound = {
  id: "coq10",
  name: "Coenzyme Q10 (CoQ10 / Ubiquinol)",
  category: "cofactor",
  classification: "foundational",
  tagline:
    "Endogenous mitochondrial cofactor for ATP production; declines with age and on statin therapy. Ubiquinol is the active reduced form.",
  longDescription: `Coenzyme Q10 (CoQ10) is a fat-soluble quinone synthesized endogenously in nearly every cell of the human body. It functions both as a critical cofactor in the mitochondrial electron transport chain — shuttling electrons between Complex I/II and Complex III during oxidative phosphorylation — and as a potent membrane-bound antioxidant that protects mitochondrial and cellular membranes from oxidative damage.

Endogenous CoQ10 production peaks in the early adult years and declines progressively with age. Tissue concentrations in older adults can be 30–50% lower than in young adults, and this decline is implicated in age-related mitochondrial dysfunction, including reduced exercise capacity and cardiovascular changes. Statin medications further deplete CoQ10 by inhibiting the same HMG-CoA reductase pathway that produces both cholesterol and CoQ10 — making CoQ10 supplementation particularly relevant for statin users.

The supplement market offers two forms: ubiquinone (the oxidized form) and ubiquinol (the reduced, antioxidant-active form). The body converts between them, but ubiquinol has substantially higher bioavailability — particularly in older adults whose conversion capacity may be reduced. The pricing difference reflects manufacturing complexity, but the clinical evidence supports paying for ubiquinol when the goal is increased tissue concentration in older or compromised users.

CoQ10 has the strongest evidence base among aging-related supplements for cardiovascular function, particularly heart failure, and for statin-associated muscle symptoms — though that latter evidence is mixed.`,
  primaryUses: [
    "Mitochondrial function support",
    "Cardiovascular health, particularly heart failure",
    "Statin-associated muscle symptoms",
    "Energy and exercise capacity",
    "Aging and longevity contexts",
  ],
  mechanism: `CoQ10 is the only fat-soluble cofactor in the mitochondrial inner membrane that can shuttle electrons between Complex I/II and Complex III in the electron transport chain. Without adequate CoQ10, ATP synthesis is impaired regardless of upstream substrate availability. As an antioxidant, ubiquinol (the reduced form) directly scavenges lipid peroxyl radicals in mitochondrial and cellular membranes, protecting membrane integrity and recycling vitamin E. Endogenous synthesis depends on the mevalonate pathway — the same pathway statins inhibit upstream of cholesterol — which is why statin use depletes CoQ10. Tissue distribution is highest in metabolically active organs: heart, kidney, liver, skeletal muscle.`,
  studiedFor: [
    {
      domain: "Heart failure",
      evidenceLevel: "established",
      summary:
        "The Q-SYMBIO trial and multiple meta-analyses support CoQ10 as adjunctive therapy in chronic heart failure, with mortality reductions in some studies.",
    },
    {
      domain: "Statin-associated muscle symptoms",
      evidenceLevel: "emerging",
      summary:
        "Mixed evidence; some studies show benefit, others do not. Safety is excellent and use is widely accepted in clinical practice.",
    },
    {
      domain: "Migraine prevention",
      evidenceLevel: "emerging",
      summary:
        "Multiple controlled trials show modest reduction in migraine frequency with CoQ10 supplementation.",
    },
    {
      domain: "Exercise capacity",
      evidenceLevel: "preliminary",
      summary:
        "Effects on exercise performance in healthy adults are mixed; benefit is more apparent in older or deficient populations.",
    },
  ],
  typicalProtocol: {
    range:
      "100–200 mg ubiquinol or 200–400 mg ubiquinone daily, taken with fat for absorption.",
    duration:
      "Open-ended; well-tolerated long-term.",
    caveats:
      "Take with a fat-containing meal for absorption. Onset of clinical effects (heart failure, exercise capacity) may take 8–12 weeks.",
  },
  contraindications: [
    "Concurrent warfarin therapy — modest interaction; monitor INR.",
    "Pregnancy and lactation — limited safety data, though widely tolerated.",
  ],
  keyResearch: [
    {
      title:
        "The effect of coenzyme Q10 on morbidity and mortality in chronic heart failure: results from Q-SYMBIO",
      authors: "Mortensen SA, Rosenfeldt F, Kumar A, et al.",
      year: 2014,
      journal: "JACC Heart Fail",
      url: "https://pubmed.ncbi.nlm.nih.gov/25282031/",
    },
    {
      title:
        "Effect of coenzyme Q10 on statin-induced myopathy: a meta-analysis of randomized controlled trials",
      authors: "Banach M, Serban C, Sahebkar A, et al.",
      year: 2015,
      journal: "Mayo Clin Proc",
      url: "https://pubmed.ncbi.nlm.nih.gov/25841251/",
    },
    {
      title:
        "Coenzyme Q10 and migraine: a randomized, placebo-controlled, double-blind clinical trial",
      authors: "Sandor PS, Di Clemente L, Coppola G, et al.",
      year: 2005,
      journal: "Neurology",
      url: "https://pubmed.ncbi.nlm.nih.gov/15728289/",
    },
    {
      title:
        "Bioavailability of ubiquinol versus ubiquinone: a systematic review",
      authors: "López-Lluch G, Del Pozo-Cruz J, Sánchez-Cuesta A, et al.",
      year: 2019,
      journal: "Nutrition",
      url: "https://pubmed.ncbi.nlm.nih.gov/30599365/",
    },
  ],
  relatedCompounds: ["ss-31", "creatine", "magnesium-glycinate"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "low_energy",
      weight: 6,
      reasoning:
        "Mitochondrial cofactor; CoQ10 deficiency contributes to fatigue, especially in older adults and statin users.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "slow_recovery",
      weight: 4,
      reasoning:
        "Mitochondrial recovery capacity depends partly on CoQ10 status.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "nagging_pain",
      weight: 4,
      reasoning:
        "Statin-associated muscle pain may benefit from CoQ10 adjunct.",
    },
    {
      questionId: "energy_state",
      answerValue: "low",
      weight: 5,
      reasoning:
        "Direct match for low-energy states with potential mitochondrial component.",
    },
    {
      questionId: "energy_state",
      answerValue: "variable",
      weight: 4,
      reasoning:
        "Variable energy can have a mitochondrial-cofactor component.",
    },
    {
      questionId: "primary_goal",
      answerValue: "feel_younger",
      weight: 5,
      reasoning:
        "Endogenous CoQ10 declines with age; foundational longevity cofactor.",
    },
    {
      questionId: "age_range",
      answerValue: "46_60",
      weight: 4,
      reasoning:
        "CoQ10 decline becomes pharmacologically relevant in this band.",
    },
    {
      questionId: "age_range",
      answerValue: "over_60",
      weight: 5,
      reasoning:
        "CoQ10 levels are lowest here; supplementation rationale strongest.",
    },
  ],
  brandNote:
    "Ubiquinol over ubiquinone, especially over 50 — bioavailability difference is meaningful enough to justify the price premium.",
  legalStatus: {
    region: "global",
    status: "approved-supplement",
    note: "Widely available as an approved dietary supplement globally.",
  },
};
