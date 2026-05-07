import type { Compound } from "@/content/knowledge-base/types";

export const ipamorelin: Compound = {
  id: "ipamorelin",
  name: "Ipamorelin",
  category: "peptide",
  classification: "popular",
  tagline:
    "Selective ghrelin-mimetic growth hormone secretagogue with a clean off-target profile.",
  longDescription: `Ipamorelin is a pentapeptide that acts as a selective agonist at the growth hormone secretagogue receptor (GHSR) — the same receptor activated by the endogenous hormone ghrelin. It was first characterized in a 1998 paper from Novo Nordisk as the prototype "selective" GH secretagogue: a compound that triggered GH release without the appetite, prolactin, ACTH, or cortisol effects of earlier ghrelin-mimetic candidates.

That selectivity is Ipamorelin's signature. Earlier secretagogues (notably GHRP-2 and GHRP-6) reliably released GH but came with cortisol elevation, prolactin elevation, and significant appetite stimulation — side effects that limited their utility. Ipamorelin, in published comparisons, releases comparable GH while leaving these other endpoints near baseline. That is the primary reason it remains the dominant secretagogue in the consumer peptide space despite being older than several alternatives.

Ipamorelin is most commonly stacked with a GHRH analogue — typically CJC-1295 (with or without DAC) — to combine tonic GHRH input with phasic ghrelin-receptor stimulation. The two pathways are synergistic at the somatotroph and produce more GH release than either alone.

Like other GH-axis interventions, the relevant outcomes — body composition, recovery, sleep — emerge over weeks to months and are mediated indirectly through GH and IGF-1.`,
  primaryUses: [
    "Pulsatile GH release research",
    "GH-axis support for body composition contexts",
    "Recovery and sleep architecture support",
    "Stacks with GHRH analogues like CJC-1295",
  ],
  mechanism: `Ipamorelin binds the growth hormone secretagogue receptor (GHSR-1a) on somatotroph cells in the anterior pituitary, triggering a phasic release of stored growth hormone via calcium-dependent and protein-kinase-C signaling pathways. Unlike GHRH agonists (which act via the GHRH receptor and increase GH synthesis as well as release), Ipamorelin works through the parallel ghrelin pathway. Because the two pathways converge on the same somatotroph but use different receptors and second messengers, combining a GHRH agonist (CJC-1295, Sermorelin) with Ipamorelin produces additive — and sometimes synergistic — GH release. Ipamorelin's selectivity for GHSR-1a, with minimal activity at the cortisol- and prolactin-releasing pathways activated by older secretagogues, is the central pharmacological feature.`,
  studiedFor: [
    {
      domain: "GH release",
      evidenceLevel: "established",
      summary:
        "Multiple animal and early human pharmacology studies confirm reliable, selective GH release with minimal effect on cortisol, prolactin, ACTH, or appetite.",
    },
    {
      domain: "Bone density support",
      evidenceLevel: "preliminary",
      summary:
        "Rodent models show Ipamorelin counteracts glucocorticoid-induced bone loss. Human bone density evidence is limited.",
    },
    {
      domain: "Postoperative ileus",
      evidenceLevel: "preliminary",
      summary:
        "A registered clinical proof-of-concept trial in postoperative ileus showed safety but mixed efficacy signals; development for that indication did not advance.",
    },
    {
      domain: "Body composition support",
      evidenceLevel: "preliminary",
      summary:
        "Inferred from GH-axis mechanism. No registered RCT specifically on Ipamorelin for body composition endpoints in healthy adults.",
    },
  ],
  typicalProtocol: {
    range:
      "Research-literature dosing typically references 100–300 mcg subcutaneous, often 1–3 times daily.",
    duration:
      "Cycles of 8–12 weeks are commonly referenced in consumer-research protocols.",
    caveats:
      "Ipamorelin is most commonly stacked with a GHRH analogue. Discuss with an endocrinologist before use.",
  },
  contraindications: [
    "Active malignancy — IGF-1 elevation is theoretically problematic.",
    "Diabetes or impaired glucose tolerance — GH-axis effects can worsen insulin resistance.",
    "Pregnancy and lactation — no safety data.",
    "Pituitary disease or unexplained endocrine symptoms.",
  ],
  keyResearch: [
    {
      title: "Ipamorelin, the first selective growth hormone secretagogue",
      authors:
        "Raun K, Hansen BS, Johansen NL, Thøgersen H, Madsen K, Ankersen M, Andersen PH",
      year: 1998,
      journal: "Eur J Endocrinol",
      url: "https://pubmed.ncbi.nlm.nih.gov/9849822/",
    },
    {
      title:
        "The growth hormone secretagogue ipamorelin counteracts glucocorticoid-induced loss of cortical bone in rats",
      authors:
        "Andersen NB, Malmlöf K, Johansen PB, Andreassen TT, Ørtoft G, Oxlund H",
      year: 2001,
      journal: "Growth Horm IGF Res",
      url: "https://pubmed.ncbi.nlm.nih.gov/11597350/",
    },
    {
      title:
        "Prospective, randomized, controlled, proof-of-concept study of the ghrelin mimetic ipamorelin for the management of postoperative ileus in bowel resection patients",
      authors: "Beck DE, Sweeney WB, McCarter MD; Ipamorelin 201 and 202 Study Groups",
      year: 2014,
      journal: "Int J Colorectal Dis",
      url: "https://pubmed.ncbi.nlm.nih.gov/25337854/",
    },
  ],
  relatedCompounds: ["cjc-1295", "sermorelin", "tesamorelin"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "stubborn_fat",
      weight: 6,
      reasoning:
        "GH-axis activation supports body composition outcomes via IGF-1 and lipolysis.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "loss_strength_libido",
      weight: 6,
      reasoning:
        "Age-related GH decline contributes to strength and vitality loss; Ipamorelin elevates the relevant axis.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "slow_recovery",
      weight: 6,
      reasoning:
        "GH and IGF-1 are mediators of recovery; Ipamorelin is the cleanest GHSR-1a agonist available.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "poor_sleep",
      weight: 4,
      reasoning:
        "GH release is closely tied to slow-wave sleep; secretagogue effects on sleep architecture are plausible.",
    },
    {
      questionId: "primary_goal",
      answerValue: "perform_higher",
      weight: 6,
      reasoning:
        "Performance-oriented users in the GH-decline window often consider this axis.",
    },
    {
      questionId: "primary_goal",
      answerValue: "feel_younger",
      weight: 7,
      reasoning:
        "Direct alignment with the longevity/healthspan framing the GH axis is associated with.",
    },
    {
      questionId: "body_composition",
      answerValue: "recomp",
      weight: 6,
      reasoning:
        "Recomposition goals overlap with the body-composition mechanisms of GH-axis activation.",
    },
    {
      questionId: "age_range",
      answerValue: "46_60",
      weight: 5,
      reasoning:
        "GH decline becomes most pharmacologically relevant in this band.",
    },
    {
      questionId: "age_range",
      answerValue: "over_60",
      weight: 5,
      reasoning:
        "GH decline is largest here; intervention rationale is strongest.",
    },
  ],
  legalStatus: {
    region: "US",
    status: "research-only",
    note: "Not an approved drug in the United States. Sold as a research chemical. Approval status varies internationally.",
  },
};
