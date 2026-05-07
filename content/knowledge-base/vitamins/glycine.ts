import type { Compound } from "@/content/knowledge-base/types";

export const glycine: Compound = {
  id: "glycine",
  name: "Glycine",
  category: "cofactor",
  classification: "foundational",
  tagline:
    "Simplest amino acid — central to collagen, sleep, glutathione synthesis, and core temperature regulation. Underrated foundational compound.",
  longDescription: `Glycine is the smallest of the 20 standard amino acids and the second most abundant in the human body. It plays multiple physiological roles that are largely unknown to general consumers but well-documented in the research literature: it is a major component of collagen (where it accounts for roughly one-third of all amino acid residues), a precursor for glutathione synthesis (the rate-limiting precursor alongside cysteine), an inhibitory neurotransmitter in the spinal cord and brainstem, and a regulator of core body temperature relevant to sleep onset.

Despite the body's substantial glycine production capacity, several lines of evidence suggest dietary glycine intake in modern Western populations is insufficient to support collagen synthesis and connective tissue health adequately — particularly given low intake of organ meats, gelatin-rich cuts, and skin-on cooked meats compared to traditional diets. The "glycine deficiency" hypothesis is well-articulated in McCarty and DiNicolantonio's research and supported by animal models and observational human studies.

The most-cited clinical use is sleep onset and quality. 3 g of glycine taken before bed has been shown in multiple Japanese RCTs to lower core body temperature, reduce sleep onset latency, and improve subjective sleep quality and next-day alertness. The mechanism appears to involve hypothalamic vasodilation that increases peripheral heat dissipation — the same mechanism that triggers natural sleep onset.

Glycine is inexpensive, well-tolerated at high doses, and complements rather than competes with other sleep supports (magnesium, ashwagandha, L-theanine).`,
  primaryUses: [
    "Sleep quality and onset (core temperature regulation)",
    "Collagen and connective tissue support",
    "Glutathione precursor (alongside NAC)",
    "Cognitive support contexts",
    "Glucose tolerance and metabolic health",
  ],
  mechanism: `Glycine's sleep effects are mediated through NMDA receptor co-agonism in the suprachiasmatic nucleus, which triggers vasodilation in distal extremities and a reduction in core body temperature — the same physiological signal that initiates natural sleep. Glycine is also an inhibitory neurotransmitter at glycine receptors in the spinal cord and brainstem, and a co-agonist at NMDA receptors in higher brain regions, where it can modulate cognitive function. As a metabolic substrate, glycine is one of the rate-limiting amino acids for glutathione synthesis (alongside cysteine and glutamate); glycine availability constrains glutathione production in many populations. As a structural amino acid, glycine accounts for roughly one-third of collagen residues, making it the dominant amino acid by frequency in connective tissue.`,
  studiedFor: [
    {
      domain: "Sleep quality",
      evidenceLevel: "established",
      summary:
        "Multiple Japanese RCTs (Yamadera et al., Bannai et al.) show 3 g glycine pre-bed reduces sleep onset, improves subjective quality, and reduces next-day fatigue.",
    },
    {
      domain: "Collagen synthesis",
      evidenceLevel: "emerging",
      summary:
        "Glycine availability constrains collagen synthesis; supplementation supports tissue repair and skin/joint contexts.",
    },
    {
      domain: "Glutathione support",
      evidenceLevel: "emerging",
      summary:
        "Animal and small human studies show glycine + cysteine supplementation increases glutathione synthesis more effectively than either alone.",
    },
    {
      domain: "Glucose tolerance",
      evidenceLevel: "preliminary",
      summary:
        "Small trials suggest glycine improves insulin sensitivity and glucose handling in type 2 diabetes.",
    },
  ],
  typicalProtocol: {
    range:
      "3 g pre-bed for sleep. 5–10 g daily for collagen and glutathione support contexts.",
    duration:
      "Open-ended; well-tolerated long-term.",
    caveats:
      "Tastes mildly sweet; mixes well in water. No meaningful drug interactions.",
  },
  contraindications: [
    "Active concurrent clozapine therapy — interaction reported.",
    "Pregnancy and lactation — generally regarded as safe but limited specific data.",
  ],
  keyResearch: [
    {
      title:
        "Effects of glycine on subjective daytime performance in partially sleep-restricted healthy volunteers",
      authors: "Bannai M, Kawai N, Ono K, Nakahara K, Murakami N",
      year: 2012,
      journal: "Front Neurol",
      url: "https://pubmed.ncbi.nlm.nih.gov/22529825/",
    },
    {
      title:
        "Glycine ingestion improves subjective sleep quality in human volunteers",
      authors: "Yamadera W, Inagawa K, Chiba S, Bannai M, Takahashi M, Nakayama K",
      year: 2007,
      journal: "Sleep Biol Rhythms",
    },
    {
      title:
        "Glycine plus cysteine supplementation reverses age-associated glutathione deficiency",
      authors: "Sekhar RV, Patel SG, Guthikonda AP, et al.",
      year: 2011,
      journal: "Am J Clin Nutr",
      url: "https://pubmed.ncbi.nlm.nih.gov/21795440/",
    },
    {
      title:
        "The cardiometabolic benefits of glycine: is glycine an 'antidote' to dietary fructose?",
      authors: "McCarty MF, DiNicolantonio JJ",
      year: 2014,
      journal: "Open Heart",
      url: "https://pubmed.ncbi.nlm.nih.gov/25332827/",
    },
  ],
  relatedCompounds: ["magnesium-glycinate", "nac", "l-theanine"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "poor_sleep",
      weight: 7,
      reasoning:
        "Glycine has a clean RCT-supported sleep effect via core temperature regulation; complements magnesium.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "skin_hair_aging",
      weight: 4,
      reasoning:
        "Glycine availability constrains collagen synthesis; relevant for skin and connective tissue.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "nagging_pain",
      weight: 4,
      reasoning:
        "Connective tissue support and glutathione precursor role both relevant to chronic inflammation.",
    },
    {
      questionId: "sleep_quality",
      answerValue: "poor",
      weight: 6,
      reasoning:
        "Direct match: clean evidence for poor-sleep contexts.",
    },
    {
      questionId: "sleep_quality",
      answerValue: "inconsistent",
      weight: 5,
      reasoning:
        "Inconsistent sleep often improves with glycine pre-bed protocol.",
    },
    {
      questionId: "current_supplements",
      answerValue: "none",
      weight: 4,
      reasoning:
        "Cheap, foundational, broadly useful for users on nothing.",
    },
    {
      questionId: "primary_goal",
      answerValue: "fix_specific",
      weight: 4,
      reasoning:
        "Specific sleep, skin, or recovery goals align well.",
    },
  ],
  brandNote:
    "One of the most underrated foundational supplements per dollar. 3g pre-bed is the highest-yield first move for sleep onset.",
  legalStatus: {
    region: "global",
    status: "approved-supplement",
    note: "Widely available as an approved dietary supplement globally.",
  },
};
