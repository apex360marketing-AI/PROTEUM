import type { Compound } from "@/content/knowledge-base/types";

export const cjc1295: Compound = {
  id: "cjc-1295",
  name: "CJC-1295",
  category: "peptide",
  classification: "popular",
  tagline:
    "Long-acting growth-hormone-releasing hormone (GHRH) analogue studied for sustained GH/IGF-1 elevation.",
  longDescription: `CJC-1295 is a synthetic analogue of growth-hormone-releasing hormone (GHRH) modified with a chemical handle (drug affinity complex, or DAC) that allows it to bind serum albumin in circulation, dramatically extending its half-life. The unmodified GHRH-(1-29) backbone — also known as Sermorelin — clears the body in minutes; CJC-1295 with DAC remains pharmacologically active for several days after a single dose.

The compound was developed by ConjuChem and characterized in a series of human pharmacokinetic and pharmacodynamic studies in the mid-2000s. Those studies demonstrated that single subcutaneous injections produced sustained elevations in mean growth hormone and IGF-1 concentrations for up to a week, with pulsatile GH secretion preserved (a meaningful distinction from chronic exogenous human growth hormone, which suppresses pulsatility).

CJC-1295 is frequently combined in research-context protocols with a growth hormone secretagogue receptor (GHSR) agonist such as Ipamorelin. The pairing layers a tonic GHRH signal (CJC-1295) onto a phasic ghrelin-mimetic stimulus (Ipamorelin), and is the dominant "growth hormone optimization" stack in the consumer peptide space.

Note: there are two products in circulation referred to as "CJC-1295." The version with DAC has the long half-life described above. CJC-1295 without DAC ("Mod GRF 1-29") is functionally a stabilized Sermorelin and clears within hours. Vendor materials sometimes conflate them.`,
  primaryUses: [
    "Sustained GH and IGF-1 elevation research",
    "Body composition and recovery research stacks",
    "Sleep architecture support contexts",
    "Combined GH-axis research with secretagogues like Ipamorelin",
  ],
  mechanism: `CJC-1295 binds the growth hormone-releasing hormone receptor (GHRHR) on somatotroph cells in the anterior pituitary, stimulating endogenous growth hormone (GH) synthesis and release. The drug affinity complex (DAC) tethers the molecule to circulating albumin, sharply slowing renal clearance and proteolysis. The result is a sustained, multi-day elevation of background GH tone that preserves the pituitary's natural pulsatile release pattern. Elevated GH drives hepatic and peripheral IGF-1 production, which mediates many of the downstream anabolic, recovery, and metabolic effects associated with GH-axis activation. Because CJC-1295 acts upstream at the pituitary, it depends on a functional GHRHR signaling axis — it does not work in the same way as exogenous human growth hormone, and it does not bypass natural negative-feedback regulation.`,
  studiedFor: [
    {
      domain: "GH and IGF-1 elevation",
      evidenceLevel: "established",
      summary:
        "Published pharmacodynamic studies in humans demonstrate sustained, multi-day elevations in mean GH and IGF-1 after subcutaneous CJC-1295 with DAC.",
    },
    {
      domain: "Body composition support",
      evidenceLevel: "preliminary",
      summary:
        "Effects on lean mass and adiposity are inferred from GH-axis mechanism rather than directly demonstrated in CJC-1295-specific clinical endpoints.",
    },
    {
      domain: "Sleep architecture",
      evidenceLevel: "preliminary",
      summary:
        "GH-axis interventions historically modulate slow-wave sleep; specific CJC-1295 sleep data is limited.",
    },
    {
      domain: "Recovery and tissue repair",
      evidenceLevel: "preliminary",
      summary:
        "Indirect effects via IGF-1 and the GH axis are plausible but not directly demonstrated in CJC-1295-specific trials.",
    },
  ],
  typicalProtocol: {
    range:
      "Published pharmacology studies use single subcutaneous doses in the 30–250 mcg/kg range; consumer-research protocols typically reference 1–2 mg weekly for the DAC version.",
    duration:
      "Cycles of 12–16 weeks are commonly referenced in research literature.",
    caveats:
      "GH-axis interventions interact with insulin sensitivity and glucose tolerance. Discuss with an endocrinologist.",
  },
  contraindications: [
    "Active malignancy — IGF-1 elevation is theoretically problematic.",
    "Diabetes or impaired glucose tolerance — GH axis effects can worsen insulin resistance.",
    "Pregnancy and lactation — no safety data.",
    "History of pituitary disease — clear with endocrinology before any use.",
  ],
  keyResearch: [
    {
      title:
        "Prolonged stimulation of growth hormone (GH) and insulin-like growth factor I secretion by CJC-1295, a long-acting analog of GH-releasing hormone, in healthy adults",
      authors:
        "Teichman SL, Neale A, Lawrence B, Gagnon C, Castaigne JP, Frohman LA",
      year: 2006,
      journal: "J Clin Endocrinol Metab",
      url: "https://pubmed.ncbi.nlm.nih.gov/16352683/",
    },
    {
      title:
        "Pulsatile secretion of growth hormone (GH) persists during continuous stimulation by CJC-1295, a long-acting GH-releasing hormone analog",
      authors: "Ionescu M, Frohman LA",
      year: 2006,
      journal: "J Clin Endocrinol Metab",
      url: "https://pubmed.ncbi.nlm.nih.gov/16985089/",
    },
    {
      title:
        "Human growth hormone-releasing factor (hGRF)1-29-albumin bioconjugates activate the GRF receptor on the anterior pituitary in rats: identification of CJC-1295 as a long-lasting GRF analog",
      authors: "Jetté L, Léger R, Thibaudeau K, et al.",
      year: 2005,
      journal: "Endocrinology",
      url: "https://pubmed.ncbi.nlm.nih.gov/15817669/",
    },
  ],
  relatedCompounds: ["ipamorelin", "sermorelin", "tesamorelin"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "loss_strength_libido",
      weight: 7,
      reasoning:
        "GH-axis decline is implicated in age-related strength and libido decline; CJC-1295 elevates the relevant axis.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "stubborn_fat",
      weight: 6,
      reasoning:
        "GH and IGF-1 elevation correlates with reductions in visceral adipose tissue in trial populations.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "slow_recovery",
      weight: 5,
      reasoning:
        "GH-axis activation is plausibly linked to better recovery dynamics, though direct CJC-1295 evidence is limited.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "poor_sleep",
      weight: 4,
      reasoning:
        "GH and slow-wave sleep are bidirectionally linked; the connection to CJC-1295 specifically is plausible but indirect.",
    },
    {
      questionId: "primary_goal",
      answerValue: "feel_younger",
      weight: 7,
      reasoning:
        "GH-axis decline is one of the canonical aging signatures CJC-1295 targets.",
    },
    {
      questionId: "primary_goal",
      answerValue: "perform_higher",
      weight: 5,
      reasoning:
        "Performance-oriented users with slow recovery often consider the GH axis.",
    },
    {
      questionId: "body_composition",
      answerValue: "recomp",
      weight: 6,
      reasoning:
        "Recomposition goals align with GH/IGF-1 effects on lean mass and adiposity.",
    },
    {
      questionId: "age_range",
      answerValue: "46_60",
      weight: 5,
      reasoning:
        "Age-related GH-axis decline becomes pharmacologically relevant in this band.",
    },
    {
      questionId: "age_range",
      answerValue: "over_60",
      weight: 5,
      reasoning:
        "GH-axis decline is most pronounced in this band; intervention rationale is strongest.",
    },
  ],
  brandNote:
    "Two products circulate as 'CJC-1295': with DAC (multi-day half-life) and without DAC ('Mod GRF 1-29', sub-hour half-life). Vendor materials often blur the distinction. They are not interchangeable.",
  legalStatus: {
    region: "US",
    status: "research-only",
    note: "Not an approved drug in the United States. Sold as a research chemical. Approval status varies internationally.",
  },
};
