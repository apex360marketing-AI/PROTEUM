import type { Compound } from "@/content/knowledge-base/types";

export const epitalon: Compound = {
  id: "epitalon",
  name: "Epitalon",
  category: "peptide",
  classification: "popular",
  tagline:
    "Tetrapeptide developed by the Khavinson laboratory, studied for telomere maintenance and pineal-axis modulation.",
  longDescription: `Epitalon — also written Epithalon — is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) developed by Vladimir Khavinson and colleagues at the St. Petersburg Institute of Bioregulation and Gerontology. It was designed as a synthetic analogue of a peptide fragment originally isolated from the bovine pineal gland (pineal extract was the source of much of the early Russian peptide research).

The Khavinson group's work has focused on a broad thesis that short, regulatory peptides can act as gene-expression modulators specific to particular tissue types, and that age-related decline in endogenous peptide signaling contributes to age-related disease. Within that framework, Epitalon is the pineal-axis peptide — its claimed effects center on melatonin rhythm restoration, telomerase activation, and downstream effects on lifespan and cancer incidence in animal models.

The most-cited single piece of Epitalon evidence is a series of studies in aged mice showing increased telomerase activity and extended median lifespan vs controls. These studies are real and have been published in peer-reviewed journals, but the bulk of the work has come from the Khavinson laboratory itself, with limited independent replication outside Russia.

Epitalon sits in a difficult evidence position: the basic-science claims are plausible and the published animal data is interesting, but the independent-replication base is thin and most clinical studies in humans have been small, open-label, or lack rigorous controls. PROTEUM treats it as a longevity-class peptide with a real evidence base in its country of origin and a Western evidence base that requires careful framing.`,
  primaryUses: [
    "Longevity and aging research contexts",
    "Sleep and circadian rhythm restoration",
    "Telomere maintenance research",
    "Pineal axis modulation",
  ],
  mechanism: `Epitalon's mechanism is most often described as gene-regulatory at the chromatin level — it has been shown in cell-culture studies to bind DNA at specific promoter sequences and modulate the expression of genes involved in telomerase activity, melatonin synthesis, and circadian regulation. In aged cell models it has demonstrated activation of telomerase (the enzyme that maintains chromosome end-caps) and extension of culture replicative lifespan. In aged animal models it has been shown to restore melatonin rhythm and modulate pineal gland function. The detailed receptor or binding-partner story is less developed than for many other peptides — Khavinson's framework treats short peptides as direct gene-expression modulators rather than receptor agonists.`,
  studiedFor: [
    {
      domain: "Telomere length and telomerase activity",
      evidenceLevel: "preliminary",
      summary:
        "Cell culture and animal studies from the Khavinson group show telomerase activation and extended replicative lifespan. Independent replication is limited.",
    },
    {
      domain: "Lifespan extension (animal)",
      evidenceLevel: "preliminary",
      summary:
        "Studies in aged mice show extended median lifespan vs controls. Studies are largely from a single research group.",
    },
    {
      domain: "Sleep and melatonin rhythm",
      evidenceLevel: "preliminary",
      summary:
        "Pineal-axis effects in animal models; limited human data on sleep architecture endpoints.",
    },
    {
      domain: "Cancer incidence (animal)",
      evidenceLevel: "preliminary",
      summary:
        "Some studies show reduced spontaneous tumor incidence in aged mice. Clinical translation is unproven.",
    },
  ],
  typicalProtocol: {
    range:
      "Russian research-context dosing typically references 5–10 mg subcutaneous daily for short cycles.",
    duration:
      "10–20 day cycles, often repeated 1–2 times per year, are commonly referenced.",
    caveats:
      "Most published clinical work is open-label or non-RCT design. Telomerase activation is a double-edged biological effect; long-term safety in healthy users is not established.",
  },
  contraindications: [
    "Active malignancy — telomerase activation is biologically problematic in cancer contexts.",
    "Recent chemotherapy or radiation.",
    "Pregnancy and lactation.",
    "Personal or family history of telomere-related disease.",
  ],
  keyResearch: [
    {
      title:
        "The natural and synthetic peptides slow down aging and prolong life span of mice",
      authors: "Khavinson VKh, Bondarev IE, Butyugov AA",
      year: 2003,
      journal: "Bull Exp Biol Med",
      url: "https://pubmed.ncbi.nlm.nih.gov/14523534/",
    },
    {
      title:
        "Peptide regulation of aging: mechanisms and clinical applications",
      authors: "Khavinson VKh, Anisimov VN",
      year: 2009,
      journal: "Curr Aging Sci",
      url: "https://pubmed.ncbi.nlm.nih.gov/20021391/",
    },
    {
      title:
        "Effect of Epitalon on biomarkers of aging, life span and spontaneous tumor incidence in female Swiss-derived SHR mice",
      authors: "Anisimov VN, Khavinson VKh, Provinciali M, et al.",
      year: 2002,
      journal: "Biogerontology",
      url: "https://pubmed.ncbi.nlm.nih.gov/12015618/",
    },
  ],
  relatedCompounds: ["thymalin", "pinealon", "ghk-cu"],
  matchSignals: [
    {
      questionId: "primary_goal",
      answerValue: "feel_younger",
      weight: 7,
      reasoning:
        "Epitalon is a direct longevity-axis peptide aligned with feel-younger framing.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "skin_hair_aging",
      weight: 5,
      reasoning:
        "Aging-marker effects extend to visible aging contexts.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "poor_sleep",
      weight: 5,
      reasoning:
        "Pineal-axis modulation and melatonin rhythm restoration align with sleep complaints.",
    },
    {
      questionId: "sleep_quality",
      answerValue: "poor",
      weight: 5,
      reasoning:
        "Russian protocols commonly used for circadian and sleep restoration in aged populations.",
    },
    {
      questionId: "age_range",
      answerValue: "46_60",
      weight: 6,
      reasoning:
        "Khavinson protocols are most commonly studied in this band.",
    },
    {
      questionId: "age_range",
      answerValue: "over_60",
      weight: 7,
      reasoning:
        "Strongest fit for the population the longevity-extension hypothesis targets.",
    },
    {
      questionId: "90_day_win",
      answerValue: "health_markers",
      weight: 4,
      reasoning:
        "Aging-marker improvement framing fits this answer.",
    },
  ],
  underratedNote:
    "Despite being widely discussed, much of Epitalon's clinical evidence is from the Khavinson group itself with limited independent replication. The framing 'popular' here reflects consumer awareness rather than evidence depth.",
  brandNote:
    "Telomerase activation is a real biological effect with a complex risk profile. Be careful interpreting longevity claims in this category.",
  legalStatus: {
    region: "US",
    status: "research-only",
    note: "Not approved as a drug in the United States. Sold as a research chemical. Used in clinical settings in some other jurisdictions.",
  },
};
