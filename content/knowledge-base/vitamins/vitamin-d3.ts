import type { Compound } from "@/content/knowledge-base/types";

export const vitaminD3: Compound = {
  id: "vitamin-d3",
  name: "Vitamin D3 (with K2)",
  category: "vitamin",
  classification: "foundational",
  tagline:
    "Cholecalciferol — the prohormone vitamin most adults are deficient in. Best paired with K2 for calcium routing.",
  longDescription: `Vitamin D3 (cholecalciferol) is technically a prohormone rather than a classical vitamin: it is synthesized in skin from 7-dehydrocholesterol on UVB exposure, and it is converted in the liver and kidney into the active hormone 1,25-dihydroxyvitamin D (calcitriol). The active hormone binds the vitamin D receptor (VDR), a nuclear transcription factor expressed in nearly every tissue in the body, and modulates the expression of hundreds of genes — including those regulating calcium absorption, immune function, mood, and cellular differentiation.

Roughly 40% of US adults are estimated to be vitamin D deficient by the conventional 25(OH)D ≥ 30 ng/mL threshold; estimates are higher in populations with limited sun exposure, darker skin, or higher BMI. Deficiency correlates with poor outcomes across a wide range of conditions including bone health, immune function, autoimmune disease risk, and depression — though the causal direction is not always settled, and supplementation does not produce equivalent improvement across all of these conditions.

Pairing D3 with vitamin K2 (menaquinone-7, MK-7) is increasingly common practice. The rationale: D3 increases calcium absorption from the gut; K2 directs absorbed calcium toward bone and away from soft tissue (notably arterial walls). Some clinical evidence supports the combined use, particularly in older populations, though the magnitude of benefit beyond D3 alone is debated.

Vitamin D3 is the single highest-yield supplement for most adults — easy to test, easy to dose, broad downstream effects when deficient.`,
  primaryUses: [
    "Bone health and calcium metabolism",
    "Immune function support",
    "Mood and seasonal affective contexts",
    "Hormone health (testosterone, sex steroid synthesis)",
    "Foundational supplement for general health",
  ],
  mechanism: `Cholecalciferol is hydroxylated in the liver to 25-hydroxyvitamin D (the storage and circulating form measured in blood tests) and then in the kidney to 1,25-dihydroxyvitamin D (calcitriol, the active hormone). Calcitriol binds the vitamin D receptor (VDR) — a nuclear receptor expressed in nearly every tissue — and acts as a transcription factor regulating the expression of an estimated 1,000+ genes involved in calcium handling, immune cell differentiation, antimicrobial peptide production, and cellular proliferation control. K2 (menaquinone-7) activates osteocalcin and matrix Gla protein via vitamin-K-dependent carboxylation, directing absorbed calcium into bone matrix while inhibiting soft-tissue calcification. The K2 mechanism is what underlies the rationale for combined supplementation.`,
  studiedFor: [
    {
      domain: "Bone health",
      evidenceLevel: "established",
      summary:
        "Decades of evidence support D3 supplementation for bone density and fracture risk reduction in deficient populations.",
    },
    {
      domain: "Immune function",
      evidenceLevel: "established",
      summary:
        "Strong evidence for upper respiratory infection risk reduction in deficient populations; broader immune-modulating effects are well-documented.",
    },
    {
      domain: "Mood and depression",
      evidenceLevel: "emerging",
      summary:
        "Multiple meta-analyses suggest modest mood benefits in deficient populations. Effects in non-deficient populations are less clear.",
    },
    {
      domain: "Cardiovascular and metabolic health",
      evidenceLevel: "preliminary",
      summary:
        "Observational correlations are strong; large RCTs (VITAL) have not consistently shown supplementation benefits for cardiovascular endpoints in non-deficient populations.",
    },
  ],
  typicalProtocol: {
    range:
      "1,000–5,000 IU daily of D3 is the typical adult range, calibrated against 25(OH)D blood levels. K2 (MK-7) commonly paired at 90–200 mcg.",
    duration:
      "Open-ended; reassess D3 levels every 6–12 months.",
    caveats:
      "Higher doses (10,000 IU+) require monitoring. Test 25(OH)D before and during supplementation to avoid both deficiency and toxicity.",
  },
  contraindications: [
    "Hypercalcemia or sarcoidosis — D activity drives calcium absorption.",
    "Active vitamin K antagonist therapy (warfarin) — discuss K2 use with the prescriber.",
    "Granulomatous disease (lymphoma, tuberculosis) — risk of D-driven hypercalcemia.",
  ],
  keyResearch: [
    {
      title:
        "Vitamin D supplementation to prevent acute respiratory tract infections: systematic review and meta-analysis of individual participant data",
      authors: "Martineau AR, Jolliffe DA, Hooper RL, et al.",
      year: 2017,
      journal: "BMJ",
      url: "https://pubmed.ncbi.nlm.nih.gov/28202713/",
    },
    {
      title:
        "Vitamin D supplementation and prevention of cardiovascular disease and cancer in the VITAL randomized trial",
      authors: "Manson JE, Cook NR, Lee IM, et al.",
      year: 2019,
      journal: "N Engl J Med",
      url: "https://pubmed.ncbi.nlm.nih.gov/30415629/",
    },
    {
      title:
        "Effects of vitamin D supplementation on bone mineral density: a systematic review and meta-analysis",
      authors: "Reid IR, Bolland MJ, Grey A",
      year: 2014,
      journal: "Lancet",
      url: "https://pubmed.ncbi.nlm.nih.gov/24119980/",
    },
    {
      title:
        "Vitamin K2 and the synergy with vitamin D",
      authors: "Maresz K",
      year: 2015,
      journal: "Integr Med (Encinitas)",
      url: "https://pubmed.ncbi.nlm.nih.gov/26770129/",
    },
  ],
  relatedCompounds: ["magnesium-glycinate", "omega-3", "zinc"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "low_energy",
      weight: 6,
      reasoning:
        "Vitamin D deficiency is one of the most common reversible drivers of chronic fatigue.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "anxiety_low_mood",
      weight: 6,
      reasoning:
        "Deficiency correlates with mood disturbances; supplementation has modest evidence in deficient populations.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "loss_strength_libido",
      weight: 5,
      reasoning:
        "Vitamin D supports testosterone synthesis and sex steroid pathways; deficiency contributes to these symptoms.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "stubborn_fat",
      weight: 4,
      reasoning:
        "Higher BMI correlates with lower vitamin D status; supplementation supports the broader metabolic picture.",
    },
    {
      questionId: "current_supplements",
      answerValue: "none",
      weight: 8,
      reasoning:
        "If they're taking nothing, vitamin D is the highest-yield first move for most adults.",
    },
    {
      questionId: "current_supplements",
      answerValue: "basics",
      weight: 5,
      reasoning:
        "Many users on basics already include D3; the advice still typically applies.",
    },
    {
      questionId: "primary_goal",
      answerValue: "feel_younger",
      weight: 5,
      reasoning:
        "Foundational longevity supplement.",
    },
    {
      questionId: "primary_goal",
      answerValue: "fix_specific",
      weight: 5,
      reasoning:
        "Many specific complaints have a vitamin D component worth ruling out.",
    },
  ],
  brandNote:
    "If a user is taking nothing, this is the first thing to think about — testable, cheap, broadly useful when deficient.",
  legalStatus: {
    region: "global",
    status: "approved-supplement",
    note: "Vitamin D3 and K2 are widely available as approved dietary supplements globally.",
  },
};
