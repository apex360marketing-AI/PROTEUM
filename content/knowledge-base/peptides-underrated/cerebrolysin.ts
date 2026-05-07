import type { Compound } from "@/content/knowledge-base/types";

export const cerebrolysin: Compound = {
  id: "cerebrolysin",
  name: "Cerebrolysin",
  category: "peptide",
  classification: "underrated",
  tagline:
    "Porcine-brain-derived neuropeptide preparation with strong stroke and dementia trial data, primarily registered outside the US.",
  longDescription: `Cerebrolysin is a peptide preparation derived from purified porcine (pig) brain tissue, manufactured by Ever Neuro Pharma in Austria. It contains a defined mixture of low-molecular-weight peptides (under 10 kDa) and free amino acids that mimic the action of endogenous neurotrophic factors — most notably acting in ways analogous to brain-derived neurotrophic factor (BDNF), nerve growth factor (NGF), and ciliary neurotrophic factor (CNTF).

It is registered as a pharmaceutical in dozens of countries — across Europe, Asia, Latin America, and Russia — for indications including acute ischemic stroke, vascular dementia, and Alzheimer's disease. It is NOT approved in the United States, which is the source of much of its "underrated" status: a peptide therapy with thousands of patients enrolled in registered trials, multiple meta-analyses, and active use in dozens of national health systems is unfamiliar in the country with the largest peptide consumer market.

The clinical evidence base is unusually large for a peptide. Cochrane reviews and meta-analyses of randomized trials in stroke and dementia generally find positive cognitive and functional outcomes, with effect sizes that are statistically significant if often modest. Safety has been favorable across the registered indications.

PROTEUM treats Cerebrolysin as the most clinically-validated cognitive and neuroprotective peptide in this knowledge base — and as a textbook case of a peptide that deserves a different reputation in the United States than its current consumer-market obscurity reflects.`,
  primaryUses: [
    "Acute ischemic stroke (registered indication outside US)",
    "Vascular and Alzheimer-type dementia (registered indication)",
    "Cognitive recovery from brain injury",
    "Neuroprotection research contexts",
  ],
  mechanism: `Cerebrolysin's active fractions act as neurotrophic-factor analogues — they bind and activate the same downstream pathways as BDNF, NGF, and other endogenous neurotrophins, although the specific peptides involved are not single compounds but a defined mixture. Effects in animal models include reduced apoptosis (programmed cell death) following ischemic injury, increased synaptic density and dendritic branching, reduced amyloid pathology in transgenic Alzheimer models, and enhanced neuronal survival and migration during recovery from injury. Practical clinical effects are most pronounced in acute neurological injury contexts where active neuroprotection and accelerated recovery are the targets.`,
  studiedFor: [
    {
      domain: "Acute ischemic stroke",
      evidenceLevel: "established",
      summary:
        "Multiple large RCTs (CASTA, CARS, others) and meta-analyses support efficacy in functional recovery from ischemic stroke when given early after onset.",
    },
    {
      domain: "Vascular and Alzheimer dementia",
      evidenceLevel: "emerging",
      summary:
        "Multiple registered trials show modest cognitive and global function improvements in dementia populations. Effect sizes are clinically meaningful but not transformative.",
    },
    {
      domain: "Traumatic brain injury",
      evidenceLevel: "emerging",
      summary:
        "Trials in moderate to severe TBI have shown improved functional outcomes vs standard care.",
    },
    {
      domain: "Cognitive aging in healthy older adults",
      evidenceLevel: "preliminary",
      summary:
        "Use in non-disease populations for general cognitive support is off-label and less well-validated.",
    },
  ],
  typicalProtocol: {
    range:
      "Registered indications use 5–30 mL intramuscular or intravenous, often during inpatient phases of acute care.",
    duration:
      "Cycles of 10–20 days are typical for the registered indications.",
    caveats:
      "This is a clinical pharmaceutical with intramuscular or intravenous administration. Off-label or self-administered use in non-clinical settings is meaningfully different from the trial protocols.",
  },
  contraindications: [
    "Severe renal impairment.",
    "Status epilepticus or generalized epilepsy.",
    "Pregnancy — limited data.",
    "Hypersensitivity to porcine-derived products.",
  ],
  keyResearch: [
    {
      title:
        "Cerebrolysin for vascular dementia",
      authors: "Chen N, Yang M, Guo J, Zhou M, Zhu C, He L",
      year: 2013,
      journal: "Cochrane Database Syst Rev",
      url: "https://pubmed.ncbi.nlm.nih.gov/23440846/",
    },
    {
      title:
        "Cerebrolysin in patients with acute ischemic stroke in Asia: results of a double-blind, placebo-controlled randomized trial",
      authors: "Heiss WD, Brainin M, Bornstein NM, Tuomilehto J, Hong Z; Cerebrolysin Acute Stroke Treatment in Asia (CASTA) Investigators",
      year: 2012,
      journal: "Stroke",
      url: "https://pubmed.ncbi.nlm.nih.gov/22198981/",
    },
    {
      title:
        "Safety and efficacy of cerebrolysin in motor function recovery after stroke: a meta-analysis of the CARS trials",
      authors: "Bornstein NM, Guekht A, Vester J, et al.",
      year: 2018,
      journal: "Neurol Sci",
      url: "https://pubmed.ncbi.nlm.nih.gov/29770895/",
    },
    {
      title:
        "Cerebrolysin: a review of its use in dementia",
      authors: "Plosker GL, Gauthier S",
      year: 2009,
      journal: "Drugs Aging",
      url: "https://pubmed.ncbi.nlm.nih.gov/19929030/",
    },
  ],
  relatedCompounds: ["semax", "selank", "pinealon"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "brain_fog",
      weight: 7,
      reasoning:
        "Strongest cognitive-recovery evidence base in this knowledge base; relevant for cognitive complaints in older adults.",
    },
    {
      questionId: "cognitive_state",
      answerValue: "foggy",
      weight: 7,
      reasoning:
        "Direct match: registered cognitive-disease indication and broad clinical evidence base.",
    },
    {
      questionId: "primary_goal",
      answerValue: "fix_specific",
      weight: 5,
      reasoning:
        "Specific neurological recovery goals align directly.",
    },
    {
      questionId: "primary_goal",
      answerValue: "feel_younger",
      weight: 5,
      reasoning:
        "Cognitive aging is a core feel-younger axis.",
    },
    {
      questionId: "age_range",
      answerValue: "46_60",
      weight: 5,
      reasoning:
        "Registered indications skew older; relevance increases with age.",
    },
    {
      questionId: "age_range",
      answerValue: "over_60",
      weight: 7,
      reasoning:
        "Strongest fit: most registered evidence is in older populations with cognitive decline.",
    },
    {
      questionId: "90_day_win",
      answerValue: "mental_change",
      weight: 5,
      reasoning:
        "Cognitive endpoints align with mental-change goal.",
    },
  ],
  underratedNote:
    "Cerebrolysin has been a registered pharmaceutical in dozens of countries for decades, with thousands of patients in trials and Cochrane meta-analyses. Its absence from the US market is the entire reason it remains 'underrated' in Western consumer awareness.",
  brandNote:
    "This is a clinical drug, not a research peptide. The evidence base is large enough that the question is regulatory rather than scientific.",
  legalStatus: {
    region: "US",
    status: "research-only",
    note: "Not approved in the United States. Registered as a pharmaceutical in many other countries including Austria, Germany, Russia, China, and most of Eastern Europe.",
  },
};
