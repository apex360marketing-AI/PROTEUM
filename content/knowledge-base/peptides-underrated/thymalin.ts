import type { Compound } from "@/content/knowledge-base/types";

export const thymalin: Compound = {
  id: "thymalin",
  name: "Thymalin",
  category: "peptide",
  classification: "underrated",
  tagline:
    "Thymic peptide complex studied for immune restoration and biological-age modulation in Russian clinical research.",
  longDescription: `Thymalin is a peptide preparation extracted from the thymus gland of young calves, characterized and developed in Russia (originally in the Soviet Union) since the 1970s. It is part of the broader family of "tissue-specific" peptide therapies pioneered by Vladimir Khavinson and colleagues at the St. Petersburg Institute of Bioregulation and Gerontology.

The thymus is the immune system's training ground for T cells; its function declines markedly with age (a process called thymic involution), and this decline is one of the central drivers of immunosenescence — the age-related deterioration of the immune system. Thymalin's central thesis is that supplying short, thymus-derived peptides can partially restore thymic function in aged populations.

The Russian clinical literature on Thymalin is unusually deep for a compound that is largely unknown in Western consumer peptide spaces. Multiple long-term studies, including some lasting more than a decade, have reported reduced morbidity, improved immune markers, and in some cases extended median survival in elderly cohorts compared to controls.

Why is this not better known outside Russia? Most clinical work was published in Russian-language journals, the regulatory pathway diverged from Western pharmaceutical development norms, and the product was never licensed for Western markets. PROTEUM treats Thymalin as a compound where the Russian evidence base is meaningfully more substantial than its Western consumer profile suggests, while flagging that independent Western replication is limited.`,
  primaryUses: [
    "Immune system restoration research",
    "Thymic function support in aged populations",
    "Immunosenescence research",
    "General longevity contexts",
  ],
  mechanism: `Thymalin contains a mixture of low-molecular-weight peptides isolated from thymic tissue. The active fractions modulate T-cell maturation and differentiation, restore thymic epithelial cell function in animal models, and shift immune-marker profiles in aged populations toward those of younger reference cohorts. Specific peptide signaling partners are still being characterized — the Khavinson framework treats the active peptide fragments as gene-expression modulators that influence transcription of immune-related genes in thymic and lymphocytic populations. Practical effects in clinical studies include normalization of T-cell subset ratios (notably CD4/CD8), reduced inflammatory markers, and improved response to vaccination and infection in elderly cohorts.`,
  studiedFor: [
    {
      domain: "Immune restoration in aged populations",
      evidenceLevel: "emerging",
      summary:
        "Multiple Russian clinical studies in elderly cohorts show normalization of T-cell ratios and reduced inflammatory markers vs controls.",
    },
    {
      domain: "Long-term morbidity and mortality",
      evidenceLevel: "preliminary",
      summary:
        "Long-running cohort studies — some over a decade — report reduced morbidity and extended median survival vs controls. Independent Western replication is limited.",
    },
    {
      domain: "Vaccine response and infection resistance",
      evidenceLevel: "preliminary",
      summary:
        "Improved response to vaccination in elderly cohorts has been reported.",
    },
  ],
  typicalProtocol: {
    range:
      "Russian protocols typically use 5–10 mg intramuscular daily.",
    duration:
      "Cycles of 5–10 days, often repeated 1–2 times per year.",
    caveats:
      "Most published clinical evidence is from Russian-language journals. Western consumer dosing references are extrapolations.",
  },
  contraindications: [
    "Active autoimmune disease — caution with immune-stimulating compounds.",
    "Pregnancy and lactation.",
    "Active malignancy without oncology oversight.",
    "Allergy to bovine proteins (depending on extraction source).",
  ],
  keyResearch: [
    {
      title:
        "Peptide regulation of aging: 35-year experience with peptide bioregulators",
      authors: "Khavinson VKh, Anisimov VN, Linkova NS, et al.",
      year: 2014,
      journal: "Adv Gerontol",
      url: "https://pubmed.ncbi.nlm.nih.gov/25911896/",
    },
    {
      title:
        "Effects of Thymalin and Epithalamin on the lifespan and homeostasis of geriatric patients",
      authors: "Khavinson VKh, Morozov VG",
      year: 2003,
      journal: "Bull Exp Biol Med",
      url: "https://pubmed.ncbi.nlm.nih.gov/15017788/",
    },
    {
      title:
        "Thymic peptides in immune dysfunction and aging",
      authors: "Goldstein AL, Badamchian M",
      year: 2004,
      journal: "Expert Opin Biol Ther",
      url: "https://pubmed.ncbi.nlm.nih.gov/15270660/",
    },
  ],
  relatedCompounds: ["epitalon", "pinealon", "selank"],
  matchSignals: [
    {
      questionId: "primary_goal",
      answerValue: "feel_younger",
      weight: 7,
      reasoning:
        "Immunosenescence is one of the central biological-age drivers; Thymalin is the compound most directly aimed at it.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "low_energy",
      weight: 4,
      reasoning:
        "Chronic immune activation and impaired immunity contribute to fatigue states in aged populations.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "gut_inflammation",
      weight: 4,
      reasoning:
        "Immune-modulatory effects extend to mucosal immunity and inflammatory tone.",
    },
    {
      questionId: "age_range",
      answerValue: "46_60",
      weight: 6,
      reasoning:
        "Thymic involution becomes pharmacologically relevant in this band.",
    },
    {
      questionId: "age_range",
      answerValue: "over_60",
      weight: 8,
      reasoning:
        "The strongest match: most Russian clinical evidence is in this population.",
    },
  ],
  underratedNote:
    "Most of Thymalin's substantial clinical evidence base is in Russian-language journals. The Western consumer space is barely aware it exists despite a clinical track record longer than most peptides users do recognize.",
  brandNote:
    "When the user's signal is 'I want my immune system to act its real age', this is the compound to know about.",
  legalStatus: {
    region: "US",
    status: "research-only",
    note: "Not approved in the United States. A registered preparation in Russia.",
  },
};
