import type { Compound } from "@/content/knowledge-base/types";

export const zinc: Compound = {
  id: "zinc",
  name: "Zinc",
  category: "mineral",
  classification: "foundational",
  tagline:
    "Essential trace mineral central to immune function, testosterone synthesis, and over 300 enzymatic reactions. Pair with copper to avoid imbalance.",
  longDescription: `Zinc is an essential trace mineral involved in more than 300 enzymatic reactions, including DNA synthesis, immune cell function, wound healing, and the synthesis of testosterone and thyroid hormones. The Recommended Dietary Allowance is 8–11 mg/day for adults. Mild zinc deficiency is common, particularly in vegetarian/vegan diets (plant phytates impair absorption), older adults, and athletes (sweat losses).

Zinc supplementation has the strongest evidence base for immune function — multiple meta-analyses show that zinc lozenges initiated at first cold-symptom onset reduce common cold duration by roughly 30%. Zinc is also important for the upstream production of male testosterone (zinc is a cofactor in the enzymes that convert cholesterol to testosterone), and deficiency contributes to reduced testosterone in deficient men.

The critical caveat with zinc supplementation is the copper imbalance risk. Zinc and copper compete for absorption in the gut; chronic high-dose zinc supplementation (>40 mg/day) can induce copper deficiency, which can cause anemia, neurological symptoms, and immune dysfunction. Zinc supplements taken long-term should either include copper (typical ratio: 15:1 zinc to copper) or be balanced through dietary copper intake.

Zinc forms differ in bioavailability: picolinate, citrate, and bisglycinate are the highest-yielding forms; oxide is poorly absorbed. Lozenges (zinc gluconate or acetate) are the standard for immune-support timing.`,
  primaryUses: [
    "Immune function and cold duration reduction",
    "Testosterone and male hormone support",
    "Wound healing and skin support",
    "Foundational mineral for athletic populations",
    "Mood and cognitive support in deficient populations",
  ],
  mechanism: `Zinc acts as a structural component of zinc-finger transcription factors and as a catalytic cofactor for enzymes including superoxide dismutase, alcohol dehydrogenase, carbonic anhydrase, and matrix metalloproteinases. In immune function, zinc is required for the development and activation of T cells, natural killer cells, and macrophages, and it directly modulates antiviral activity in the upper respiratory tract — the mechanism behind cold-duration reduction with lozenges. In male hormone synthesis, zinc is a cofactor in enzymes converting cholesterol to testosterone in Leydig cells, and deficiency reduces testosterone production. Zinc and copper compete for absorption via DMT1 transporters in the gut, which is why chronic high-dose zinc requires copper balance.`,
  studiedFor: [
    {
      domain: "Common cold duration",
      evidenceLevel: "established",
      summary:
        "Multiple Cochrane reviews and meta-analyses confirm zinc lozenges reduce common cold duration by approximately 30% when started within 24h of symptom onset.",
    },
    {
      domain: "Testosterone in deficient men",
      evidenceLevel: "emerging",
      summary:
        "Supplementation increases testosterone in zinc-deficient populations. Effects in non-deficient men are modest at best.",
    },
    {
      domain: "Wound healing",
      evidenceLevel: "emerging",
      summary:
        "Zinc deficiency impairs wound healing; supplementation in deficient populations improves healing rates.",
    },
    {
      domain: "Macular degeneration",
      evidenceLevel: "established",
      summary:
        "AREDS-formulation zinc reduces progression of age-related macular degeneration in registered trials.",
    },
  ],
  typicalProtocol: {
    range:
      "15–30 mg elemental zinc daily for chronic supplementation, paired with 1–2 mg copper. Lozenges for cold treatment use 13–23 mg per lozenge, every 2–3 hours.",
    duration:
      "Chronic supplementation should include copper to prevent imbalance. Cold-duration use is short-term (a few days).",
    caveats:
      "Chronic high-dose zinc (>40 mg/day) without copper risks anemia and neurological symptoms.",
  },
  contraindications: [
    "Copper deficiency or Wilson's disease.",
    "Concurrent antibiotic therapy (tetracyclines, fluoroquinolones) — separate dosing.",
    "Acute kidney injury — review dose with prescriber.",
  ],
  keyResearch: [
    {
      title:
        "Zinc for the common cold",
      authors: "Singh M, Das RR",
      year: 2013,
      journal: "Cochrane Database Syst Rev",
      url: "https://pubmed.ncbi.nlm.nih.gov/23775705/",
    },
    {
      title:
        "Zinc status and serum testosterone levels of healthy adults",
      authors: "Prasad AS, Mantzoros CS, Beck FW, et al.",
      year: 1996,
      journal: "Nutrition",
      url: "https://pubmed.ncbi.nlm.nih.gov/8875519/",
    },
    {
      title:
        "Zinc in human health: effect of zinc on immune cells",
      authors: "Prasad AS",
      year: 2008,
      journal: "Mol Med",
      url: "https://pubmed.ncbi.nlm.nih.gov/18385818/",
    },
    {
      title:
        "Lutein/zeaxanthin and omega-3 fatty acids for age-related macular degeneration: AREDS2 randomized clinical trial",
      authors: "AREDS2 Research Group",
      year: 2013,
      journal: "JAMA",
      url: "https://pubmed.ncbi.nlm.nih.gov/23644932/",
    },
  ],
  relatedCompounds: ["vitamin-d3", "omega-3", "magnesium-glycinate"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "loss_strength_libido",
      weight: 6,
      reasoning:
        "Zinc is a cofactor for testosterone synthesis; deficiency contributes to libido and strength symptoms.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "skin_hair_aging",
      weight: 5,
      reasoning:
        "Zinc is essential for skin and hair health; deficiency causes characteristic dermal symptoms.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "low_energy",
      weight: 4,
      reasoning:
        "Mild zinc deficiency contributes to fatigue and low energy.",
    },
    {
      questionId: "current_supplements",
      answerValue: "none",
      weight: 4,
      reasoning:
        "Foundational mineral worth considering for users on nothing.",
    },
    {
      questionId: "current_supplements",
      answerValue: "basics",
      weight: 4,
      reasoning:
        "Most basics include zinc; the framing still applies.",
    },
    {
      questionId: "activity_level",
      answerValue: "very_active",
      weight: 4,
      reasoning:
        "Sweat losses make zinc deficiency more common in athletic populations.",
    },
  ],
  brandNote:
    "Take chronic zinc with copper. Lozenges for colds are dramatically more effective than oral capsules for the immune-timing use case.",
  legalStatus: {
    region: "global",
    status: "approved-supplement",
    note: "Widely available as an approved dietary supplement globally.",
  },
};
