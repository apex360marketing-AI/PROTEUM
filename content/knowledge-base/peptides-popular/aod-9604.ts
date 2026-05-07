import type { Compound } from "@/content/knowledge-base/types";

export const aod9604: Compound = {
  id: "aod-9604",
  name: "AOD-9604",
  category: "peptide",
  classification: "popular",
  tagline:
    "Modified GH fragment originally developed for fat loss; preserves the lipolytic effects of GH without the growth signaling.",
  longDescription: `AOD-9604 is a synthetic peptide corresponding to the C-terminal fragment of human growth hormone (residues 176–191), modified with an N-terminal tyrosine for improved stability. It was developed in the 1990s by Australian biotech Metabolic Pharmaceuticals as a candidate "fat-loss-without-growth-hormone-effects" molecule, on the hypothesis that the lipolytic and lipid-oxidation effects of GH are localized to this fragment, separate from the pathways that drive IGF-1 and tissue growth.

The compound progressed through several Phase II trials in obesity in the early 2000s. Results were mixed: the peptide was well-tolerated and produced statistically significant but modest weight loss vs placebo over 12-week periods, but the effect sizes did not justify continued development as a stand-alone obesity drug. Metabolic eventually licensed AOD-9604 to other companies and its commercial trajectory shifted from prescription drug to research chemical.

In the consumer peptide space, AOD-9604 is positioned as a "weight-loss peptide" with the marketing claim that it produces fat loss without GH/IGF-1 elevation. The mechanistic claim is partly supported — published pharmacology does show that AOD-9604 doesn't significantly elevate IGF-1 — but the magnitude of the fat-loss effect in registered trials was modest, and the consumer-context outcomes are not well-validated.

PROTEUM treats AOD-9604 as a peptide with real clinical history, a clean safety profile, and modest effect sizes — important context for users who encounter it framed as a primary fat-loss intervention.`,
  primaryUses: [
    "Lipolysis and fat-loss research",
    "Weight management contexts",
    "GH-fragment-based fat loss without growth signaling",
  ],
  mechanism: `AOD-9604 mimics the lipolytic and lipid-oxidation effects associated with the C-terminal fragment of growth hormone — specifically, stimulation of fat breakdown in adipose tissue and inhibition of lipogenesis (fat synthesis). The mechanism appears to involve adrenergic pathway modulation in adipocytes, increasing hormone-sensitive lipase activity. Critically, AOD-9604 does not bind the GH receptor with appreciable affinity and does not significantly elevate IGF-1 in published studies. This separation of lipolytic effect from anabolic GH signaling is the compound's design rationale, and it is partly why the safety profile in human trials was favorable — the typical insulin-resistance and IGF-1-elevation concerns associated with full GH dosing did not appear.`,
  studiedFor: [
    {
      domain: "Weight loss in obesity",
      evidenceLevel: "emerging",
      summary:
        "Phase II trials in obese populations showed modest, statistically significant weight loss vs placebo. Effect sizes were too small to support continued development for obesity as a sole indication.",
    },
    {
      domain: "Lipolysis",
      evidenceLevel: "emerging",
      summary:
        "Pharmacology studies confirm direct lipolytic effects in adipose tissue without significant IGF-1 elevation.",
    },
    {
      domain: "Cartilage repair",
      evidenceLevel: "preliminary",
      summary:
        "Some preclinical work has explored AOD-9604 in cartilage and joint repair contexts. Evidence is limited.",
    },
  ],
  typicalProtocol: {
    range:
      "Trial protocols typically used 1–30 mg orally or 250–500 mcg subcutaneous daily. Consumer-research dosing references the lower end.",
    duration:
      "12-week cycles are most studied.",
    caveats:
      "Effect sizes in registered trials were modest. Lifestyle interventions remain dominant for weight management.",
  },
  contraindications: [
    "Pregnancy and lactation — limited safety data.",
    "Active malignancy — caution with any GH-related fragment.",
  ],
  keyResearch: [
    {
      title:
        "The effects of AOD9604, an analogue of the lipolytic fragment of human growth hormone, on body weight in obese Zucker rats and food intake studies in mice",
      authors:
        "Heffernan M, Summers RJ, Thorburn A, Ogru E, Gianello R, Jiang WJ, Ng FM",
      year: 2001,
      journal: "Endocrinology",
      url: "https://pubmed.ncbi.nlm.nih.gov/11713227/",
    },
    {
      title:
        "AOD9604, a peptide fragment of the human growth hormone, reduces body weight in obese subjects and improves cholesterol levels: results from a randomized, double-blind, placebo-controlled trial",
      authors: "Various; Metabolic Pharmaceuticals submission",
      year: 2007,
      journal: "Phase II clinical trial filing",
    },
    {
      title:
        "Effect of human growth hormone (hGH) fragment 176-191 on body composition in obese mice",
      authors: "Ng FM, Sun J, Sharma L, Libinaki R, Jiang WJ, Gianello R",
      year: 2000,
      journal: "Horm Res",
      url: "https://pubmed.ncbi.nlm.nih.gov/11013579/",
    },
  ],
  relatedCompounds: ["tesamorelin", "cjc-1295", "ipamorelin"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "stubborn_fat",
      weight: 6,
      reasoning:
        "Lipolytic mechanism aligns with stubborn fat complaints, though Tesamorelin has stronger evidence for visceral specifically.",
    },
    {
      questionId: "body_composition",
      answerValue: "lose_fat",
      weight: 6,
      reasoning:
        "Direct alignment with fat-loss goals; modest effect sizes per registered trials.",
    },
    {
      questionId: "primary_goal",
      answerValue: "fix_specific",
      weight: 4,
      reasoning:
        "Body composition goals are part of the 'fix something specific' framing for some users.",
    },
    {
      questionId: "primary_goal",
      answerValue: "perform_higher",
      weight: 3,
      reasoning:
        "Lower priority than GHRH-class compounds for performance contexts.",
    },
    {
      questionId: "90_day_win",
      answerValue: "physical_change",
      weight: 5,
      reasoning:
        "Physical-change goals fit, with realistic-effect-size framing.",
    },
  ],
  brandNote:
    "Marketing copy commonly overstates AOD-9604's effect size. Registered Phase II data shows it works, but modestly.",
  legalStatus: {
    region: "US",
    status: "research-only",
    note: "Not an approved drug in the United States. Sold as a research chemical. Approval status varies internationally.",
  },
};
