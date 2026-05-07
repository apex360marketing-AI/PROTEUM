import type { Compound } from "@/content/knowledge-base/types";

export const dsip: Compound = {
  id: "dsip",
  name: "DSIP",
  category: "peptide",
  classification: "underrated",
  tagline:
    "Delta Sleep-Inducing Peptide — a small endogenous nonapeptide isolated in the 1970s, studied for sleep architecture and stress modulation.",
  longDescription: `DSIP — Delta Sleep-Inducing Peptide — is a nine-amino-acid peptide first isolated in 1977 by Schoenenberger and colleagues from the cerebral venous blood of rabbits induced into sleep by electrical stimulation. The original observation: blood from sleeping animals could induce delta-wave-rich sleep when transferred to recipients, and the active fraction was traced to this small peptide.

In the half-century since, DSIP has accumulated a wider and stranger pharmacological profile than its name suggests. The original sleep-inducing effect has been confirmed in some studies and not in others, and the magnitude of its sleep effects in healthy humans is modest. But subsequent research has shown effects on the hypothalamic-pituitary-adrenal axis (reducing stress responses), pain modulation, and stress-related insomnia where the underlying disrupter is HPA-axis hyperactivity rather than primary sleep architecture.

The Russian and Eastern European literature is more developed than the Western literature, and clinical use in some countries has continued at low levels for decades. Western consumer awareness is minimal. Most peptide vendors carry it; few users discuss it.

PROTEUM treats DSIP as a compound where the original 'natural sleep-inducer' framing oversells what the modern evidence supports, but where the stress-modulating and HPA-axis effects make it a credible candidate for stress-driven insomnia profiles. The evidence is older and the dose-response is variable, which justifies its underrated status.`,
  primaryUses: [
    "Sleep quality in stress-driven insomnia",
    "HPA-axis modulation",
    "Pain and stress response research",
    "Adjunct in withdrawal and recovery contexts",
  ],
  mechanism: `DSIP modulates the hypothalamic-pituitary-adrenal (HPA) axis, blunting cortisol and ACTH responses to acute stressors in animal models. Its effects on sleep architecture are not fully characterized but appear to be most pronounced in stress-disrupted sleep rather than primary insomnia. DSIP also modulates several monoamine systems (dopamine, serotonin) and has shown opioid-system effects in pain models. Unlike GABAergic sleep aids, DSIP does not cause sedation directly — its sleep benefits, when they appear, are downstream of stress and HPA modulation rather than direct sedative pharmacology. The compound has good blood-brain-barrier penetration despite its size and short plasma half-life.`,
  studiedFor: [
    {
      domain: "Stress-related sleep",
      evidenceLevel: "preliminary",
      summary:
        "Older animal and human studies show benefit in stress-driven insomnia. Effects in primary insomnia (without stress component) are less consistent.",
    },
    {
      domain: "HPA axis modulation",
      evidenceLevel: "preliminary",
      summary:
        "Multiple animal studies confirm reduced cortisol and ACTH responses to stressors. Human evidence is limited.",
    },
    {
      domain: "Pain modulation",
      evidenceLevel: "preliminary",
      summary:
        "Animal pain models show analgesic effects, possibly via opioid system interaction.",
    },
    {
      domain: "Withdrawal and recovery",
      evidenceLevel: "preliminary",
      summary:
        "Some Russian clinical use in alcohol and opiate withdrawal contexts, with variable outcomes.",
    },
  ],
  typicalProtocol: {
    range:
      "Research-context dosing typically references 100–500 mcg subcutaneous, often in the evening.",
    duration:
      "Cycles of 2–4 weeks are commonly referenced.",
    caveats:
      "Dose-response is variable and not well-characterized in modern RCTs.",
  },
  contraindications: [
    "Pregnancy and lactation.",
    "Severe psychiatric instability without supervision.",
    "Active opioid use or dependence (theoretical interaction).",
  ],
  keyResearch: [
    {
      title:
        "Delta-sleep-inducing peptide (DSIP): a still unresolved riddle",
      authors: "Kovalzon VM, Strekalova TV",
      year: 2006,
      journal: "J Neurochem",
      url: "https://pubmed.ncbi.nlm.nih.gov/16805834/",
    },
    {
      title:
        "Effects of delta-sleep-inducing peptide on sleep architecture in chronic insomnia",
      authors: "Schneider-Helmert D, Schoenenberger GA",
      year: 1981,
      journal: "Eur Neurol",
      url: "https://pubmed.ncbi.nlm.nih.gov/7011809/",
    },
    {
      title:
        "Characterization of a delta-electroencephalogram-inducing peptide isolated from cerebral venous blood",
      authors: "Schoenenberger GA, Maier PF, Tobler HJ, Monnier M",
      year: 1977,
      journal: "Pflugers Arch",
      url: "https://pubmed.ncbi.nlm.nih.gov/562553/",
    },
  ],
  relatedCompounds: ["selank", "epitalon", "pinealon"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "poor_sleep",
      weight: 6,
      reasoning:
        "DSIP's central historical use case. Most useful for stress-disrupted sleep rather than primary insomnia.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "anxiety_low_mood",
      weight: 5,
      reasoning:
        "HPA-axis modulation overlaps with chronic stress and anxiety contexts.",
    },
    {
      questionId: "sleep_quality",
      answerValue: "poor",
      weight: 6,
      reasoning:
        "Direct match for poor-sleep states; especially when stress is the underlying driver.",
    },
    {
      questionId: "sleep_quality",
      answerValue: "inconsistent",
      weight: 4,
      reasoning:
        "Inconsistent sleep with stress component is a plausible target.",
    },
    {
      questionId: "primary_goal",
      answerValue: "fix_specific",
      weight: 4,
      reasoning:
        "Specific sleep or stress goals align.",
    },
  ],
  underratedNote:
    "A small endogenous peptide with a long but inconsistent research arc. Modern Western consumer space barely recognizes it; the stress-driven sleep use case has more support than the 'natural sleep aid' marketing suggests.",
  legalStatus: {
    region: "US",
    status: "research-only",
    note: "Not an approved drug in the United States. Sold as a research peptide. Has been used in some clinical settings in other jurisdictions.",
  },
};
