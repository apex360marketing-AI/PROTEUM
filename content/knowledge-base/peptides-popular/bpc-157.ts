import type { Compound } from "@/content/knowledge-base/types";

export const bpc157: Compound = {
  id: "bpc-157",
  name: "BPC-157",
  category: "peptide",
  classification: "popular",
  tagline:
    "Pentadecapeptide best known for soft-tissue and gastrointestinal repair signaling.",
  longDescription: `BPC-157 — short for Body Protective Compound 157 — is a 15-amino-acid sequence isolated from a protective protein found in human gastric juice. It is the most heavily-studied peptide in the consumer recovery space and one of the best-characterized in the broader peptide research literature, with several hundred peer-reviewed publications, the majority from the Sikiric laboratory in Croatia.

The compound's reputation rests on a wide range of preclinical injury models — Achilles transection, muscle crush, cartilage damage, gastric ulceration, ligament rupture — in which BPC-157 has consistently accelerated tissue repair and reduced markers of inflammation. The mechanistic story is incomplete, but several plausible pathways have been mapped: upregulation of growth hormone receptors on fibroblasts, modulation of nitric oxide signaling, angiogenesis, and effects on the brain–gut axis.

Clinical-grade human data is sparse. Most of what is publicly cited as evidence in the consumer space comes from rodent studies, and these results have not been independently replicated in registered randomized human trials. That is the central caveat. The animal evidence is unusually strong and unusually consistent, but consumer-facing claims that imply equivalent human evidence outpace what has actually been published.

PROTEUM treats BPC-157 as the lead candidate to discuss when an assessment surfaces injury, tendon, or gut-repair concerns — and as a compound where the gap between preclinical evidence and human RCT data must always be made explicit.`,
  primaryUses: [
    "Tendon and ligament repair signaling",
    "Muscle injury recovery",
    "Gastrointestinal mucosal protection",
    "Inflammation modulation",
    "Wound and connective-tissue healing research",
  ],
  mechanism: `BPC-157 appears to act through several overlapping pathways rather than a single receptor. In tendon and ligament fibroblast studies it upregulates the growth hormone receptor (GHR), increasing the cell's responsiveness to circulating growth hormone and IGF-1. In vascular models it modulates the nitric oxide (NO) system — both NO synthase activity and the downstream signaling that drives angiogenesis (new blood vessel formation). In the gut it interacts with the dopamine, serotonin, and prostaglandin pathways implicated in mucosal repair, and it has effects on the vagus nerve consistent with broader brain–gut axis modulation. Across models, the common thread is angiogenesis, fibroblast activation, and protection against the cellular consequences of acute injury — but the precise binding partner that initiates these effects has not been definitively identified.`,
  studiedFor: [
    {
      domain: "Tendon and ligament repair",
      evidenceLevel: "emerging",
      summary:
        "Multiple preclinical models — Achilles transection, MCL injury — show accelerated structural and functional healing relative to controls. No published, registered human RCTs to date.",
    },
    {
      domain: "Gastrointestinal protection",
      evidenceLevel: "established",
      summary:
        "The strongest evidence base. BPC-157 protects against and accelerates healing from a wide range of induced gastric and intestinal injuries in animal models, including NSAID-induced ulceration.",
    },
    {
      domain: "Muscle injury",
      evidenceLevel: "emerging",
      summary:
        "Rodent crush and laceration models show faster restoration of muscle integrity and function. Translation to human sports-injury contexts is plausible but unproven.",
    },
    {
      domain: "Inflammation modulation",
      evidenceLevel: "preliminary",
      summary:
        "Reduces inflammatory markers in several injury models. Mechanism appears to be indirect — via pathway modulation rather than direct receptor antagonism.",
    },
  ],
  typicalProtocol: {
    range:
      "Research-literature dosing typically references 200–500 mcg per day in animal studies (extrapolated to human equivalents).",
    duration:
      "Most published cycles run 4–6 weeks, often timed to an acute injury phase.",
    caveats:
      "Human dosing is not established. Almost all published protocols are animal-model extrapolations. Discuss with a qualified clinician before any use.",
  },
  contraindications: [
    "Active malignancy — angiogenesis-promoting effects are theoretically problematic.",
    "Pregnancy and lactation — no safety data.",
    "Recent chemotherapy or radiation — clear with oncology first.",
    "Unknown drug-interaction profile in humans.",
  ],
  keyResearch: [
    {
      title:
        "Stable gastric pentadecapeptide BPC 157: novel therapy in gastrointestinal tract",
      authors: "Sikiric P, Seiwerth S, Rucman R, et al.",
      year: 2011,
      journal: "Curr Pharm Des",
      url: "https://pubmed.ncbi.nlm.nih.gov/21548867/",
    },
    {
      title:
        "Achilles detachment in rat and stable gastric pentadecapeptide BPC 157: promoted tendon-to-bone healing and opposed corticosteroid aggravation",
      authors: "Krivic A, Anic T, Seiwerth S, Huljev D, Sikiric P",
      year: 2006,
      journal: "J Orthop Res",
      url: "https://pubmed.ncbi.nlm.nih.gov/16514656/",
    },
    {
      title:
        "Pentadecapeptide BPC 157 enhances the growth hormone receptor expression in tendon fibroblasts",
      authors: "Chang CH, Tsai WC, Hsu YH, Pang JH",
      year: 2014,
      journal: "Molecules",
      url: "https://pubmed.ncbi.nlm.nih.gov/25415472/",
    },
    {
      title:
        "Brain-gut Axis and Pentadecapeptide BPC 157: Theoretical and Practical Implications",
      authors: "Sikiric P, Seiwerth S, Rucman R, et al.",
      year: 2016,
      journal: "Curr Neuropharmacol",
      url: "https://pubmed.ncbi.nlm.nih.gov/27228959/",
    },
    {
      title:
        "Impact of pentadecapeptide BPC 157 on muscle healing impaired by systemic corticosteroid application",
      authors: "Pevec D, Novinscak T, Brcic L, et al.",
      year: 2010,
      journal: "Med Sci Monit",
      url: "https://pubmed.ncbi.nlm.nih.gov/20190689/",
    },
  ],
  relatedCompounds: ["tb-500", "ghk-cu", "kpv"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "nagging_pain",
      weight: 9,
      reasoning:
        "BPC-157 is the most-studied compound in the assessment for soft-tissue injury repair and stubborn musculoskeletal pain.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "gut_inflammation",
      weight: 8,
      reasoning:
        "The strongest evidence base for BPC-157 is gastrointestinal mucosal protection and ulcer healing.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "slow_recovery",
      weight: 6,
      reasoning:
        "Animal models suggest broad recovery acceleration even outside specific injuries.",
    },
    {
      questionId: "pain_injury",
      answerValue: "specific",
      weight: 9,
      reasoning:
        "Direct match: BPC-157 is the lead candidate to discuss for localized injury contexts.",
    },
    {
      questionId: "pain_injury",
      answerValue: "generalized",
      weight: 6,
      reasoning:
        "Broader anti-inflammatory and tissue-protective signaling extends beyond specific injuries.",
    },
    {
      questionId: "primary_goal",
      answerValue: "fix_specific",
      weight: 7,
      reasoning:
        "Explicitly aligned with goals around fixing pain, injury, or recovery deficits.",
    },
    {
      questionId: "recovery_state",
      answerValue: "slow",
      weight: 6,
      reasoning:
        "Slow-recovery profiles overlap with the populations BPC-157 has been most studied in.",
    },
  ],
  brandNote:
    "BPC-157 has the unusual combination of an enormous animal evidence base and almost no human trials. Take it seriously as research, not as established medicine.",
  legalStatus: {
    region: "US",
    status: "research-only",
    note: "Sold in the United States as a research chemical, not for human consumption. Approval status varies internationally; some jurisdictions treat it as an unapproved drug.",
  },
};
