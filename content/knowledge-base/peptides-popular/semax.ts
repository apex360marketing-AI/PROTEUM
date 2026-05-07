import type { Compound } from "@/content/knowledge-base/types";

export const semax: Compound = {
  id: "semax",
  name: "Semax",
  category: "peptide",
  classification: "popular",
  tagline:
    "Russian-developed neuropeptide derivative of ACTH(4-10), studied for cognition, neuroprotection, and stroke recovery.",
  longDescription: `Semax is a synthetic heptapeptide developed in the 1980s at the Moscow State University Institute of Molecular Genetics. It is a derivative of the (4-10) fragment of adrenocorticotropic hormone (ACTH), modified with a C-terminal tripeptide (Pro-Gly-Pro) that confers metabolic stability without the corticotropic effects of the parent hormone. In Russia it has been a registered pharmaceutical for several indications since the 1990s, including cognitive impairment, optic nerve disorders, and acute ischemic stroke.

The compound's signature is brain-derived neurotrophic factor (BDNF) elevation. Multiple studies — both Russian-published and Western-published — have shown that Semax administration rapidly increases BDNF expression in the brain, alongside upregulation of nerve growth factor (NGF). BDNF is one of the central modulators of neuroplasticity, learning, and memory consolidation, and the BDNF-elevating effect underlies the bulk of Semax's nootropic and neuroprotective claims.

Outside Russia, Semax is not available as an approved pharmaceutical, and Western consumer use is largely off-label and grey-market. The Russian clinical evidence base is substantial but not always available in English-language journals, which contributes to the gap between Semax's regulatory status in its country of origin and its position as a research chemical elsewhere.

PROTEUM treats Semax as a peptide where the science is interesting and the regulatory disconnect is notable. The Russian clinical data is real; the Western consumer space tends to overstate its evidence base, and dose-response relationships in healthy users are not well-established.`,
  primaryUses: [
    "BDNF and neuroplasticity research",
    "Cognitive support contexts",
    "Stroke and ischemic injury recovery (Russian indication)",
    "Anxiolytic and stress-resistance contexts",
  ],
  mechanism: `Semax modulates several CNS systems. Its most-studied effect is rapid upregulation of BDNF and NGF expression in the hippocampus and cortex, which supports neuronal survival, synaptic plasticity, and learning. It also modulates the cholinergic, dopaminergic, and serotonergic systems indirectly, and has been shown to reduce neuronal apoptosis in models of ischemia. Because Semax is a melanocortin pathway derivative (from ACTH), some of its effects involve MC3R and MC4R signaling — though without the cortisol release of full ACTH. Intranasal administration produces measurable CNS effects within minutes, suggesting direct uptake via the nasal mucosa to the brain via routes that bypass the blood-brain barrier.`,
  studiedFor: [
    {
      domain: "Cognitive function",
      evidenceLevel: "emerging",
      summary:
        "Russian clinical studies in patients with cognitive impairment show measurable improvements. Western studies in healthy users are limited.",
    },
    {
      domain: "Stroke recovery",
      evidenceLevel: "emerging",
      summary:
        "Used clinically in Russia for acute ischemic stroke, with published trials showing improved neurological outcomes.",
    },
    {
      domain: "Anxiety and stress",
      evidenceLevel: "preliminary",
      summary:
        "Animal and small human studies suggest anxiolytic effects, often discussed alongside Selank.",
    },
    {
      domain: "BDNF elevation",
      evidenceLevel: "established",
      summary:
        "Multiple animal studies confirm rapid BDNF upregulation as a primary mechanism.",
    },
  ],
  typicalProtocol: {
    range:
      "Russian protocols typically use intranasal administration of 0.1% or 1% solution, 1–3 drops per nostril, 1–3 times daily.",
    duration:
      "Cycles of 2–4 weeks are commonly referenced.",
    caveats:
      "Dose-response in healthy users is not well-established. Most clinical literature is in Russian-language journals.",
  },
  contraindications: [
    "Pregnancy and lactation — limited safety data.",
    "Bipolar disorder — BDNF modulators can affect mood states.",
    "Active psychiatric instability without supervision.",
  ],
  keyResearch: [
    {
      title:
        "Effect of heptapeptide semax on the level of monoamines and their metabolites in the rat brain",
      authors: "Eremin KO, Kudrin VS, Saransaari P, et al.",
      year: 2005,
      journal: "Neurochem Res",
      url: "https://pubmed.ncbi.nlm.nih.gov/16080015/",
    },
    {
      title:
        "Semax, an analog of ACTH(4-7), regulates expression of immune response genes during ischemic brain injury in rats",
      authors:
        "Medvedeva EV, Dmitrieva VG, Povarova OV, et al.",
      year: 2017,
      journal: "Mol Genet Genomics",
      url: "https://pubmed.ncbi.nlm.nih.gov/28349258/",
    },
    {
      title:
        "Semax, an ACTH(4-10) analogue with nootropic properties, activates dopaminergic and serotoninergic brain systems in rodents",
      authors: "Eremin KO, Kudrin VS, Grivennikov IA, et al.",
      year: 2004,
      journal: "Neurosci Lett",
      url: "https://pubmed.ncbi.nlm.nih.gov/15364036/",
    },
  ],
  relatedCompounds: ["selank", "cerebrolysin", "pinealon"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "brain_fog",
      weight: 8,
      reasoning:
        "BDNF elevation and dopaminergic/serotonergic modulation align directly with cognitive complaints.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "anxiety_low_mood",
      weight: 5,
      reasoning:
        "Anxiolytic effects in animal models and small Russian clinical studies; less consistent than Selank.",
    },
    {
      questionId: "cognitive_state",
      answerValue: "foggy",
      weight: 8,
      reasoning:
        "Direct match: cognitive complaints are the most-validated indication in the Russian literature.",
    },
    {
      questionId: "cognitive_state",
      answerValue: "functional",
      weight: 4,
      reasoning:
        "Friction in cognitive function with no overt impairment may benefit, but evidence is thinner.",
    },
    {
      questionId: "mood_state",
      answerValue: "flat_low",
      weight: 4,
      reasoning:
        "BDNF elevation has secondary mood implications.",
    },
    {
      questionId: "primary_goal",
      answerValue: "fix_specific",
      weight: 5,
      reasoning:
        "Specific cognitive or post-stress recovery goals align well.",
    },
    {
      questionId: "90_day_win",
      answerValue: "mental_change",
      weight: 6,
      reasoning:
        "Direct alignment with measurable cognitive change goals.",
    },
  ],
  brandNote:
    "Semax is a registered Russian pharmaceutical, not a Western research chemical in pedigree — but the regulatory disconnect creates a real consumer space gap.",
  legalStatus: {
    region: "US",
    status: "research-only",
    note: "Not approved in the United States. A registered pharmaceutical in Russia. Consumer access in Western markets is grey-market.",
  },
};
