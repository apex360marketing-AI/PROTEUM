import type { Compound } from "@/content/knowledge-base/types";

export const nac: Compound = {
  id: "nac",
  name: "NAC (N-Acetyl Cysteine)",
  category: "cofactor",
  classification: "foundational",
  tagline:
    "Glutathione precursor used clinically in acetaminophen overdose, mucolysis, and increasingly in psychiatric and respiratory contexts.",
  longDescription: `N-Acetyl Cysteine (NAC) is a stable, well-absorbed acetylated form of the amino acid cysteine — the rate-limiting precursor to glutathione, the body's primary endogenous antioxidant. NAC has been used clinically for decades: as the antidote to acetaminophen overdose (where it prevents liver failure by replenishing glutathione faster than the toxic metabolite can deplete it), as a mucolytic in respiratory medicine (it breaks disulfide bonds in mucus), and as a clinical research compound in psychiatry, addiction medicine, and respiratory disease.

NAC's emerging evidence base in psychiatric contexts is particularly notable. Multiple randomized trials have shown benefit in obsessive-compulsive disorder, trichotillomania, body-focused repetitive behaviors, and as adjunctive therapy in depression and bipolar disorder. The hypothesized mechanism is glutamate modulation through the cystine-glutamate antiporter and reduction of oxidative stress in neural tissue.

NAC also has well-documented effects on respiratory health (bronchitis, COPD, idiopathic pulmonary fibrosis), liver function (in addition to acute toxicity), fertility (improved sperm parameters in some studies), and as a chelator of certain heavy metals.

The compound is widely available, well-tolerated, and inexpensive. Its main limitations are mild GI upset at higher doses and a slightly sulfurous odor. The FDA briefly attempted to remove NAC from supplement status in 2020 (citing its drug history), then reversed course in 2022; it remains widely available as a dietary supplement.`,
  primaryUses: [
    "Glutathione and antioxidant support",
    "Respiratory health (chronic bronchitis, mucus clearance)",
    "Psychiatric adjunct (OCD, trichotillomania, depression)",
    "Liver function support",
    "Acetaminophen overdose (clinical use)",
  ],
  mechanism: `NAC is deacetylated to L-cysteine in the body, where cysteine is the rate-limiting substrate for glutathione synthesis. Increasing intracellular glutathione enhances cellular antioxidant capacity and supports phase-II liver detoxification, which is the basis for NAC's clinical use in acetaminophen overdose. In neural contexts, NAC also modulates the cystine-glutamate antiporter (system Xc-), which exchanges intracellular glutamate for extracellular cystine — and this glutamate-modulating effect is hypothesized to underlie NAC's psychiatric benefits in conditions involving glutamatergic dysregulation. Finally, NAC's free thiol group reacts with disulfide bridges in mucoproteins, reducing mucus viscosity — the mechanism behind its mucolytic respiratory use.`,
  studiedFor: [
    {
      domain: "Acetaminophen overdose",
      evidenceLevel: "established",
      summary:
        "FDA-approved indication. Decades of clinical use; standard of care for acetaminophen toxicity.",
    },
    {
      domain: "Chronic bronchitis and COPD",
      evidenceLevel: "established",
      summary:
        "Multiple meta-analyses support NAC for reducing exacerbation frequency in chronic bronchitis. Available as a registered drug in many countries.",
    },
    {
      domain: "Trichotillomania and OCD",
      evidenceLevel: "emerging",
      summary:
        "Multiple controlled trials show benefit in body-focused repetitive behaviors. NAC is increasingly used as first-line nutraceutical in trichotillomania.",
    },
    {
      domain: "Depression and bipolar disorder",
      evidenceLevel: "emerging",
      summary:
        "Several randomized trials show benefit as adjunctive therapy in mood disorders, particularly in bipolar depression.",
    },
    {
      domain: "Fertility (male)",
      evidenceLevel: "preliminary",
      summary:
        "Multiple smaller trials show improvements in sperm parameters in men with idiopathic infertility.",
    },
  ],
  typicalProtocol: {
    range:
      "600–1800 mg daily, often divided into two doses. Higher doses (2400 mg) are used in some psychiatric trials.",
    duration:
      "Open-ended; well-tolerated long-term.",
    caveats:
      "Mild GI upset is common. The sulfurous odor is harmless but can be off-putting.",
  },
  contraindications: [
    "Active asthma with severe bronchospasm history — paradoxical bronchospasm rare but reported.",
    "Pregnancy and lactation — clinical use exists but routine supplementation should be discussed.",
    "Concurrent nitroglycerin therapy — potential interaction.",
  ],
  keyResearch: [
    {
      title:
        "N-acetylcysteine for prevention of contrast nephropathy: a meta-analysis of randomized clinical trials",
      authors: "Kelly AM, Dwamena B, Cronin P, et al.",
      year: 2008,
      journal: "Ann Intern Med",
      url: "https://pubmed.ncbi.nlm.nih.gov/18316753/",
    },
    {
      title:
        "N-acetylcysteine in psychiatry: current therapeutic evidence and potential mechanisms of action",
      authors: "Berk M, Malhi GS, Gray LJ, Dean OM",
      year: 2013,
      journal: "Trends Pharmacol Sci",
      url: "https://pubmed.ncbi.nlm.nih.gov/23369637/",
    },
    {
      title:
        "N-acetylcysteine in the treatment of pediatric trichotillomania: a randomized, double-blind, placebo-controlled add-on trial",
      authors: "Bloch MH, Panza KE, Grant JE, et al.",
      year: 2013,
      journal: "J Am Acad Child Adolesc Psychiatry",
      url: "https://pubmed.ncbi.nlm.nih.gov/23357440/",
    },
    {
      title:
        "Long-term oral acetylcysteine reduces exacerbation rates in chronic bronchitis",
      authors: "Cazzola M, Calzetta L, Page C, et al.",
      year: 2015,
      journal: "Eur Respir Rev",
      url: "https://pubmed.ncbi.nlm.nih.gov/26324808/",
    },
  ],
  relatedCompounds: ["glycine", "vitamin-d3", "omega-3"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "anxiety_low_mood",
      weight: 6,
      reasoning:
        "Multiple trials support NAC as adjunct in mood and anxiety disorders, particularly OCD-spectrum and bipolar.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "gut_inflammation",
      weight: 4,
      reasoning:
        "Glutathione support extends to gut and liver inflammatory contexts.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "skin_hair_aging",
      weight: 4,
      reasoning:
        "Used clinically in trichotillomania and skin-picking; antioxidant support generally.",
    },
    {
      questionId: "mood_state",
      answerValue: "flat_low",
      weight: 5,
      reasoning:
        "NAC has registered evidence as adjunct in mood disorders.",
    },
    {
      questionId: "primary_goal",
      answerValue: "fix_specific",
      weight: 5,
      reasoning:
        "Specific psychiatric, respiratory, or detoxification goals align well.",
    },
    {
      questionId: "current_supplements",
      answerValue: "advanced",
      weight: 4,
      reasoning:
        "Advanced stack users frequently include NAC for its antioxidant and detoxification roles.",
    },
  ],
  brandNote:
    "One of the most underrated supplements per dollar. Cheap, well-tolerated, with surprisingly broad clinical evidence in respiratory and psychiatric contexts.",
  legalStatus: {
    region: "global",
    status: "approved-supplement",
    note: "Widely available as a dietary supplement in the US; registered as a pharmaceutical in many other countries.",
  },
};
