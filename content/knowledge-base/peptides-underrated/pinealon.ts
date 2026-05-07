import type { Compound } from "@/content/knowledge-base/types";

export const pinealon: Compound = {
  id: "pinealon",
  name: "Pinealon",
  category: "peptide",
  classification: "underrated",
  tagline:
    "Khavinson-laboratory tripeptide (Glu-Asp-Arg) studied for cognitive support and neuroprotection in aged populations.",
  longDescription: `Pinealon is a synthetic tripeptide (Glu-Asp-Arg, EDR) developed at the St. Petersburg Institute of Bioregulation and Gerontology by the Khavinson laboratory — the same research group behind Epitalon, Thymalin, and the broader Russian short-peptide bioregulator program. Within that program, Pinealon is the cognitive-axis compound: positioned as a pineal/neural-regulatory peptide intended to support brain function and protect against age-related cognitive decline.

The Khavinson framework treats short, tissue-specific peptides as gene-expression modulators that bind DNA at promoter regions and influence transcription of genes involved in cell function and longevity. For Pinealon, this framework predicts effects on neuronal gene expression, antioxidant enzyme expression, and protection against oxidative and ischemic damage in CNS contexts.

Published research from the Khavinson group and several collaborating laboratories shows effects in animal models: reduced neuronal apoptosis under oxidative stress, improved learning in aged rodents, normalization of gene expression patterns in aging neurons. The clinical evidence in humans is thinner and largely from the same research environment that produced the basic-science work. Independent Western replication is limited.

PROTEUM treats Pinealon as a compound where the basic-science framework is interesting and the Russian evidence base is real, but where the gap between published research and consumer-context claims requires careful framing. The Russian peptide-bioregulator tradition is internally consistent and produces useful research; the broader question of how that translates into actionable consumer protocols is less settled.`,
  primaryUses: [
    "Cognitive support in aged populations",
    "Neuroprotection research",
    "Antioxidant and cellular-aging research contexts",
  ],
  mechanism: `Pinealon is a small, polar tripeptide (Glu-Asp-Arg) hypothesized in the Khavinson framework to act as a direct gene-expression modulator — binding promoter regions of specific genes and influencing transcription of antioxidant enzymes (superoxide dismutase, glutathione peroxidase), neurotrophic factors, and cell-cycle regulators in aged neurons. In animal models the practical effects include reduced neuronal apoptosis under oxidative challenge, improved performance in memory tasks in aged rodents, and modulation of cell-cycle markers consistent with reduced senescence pressure. As with other Khavinson-program peptides, the receptor-level mechanism is less developed than for receptor-targeted compounds — the framework is gene-regulatory rather than classical pharmacology.`,
  studiedFor: [
    {
      domain: "Cognitive function in aging",
      evidenceLevel: "preliminary",
      summary:
        "Russian animal and human studies in aging cognitive contexts show benefit; independent Western replication is limited.",
    },
    {
      domain: "Neuroprotection under oxidative stress",
      evidenceLevel: "preliminary",
      summary:
        "Cell culture and rodent models show reduced apoptosis and improved survival under oxidative challenge.",
    },
    {
      domain: "Antioxidant enzyme expression",
      evidenceLevel: "preliminary",
      summary:
        "Studies report upregulation of endogenous antioxidant enzyme expression.",
    },
  ],
  typicalProtocol: {
    range:
      "Russian research-context dosing references oral or sublingual administration in milligram quantities, often 1–2 times daily.",
    duration:
      "Cycles of 10–30 days, often repeated 1–2 times per year.",
    caveats:
      "Most published work is from a single research environment. Dose-response in healthy users is not well-established.",
  },
  contraindications: [
    "Pregnancy and lactation.",
    "Active psychiatric instability without supervision.",
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
        "Short peptides Pinealon and Epithalon stimulate the expression of pineal markers in tissues of aged mice",
      authors: "Khavinson VKh, Linkova NS, Tarnovskaya SI",
      year: 2014,
      journal: "Bull Exp Biol Med",
      url: "https://pubmed.ncbi.nlm.nih.gov/24913600/",
    },
    {
      title:
        "Pinealon, a peptide bioregulator, modulates apoptosis and proliferation in cell cultures",
      authors: "Various; Khavinson group",
      year: 2010,
      journal: "Bull Exp Biol Med",
    },
  ],
  relatedCompounds: ["epitalon", "thymalin", "semax", "cerebrolysin"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "brain_fog",
      weight: 5,
      reasoning:
        "Cognitive support is the primary use case in the Russian literature.",
    },
    {
      questionId: "cognitive_state",
      answerValue: "foggy",
      weight: 6,
      reasoning:
        "Direct match: most-studied indication is age-related cognitive decline.",
    },
    {
      questionId: "primary_goal",
      answerValue: "feel_younger",
      weight: 5,
      reasoning:
        "Pinealon is positioned in the Russian bioregulator program as a longevity-axis peptide for cognitive aging.",
    },
    {
      questionId: "age_range",
      answerValue: "46_60",
      weight: 4,
      reasoning:
        "Cognitive aging becomes pharmacologically relevant in this band.",
    },
    {
      questionId: "age_range",
      answerValue: "over_60",
      weight: 6,
      reasoning:
        "Strongest fit: most clinical evidence is in older populations with cognitive concerns.",
    },
    {
      questionId: "90_day_win",
      answerValue: "mental_change",
      weight: 4,
      reasoning:
        "Cognitive endpoint goals fit, with realistic-effect-size framing.",
    },
  ],
  underratedNote:
    "Pinealon is a logical Russian-program counterpart to Epitalon — same research lab, same theoretical framework, similarly small evidence base in Western literature. Almost no consumer awareness outside specialist circles.",
  legalStatus: {
    region: "US",
    status: "research-only",
    note: "Not approved in the United States. Used in the Russian bioregulator-peptide program in clinical settings.",
  },
};
