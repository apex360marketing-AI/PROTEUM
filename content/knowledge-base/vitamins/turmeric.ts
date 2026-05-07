import type { Compound } from "@/content/knowledge-base/types";

export const turmeric: Compound = {
  id: "turmeric",
  name: "Turmeric / Curcumin",
  category: "cofactor",
  classification: "foundational",
  tagline:
    "Polyphenol with strong anti-inflammatory and joint-health evidence — bioavailability is the primary practical issue.",
  longDescription: `Curcumin is the principal bioactive compound in turmeric (Curcuma longa), a rhizome used in South Asian cooking and Ayurvedic medicine for thousands of years. Modern research has produced an unusually large evidence base for an herbal supplement: hundreds of clinical trials covering inflammation, joint health, mood, metabolic markers, and oncology adjuncts.

The primary obstacle to clinical use of curcumin is bioavailability. Native curcumin is poorly absorbed from the gut, rapidly metabolized in the liver, and quickly excreted — leading to negligible systemic concentrations from typical doses of plain turmeric powder. This is the core reason that, despite millennia of culinary turmeric use, modern clinical evidence relies almost entirely on enhanced-absorption formulations.

The best-evidenced bioavailable forms are: piperine-coupled curcumin (BCM-95, Curcumin C3 + BioPerine — piperine inhibits hepatic metabolism, increasing bioavailability roughly 20-fold), liposomal curcumin, phospholipid-bound curcumin (Meriva), and nanoparticle formulations (Theracurmin). These deliver curcumin at multiples of plain extract bioavailability and are the basis for most positive trial outcomes.

Curcumin's strongest evidence is in osteoarthritis (multiple meta-analyses show pain reduction comparable to ibuprofen), inflammatory markers (consistent CRP reduction), depression as adjunct therapy, and metabolic markers in type 2 diabetes. The mechanism is multi-pathway anti-inflammatory action.

PROTEUM treats curcumin as a foundational anti-inflammatory — with the bioavailable-formulation caveat front and center.`,
  primaryUses: [
    "Anti-inflammatory support",
    "Osteoarthritis and joint pain",
    "Mood and depression adjunct",
    "Metabolic markers in type 2 diabetes",
    "General longevity / inflammaging support",
  ],
  mechanism: `Curcumin's anti-inflammatory effects are multi-pathway: inhibition of NF-κB nuclear translocation (the central transcription factor for pro-inflammatory cytokine production), inhibition of cyclooxygenase-2 (COX-2, the inflammation-induced isoform that NSAIDs target), reduction of pro-inflammatory cytokines (TNF-α, IL-1β, IL-6), and modulation of NLRP3 inflammasome activation. Curcumin also has direct antioxidant activity and modulates mitochondrial biogenesis through PGC-1α and Nrf2 pathways. The native compound is rapidly conjugated and excreted by the liver, requiring formulation strategies (piperine, liposomes, phospholipid complexes, nanoparticles) to achieve clinically meaningful systemic concentrations.`,
  studiedFor: [
    {
      domain: "Osteoarthritis",
      evidenceLevel: "established",
      summary:
        "Multiple meta-analyses show curcumin formulations produce pain reductions comparable to NSAIDs in knee osteoarthritis, with better tolerability.",
    },
    {
      domain: "Inflammatory markers",
      evidenceLevel: "established",
      summary:
        "Consistent reductions in CRP and inflammatory cytokines in trials across diverse populations.",
    },
    {
      domain: "Depression",
      evidenceLevel: "emerging",
      summary:
        "Multiple controlled trials show curcumin adjunct to standard care improves depression scores; effect sizes are modest but consistent.",
    },
    {
      domain: "Type 2 diabetes markers",
      evidenceLevel: "emerging",
      summary:
        "Trials show modest improvements in fasting glucose, HbA1c, and insulin sensitivity.",
    },
    {
      domain: "Cognitive aging",
      evidenceLevel: "preliminary",
      summary:
        "Some trials in older adults show modest cognitive benefits; broader claims about Alzheimer's prevention are not yet validated.",
    },
  ],
  typicalProtocol: {
    range:
      "1000–2000 mg of bioavailable formulation daily (piperine-coupled, Meriva, or Theracurmin equivalent).",
    duration:
      "Open-ended; well-tolerated long-term.",
    caveats:
      "Plain turmeric powder is dramatically less bioavailable than enhanced formulations. The trial evidence is on bioavailable forms.",
  },
  contraindications: [
    "Active anticoagulant therapy — modest antiplatelet effects.",
    "Active gallstone disease — curcumin stimulates gallbladder contraction.",
    "Pregnancy — traditional cautions; modern evidence limited.",
    "Iron deficiency anemia — curcumin can chelate iron.",
  ],
  keyResearch: [
    {
      title:
        "Efficacy and safety of curcumin and Curcuma longa extract in the treatment of arthritis: a systematic review and meta-analysis of randomized controlled trials",
      authors: "Daily JW, Yang M, Park S",
      year: 2016,
      journal: "J Med Food",
      url: "https://pubmed.ncbi.nlm.nih.gov/27533649/",
    },
    {
      title:
        "Efficacy and safety of curcumin in major depressive disorder: a randomized controlled trial",
      authors: "Sanmukhani J, Satodia V, Trivedi J, et al.",
      year: 2014,
      journal: "Phytother Res",
      url: "https://pubmed.ncbi.nlm.nih.gov/23832433/",
    },
    {
      title:
        "Influence of piperine on the pharmacokinetics of curcumin in animals and human volunteers",
      authors: "Shoba G, Joy D, Joseph T, Majeed M, Rajendran R, Srinivas PS",
      year: 1998,
      journal: "Planta Med",
      url: "https://pubmed.ncbi.nlm.nih.gov/9619120/",
    },
    {
      title:
        "Curcumin and inflammatory bowel disease: potential and limits of innovative treatments",
      authors: "Vecchi Brumatti L, Marcuzzi A, Tricarico PM, et al.",
      year: 2014,
      journal: "Molecules",
      url: "https://pubmed.ncbi.nlm.nih.gov/25401044/",
    },
  ],
  relatedCompounds: ["omega-3", "vitamin-d3", "ashwagandha"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "nagging_pain",
      weight: 7,
      reasoning:
        "Strongest osteoarthritis evidence in this knowledge base; pain reduction comparable to NSAIDs in trials.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "gut_inflammation",
      weight: 6,
      reasoning:
        "Anti-inflammatory mechanism extends to gut inflammation; some IBD trial data is encouraging.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "anxiety_low_mood",
      weight: 5,
      reasoning:
        "Curcumin has emerging adjunct evidence in depression.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "skin_hair_aging",
      weight: 4,
      reasoning:
        "Anti-inflammatory and antioxidant effects support skin contexts.",
    },
    {
      questionId: "pain_injury",
      answerValue: "specific",
      weight: 5,
      reasoning:
        "Localized inflammation and joint pain are well-supported indications.",
    },
    {
      questionId: "pain_injury",
      answerValue: "generalized",
      weight: 5,
      reasoning:
        "Generalized inflammatory aches respond to curcumin's broad anti-inflammatory mechanism.",
    },
    {
      questionId: "primary_goal",
      answerValue: "fix_specific",
      weight: 5,
      reasoning:
        "Specific pain or inflammation goals fit directly.",
    },
    {
      questionId: "primary_goal",
      answerValue: "feel_younger",
      weight: 4,
      reasoning:
        "Inflammaging is a longevity priority; curcumin is the highest-evidence anti-inflammatory dietary intervention.",
    },
  ],
  brandNote:
    "Plain turmeric powder is poorly absorbed. Bioavailable formulation is non-negotiable for clinical effect.",
  legalStatus: {
    region: "global",
    status: "approved-supplement",
    note: "Widely available as an approved dietary supplement globally.",
  },
};
