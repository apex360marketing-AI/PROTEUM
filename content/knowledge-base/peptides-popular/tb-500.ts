import type { Compound } from "@/content/knowledge-base/types";

export const tb500: Compound = {
  id: "tb-500",
  name: "TB-500",
  category: "peptide",
  classification: "popular",
  tagline:
    "Synthetic fragment of Thymosin Beta-4 studied for tissue repair, angiogenesis, and migration.",
  longDescription: `TB-500 is a synthetic peptide fragment derived from Thymosin Beta-4 (Tβ4), a naturally occurring 43-amino-acid protein found in nearly every cell type in the body. It is one of the most-cited peptides in regenerative-medicine research, with a published evidence base spanning cardiac repair, corneal wound healing, dermal injury, and muscle regeneration.

Unlike BPC-157, which began in gastric biology, the TB-500 / Thymosin Beta-4 story originated in cell biology — specifically in actin sequestration. Tβ4 binds and regulates G-actin, the building block of the cytoskeleton, and through that mechanism it influences cell migration, endothelial cell behavior, and the activation of progenitor populations.

Most consumer-facing references to "TB-500" refer to a specific 4-amino-acid active fragment of the parent peptide that retains key bioactivity at lower cost of synthesis. The full Tβ4 has been studied in human trials for ophthalmic and dermal indications; the fragment has not seen the same level of independent clinical validation, and the equivalence assumption between the fragment and the full peptide is sometimes glossed over in consumer materials.

PROTEUM treats TB-500 as a credible research peptide with stronger basic-science support than most, while flagging that the fragment-vs-full-peptide distinction matters and is rarely made clearly in vendor copy.`,
  primaryUses: [
    "Soft-tissue and connective-tissue repair",
    "Cardiac and vascular injury research",
    "Dermal wound healing",
    "Hair follicle and corneal regeneration models",
    "Muscle and tendon recovery contexts",
  ],
  mechanism: `Thymosin Beta-4 binds and sequesters G-actin, regulating the dynamics of the cytoskeleton — the protein scaffolding that drives cell shape, migration, and structural reorganization during repair. By controlling actin polymerization, Tβ4 modulates how cells move toward injury sites and how they re-engage tissue rebuilding. Independently of actin sequestration, Tβ4 promotes angiogenesis (new blood vessel formation) by activating integrin-linked kinase (ILK) signaling and supports the survival and migration of cardiac progenitor cells in models of myocardial infarction. The shorter TB-500 fragment retains the actin-binding active site (the "LKKTETQ" motif) and is hypothesized to preserve the migratory and angiogenic effects, though direct head-to-head evidence in humans is limited.`,
  studiedFor: [
    {
      domain: "Soft tissue repair",
      evidenceLevel: "emerging",
      summary:
        "Animal and cell-culture models consistently show accelerated cell migration into injury sites and improved tissue regeneration outcomes.",
    },
    {
      domain: "Cardiac regeneration",
      evidenceLevel: "emerging",
      summary:
        "Tβ4 has been studied in models of myocardial infarction, with evidence of cardiac progenitor cell mobilization and protective effects post-injury.",
    },
    {
      domain: "Dermal and corneal wound healing",
      evidenceLevel: "established",
      summary:
        "The full Tβ4 peptide has progressed through clinical trials for dermal and corneal indications, with positive efficacy data in several studies.",
    },
    {
      domain: "Hair follicle regeneration",
      evidenceLevel: "preliminary",
      summary:
        "Animal models show effects on hair follicle stem cell migration and follicle development. Human evidence is limited.",
    },
  ],
  typicalProtocol: {
    range:
      "Research-literature references for TB-500 fragment commonly cite 2.0–2.5 mg subcutaneous, twice weekly during loading phases.",
    duration:
      "Loading phases of 4–6 weeks followed by reduced maintenance dosing, per consumer-research literature.",
    caveats:
      "These dosing references are not from registered RCTs. Discuss with a qualified clinician.",
  },
  contraindications: [
    "Active malignancy — angiogenesis-promoting compounds are theoretically problematic.",
    "Pregnancy and lactation — no safety data.",
    "Bleeding disorders or anticoagulant therapy without medical oversight.",
  ],
  keyResearch: [
    {
      title:
        "Thymosin β4: a multi-functional regenerative peptide. Basic properties and clinical applications",
      authors: "Goldstein AL, Hannappel E, Sosne G, Kleinman HK",
      year: 2012,
      journal: "Expert Opin Biol Ther",
      url: "https://pubmed.ncbi.nlm.nih.gov/22074294/",
    },
    {
      title:
        "Thymosin beta4 activates integrin-linked kinase and promotes cardiac cell migration, survival and cardiac repair",
      authors: "Bock-Marquette I, Saxena A, White MD, Dimaio JM, Srivastava D",
      year: 2004,
      journal: "Nature",
      url: "https://pubmed.ncbi.nlm.nih.gov/15565145/",
    },
    {
      title:
        "Thymosin beta4 induces adult epicardial progenitor mobilization and neovascularization",
      authors: "Smart N, Risebro CA, Melville AA, et al.",
      year: 2007,
      journal: "Nature",
      url: "https://pubmed.ncbi.nlm.nih.gov/17108969/",
    },
    {
      title:
        "Thymosin beta4: structure, function, and biological properties supporting current and future clinical applications",
      authors: "Crockford D, Turjman N, Allan C, Angel J",
      year: 2010,
      journal: "Ann N Y Acad Sci",
      url: "https://pubmed.ncbi.nlm.nih.gov/20536469/",
    },
    {
      title:
        "Biological activities of thymosin beta4 defined by active sites in short peptide sequences",
      authors: "Sosne G, Qiu P, Goldstein AL, Wheater M",
      year: 2010,
      journal: "FASEB J",
      url: "https://pubmed.ncbi.nlm.nih.gov/20179144/",
    },
  ],
  relatedCompounds: ["bpc-157", "ghk-cu", "ipamorelin"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "nagging_pain",
      weight: 8,
      reasoning:
        "Strong basic-science evidence for soft-tissue repair and cell migration into injury sites.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "slow_recovery",
      weight: 7,
      reasoning:
        "Mobilization and migration mechanisms suggest broad recovery support, not just localized repair.",
    },
    {
      questionId: "pain_injury",
      answerValue: "specific",
      weight: 8,
      reasoning:
        "Lead candidate alongside BPC-157 for specific injury repair contexts.",
    },
    {
      questionId: "pain_injury",
      answerValue: "generalized",
      weight: 6,
      reasoning:
        "General tissue-repair signaling can extend to systemic inflammation and aches.",
    },
    {
      questionId: "primary_goal",
      answerValue: "fix_specific",
      weight: 6,
      reasoning:
        "Aligns with users explicitly here to address an injury or repair need.",
    },
    {
      questionId: "recovery_state",
      answerValue: "slow",
      weight: 6,
      reasoning:
        "Effects on cell migration suggest plausible benefit for slow-recovery profiles.",
    },
  ],
  legalStatus: {
    region: "US",
    status: "research-only",
    note: "Sold as a research chemical in the United States. The full Tβ4 peptide has been in human trials; the TB-500 fragment is not an approved drug.",
  },
};
