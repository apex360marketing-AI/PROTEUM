import type { Compound } from "@/content/knowledge-base/types";

export const ss31: Compound = {
  id: "ss-31",
  name: "SS-31 (Elamipretide)",
  category: "peptide",
  classification: "underrated",
  tagline:
    "Mitochondrial-targeted tetrapeptide developed by Stealth Biotherapeutics, in Phase III trials for inherited mitochondrial disease.",
  longDescription: `SS-31, also known by its development name Elamipretide and the brand name Bendavia in some literature, is a synthetic tetrapeptide (D-Arg-2',6'-dimethylTyr-Lys-Phe) designed by Hazel Szeto and Peter Schiller in the early 2000s as a member of a class of "mitochondrial-targeted antioxidants." The peptide localizes specifically to the inner mitochondrial membrane, where it binds cardiolipin — a unique phospholipid found almost exclusively in mitochondria — and protects mitochondrial structure and function during cellular stress.

Mitochondrial dysfunction is implicated in a wide range of age-related diseases (heart failure, neurodegeneration, kidney disease, sarcopenia) and in inherited mitochondrial disorders. SS-31 is the most clinically-advanced peptide drug that directly targets mitochondrial integrity. It has been developed for over two decades by Stealth Biotherapeutics and has been studied in registered trials for primary mitochondrial myopathy, Barth syndrome, age-related macular degeneration, and heart failure.

Outcomes have been mixed across indications. Early trials showed encouraging signals; pivotal trials in some indications (heart failure with the original formulation) did not meet primary endpoints, while other indications (mitochondrial myopathy, Barth syndrome) have shown positive results in later trials. The development pipeline is active, and Elamipretide remains a credible candidate for FDA approval in narrow indications.

In the consumer peptide space, SS-31 is largely unknown — overshadowed by less clinically-advanced compounds with more aggressive marketing. PROTEUM treats it as a peptide where the science is unusually strong, the regulatory pathway is real, and the consumer awareness is dramatically lower than the evidence supports.`,
  primaryUses: [
    "Mitochondrial dysfunction research",
    "Cardiolipin protection contexts",
    "Mitochondrial myopathy and inherited mitochondrial disease (clinical trials)",
    "Aging mitochondrial decline (research)",
  ],
  mechanism: `SS-31 has the unusual property of selectively concentrating in the inner mitochondrial membrane — by some measurements, mitochondrial concentrations are over a thousand times higher than cytosolic concentrations. The peptide binds cardiolipin, a phospholipid almost exclusively found in the inner mitochondrial membrane, and stabilizes its structure under stress. Cardiolipin is essential for the function of the electron transport chain (ETC) and ATP synthesis; under conditions of mitochondrial stress (oxidative damage, ischemia, aging) cardiolipin is degraded or oxidized, and ETC function deteriorates. SS-31 protects cardiolipin, preserves ETC integrity, reduces reactive oxygen species production, and maintains ATP synthesis in stressed mitochondria. This is mechanistically distinct from antioxidants like Coenzyme Q10 — which scavenge free radicals — and represents structural mitochondrial protection.`,
  studiedFor: [
    {
      domain: "Mitochondrial myopathy",
      evidenceLevel: "emerging",
      summary:
        "Multiple registered trials in primary mitochondrial myopathy show improvements in functional endpoints such as 6-minute walk test.",
    },
    {
      domain: "Barth syndrome",
      evidenceLevel: "emerging",
      summary:
        "Trials in this rare inherited mitochondrial disorder have shown positive functional and biomarker outcomes.",
    },
    {
      domain: "Heart failure",
      evidenceLevel: "preliminary",
      summary:
        "Pivotal trials with the original IV formulation did not meet primary endpoints. Reformulated subcutaneous studies are ongoing.",
    },
    {
      domain: "Age-related macular degeneration",
      evidenceLevel: "preliminary",
      summary:
        "Early-phase trials have shown signals worth following; not yet a registered indication.",
    },
  ],
  typicalProtocol: {
    range:
      "Trial protocols use 40 mg subcutaneous daily in mitochondrial-disease populations.",
    duration:
      "Long-term continuous use in trial populations; off-label or research-context use varies.",
    caveats:
      "This is an investigational drug being developed by Stealth Biotherapeutics. Off-label or research-context use is meaningfully different from trial protocols.",
  },
  contraindications: [
    "Pregnancy and lactation — limited safety data.",
    "Severe renal impairment.",
    "Active malignancy without oncology oversight.",
  ],
  keyResearch: [
    {
      title:
        "Mitochondria-targeted peptides protect against ischemia-reperfusion injury",
      authors: "Szeto HH",
      year: 2014,
      journal: "Br J Pharmacol",
      url: "https://pubmed.ncbi.nlm.nih.gov/24117042/",
    },
    {
      title:
        "Effects of elamipretide on left ventricular function in patients with heart failure with reduced ejection fraction: the PROGRESS-HF Phase 2 trial",
      authors: "Daubert MA, Yow E, Dunn G, et al.",
      year: 2017,
      journal: "J Card Fail",
      url: "https://pubmed.ncbi.nlm.nih.gov/28645707/",
    },
    {
      title:
        "Elamipretide for primary mitochondrial myopathy (MMPOWER-3): a randomized, double-blind, placebo-controlled trial",
      authors:
        "Karaa A, Bertini E, Carelli V, et al.",
      year: 2020,
      journal: "Neurology",
      url: "https://pubmed.ncbi.nlm.nih.gov/32546653/",
    },
    {
      title:
        "First-in-class cardiolipin-protective compound as a therapeutic agent to restore mitochondrial bioenergetics",
      authors: "Birk AV, Liu S, Soong Y, et al.",
      year: 2013,
      journal: "Br J Pharmacol",
      url: "https://pubmed.ncbi.nlm.nih.gov/23617415/",
    },
  ],
  relatedCompounds: ["foxo4-dri", "epitalon"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "low_energy",
      weight: 6,
      reasoning:
        "Mitochondrial dysfunction is a major contributor to fatigue states; SS-31 directly targets mitochondrial bioenergetics.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "slow_recovery",
      weight: 5,
      reasoning:
        "Mitochondrial recovery capacity is rate-limiting for general recovery; relevant in sub-clinical mitochondrial dysfunction.",
    },
    {
      questionId: "energy_state",
      answerValue: "low",
      weight: 6,
      reasoning:
        "Direct match: chronic energy deficits with mitochondrial component are the strongest theoretical use case.",
    },
    {
      questionId: "energy_state",
      answerValue: "variable",
      weight: 4,
      reasoning:
        "Variable energy with afternoon crashes can have a mitochondrial component.",
    },
    {
      questionId: "primary_goal",
      answerValue: "feel_younger",
      weight: 5,
      reasoning:
        "Mitochondrial decline is a central aging signature.",
    },
    {
      questionId: "age_range",
      answerValue: "46_60",
      weight: 4,
      reasoning:
        "Mitochondrial decline becomes meaningful in this band.",
    },
    {
      questionId: "age_range",
      answerValue: "over_60",
      weight: 5,
      reasoning:
        "Strongest age band for mitochondrial-decline interventions.",
    },
  ],
  underratedNote:
    "SS-31 has been in active pharmaceutical development for two decades, has Phase III trial data, and targets a clean mechanism (cardiolipin protection). It remains barely known in consumer peptide spaces — almost the opposite of marketing-driven attention.",
  brandNote:
    "If a user describes chronic fatigue with no obvious cause and a recovery-not-following-effort pattern, the mitochondrial axis is worth knowing about — SS-31 is the most direct mitochondrial peptide.",
  legalStatus: {
    region: "US",
    status: "research-only",
    note: "Investigational drug under development by Stealth Biotherapeutics. Not approved in the United States. Used as a research peptide in non-clinical contexts.",
  },
};
