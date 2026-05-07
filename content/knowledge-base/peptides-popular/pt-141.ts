import type { Compound } from "@/content/knowledge-base/types";

export const pt141: Compound = {
  id: "pt-141",
  name: "PT-141 (Bremelanotide)",
  category: "peptide",
  classification: "popular",
  tagline:
    "FDA-approved central melanocortin agonist for sexual arousal — the cleanest receptor-targeted alternative to Melanotan II.",
  longDescription: `PT-141, also known by its generic name Bremelanotide and brand name Vyleesi, is a synthetic melanocortin receptor agonist developed from Melanotan II. It was approved by the U.S. FDA in 2019 for the treatment of acquired, generalized hypoactive sexual desire disorder (HSDD) in premenopausal women — making it one of the few peptides in this knowledge base with a registered clinical indication and Phase III evidence.

PT-141 works through the same mechanism family as Melanotan II — central activation of the melanocortin pathway in the hypothalamus — but with greater receptor selectivity. The result is a similar set of effects on sexual arousal and erection initiation, with reduced pigmentation effects (lower MC1R activity at therapeutic doses) and a more predictable side-effect profile.

Importantly, PT-141 is not a phosphodiesterase inhibitor like sildenafil or tadalafil. It does not work primarily by enhancing peripheral blood flow; it works by activating central arousal pathways. This makes it useful in cases where erectile dysfunction has a central or psychogenic component rather than purely vascular, and it underlies its FDA-approved use for desire (rather than performance) in women.

Side effects in the registration trials included nausea (common), flushing, headache, and transient blood pressure elevation. The compound has a favorable safety profile in the approved population but is not appropriate for cardiovascular-compromised users.`,
  primaryUses: [
    "Sexual arousal and desire support (FDA-approved indication in women)",
    "Erectile function in cases with central component",
    "Libido research contexts",
  ],
  mechanism: `PT-141 activates central melanocortin receptors — primarily MC4R — in the hypothalamus and other CNS regions involved in sexual behavior. Activation triggers downstream signaling through dopaminergic and oxytocinergic pathways that mediate sexual arousal. Unlike PDE-5 inhibitors (which act peripherally on smooth muscle vasodilation), PT-141 acts centrally on desire and arousal initiation. The peripheral pigmentation effects associated with Melanotan II are minimized because PT-141 has lower MC1R affinity at therapeutic doses, though they are not entirely absent.`,
  studiedFor: [
    {
      domain: "Female sexual desire (HSDD)",
      evidenceLevel: "established",
      summary:
        "Multiple Phase III RCTs (RECONNECT trials) supported FDA approval. Endpoints showed statistically significant improvements in desire and distress over placebo.",
    },
    {
      domain: "Erectile function",
      evidenceLevel: "emerging",
      summary:
        "Earlier studies showed efficacy in men with ED, including PDE-5-inhibitor non-responders. Development for this indication did not advance to approval.",
    },
    {
      domain: "Sexual arousal in healthy users",
      evidenceLevel: "preliminary",
      summary:
        "Off-label use in non-HSDD populations is common but has not been validated in registered trials.",
    },
  ],
  typicalProtocol: {
    range:
      "FDA-approved label dose for HSDD is 1.75 mg subcutaneous, on-demand, at least 45 minutes before anticipated sexual activity, max 8 doses per month.",
    duration:
      "On-demand use; not chronic dosing.",
    caveats:
      "Hypertension and cardiovascular risk are real considerations. Discuss with a clinician before any use.",
  },
  contraindications: [
    "Uncontrolled hypertension or known cardiovascular disease.",
    "Pregnancy.",
    "Concurrent oral naltrexone (reduced efficacy).",
    "History of melanoma or atypical nevi (theoretical caution).",
  ],
  keyResearch: [
    {
      title:
        "Bremelanotide for the treatment of female sexual dysfunctions in premenopausal women: two randomized phase 3 trials",
      authors:
        "Kingsberg SA, Clayton AH, Portman D, Williams LA, Krop J, Jordan R, Lucas J, Simon JA",
      year: 2019,
      journal: "Obstet Gynecol",
      url: "https://pubmed.ncbi.nlm.nih.gov/31599828/",
    },
    {
      title:
        "Effect of bremelanotide for hypoactive sexual desire disorder: secondary analyses",
      authors: "Clayton AH, Lucas J, DeRogatis LR, Jordan R",
      year: 2019,
      journal: "J Sex Med",
      url: "https://pubmed.ncbi.nlm.nih.gov/31109925/",
    },
    {
      title:
        "Bremelanotide injection for the treatment of hypoactive sexual desire disorder in women",
      authors: "Mayer D, Lynch SE",
      year: 2020,
      journal: "Ann Pharmacother",
      url: "https://pubmed.ncbi.nlm.nih.gov/31904248/",
    },
  ],
  relatedCompounds: ["melanotan-ii"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "loss_strength_libido",
      weight: 8,
      reasoning:
        "Direct match: PT-141 is the FDA-approved central melanocortin agonist for desire, with the strongest registered evidence for libido support.",
    },
    {
      questionId: "primary_goal",
      answerValue: "fix_specific",
      weight: 6,
      reasoning:
        "Strong fit when the specific goal is desire or arousal restoration.",
    },
    {
      questionId: "primary_goal",
      answerValue: "feel_younger",
      weight: 4,
      reasoning:
        "Sexual function is part of the broader 'feel younger' framing for many users.",
    },
    {
      questionId: "mood_state",
      answerValue: "flat_low",
      weight: 3,
      reasoning:
        "Melanocortin pathway has secondary mood and engagement effects in some populations.",
    },
    {
      questionId: "age_range",
      answerValue: "46_60",
      weight: 4,
      reasoning:
        "Age-related decline in desire becomes pharmacologically relevant in this band.",
    },
    {
      questionId: "age_range",
      answerValue: "over_60",
      weight: 4,
      reasoning:
        "Same rationale extends to the older band.",
    },
  ],
  legalStatus: {
    region: "US",
    status: "prescription",
    note: "FDA-approved as Vyleesi for HSDD in premenopausal women. Off-label use in other populations is on prescription.",
  },
};
