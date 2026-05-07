import type { Compound } from "@/content/knowledge-base/types";

export const ashwagandha: Compound = {
  id: "ashwagandha",
  name: "Ashwagandha (KSM-66)",
  category: "cofactor",
  classification: "foundational",
  tagline:
    "Adaptogenic root extract with strong evidence for cortisol reduction, stress resilience, and exercise recovery.",
  longDescription: `Ashwagandha (Withania somnifera) is an adaptogenic herb used in Ayurvedic medicine for over three thousand years. The root contains the active compound class withanolides — steroidal lactones that appear to mediate most of the herb's pharmacological effects. Modern clinical evidence has caught up with the traditional use claims to a notable degree: ashwagandha now has one of the more substantial evidence bases of any traditional herbal supplement.

The most-cited extract is KSM-66, a standardized full-spectrum root extract developed by Ixoreal Biomed in the early 2000s and used in the majority of high-quality registered ashwagandha trials. The KSM-66 standardization has allowed reproducible dosing across research, which has accelerated the evidence base. Other quality extracts (Sensoril, Shoden) exist but KSM-66 has the largest published trial portfolio.

Clinical trial outcomes consistently include cortisol reduction (typically 20–25% in stressed populations), reduced subjective stress and anxiety scores, modest testosterone increases in men with infertility or low baseline, improved sleep quality, and improved exercise performance and recovery in athletes.

The mechanism appears to involve HPA-axis modulation — ashwagandha blunts cortisol responses to acute stressors and reduces chronic stress-driven HPA hyperactivity. Effects on GABA, glutamate, and dopamine systems have also been documented. Unlike pharmaceutical anxiolytics, ashwagandha works gradually (peak effects after 4–8 weeks) and is non-sedating.

PROTEUM treats ashwagandha as the highest-evidence adaptogenic herb in the foundational set.`,
  primaryUses: [
    "Stress and cortisol reduction",
    "Anxiety and HPA-axis support",
    "Sleep quality (especially stress-driven insomnia)",
    "Exercise performance and recovery",
    "Testosterone support in deficient men",
  ],
  mechanism: `Ashwagandha's withanolides — particularly withaferin A and withanolide D — modulate the hypothalamic-pituitary-adrenal (HPA) axis, blunting cortisol responses to acute stressors and reducing chronic HPA hyperactivity. Multiple RCTs show 20–25% reductions in serum cortisol over 8 weeks of supplementation in stressed populations. The herb also has GABAergic effects (mimicking GABA at receptors in some preparations), modulates monoamine systems, and has anti-inflammatory and antioxidant activity. Effects on testosterone in men with infertility or low baseline appear to be mediated through HPA-axis effects rather than direct gonadal stimulation — reduced cortisol allows the HPG axis to function more normally. Exercise performance effects may relate to reduced oxidative damage and improved recovery dynamics during training.`,
  studiedFor: [
    {
      domain: "Stress and cortisol reduction",
      evidenceLevel: "established",
      summary:
        "Multiple RCTs (Chandrasekhar 2012, Salve 2019, others) consistently show 20–25% cortisol reduction and significant subjective stress score improvements.",
    },
    {
      domain: "Anxiety",
      evidenceLevel: "emerging",
      summary:
        "Multiple controlled trials show clinically meaningful anxiety reductions in subclinical to moderate anxiety populations.",
    },
    {
      domain: "Exercise performance",
      evidenceLevel: "emerging",
      summary:
        "Trials in trained athletes show modest improvements in VO2 max, strength, and recovery markers vs placebo.",
    },
    {
      domain: "Sleep quality",
      evidenceLevel: "emerging",
      summary:
        "Multiple trials show improved sleep onset and quality, particularly in stress-driven sleep complaints.",
    },
    {
      domain: "Testosterone in men with infertility",
      evidenceLevel: "preliminary",
      summary:
        "Modest testosterone increases in subfertile men. Effects in eugonadal men are smaller and less consistent.",
    },
  ],
  typicalProtocol: {
    range:
      "300–600 mg KSM-66 daily, often divided AM/PM. Higher doses (1200 mg) used in some protocols.",
    duration:
      "Cycles of 8–12 weeks are most studied. Cycling on/off is reasonable; chronic continuous use is well-tolerated in trials.",
    caveats:
      "Effects build gradually — give it 4–8 weeks before assessing. Standardize on KSM-66 unless you've researched another extract.",
  },
  contraindications: [
    "Active autoimmune disease — theoretical immune-stimulating effects.",
    "Pregnancy — traditional use cautions; modern evidence limited.",
    "Concurrent thyroid medication — ashwagandha can mildly elevate thyroid markers.",
    "Concurrent immunosuppressants without medical oversight.",
  ],
  keyResearch: [
    {
      title:
        "A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of ashwagandha root in reducing stress and anxiety in adults",
      authors: "Chandrasekhar K, Kapoor J, Anishetty S",
      year: 2012,
      journal: "Indian J Psychol Med",
      url: "https://pubmed.ncbi.nlm.nih.gov/23439798/",
    },
    {
      title:
        "Adaptogenic and anxiolytic effects of ashwagandha root extract in healthy adults: a double-blind, randomized, placebo-controlled clinical study",
      authors: "Salve J, Pate S, Debnath K, Langade D",
      year: 2019,
      journal: "Cureus",
      url: "https://pubmed.ncbi.nlm.nih.gov/32021735/",
    },
    {
      title:
        "Examining the effect of Withania somnifera supplementation on muscle strength and recovery: a randomized controlled trial",
      authors: "Wankhede S, Langade D, Joshi K, Sinha SR, Bhattacharyya S",
      year: 2015,
      journal: "J Int Soc Sports Nutr",
      url: "https://pubmed.ncbi.nlm.nih.gov/26609282/",
    },
    {
      title:
        "Efficacy and safety of ashwagandha root extract in subclinical hypothyroid patients: a double-blind, randomized placebo-controlled trial",
      authors: "Sharma AK, Basu I, Singh S",
      year: 2018,
      journal: "J Altern Complement Med",
      url: "https://pubmed.ncbi.nlm.nih.gov/28829155/",
    },
  ],
  relatedCompounds: ["l-theanine", "magnesium-glycinate", "glycine"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "anxiety_low_mood",
      weight: 7,
      reasoning:
        "Strongest non-pharmaceutical evidence for cortisol and anxiety reduction in this knowledge base.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "poor_sleep",
      weight: 6,
      reasoning:
        "Stress-driven insomnia responds well to HPA-axis modulation.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "low_energy",
      weight: 5,
      reasoning:
        "Chronic stress and HPA dysfunction underlie many fatigue states.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "loss_strength_libido",
      weight: 4,
      reasoning:
        "Modest testosterone effects in subfertile men; cortisol reduction supports HPG axis function.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "slow_recovery",
      weight: 5,
      reasoning:
        "Trial data shows recovery and performance benefits in trained athletes.",
    },
    {
      questionId: "mood_state",
      answerValue: "flat_low",
      weight: 5,
      reasoning:
        "Stress-driven mood states benefit from HPA modulation.",
    },
    {
      questionId: "mood_state",
      answerValue: "up_down",
      weight: 5,
      reasoning:
        "Stress reactivity is a common driver of mood variability.",
    },
    {
      questionId: "sleep_quality",
      answerValue: "poor",
      weight: 5,
      reasoning:
        "Direct match for poor sleep with stress component.",
    },
    {
      questionId: "primary_goal",
      answerValue: "perform_higher",
      weight: 5,
      reasoning:
        "Performance and recovery benefits in athlete populations.",
    },
    {
      questionId: "primary_goal",
      answerValue: "feel_younger",
      weight: 4,
      reasoning:
        "Stress and cortisol management is central to healthspan.",
    },
  ],
  brandNote:
    "Standardize on KSM-66. Generic 'ashwagandha root powder' has unpredictable potency; the trial evidence is on standardized extracts.",
  legalStatus: {
    region: "global",
    status: "approved-supplement",
    note: "Widely available as an approved dietary supplement globally. Used as a registered traditional medicine in India and other countries.",
  },
};
