import type { Compound } from "@/content/knowledge-base/types";

export const tesamorelin: Compound = {
  id: "tesamorelin",
  name: "Tesamorelin",
  category: "peptide",
  classification: "popular",
  tagline:
    "FDA-approved GHRH analogue with the strongest clinical evidence for visceral fat reduction.",
  longDescription: `Tesamorelin is a synthetic GHRH analogue branded as Egrifta and approved by the U.S. FDA in 2010 for the reduction of excess visceral abdominal fat in HIV-associated lipodystrophy. Among GHRH-class peptides discussed in the consumer space, Tesamorelin has the strongest clinical evidence base by a wide margin: multiple Phase III randomized trials, long-term extension studies, and head-to-head data on visceral fat reduction.

The compound is structurally similar to GHRH(1-44) with a modification (a trans-3-hexenoyl group at the N-terminus) that confers protease resistance and a longer plasma half-life than Sermorelin. In the registration trials, weekly visceral adipose tissue (VAT) reductions of 15–18% over 26 weeks were observed in the active arms compared to placebo. IGF-1 increased modestly. Triglycerides improved. Lean mass was preserved.

The clinical use case is narrow (HIV lipodystrophy) but the visceral-fat mechanism is general. Some longevity clinics use Tesamorelin off-label in non-HIV populations with visceral adiposity, citing the registered evidence — though the off-label population has not been independently validated in registered trials.

Tesamorelin is the most expensive and most clinically-validated GHRH peptide. PROTEUM treats it as the lead candidate when an assessment surfaces stubborn visceral adiposity in middle-age users with otherwise good health markers.`,
  primaryUses: [
    "Visceral fat reduction (FDA-approved indication)",
    "GH-axis support in middle-age and older populations",
    "Body composition improvement contexts",
    "Triglyceride and metabolic marker support",
  ],
  mechanism: `Tesamorelin binds the GHRH receptor on anterior pituitary somatotrophs and stimulates pulsatile growth hormone release through Gs-coupled cAMP signaling. The structural modification (trans-3-hexenoyl at the N-terminus) protects the peptide from rapid proteolysis, extending half-life relative to Sermorelin. Released GH drives hepatic IGF-1 production and lipolysis in visceral adipose depots — and it is the lipolytic effect that underlies Tesamorelin's distinctive clinical signature. Visceral fat is more sensitive to GH-driven lipolysis than subcutaneous fat, so a sustained GHRH signal preferentially shrinks the visceral depot while preserving lean mass and not significantly affecting subcutaneous fat. In HIV lipodystrophy this differential is therapeutically important; in non-HIV populations the same mechanism is presumed to apply but is less rigorously documented.`,
  studiedFor: [
    {
      domain: "Visceral fat reduction",
      evidenceLevel: "established",
      summary:
        "Multiple Phase III RCTs in HIV-associated lipodystrophy demonstrate ~15–18% reduction in visceral adipose tissue over 26 weeks vs placebo.",
    },
    {
      domain: "Triglycerides and lipid markers",
      evidenceLevel: "emerging",
      summary:
        "Registration trials showed modest improvements in triglycerides and other metabolic markers alongside VAT reduction.",
    },
    {
      domain: "Cognitive function in older adults",
      evidenceLevel: "preliminary",
      summary:
        "Small studies in older adults with cognitive complaints have shown modest cognitive endpoints improvement; not the primary indication.",
    },
    {
      domain: "Body composition in non-HIV populations",
      evidenceLevel: "preliminary",
      summary:
        "Off-label use is common in longevity clinics but has not been validated in registered trials in non-HIV cohorts.",
    },
  ],
  typicalProtocol: {
    range:
      "FDA-approved label dose for HIV lipodystrophy is 2 mg subcutaneous daily. Off-label longevity protocols may reference lower or alternate cadences.",
    duration:
      "Registered trials ran 26–52 weeks. Long-term continuous use beyond a year is less well-studied.",
    caveats:
      "Tesamorelin is FDA-approved only for HIV-associated lipodystrophy. Off-label use should be supervised; baseline IGF-1, fasting glucose, and triglycerides are reasonable monitoring.",
  },
  contraindications: [
    "Active malignancy.",
    "Pituitary tumor or pituitary disease.",
    "Diabetes — GH-axis effects can worsen insulin resistance.",
    "Pregnancy and lactation.",
    "Hypersensitivity to mannitol (used in formulation).",
  ],
  keyResearch: [
    {
      title:
        "Effects of tesamorelin on visceral fat and liver fat in HIV-infected patients with abdominal fat accumulation: a randomized clinical trial",
      authors:
        "Stanley TL, Falutz J, Mamputu JC, Soulban G, Potvin D, Grinspoon SK",
      year: 2014,
      journal: "JAMA",
      url: "https://pubmed.ncbi.nlm.nih.gov/25117130/",
    },
    {
      title:
        "Long-term safety and effects of tesamorelin, a growth hormone-releasing factor analogue, in HIV patients with abdominal fat accumulation",
      authors:
        "Falutz J, Allas S, Mamputu JC, et al.",
      year: 2008,
      journal: "AIDS",
      url: "https://pubmed.ncbi.nlm.nih.gov/18391621/",
    },
    {
      title:
        "Metabolic effects of a growth hormone-releasing factor in patients with HIV",
      authors: "Falutz J, Allas S, Blot K, et al.",
      year: 2007,
      journal: "N Engl J Med",
      url: "https://pubmed.ncbi.nlm.nih.gov/18046027/",
    },
    {
      title:
        "Effects of tesamorelin on visceral adipose tissue in HIV-infected patients with abdominal fat accumulation: a meta-analysis of phase III trials",
      authors: "Falutz J, Mamputu JC, Potvin D, et al.",
      year: 2010,
      journal: "J Clin Endocrinol Metab",
      url: "https://pubmed.ncbi.nlm.nih.gov/20660030/",
    },
  ],
  relatedCompounds: ["cjc-1295", "sermorelin", "ipamorelin"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "stubborn_fat",
      weight: 9,
      reasoning:
        "Tesamorelin has the strongest clinical evidence in this entire knowledge base for visceral adipose tissue reduction.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "loss_strength_libido",
      weight: 5,
      reasoning:
        "GH-axis decline contributes to these symptoms; Tesamorelin elevates the axis.",
    },
    {
      questionId: "body_composition",
      answerValue: "lose_fat",
      weight: 7,
      reasoning:
        "Direct alignment with the FDA-approved indication.",
    },
    {
      questionId: "body_composition",
      answerValue: "recomp",
      weight: 7,
      reasoning:
        "Visceral fat reduction with preserved lean mass is the textbook recomposition profile.",
    },
    {
      questionId: "primary_goal",
      answerValue: "feel_younger",
      weight: 7,
      reasoning:
        "Visceral adiposity is one of the strongest aging-marker correlates.",
    },
    {
      questionId: "age_range",
      answerValue: "46_60",
      weight: 6,
      reasoning:
        "Visceral adiposity often becomes pharmacologically relevant in this band.",
    },
    {
      questionId: "age_range",
      answerValue: "over_60",
      weight: 5,
      reasoning:
        "Tesamorelin's clinical evidence base extends into older populations, though registration was in HIV cohorts.",
    },
    {
      questionId: "90_day_win",
      answerValue: "physical_change",
      weight: 6,
      reasoning:
        "Measurable visceral fat reduction is one of the few peptide outcomes with registered clinical evidence in 90-day-ish timeframes.",
    },
  ],
  brandNote:
    "The only GHRH peptide here with a registered Phase III evidence base. The clinical population is narrow (HIV lipodystrophy) but the lipolytic mechanism generalizes.",
  legalStatus: {
    region: "US",
    status: "prescription",
    note: "FDA-approved as Egrifta for HIV-associated lipodystrophy. Off-label use occurs in non-HIV populations on prescription.",
  },
};
