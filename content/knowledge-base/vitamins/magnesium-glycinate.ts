import type { Compound } from "@/content/knowledge-base/types";

export const magnesiumGlycinate: Compound = {
  id: "magnesium-glycinate",
  name: "Magnesium glycinate",
  category: "mineral",
  classification: "foundational",
  tagline:
    "Highly bioavailable, well-tolerated form of magnesium. Critical for sleep, recovery, and over 600 enzymatic reactions.",
  longDescription: `Magnesium is an essential mineral involved in more than 600 enzymatic reactions in the human body — including ATP energy metabolism, DNA and protein synthesis, neuromuscular transmission, and cardiovascular function. The Recommended Dietary Allowance is 310–420 mg/day for adults, but population surveys consistently show that roughly half of US adults have intake below this threshold, with many in the 200–300 mg range.

Magnesium glycinate is magnesium bound to the amino acid glycine. The form is well-absorbed, well-tolerated even at higher doses (in contrast to magnesium oxide, which causes diarrhea), and the glycine itself contributes additional benefits — glycine is a sedating amino acid with effects on sleep and core temperature regulation. The combination of well-absorbed magnesium and bioactive glycine makes glycinate the dominant form for sleep, recovery, and nervous-system applications.

Magnesium deficiency is associated with poor sleep, muscle cramps, insulin resistance, hypertension, and increased cardiovascular event risk. Supplementation in deficient populations consistently improves sleep quality, blood pressure modestly, and exercise recovery. In athletic populations, deficiency is more common because sweat losses are significant and dietary intake is often inadequate.

Magnesium glycinate is one of the highest-yield supplements for almost any user — particularly anyone reporting poor sleep, anxiety, recovery deficits, or cardiovascular risk markers.`,
  primaryUses: [
    "Sleep quality and onset",
    "Muscle recovery and cramp prevention",
    "Anxiety and nervous-system regulation",
    "Cardiovascular and blood pressure support",
    "Foundational mineral for athletic populations",
  ],
  mechanism: `Magnesium acts as a cofactor for ATP — every ATP molecule in the body is bound to a magnesium ion to be biologically functional, making magnesium essential for all energy-dependent cellular processes. Magnesium also acts as a natural calcium-channel blocker at neuromuscular junctions and in vascular smooth muscle, which underlies its effects on blood pressure, muscle relaxation, and sleep onset. In the central nervous system, magnesium modulates NMDA glutamate receptor function — partially blocking the receptor and dampening excitatory signaling, which contributes to its anxiolytic and sleep-promoting effects. The glycinate form provides glycine as the counterion, which is itself a sedating amino acid (acting at glycine receptors and as a glutamate antagonist) and promotes core temperature reduction conducive to sleep onset.`,
  studiedFor: [
    {
      domain: "Sleep quality",
      evidenceLevel: "established",
      summary:
        "Multiple RCTs show improvements in sleep onset latency, sleep efficiency, and subjective sleep quality with magnesium supplementation, particularly in older or insomniac populations.",
    },
    {
      domain: "Muscle cramps and recovery",
      evidenceLevel: "emerging",
      summary:
        "Strong evidence for cramp reduction in athletic and pregnant populations; recovery effects are well-documented in deficient athletes.",
    },
    {
      domain: "Blood pressure",
      evidenceLevel: "established",
      summary:
        "Meta-analyses consistently show modest blood pressure reductions (3–5 mmHg systolic) with magnesium supplementation.",
    },
    {
      domain: "Anxiety",
      evidenceLevel: "emerging",
      summary:
        "Multiple smaller trials show anxiolytic effects, particularly in mild to moderate anxiety states.",
    },
  ],
  typicalProtocol: {
    range:
      "200–400 mg elemental magnesium daily from glycinate. Often taken in the evening for sleep benefit.",
    duration:
      "Open-ended; well-tolerated long-term.",
    caveats:
      "Renal disease requires lower doses or avoidance — kidneys are the main route of excretion.",
  },
  contraindications: [
    "Severe renal impairment.",
    "Concurrent use of certain antibiotics (tetracyclines, fluoroquinolones) — separate dosing by 2+ hours.",
    "Severe bradycardia or heart block.",
  ],
  keyResearch: [
    {
      title:
        "The effect of magnesium supplementation on primary insomnia in elderly: a double-blind placebo-controlled clinical trial",
      authors: "Abbasi B, Kimiagar M, Sadeghniiat K, et al.",
      year: 2012,
      journal: "J Res Med Sci",
      url: "https://pubmed.ncbi.nlm.nih.gov/23853635/",
    },
    {
      title:
        "Effects of magnesium supplementation on blood pressure: a meta-analysis of randomized double-blind placebo-controlled trials",
      authors: "Zhang X, Li Y, Del Gobbo LC, et al.",
      year: 2016,
      journal: "Hypertension",
      url: "https://pubmed.ncbi.nlm.nih.gov/27432866/",
    },
    {
      title:
        "Magnesium in man: implications for health and disease",
      authors: "de Baaij JH, Hoenderop JG, Bindels RJ",
      year: 2015,
      journal: "Physiol Rev",
      url: "https://pubmed.ncbi.nlm.nih.gov/25540137/",
    },
    {
      title:
        "The role of magnesium in pathophysiology and migraine treatment",
      authors: "Yablon LA, Mauskop A",
      year: 2011,
      journal: "Magnes Res",
      url: "https://pubmed.ncbi.nlm.nih.gov/21785017/",
    },
  ],
  relatedCompounds: ["vitamin-d3", "glycine", "l-theanine"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "poor_sleep",
      weight: 8,
      reasoning:
        "Strongest non-pharmaceutical sleep-supporting supplement, particularly in deficient populations.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "slow_recovery",
      weight: 6,
      reasoning:
        "Magnesium status correlates with recovery markers; many athletes are deficient.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "anxiety_low_mood",
      weight: 5,
      reasoning:
        "NMDA modulation and nervous-system regulation effects support anxiety contexts.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "low_energy",
      weight: 4,
      reasoning:
        "Energy metabolism depends on magnesium; deficiency contributes to fatigue.",
    },
    {
      questionId: "sleep_quality",
      answerValue: "poor",
      weight: 7,
      reasoning:
        "Direct match: poor sleep is the strongest indication.",
    },
    {
      questionId: "sleep_quality",
      answerValue: "inconsistent",
      weight: 5,
      reasoning:
        "Inconsistent sleep often improves with consistent magnesium supplementation.",
    },
    {
      questionId: "current_supplements",
      answerValue: "none",
      weight: 7,
      reasoning:
        "If they're taking nothing, magnesium is one of the highest-yield first moves alongside D3.",
    },
    {
      questionId: "activity_level",
      answerValue: "very_active",
      weight: 5,
      reasoning:
        "Athletes lose magnesium in sweat and frequently run deficient.",
    },
  ],
  brandNote:
    "Glycinate, malate, and threonate are the three forms worth knowing. Oxide is mostly a laxative.",
  legalStatus: {
    region: "global",
    status: "approved-supplement",
    note: "Widely available as an approved dietary supplement globally.",
  },
};
