import type { Compound } from "@/content/knowledge-base/types";

export const omega3: Compound = {
  id: "omega-3",
  name: "Omega-3 (EPA/DHA)",
  category: "vitamin",
  classification: "foundational",
  tagline:
    "Long-chain omega-3 fatty acids — EPA for inflammation, DHA for brain. The most-evidenced anti-inflammatory dietary intervention.",
  longDescription: `Omega-3 fatty acids — primarily eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA) — are essential long-chain polyunsaturated fats that the human body cannot synthesize in adequate quantities and must obtain from diet or supplementation. Their primary dietary source is cold-water fatty fish (salmon, mackerel, sardines, anchovies); plant-based sources like flax and chia provide ALA, which converts to EPA/DHA only at low and variable rates (typically under 10%).

EPA and DHA are incorporated into cell membranes throughout the body, where they modulate membrane fluidity, receptor signaling, and the production of anti-inflammatory eicosanoids (including resolvins and protectins, which actively resolve inflammation rather than just inhibiting it). EPA is more closely associated with anti-inflammatory and cardiovascular effects; DHA is enriched in neural and retinal tissue and is important for neurological structure and function.

Modern Western diets are typically low in omega-3 and high in omega-6, producing an imbalance that biases inflammatory tone toward pro-inflammatory states. Supplementation corrects this imbalance and has been studied in cardiovascular disease, autoimmune conditions, depression, and cognitive aging. The cardiovascular evidence base is the largest, with multiple meta-analyses showing modest reductions in cardiovascular events at clinically relevant doses.

Quality matters: fish oil quality varies dramatically. Look for third-party tested products (IFOS, ConsumerLab) with low oxidation markers and high EPA/DHA per gram of total oil.`,
  primaryUses: [
    "Cardiovascular health",
    "Inflammation modulation",
    "Cognitive support and brain health",
    "Mood and depression support",
    "Joint and tissue inflammation",
  ],
  mechanism: `EPA and DHA are incorporated into the phospholipid bilayer of cell membranes, partially replacing the omega-6 arachidonic acid that dominates in typical Western diets. Membrane omega-3 enrichment alters the substrate pool for eicosanoid synthesis: rather than producing pro-inflammatory prostaglandins and leukotrienes from arachidonic acid, the body produces less-inflammatory series-3 prostaglandins and series-5 leukotrienes from EPA, alongside the actively resolution-promoting resolvins and protectins. DHA is structural in neural and retinal tissue, accounting for a significant fraction of brain and retina membrane lipid; deficiency is associated with cognitive and visual deficits in extreme cases. Beyond eicosanoids, omega-3 fatty acids modulate gene expression via PPAR receptors and reduce hepatic lipogenesis, contributing to lower triglycerides.`,
  studiedFor: [
    {
      domain: "Cardiovascular health",
      evidenceLevel: "established",
      summary:
        "Multiple meta-analyses and large RCTs (REDUCE-IT, JELIS) support modest cardiovascular event reduction, particularly with EPA-rich formulations at clinically relevant doses (1–4 g EPA/day).",
    },
    {
      domain: "Triglyceride reduction",
      evidenceLevel: "established",
      summary:
        "Pharmaceutical-grade omega-3 (Vascepa, Lovaza) is FDA-approved for hypertriglyceridemia. Effect sizes are dose-dependent.",
    },
    {
      domain: "Depression",
      evidenceLevel: "emerging",
      summary:
        "EPA-predominant formulations show modest antidepressant effects in meta-analyses, particularly as adjunct therapy.",
    },
    {
      domain: "Inflammation and joint health",
      evidenceLevel: "emerging",
      summary:
        "Reduced inflammatory markers and modest joint-symptom benefits in inflammatory arthritis populations.",
    },
    {
      domain: "Cognitive function",
      evidenceLevel: "preliminary",
      summary:
        "DHA is structural in brain tissue; supplementation effects on cognitive aging in non-deficient populations are mixed.",
    },
  ],
  typicalProtocol: {
    range:
      "1–3 g combined EPA+DHA daily from quality fish oil. Higher doses (3–4 g) used in cardiovascular protocols.",
    duration:
      "Open-ended; benefits are stable with continued use.",
    caveats:
      "Quality varies dramatically — third-party tested products are worth the modest premium. Higher doses can affect bleeding time; coordinate with anticoagulant use.",
  },
  contraindications: [
    "Concurrent anticoagulant therapy without medical oversight — modest antiplatelet effects.",
    "Fish or shellfish allergy — choose alternative sources.",
    "Active gastrointestinal bleeding.",
  ],
  keyResearch: [
    {
      title:
        "Cardiovascular risk reduction with icosapent ethyl for hypertriglyceridemia (REDUCE-IT)",
      authors: "Bhatt DL, Steg PG, Miller M, et al.",
      year: 2019,
      journal: "N Engl J Med",
      url: "https://pubmed.ncbi.nlm.nih.gov/30415628/",
    },
    {
      title:
        "Effects of eicosapentaenoic acid on major coronary events in hypercholesterolaemic patients (JELIS): a randomised open-label, blinded endpoint analysis",
      authors: "Yokoyama M, Origasa H, Matsuzaki M, et al.",
      year: 2007,
      journal: "Lancet",
      url: "https://pubmed.ncbi.nlm.nih.gov/17398308/",
    },
    {
      title:
        "EPA and DHA: dietary sources and effects on inflammation and immune function",
      authors: "Calder PC",
      year: 2017,
      journal: "Biochem Soc Trans",
      url: "https://pubmed.ncbi.nlm.nih.gov/28900017/",
    },
    {
      title:
        "Omega-3 fatty acids for the treatment of depression: systematic review and meta-analysis",
      authors: "Liao Y, Xie B, Zhang H, et al.",
      year: 2019,
      journal: "Transl Psychiatry",
      url: "https://pubmed.ncbi.nlm.nih.gov/31383846/",
    },
  ],
  relatedCompounds: ["vitamin-d3", "magnesium-glycinate", "turmeric"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "gut_inflammation",
      weight: 6,
      reasoning:
        "Inflammation modulation is omega-3's central mechanism; broad benefit beyond cardiovascular.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "nagging_pain",
      weight: 5,
      reasoning:
        "Reduced inflammatory tone supports inflammation-driven joint and tissue pain.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "anxiety_low_mood",
      weight: 5,
      reasoning:
        "EPA-predominant formulations show modest antidepressant effects.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "brain_fog",
      weight: 4,
      reasoning:
        "DHA is structural in brain tissue; deficiency contributes to cognitive symptoms.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "skin_hair_aging",
      weight: 4,
      reasoning:
        "Anti-inflammatory effects extend to skin and hair; supports membrane lipid quality.",
    },
    {
      questionId: "current_supplements",
      answerValue: "none",
      weight: 7,
      reasoning:
        "Foundational supplement with strong evidence and a low risk profile.",
    },
    {
      questionId: "primary_goal",
      answerValue: "feel_younger",
      weight: 5,
      reasoning:
        "Foundational longevity supplement.",
    },
  ],
  legalStatus: {
    region: "global",
    status: "approved-supplement",
    note: "Widely available as an approved dietary supplement. Pharmaceutical-grade omega-3 is FDA-approved for hypertriglyceridemia.",
  },
};
