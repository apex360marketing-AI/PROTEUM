import type { Compound } from "@/content/knowledge-base/types";

export const selank: Compound = {
  id: "selank",
  name: "Selank",
  category: "peptide",
  classification: "underrated",
  tagline:
    "Russian-developed anxiolytic peptide based on tuftsin, studied for anxiety reduction without sedation or dependence.",
  longDescription: `Selank is a synthetic heptapeptide developed in the 1980s and 1990s at the Russian Academy of Sciences as a stable analogue of tuftsin (Thr-Lys-Pro-Arg) — a four-amino-acid sequence derived from immunoglobulin G with established immunomodulatory activity. The Russian developers extended tuftsin with a C-terminal tripeptide (Pro-Gly-Pro), the same stabilizing strategy used for Semax, and discovered that the resulting compound had a distinctive anxiolytic profile.

In Russia, Selank is a registered pharmaceutical and is prescribed clinically for generalized anxiety disorder and adjustment disorders. It is typically administered as an intranasal spray. The clinical evidence base — primarily Russian — includes randomized comparisons against benzodiazepines such as medazepam, with Selank showing comparable anxiolytic efficacy and meaningfully better tolerability: no sedation, no dependence, no cognitive impairment, and a clean discontinuation profile.

Mechanistically, Selank's effects are mediated through modulation of the GABA system (without direct GABA-A receptor binding), the serotonergic system, and BDNF expression — the latter overlapping with Semax. There is no published evidence of GABA-A allosteric activity, which is consistent with its non-sedating, non-dependence-forming profile.

PROTEUM treats Selank as one of the most clearly underrated compounds in the consumer peptide space. Its Russian clinical evidence base is unusually strong for an anxiolytic, and it offers a pharmacological profile distinct from anything available in Western consumer markets.`,
  primaryUses: [
    "Generalized anxiety reduction",
    "Stress resilience and emotional regulation",
    "Cognitive support during stress",
    "Sleep quality (indirect, via anxiety reduction)",
  ],
  mechanism: `Selank modulates the central GABAergic and serotonergic systems without binding GABA-A receptors directly — distinguishing it sharply from benzodiazepine pharmacology. Animal studies show that Selank increases brain-derived neurotrophic factor (BDNF) expression, modulates enkephalin and tuftsin pathways, and shifts gene expression in the hippocampus toward profiles associated with reduced anxiety states. Like Semax, intranasal administration produces measurable CNS effects within minutes via direct nose-to-brain transport. The absence of GABA-A activity is the central mechanistic distinction: Selank produces anxiolysis without the sedation, cognitive impairment, dependence, and tolerance characteristic of benzodiazepines.`,
  studiedFor: [
    {
      domain: "Generalized anxiety disorder",
      evidenceLevel: "emerging",
      summary:
        "Russian RCTs comparing Selank to benzodiazepines (medazepam) report comparable anxiolytic efficacy with significantly better tolerability and side-effect profile.",
    },
    {
      domain: "Adjustment and stress disorders",
      evidenceLevel: "emerging",
      summary:
        "Multiple smaller Russian clinical studies report benefit in stress-related conditions.",
    },
    {
      domain: "Cognitive support",
      evidenceLevel: "preliminary",
      summary:
        "Animal models and small human studies show preserved or improved cognitive function during anxiolysis — a notable contrast to benzodiazepines.",
    },
  ],
  typicalProtocol: {
    range:
      "Russian clinical protocols typically use 0.15% intranasal solution, 2–3 drops per nostril, 2–3 times daily.",
    duration:
      "Cycles of 10–14 days are commonly referenced; chronic use is less well-studied.",
    caveats:
      "Most clinical evidence is in Russian-language journals. Dose-response in healthy users is not well-established.",
  },
  contraindications: [
    "Pregnancy and lactation — limited safety data.",
    "Severe psychiatric instability without supervision.",
  ],
  keyResearch: [
    {
      title:
        "Peptide neuropsychotropic drug Selank: experience of clinical studies",
      authors: "Zozulia AA, Neznamov GG, Siuniakov TS, et al.",
      year: 2008,
      journal: "Zh Nevrol Psikhiatr Im S S Korsakova",
      url: "https://pubmed.ncbi.nlm.nih.gov/18560402/",
    },
    {
      title:
        "Efficacy and possible mechanisms of action of a new peptide anxiolytic drug Selank in patients with generalized anxiety disorder and neurasthenia",
      authors: "Medvedev VE, Tereshchenko OV, Kost NV, et al.",
      year: 2014,
      journal: "Zh Nevrol Psikhiatr Im S S Korsakova",
      url: "https://pubmed.ncbi.nlm.nih.gov/24988030/",
    },
    {
      title:
        "Anxiolytic peptide Selank shows distinct effects on the GABA system",
      authors:
        "Kozlovskii II, Danchev ND",
      year: 2003,
      journal: "Bull Exp Biol Med",
      url: "https://pubmed.ncbi.nlm.nih.gov/14752516/",
    },
  ],
  relatedCompounds: ["semax", "cerebrolysin", "pinealon"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "anxiety_low_mood",
      weight: 9,
      reasoning:
        "Selank is the most-studied non-sedating anxiolytic peptide and the strongest match for anxiety-state inputs.",
    },
    {
      questionId: "mood_state",
      answerValue: "flat_low",
      weight: 7,
      reasoning:
        "Anxiety is often the underlying driver of low/flat mood states; Selank addresses the anxiety axis cleanly.",
    },
    {
      questionId: "mood_state",
      answerValue: "up_down",
      weight: 5,
      reasoning:
        "Stress-driven mood variability is one of the populations Selank has been studied in.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "poor_sleep",
      weight: 5,
      reasoning:
        "Anxiety-driven sleep disruption is an indirect target — without the sedation tradeoffs of GABA-A drugs.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "brain_fog",
      weight: 4,
      reasoning:
        "Cognitive friction during anxiety states is plausibly addressed by anxiolysis without sedation.",
    },
    {
      questionId: "primary_goal",
      answerValue: "fix_specific",
      weight: 6,
      reasoning:
        "Specific anxiety or stress goals align directly.",
    },
    {
      questionId: "90_day_win",
      answerValue: "mental_change",
      weight: 6,
      reasoning:
        "Mental-state change goals fit Selank's clinical profile.",
    },
  ],
  underratedNote:
    "Most clinical research is published in Russian-language journals; the West has nothing structurally equivalent in its consumer market — a non-sedating, non-dependence-forming peptide anxiolytic with RCT-comparable efficacy to benzodiazepines.",
  brandNote:
    "If a user describes anxiety with a fear of cognitive impairment from medication, this is the compound to know about.",
  legalStatus: {
    region: "US",
    status: "research-only",
    note: "Not approved in the United States. A registered pharmaceutical in Russia.",
  },
};
