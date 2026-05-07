import type { Compound } from "@/content/knowledge-base/types";

export const melanotanII: Compound = {
  id: "melanotan-ii",
  name: "Melanotan II",
  category: "peptide",
  classification: "popular",
  tagline:
    "Synthetic α-MSH analogue studied for melanocortin pathway activation, pigmentation, and libido.",
  longDescription: `Melanotan II is a synthetic, cyclic analogue of α-melanocyte-stimulating hormone (α-MSH) developed in the 1980s at the University of Arizona. Unlike its parent hormone, which is rapidly degraded in circulation, Melanotan II is metabolically stable enough to produce sustained activation of the melanocortin receptor family — primarily MC1R (pigmentation), MC3R and MC4R (sexual function and energy balance), and MC5R (lipid metabolism).

Its best-known effect is darkening of the skin via MC1R-mediated melanogenesis, which sits behind the consumer market for "tanning peptides." A second, less-discussed but well-documented effect is increased sexual arousal and erection initiation via central MC3R/MC4R activation — the same pharmacology that motivated the development of its more selective sibling PT-141 (Bremelanotide).

The clinical evidence base for Melanotan II is older and limited. Most studies are small, dating from the 1990s and 2000s, and focused either on photoprotection (whether melanocortin agonism could reduce sunburn risk) or on sexual function endpoints. There are no Phase III trials, and Melanotan II was never developed past early human studies — partly because PT-141 emerged as a more receptor-selective candidate for sexual dysfunction, and partly because the side-effect profile (nausea, blood pressure effects, freckling, mole darkening) made broad pharmaceutical development unattractive.

Today Melanotan II is a research chemical with significant grey-market consumer use, particularly for cosmetic tanning. The pharmacological effects are real and well-characterized; the long-term safety profile in regular users has not been studied.`,
  primaryUses: [
    "Skin pigmentation research (MC1R activation)",
    "Sexual function and libido research (MC3R/MC4R)",
    "Appetite suppression contexts",
    "Photoprotection research",
  ],
  mechanism: `Melanotan II is a non-selective melanocortin receptor agonist, with the highest affinity at MC1R, MC3R, MC4R, and MC5R. Activation of MC1R on melanocytes upregulates eumelanin synthesis via MITF (microphthalmia-associated transcription factor), producing skin darkening that is largely independent of UV exposure. Central activation of MC3R and MC4R in the hypothalamus modulates sexual arousal pathways and reduces food intake — both effects observed in animal models and small human studies. MC5R activation has effects on sebaceous gland function and lipid handling. Because Melanotan II activates all four receptors at clinically relevant doses, its effects are broader and less targetable than receptor-selective agonists like PT-141.`,
  studiedFor: [
    {
      domain: "Skin pigmentation",
      evidenceLevel: "emerging",
      summary:
        "Multiple small trials confirm reliable skin darkening via MC1R activation, with effects emerging over 1–2 weeks of administration.",
    },
    {
      domain: "Sexual function",
      evidenceLevel: "emerging",
      summary:
        "Early clinical studies showed effects on erection initiation in men with erectile dysfunction. Development for this indication shifted to PT-141 (Bremelanotide).",
    },
    {
      domain: "Appetite suppression",
      evidenceLevel: "preliminary",
      summary:
        "Animal models show consistent appetite reduction. Human evidence is more limited but supportive.",
    },
    {
      domain: "Photoprotection",
      evidenceLevel: "preliminary",
      summary:
        "Increased melanin can theoretically reduce UV damage; rigorous photoprotection efficacy data is limited.",
    },
  ],
  typicalProtocol: {
    range:
      "Research-context dosing typically references 0.25–1.0 mg subcutaneous, often during a loading phase before reduction to maintenance.",
    duration:
      "Loading phases of 1–2 weeks; chronic open-ended use is common in consumer settings but not well-studied.",
    caveats:
      "Side effects are common at therapeutic doses: nausea, flushing, blood pressure changes, mole darkening. New or changing pigmented lesions warrant dermatological evaluation.",
  },
  contraindications: [
    "Personal or family history of melanoma or atypical nevi.",
    "Cardiovascular disease — blood pressure effects are common.",
    "Pregnancy and lactation.",
    "Existing pigmented skin lesions of concern.",
  ],
  keyResearch: [
    {
      title:
        "Effects of an alpha-melanocyte-stimulating hormone analogue on tanning of human skin",
      authors:
        "Levine N, Sheftel SN, Eytan T, Dorr RT, Hadley ME, Weinrach JC, Ertl GA, Toth K, McGee DL, Hruby VJ",
      year: 1991,
      journal: "JAMA",
      url: "https://pubmed.ncbi.nlm.nih.gov/1880237/",
    },
    {
      title:
        "Effect of alpha-melanocyte-stimulating hormone analog on penile erection and sexual desire in men with organic erectile dysfunction",
      authors: "Wessells H, Fuciarelli K, Hansen J, Hadley ME, et al.",
      year: 2000,
      journal: "Urology",
      url: "https://pubmed.ncbi.nlm.nih.gov/10722887/",
    },
    {
      title:
        "Synthesis of melanotropin analogues: design rationale and biological activity",
      authors: "Hruby VJ, Lu D, Sharma SD, et al.",
      year: 1995,
      journal: "J Med Chem",
      url: "https://pubmed.ncbi.nlm.nih.gov/7752199/",
    },
  ],
  relatedCompounds: ["pt-141"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "loss_strength_libido",
      weight: 5,
      reasoning:
        "Central MC3R/MC4R activation modulates sexual arousal pathways. PT-141 is a more selective alternative.",
    },
    {
      questionId: "primary_goal",
      answerValue: "fix_specific",
      weight: 3,
      reasoning:
        "Specific cosmetic or libido goals can drive interest, but this is a niche signal.",
    },
  ],
  brandNote:
    "Melanotan II's grey-market consumer use vastly exceeds its clinical evidence base. Pigmented lesion changes during use are real risk markers — see a dermatologist if any nevi change.",
  legalStatus: {
    region: "US",
    status: "research-only",
    note: "Not approved for any indication in the United States. PT-141 (Bremelanotide) is the FDA-approved melanocortin agonist; Melanotan II is research-only.",
  },
};
