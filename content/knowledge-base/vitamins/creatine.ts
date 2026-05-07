import type { Compound } from "@/content/knowledge-base/types";

export const creatine: Compound = {
  id: "creatine",
  name: "Creatine monohydrate",
  category: "cofactor",
  classification: "foundational",
  tagline:
    "The most-studied performance and recovery supplement in human history. Increasingly studied for cognitive support.",
  longDescription: `Creatine is a nitrogen-containing organic acid synthesized endogenously from arginine, glycine, and methionine. It is also obtained from dietary animal protein (red meat, fish). The body stores roughly 95% of its creatine in skeletal muscle, where it functions as a phosphate reservoir for rapid ATP regeneration during high-intensity exercise.

Supplementation increases muscle creatine stores by 20–40% in most users, which translates into improved performance in repeated high-intensity efforts and modest gains in lean muscle mass. The performance evidence base is the largest and most consistent of any sports supplement: hundreds of trials, multiple meta-analyses, well-characterized effect sizes (typically 5–15% improvement in repeat sprint or set performance).

Beyond performance, creatine has accumulated meaningful evidence for cognitive function — particularly under conditions of sleep deprivation, hypoxia, or older age, where brain creatine stores are stressed. Several recent trials show modest cognitive benefits with daily creatine supplementation, even in non-athletic populations.

Monohydrate is the form with virtually all of the published evidence. Other forms (HCL, ethyl ester, buffered) are marketed on bioavailability claims that are not consistently supported in head-to-head comparisons. Monohydrate at 3–5 g/day, taken consistently, is the standard protocol.

Creatine is one of the few supplements that virtually every fitness and clinical professional considers safe, effective, and worth the modest cost.`,
  primaryUses: [
    "Strength and high-intensity performance",
    "Lean muscle mass support",
    "Recovery between sets or repeated efforts",
    "Cognitive function (emerging evidence)",
    "Sarcopenia prevention in older adults",
  ],
  mechanism: `Creatine in muscle is phosphorylated to phosphocreatine, which acts as a rapidly mobilizable phosphate donor for ATP regeneration during high-intensity, short-duration exercise — when ATP demand exceeds the rate of mitochondrial regeneration. Higher muscle phosphocreatine stores allow more repeats of high-intensity work before fatigue. Creatine also produces a small osmotic effect that increases intracellular water, contributing to muscle cell volume and possibly to anabolic signaling. In the brain, creatine and phosphocreatine play a similar phosphate-buffering role; brain creatine concentrations correlate with cognitive performance under stress, and supplementation modestly increases brain creatine in some studies, particularly in vegetarians who have lower baseline stores.`,
  studiedFor: [
    {
      domain: "Strength and performance",
      evidenceLevel: "established",
      summary:
        "Hundreds of trials and multiple meta-analyses confirm consistent improvements in high-intensity, short-duration performance and lean mass in supplemented users.",
    },
    {
      domain: "Cognitive function",
      evidenceLevel: "emerging",
      summary:
        "Multiple recent trials show modest cognitive benefits, particularly under sleep deprivation or in vegetarians/older adults with lower baseline stores.",
    },
    {
      domain: "Sarcopenia prevention",
      evidenceLevel: "emerging",
      summary:
        "Creatine combined with resistance training in older adults consistently outperforms training alone for muscle mass and strength endpoints.",
    },
    {
      domain: "Neurological conditions",
      evidenceLevel: "preliminary",
      summary:
        "Studies in Parkinson's, Huntington's, and other neurodegenerative conditions have explored creatine; results are mixed but mechanistically plausible.",
    },
  ],
  typicalProtocol: {
    range:
      "3–5 g daily of creatine monohydrate. Loading phases (20 g/day for 5–7 days) accelerate saturation but are optional.",
    duration:
      "Open-ended; well-tolerated for years of continuous use in registered trials.",
    caveats:
      "Mild water retention is common in the first 2 weeks. Creatine is renally excreted; monitor renal function in users with pre-existing kidney concerns.",
  },
  contraindications: [
    "Active renal disease without medical oversight.",
    "Concurrent nephrotoxic medications without monitoring.",
  ],
  keyResearch: [
    {
      title:
        "International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine",
      authors: "Kreider RB, Kalman DS, Antonio J, et al.",
      year: 2017,
      journal: "J Int Soc Sports Nutr",
      url: "https://pubmed.ncbi.nlm.nih.gov/28615996/",
    },
    {
      title:
        "Effects of creatine supplementation and resistance training on muscle strength and weightlifting performance",
      authors: "Rawson ES, Volek JS",
      year: 2003,
      journal: "J Strength Cond Res",
      url: "https://pubmed.ncbi.nlm.nih.gov/14636102/",
    },
    {
      title:
        "Effects of creatine supplementation on cognitive function of healthy individuals: a systematic review of randomized controlled trials",
      authors: "Avgerinos KI, Spyrou N, Bougioukas KI, Kapogiannis D",
      year: 2018,
      journal: "Exp Gerontol",
      url: "https://pubmed.ncbi.nlm.nih.gov/29704637/",
    },
    {
      title:
        "Creatine supplementation with specific view to exercise/sports performance: an update",
      authors: "Cooper R, Naclerio F, Allgrove J, Jimenez A",
      year: 2012,
      journal: "J Int Soc Sports Nutr",
      url: "https://pubmed.ncbi.nlm.nih.gov/22817979/",
    },
  ],
  relatedCompounds: ["coq10", "magnesium-glycinate", "omega-3"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "loss_strength_libido",
      weight: 6,
      reasoning:
        "Creatine is the highest-yield supplement for strength preservation, especially in older adults losing muscle mass.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "slow_recovery",
      weight: 5,
      reasoning:
        "Improved phosphate buffering supports recovery between sets and repeated efforts.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "brain_fog",
      weight: 4,
      reasoning:
        "Emerging evidence for cognitive support, especially under sleep deprivation or in vegetarians.",
    },
    {
      questionId: "primary_goal",
      answerValue: "perform_higher",
      weight: 8,
      reasoning:
        "The single most-evidenced supplement for performance contexts.",
    },
    {
      questionId: "primary_goal",
      answerValue: "feel_younger",
      weight: 5,
      reasoning:
        "Sarcopenia prevention is a longevity priority; creatine + resistance training is the foundation.",
    },
    {
      questionId: "body_composition",
      answerValue: "build_muscle",
      weight: 8,
      reasoning:
        "Direct match: lean mass and strength outcomes are the primary indication.",
    },
    {
      questionId: "body_composition",
      answerValue: "recomp",
      weight: 7,
      reasoning:
        "Recomposition goals benefit from creatine's effect on muscle preservation during caloric deficits.",
    },
    {
      questionId: "activity_level",
      answerValue: "very_active",
      weight: 7,
      reasoning:
        "Direct match: most athletic populations are creatine-supplemented; deficiency is unusual but possible in vegetarians.",
    },
    {
      questionId: "activity_level",
      answerValue: "moderate",
      weight: 5,
      reasoning:
        "Moderate training still benefits clearly from creatine.",
    },
    {
      questionId: "age_range",
      answerValue: "46_60",
      weight: 5,
      reasoning:
        "Sarcopenia prevention is increasingly relevant in this band.",
    },
    {
      questionId: "age_range",
      answerValue: "over_60",
      weight: 6,
      reasoning:
        "Strongest fit for sarcopenia prevention in older adults.",
    },
  ],
  brandNote:
    "Monohydrate at 3-5g/day, taken consistently. Other forms cost more without consistent evidence advantage.",
  legalStatus: {
    region: "global",
    status: "approved-supplement",
    note: "Widely available as an approved dietary supplement globally. The most-studied sports supplement in published research.",
  },
};
