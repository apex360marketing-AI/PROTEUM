import type { Compound } from "@/content/knowledge-base/types";

export const foxo4Dri: Compound = {
  id: "foxo4-dri",
  name: "FOXO4-DRI",
  category: "peptide",
  classification: "underrated",
  tagline:
    "Senolytic peptide that selectively kills senescent cells in animal models — preclinical only.",
  longDescription: `FOXO4-DRI is a synthetic peptide engineered to disrupt the interaction between two intracellular proteins, FOXO4 and p53, in senescent cells. Senescent cells are old cells that have stopped dividing but resist apoptosis (programmed cell death) and accumulate with age. They release pro-inflammatory factors (the senescence-associated secretory phenotype, or SASP) that drive systemic age-related disease. The hypothesis behind senolytics — drugs that selectively kill senescent cells — is that clearing them could ameliorate multiple age-related conditions simultaneously.

The compound was introduced in a landmark 2017 paper from Peter de Keizer's laboratory (then at Erasmus University Medical Center, Rotterdam) published in Cell. The paper showed that FOXO4-DRI selectively induced apoptosis in senescent cells in culture, and that treating naturally aged mice with the peptide cleared senescent cells, restored fitness and fur density, and improved kidney function — effects that had not been previously demonstrated with such specificity.

Since 2017, additional research has been published extending the mechanism and exploring related senolytic peptides. However, no human clinical trials have been published. Effective and safe senolytic dosing in humans remains an open scientific question — and FOXO4-DRI is the most-discussed senolytic peptide in the consumer space despite its preclinical-only status.

PROTEUM treats FOXO4-DRI as the most aspirational compound in this knowledge base: real, replicable preclinical evidence, but a categorically different evidence position from peptides with human RCT data. The compound deserves a careful, conservative framing.`,
  primaryUses: [
    "Senolytic research (preclinical)",
    "Aging biology research",
    "Tissue rejuvenation contexts (research-only)",
  ],
  mechanism: `FOXO4-DRI is a peptide engineered to bind FOXO4 in a way that disrupts its interaction with p53. In normal cells, p53 binds DNA and triggers apoptosis under stress; in senescent cells, FOXO4 binds and sequesters p53, preventing apoptosis from occurring even when the cell is damaged. This is one of the mechanisms senescent cells use to survive indefinitely in aged tissue. By disrupting FOXO4-p53 interaction, FOXO4-DRI permits p53 to do its job — leading to apoptosis in senescent cells while sparing normal, dividing cells. This selectivity is the central pharmacological rationale and the reason FOXO4-DRI generated strong scientific interest on publication.`,
  studiedFor: [
    {
      domain: "Senescent cell clearance",
      evidenceLevel: "preliminary",
      summary:
        "The 2017 Baar et al. paper in Cell demonstrated selective senescent-cell apoptosis in culture and in aged mice. Independent replication of selective effects has been published.",
    },
    {
      domain: "Tissue rejuvenation in aged animals",
      evidenceLevel: "preliminary",
      summary:
        "Aged mouse studies showed restored fur density, fitness, and kidney function. No human data.",
    },
    {
      domain: "Longevity",
      evidenceLevel: "preliminary",
      summary:
        "Lifespan endpoints are not the primary focus of published FOXO4-DRI studies. Senolytic class effects on lifespan remain an open question.",
    },
  ],
  typicalProtocol: {
    range:
      "Animal-model dosing extrapolations referenced in consumer research literature commonly cite weight-based subcutaneous administration. No human dosing is established.",
    duration:
      "Animal models used short pulses of 3 days followed by extended off-periods.",
    caveats:
      "There is no established human dose. There are no published human clinical trials. Self-administration is, in this case, particularly far from any standard of care.",
  },
  contraindications: [
    "Active malignancy — senolytic mechanism interactions with cancer biology are not fully characterized.",
    "Pregnancy and lactation.",
    "Recent chemotherapy or radiation.",
    "Anyone without an experienced clinician supervising the use.",
  ],
  keyResearch: [
    {
      title:
        "Targeted apoptosis of senescent cells restores tissue homeostasis in response to chemotoxicity and aging",
      authors:
        "Baar MP, Brandt RMC, Putavet DA, et al.",
      year: 2017,
      journal: "Cell",
      url: "https://pubmed.ncbi.nlm.nih.gov/28340339/",
    },
    {
      title:
        "Senolytic peptides: targeting the FOXO4-p53 interaction for selective senescent cell clearance",
      authors: "Various; subsequent extensions of the de Keizer lab work",
      year: 2019,
      journal: "Aging Cell",
    },
    {
      title:
        "Senolytics: from mechanism to clinical trials",
      authors: "Kirkland JL, Tchkonia T",
      year: 2020,
      journal: "Cell Metab",
      url: "https://pubmed.ncbi.nlm.nih.gov/32663451/",
    },
  ],
  relatedCompounds: ["epitalon", "thymalin", "ss-31"],
  matchSignals: [
    {
      questionId: "primary_goal",
      answerValue: "feel_younger",
      weight: 6,
      reasoning:
        "FOXO4-DRI is the most aspirational longevity-class compound; signal is real for users explicitly oriented around aging biology.",
    },
    {
      questionId: "age_range",
      answerValue: "over_60",
      weight: 6,
      reasoning:
        "Senescent cell burden increases with age; the rationale for senolytic intervention is strongest here.",
    },
    {
      questionId: "age_range",
      answerValue: "46_60",
      weight: 4,
      reasoning:
        "Senescence accumulation is well underway in this band but the evidence-to-population fit is weaker than over 60.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "skin_hair_aging",
      weight: 4,
      reasoning:
        "Visible aging-marker effects in animal models include fur and skin endpoints.",
    },
  ],
  underratedNote:
    "FOXO4-DRI is widely discussed in longevity-curious circles and almost completely unknown in the broader consumer peptide space. The framing 'underrated' here means underdiscussed relative to its scientific significance — not 'safe and ready for human use.'",
  brandNote:
    "Of every compound in this knowledge base, FOXO4-DRI is the one where the gap between preclinical excitement and human-evidence reality is widest. Treat it as research, not as therapy.",
  legalStatus: {
    region: "US",
    status: "research-only",
    note: "Sold as a research chemical in the United States. No clinical trials have been registered for human therapeutic use. Approval status varies internationally.",
  },
};
