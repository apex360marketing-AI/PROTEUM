import type { Compound } from "@/content/knowledge-base/types";

export const bComplex: Compound = {
  id: "b-complex",
  name: "B-complex (methylated)",
  category: "vitamin",
  classification: "foundational",
  tagline:
    "Methylated forms (methylfolate, methylcobalamin) bypass MTHFR variants and support methylation, energy, and homocysteine.",
  longDescription: `B-complex is a group of eight water-soluble B vitamins (B1 thiamine, B2 riboflavin, B3 niacin, B5 pantothenic acid, B6 pyridoxine, B7 biotin, B9 folate, B12 cobalamin) that act as cofactors in hundreds of enzymatic reactions including energy metabolism, neurotransmitter synthesis, DNA methylation, and red blood cell production.

The "methylated" qualifier refers to the active forms of two specific B vitamins — folate and B12 — that bypass common genetic variants in the MTHFR (methylenetetrahydrofolate reductase) gene that reduce the body's ability to activate dietary folic acid and synthetic cyanocobalamin. Roughly 10–15% of the general population has a homozygous MTHFR C677T variant that significantly impairs folate activation; far higher percentages carry at least one copy.

For users with MTHFR variants — and increasingly, as a default — the methylated forms (5-methyltetrahydrofolate / methylfolate, methylcobalamin / hydroxocobalamin / adenosylcobalamin) are preferred over folic acid and cyanocobalamin. The methylated forms are immediately bioactive, do not require enzymatic conversion, and may reduce the unmetabolized folic acid burden associated with high-dose synthetic folate intake.

Beyond methylation, B vitamins are essential for cellular energy metabolism (B1, B2, B3, B5), neurotransmitter synthesis (B6 for serotonin, dopamine; B12 for myelin), and homocysteine clearance (B6, B9, B12 jointly). Deficiencies in any are common, particularly in vegetarian/vegan diets (B12), heavy alcohol use (B1), and post-bariatric surgery populations.`,
  primaryUses: [
    "Energy and cellular metabolism support",
    "Methylation and homocysteine support",
    "Neurotransmitter synthesis",
    "Cardiovascular support via homocysteine reduction",
    "Foundational support in MTHFR variant populations",
  ],
  mechanism: `Each B vitamin acts as an enzymatic cofactor in distinct metabolic pathways. B1 (thiamine pyrophosphate) is essential for pyruvate dehydrogenase and the pentose phosphate shunt — central nodes in glucose and energy metabolism. B2 (FAD/FMN) and B3 (NAD/NADP) are electron-transfer cofactors throughout oxidative phosphorylation. B6 (pyridoxal phosphate) is the cofactor for over 100 enzymatic reactions including amino acid metabolism and neurotransmitter synthesis. B12 and B9 (methylated to MTHF) drive the methylation cycle — methyl groups are required for DNA methylation, neurotransmitter synthesis, phosphatidylcholine production, and homocysteine clearance. Methylated folate and methylcobalamin bypass the conversion step that is impaired in MTHFR variant carriers, providing immediately bioactive forms.`,
  studiedFor: [
    {
      domain: "Energy and fatigue",
      evidenceLevel: "emerging",
      summary:
        "B-vitamin deficiency contributes to fatigue states; supplementation in deficient populations consistently improves energy markers.",
    },
    {
      domain: "Homocysteine and cardiovascular markers",
      evidenceLevel: "established",
      summary:
        "B6, B9, B12 supplementation reliably reduces homocysteine. Translation to cardiovascular event reduction is mixed in trials.",
    },
    {
      domain: "Mood and depression",
      evidenceLevel: "emerging",
      summary:
        "B12 and folate deficiency is associated with depression; supplementation in deficient populations supports mood. MTHFR-aware methylated forms are preferred in resistant cases.",
    },
    {
      domain: "Cognitive function in aging",
      evidenceLevel: "emerging",
      summary:
        "B12 deficiency is a treatable cause of cognitive decline in older adults; routine screening and supplementation is reasonable.",
    },
  ],
  typicalProtocol: {
    range:
      "Methylated B-complex products typically provide methylfolate at 400–800 mcg, methylcobalamin at 500–1000 mcg, plus B6 (P5P) at 5–25 mg.",
    duration:
      "Open-ended; well-tolerated long-term.",
    caveats:
      "High-dose B6 (above 100 mg/day chronic) can cause peripheral neuropathy. Avoid exceeding label doses without testing.",
  },
  contraindications: [
    "Active malignancy with folate-sensitive tumor types — discuss with oncology.",
    "Long-term high-dose B6 (>100 mg/day) — neuropathy risk.",
    "Active vitamin B12 injection therapy — coordinate with prescriber.",
  ],
  keyResearch: [
    {
      title:
        "Effect of folic acid and B vitamins on risk of cardiovascular events and total mortality among women at high risk for cardiovascular disease: a randomized trial",
      authors: "Albert CM, Cook NR, Gaziano JM, et al.",
      year: 2008,
      journal: "JAMA",
      url: "https://pubmed.ncbi.nlm.nih.gov/18460663/",
    },
    {
      title:
        "Methylenetetrahydrofolate reductase (MTHFR) gene polymorphism and global DNA methylation",
      authors: "Friso S, Choi SW, Girelli D, et al.",
      year: 2002,
      journal: "Proc Natl Acad Sci U S A",
      url: "https://pubmed.ncbi.nlm.nih.gov/11929983/",
    },
    {
      title:
        "L-methylfolate as adjunctive therapy for SSRI-resistant major depression: results of two randomized, double-blind, parallel-sequential trials",
      authors: "Papakostas GI, Shelton RC, Zajecka JM, et al.",
      year: 2012,
      journal: "Am J Psychiatry",
      url: "https://pubmed.ncbi.nlm.nih.gov/23212058/",
    },
    {
      title:
        "B vitamins and the brain: mechanisms, dose and efficacy — a review",
      authors: "Kennedy DO",
      year: 2016,
      journal: "Nutrients",
      url: "https://pubmed.ncbi.nlm.nih.gov/26828517/",
    },
  ],
  relatedCompounds: ["vitamin-d3", "magnesium-glycinate", "omega-3"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "low_energy",
      weight: 6,
      reasoning:
        "B vitamins are central to energy metabolism; deficiency is a common reversible driver of fatigue.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "anxiety_low_mood",
      weight: 5,
      reasoning:
        "Methylation status affects neurotransmitter synthesis; methylfolate is FDA-approved as adjunct for SSRI-resistant depression.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "brain_fog",
      weight: 5,
      reasoning:
        "B12 and folate deficiency are common, treatable causes of cognitive symptoms.",
    },
    {
      questionId: "energy_state",
      answerValue: "low",
      weight: 6,
      reasoning:
        "Direct match for low-energy states with potential B-vitamin component.",
    },
    {
      questionId: "energy_state",
      answerValue: "variable",
      weight: 4,
      reasoning:
        "Variable energy is a softer signal; B-complex remains plausible.",
    },
    {
      questionId: "current_supplements",
      answerValue: "none",
      weight: 5,
      reasoning:
        "Foundational support for users not on anything.",
    },
    {
      questionId: "primary_goal",
      answerValue: "perform_higher",
      weight: 4,
      reasoning:
        "Energy and methylation support are foundational for performance contexts.",
    },
  ],
  brandNote:
    "Methylated forms (methylfolate, methylcobalamin) cost slightly more and meaningfully outperform folic acid and cyanocobalamin in MTHFR-variant carriers — a meaningful percentage of the general population.",
  legalStatus: {
    region: "global",
    status: "approved-supplement",
    note: "Widely available as approved dietary supplements globally.",
  },
};
