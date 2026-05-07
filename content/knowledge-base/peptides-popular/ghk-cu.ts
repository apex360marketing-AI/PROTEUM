import type { Compound } from "@/content/knowledge-base/types";

export const ghkCu: Compound = {
  id: "ghk-cu",
  name: "GHK-Cu",
  category: "peptide",
  classification: "popular",
  tagline:
    "Copper-binding tripeptide with a deep skin, hair, and wound-healing literature.",
  longDescription: `GHK-Cu — glycyl-L-histidyl-L-lysine bound to copper(II) — is a small endogenous tripeptide first isolated from human plasma in 1973 by Loren Pickart, who has continued to publish on it for over five decades. It has the longest research arc of any peptide in this knowledge base.

GHK levels are highest in young adults and decline substantially with age — by some measurements, plasma GHK in a 60-year-old is roughly a third of its concentration in a 20-year-old. Restoring GHK signaling has been the central thesis of the Pickart laboratory's work, which has explored its effects on skin remodeling, hair follicle activation, wound healing, and gene expression in aging fibroblasts.

In published transcriptomic studies, GHK-Cu has been shown to modulate the expression of more than 4,000 human genes — predominantly toward profiles associated with younger tissue. The gene-expression evidence is unusually striking for a small peptide and is one of the strongest cases for GHK-Cu's "anti-aging" framing in the consumer space.

Clinically, GHK-Cu is the dominant active ingredient in a category of high-end cosmeceutical products and has been studied in topical formulations for skin photoaging, scarring, and hair loss. Injectable use is less common and has a thinner evidence base; topical use has the bulk of the supporting literature.`,
  primaryUses: [
    "Skin remodeling and photoaging research",
    "Hair follicle activation",
    "Wound and scar healing",
    "Gene expression and tissue-rejuvenation contexts",
    "Anti-inflammatory tissue support",
  ],
  mechanism: `GHK is a copper-binding peptide — its biological activity depends on the chelated Cu(II) ion. The complex acts as a delivery vehicle for copper to enzymes that need it (lysyl oxidase, superoxide dismutase) and as a signaling molecule that modulates the activity of fibroblasts, keratinocytes, and immune cells. Transcriptomic studies show GHK-Cu shifts gene expression in aging fibroblasts toward patterns associated with younger cells — including upregulation of collagen and elastin synthesis genes, downregulation of inflammatory pathways, and modulation of DNA repair and antioxidant defense pathways. In dermal contexts the practical effects are increased collagen production, improved skin barrier function, reduced photoaging markers, and accelerated wound healing. In hair follicle contexts GHK-Cu has been shown to enlarge follicle size and prolong the anagen phase.`,
  studiedFor: [
    {
      domain: "Skin photoaging and remodeling",
      evidenceLevel: "established",
      summary:
        "Multiple controlled trials of topical GHK-Cu show measurable improvements in skin firmness, fine lines, and photodamage markers.",
    },
    {
      domain: "Wound healing",
      evidenceLevel: "emerging",
      summary:
        "Strong preclinical and clinical evidence in dermal wound, ulcer, and burn models. Routinely used in advanced wound-care products.",
    },
    {
      domain: "Hair follicle support",
      evidenceLevel: "emerging",
      summary:
        "Evidence for follicle enlargement and increased anagen-phase signaling. Used in some prescription and OTC hair-loss formulations.",
    },
    {
      domain: "Gene expression and tissue aging",
      evidenceLevel: "preliminary",
      summary:
        "Transcriptomic studies show modulation of thousands of genes toward younger-tissue profiles. Translation into clinical longevity endpoints is preliminary.",
    },
  ],
  typicalProtocol: {
    range:
      "Topical formulations typically use 0.05–2.0% GHK-Cu in serums or creams. Injectable research-context dosing is far less standardized.",
    duration:
      "Topical use is open-ended; visible skin effects emerge over 8–12 weeks of consistent use.",
    caveats:
      "Most of the clinical evidence is for topical formulations. Injectable use is less well-studied.",
  },
  contraindications: [
    "Wilson's disease — copper accumulation contraindication.",
    "Active malignancy in the treatment area.",
    "Pregnancy and lactation — limited safety data for injectable use.",
    "Allergy to copper-containing topicals.",
  ],
  keyResearch: [
    {
      title:
        "GHK peptide as a natural modulator of multiple cellular pathways in skin regeneration",
      authors: "Pickart L, Vasquez-Soltero JM, Margolina A",
      year: 2015,
      journal: "Biomed Res Int",
      url: "https://pubmed.ncbi.nlm.nih.gov/26236008/",
    },
    {
      title:
        "The human tripeptide GHK-Cu in prevention of oxidative stress and degenerative conditions of aging: relevance to cognitive decline",
      authors: "Pickart L, Vasquez-Soltero JM, Margolina A",
      year: 2012,
      journal: "Brain Sci",
      url: "https://pubmed.ncbi.nlm.nih.gov/24961296/",
    },
    {
      title:
        "Tripeptide-copper complexes (GHK-Cu) — biology and possible applications",
      authors: "Pickart L, Margolina A",
      year: 2018,
      journal: "Int J Mol Sci",
      url: "https://pubmed.ncbi.nlm.nih.gov/30037172/",
    },
    {
      title:
        "Reversal of skin aging with topical retinoic acid and a copper peptide complex",
      authors: "Leyden J, Stephens T, et al.",
      year: 2002,
      journal: "Cosmet Dermatol",
    },
  ],
  relatedCompounds: ["bpc-157", "tb-500", "epitalon"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "skin_hair_aging",
      weight: 9,
      reasoning:
        "GHK-Cu has the strongest evidence base in this knowledge base for skin remodeling and hair follicle support.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "nagging_pain",
      weight: 4,
      reasoning:
        "Anti-inflammatory and tissue-repair signaling extend beyond cosmetic indications.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "gut_inflammation",
      weight: 3,
      reasoning:
        "Anti-inflammatory gene-expression effects suggest broader applications, though direct gut evidence is limited.",
    },
    {
      questionId: "primary_goal",
      answerValue: "feel_younger",
      weight: 7,
      reasoning:
        "GHK-Cu is one of the most-studied compounds for visible aging markers and tissue rejuvenation signaling.",
    },
    {
      questionId: "primary_goal",
      answerValue: "fix_specific",
      weight: 4,
      reasoning:
        "Wound healing and scar contexts align with the 'fix something specific' goal.",
    },
    {
      questionId: "age_range",
      answerValue: "46_60",
      weight: 5,
      reasoning:
        "Endogenous GHK levels decline with age; restoration rationale is strongest here.",
    },
    {
      questionId: "age_range",
      answerValue: "over_60",
      weight: 5,
      reasoning:
        "GHK decline is most pronounced in this band.",
    },
  ],
  legalStatus: {
    region: "US",
    status: "approved-supplement",
    note: "Topical GHK-Cu is widely used in approved cosmeceutical and wound-care products. Injectable formulations are research-only.",
  },
};
