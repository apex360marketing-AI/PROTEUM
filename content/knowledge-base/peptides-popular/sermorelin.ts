import type { Compound } from "@/content/knowledge-base/types";

export const sermorelin: Compound = {
  id: "sermorelin",
  name: "Sermorelin",
  category: "peptide",
  classification: "popular",
  tagline:
    "Synthetic GHRH(1-29) — the original short-acting GHRH analogue with a long clinical history.",
  longDescription: `Sermorelin is a synthetic 29-amino-acid peptide corresponding to the biologically active fragment of human growth hormone-releasing hormone (GHRH(1-29)). Of all the peptides in the consumer space, it has the deepest clinical pedigree: in its original branded form (Geref) it was an FDA-approved diagnostic and therapeutic agent for evaluating and treating childhood growth hormone deficiency for over a decade before being voluntarily withdrawn from the U.S. market in 2008 — for commercial reasons rather than safety.

Mechanistically, Sermorelin sits upstream of the pituitary, stimulating endogenous GH release through the GHRH receptor. Like other GHRH agonists, it preserves the natural pulsatile pattern of GH secretion and depends on a functional pituitary axis. Its half-life is short (around 10–20 minutes), so it produces a single GH pulse per administration rather than the multi-day elevation of CJC-1295 with DAC.

The short half-life is sometimes framed as a disadvantage compared to CJC-1295, but it is also closer to physiological GHRH signaling and may carry a lower risk of pituitary desensitization or feedback dysregulation in long-running protocols.

In compounded form, Sermorelin is currently prescribed in some U.S. anti-aging and longevity clinics — typically off-label, often paired with low-dose GHRP analogues. It remains the most clinically-validated GHRH analogue in the consumer peptide space.`,
  primaryUses: [
    "Endogenous GH release research",
    "Age-related GH decline contexts",
    "Body composition and recovery support",
    "Sleep architecture support",
    "Often paired with secretagogues like Ipamorelin",
  ],
  mechanism: `Sermorelin binds the growth hormone-releasing hormone receptor (GHRHR) on somatotroph cells in the anterior pituitary, triggering a phasic release of stored growth hormone via Gs-coupled cAMP signaling. Because GHRHR signaling drives both GH synthesis and release, repeated Sermorelin exposure increases somatotroph functional capacity over time — a feature that distinguishes GHRH agonists from purely releasing agents. Released GH stimulates hepatic IGF-1 production, which mediates many of the downstream tissue effects. Sermorelin's short half-life (10–20 minutes) means each dose produces a single physiological GH pulse, after which the pituitary returns to baseline. This pulsatile pattern is closer to native GHRH signaling than the sustained tonic elevation produced by long-acting analogues like CJC-1295 with DAC.`,
  studiedFor: [
    {
      domain: "GH release",
      evidenceLevel: "established",
      summary:
        "Decades of clinical use as a diagnostic and therapeutic agent for GH deficiency confirms reliable, predictable GH release.",
    },
    {
      domain: "Pediatric growth",
      evidenceLevel: "established",
      summary:
        "FDA-approved historical use for short stature in pediatric GH deficiency. Multiple registered trials demonstrated efficacy and acceptable safety.",
    },
    {
      domain: "Body composition support",
      evidenceLevel: "preliminary",
      summary:
        "Inferred from GH-axis effects. No registered RCTs specifically on Sermorelin for body composition in healthy adults.",
    },
    {
      domain: "Sleep architecture",
      evidenceLevel: "preliminary",
      summary:
        "GH release and slow-wave sleep are bidirectionally linked; Sermorelin-specific sleep studies are limited.",
    },
  ],
  typicalProtocol: {
    range:
      "Historical pediatric protocols used 200–500 mcg subcutaneous nightly. Adult anti-aging compounded protocols typically reference 200–500 mcg nightly.",
    duration:
      "Cycles of 3–6 months are commonly referenced before assessing IGF-1 response and considering breaks.",
    caveats:
      "Best paired with bloodwork — IGF-1, fasting insulin, glucose. Discuss with an endocrinologist or qualified clinician.",
  },
  contraindications: [
    "Active malignancy.",
    "Diabetes or impaired glucose tolerance — GH-axis effects can worsen insulin resistance.",
    "Pregnancy and lactation.",
    "Pituitary disease.",
  ],
  keyResearch: [
    {
      title:
        "Growth hormone-releasing hormone (1-29) (sermorelin) as a treatment for growth hormone deficiency",
      authors: "Walker RF",
      year: 2006,
      journal: "Drugs Aging",
      url: "https://pubmed.ncbi.nlm.nih.gov/16640472/",
    },
    {
      title:
        "Effects of growth hormone-releasing hormone in healthy older men and women",
      authors: "Vittone J, Blackman MR, Busby-Whitehead J, et al.",
      year: 1997,
      journal: "Metabolism",
      url: "https://pubmed.ncbi.nlm.nih.gov/9225835/",
    },
    {
      title:
        "Long-term treatment of children with growth hormone-releasing hormone (1-29) and a long-acting growth hormone-releasing factor analog",
      authors: "Thorner M, et al.",
      year: 1997,
      journal: "J Clin Endocrinol Metab",
      url: "https://pubmed.ncbi.nlm.nih.gov/9329342/",
    },
  ],
  relatedCompounds: ["cjc-1295", "ipamorelin", "tesamorelin"],
  matchSignals: [
    {
      questionId: "primary_goal",
      answerValue: "feel_younger",
      weight: 7,
      reasoning:
        "GH-axis decline is among the canonical aging signatures Sermorelin addresses.",
    },
    {
      questionId: "primary_goal",
      answerValue: "perform_higher",
      weight: 5,
      reasoning:
        "Sermorelin supports GH-axis tone relevant to recovery and lean mass.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "loss_strength_libido",
      weight: 6,
      reasoning:
        "Age-related GH decline contributes to strength and libido symptoms.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "slow_recovery",
      weight: 5,
      reasoning:
        "GH-axis support is associated with improved recovery dynamics.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "poor_sleep",
      weight: 4,
      reasoning:
        "GH release and slow-wave sleep are linked; Sermorelin's nightly protocol aligns with this.",
    },
    {
      questionId: "age_range",
      answerValue: "46_60",
      weight: 6,
      reasoning:
        "Age-related GH decline becomes pharmacologically relevant in this band.",
    },
    {
      questionId: "age_range",
      answerValue: "over_60",
      weight: 6,
      reasoning:
        "GH decline is most pronounced in this band; Sermorelin's clinical pedigree is strongest here.",
    },
    {
      questionId: "body_composition",
      answerValue: "recomp",
      weight: 5,
      reasoning:
        "Body composition is downstream of GH and IGF-1.",
    },
  ],
  brandNote:
    "Sermorelin is the GHRH analogue with the deepest clinical history. Its short half-life is closer to native physiology than CJC-1295 with DAC.",
  legalStatus: {
    region: "US",
    status: "prescription",
    note: "Available in the United States via compounding pharmacies on prescription, typically off-label. The original branded product (Geref) was discontinued in 2008.",
  },
};
