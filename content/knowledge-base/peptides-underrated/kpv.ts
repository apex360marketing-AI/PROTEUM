import type { Compound } from "@/content/knowledge-base/types";

export const kpv: Compound = {
  id: "kpv",
  name: "KPV",
  category: "peptide",
  classification: "underrated",
  tagline:
    "Lysine-proline-valine — the C-terminal tripeptide of α-MSH with potent anti-inflammatory effects, no melanocortin pigmentation activity.",
  longDescription: `KPV (lysine-proline-valine) is the three-amino-acid C-terminal fragment of α-melanocyte-stimulating hormone (α-MSH). Unlike its parent hormone — and unlike Melanotan II — KPV does not significantly activate melanocortin receptors and produces none of the pigmentation, libido, or appetite effects associated with full-length α-MSH. What it does retain is the parent hormone's anti-inflammatory activity, which is mediated through different downstream pathways than receptor agonism.

This separation makes KPV an interesting research compound: a small, simple, inexpensive-to-synthesize tripeptide with substantial preclinical evidence for anti-inflammatory effects in models of inflammatory bowel disease, allergic skin conditions, and general inflammatory states — without the off-target effects that limit broader α-MSH analogues.

The most-cited research is from the Sitaraman / Merlin / Dalmasso lab at Emory, whose work in mouse colitis models in the late 2000s and 2010s demonstrated that orally administered KPV reduced inflammation severity, restored intestinal epithelial integrity, and modulated gut microbiome inflammation markers. The mechanism appears to involve direct effects on epithelial PepT1 transporter pathways and on inflammatory transcription factors (NF-κB, MAPK).

KPV is dramatically less prominent in consumer peptide spaces than its evidence base would suggest. PROTEUM treats it as one of the cleanest under-the-radar compounds in this knowledge base for inflammatory and gut-related signals.`,
  primaryUses: [
    "Inflammatory bowel disease research",
    "Anti-inflammatory contexts (oral and topical)",
    "Allergic skin conditions",
    "Gut barrier and mucosal repair research",
  ],
  mechanism: `KPV's anti-inflammatory effects are mediated through pathways downstream of melanocortin signaling rather than through MC receptor agonism. In epithelial and immune cells it inhibits NF-κB and MAPK signaling — two of the central transcriptional drivers of pro-inflammatory cytokine production (IL-1β, IL-6, TNF-α). In intestinal epithelium it is taken up via the PepT1 oligopeptide transporter and acts directly on local immune cells in the lamina propria, reducing inflammation severity. The lack of MC receptor activation explains the absence of pigmentation, appetite, or libido effects — distinguishing KPV cleanly from Melanotan II despite the shared parent hormone origin.`,
  studiedFor: [
    {
      domain: "Inflammatory bowel disease",
      evidenceLevel: "emerging",
      summary:
        "Multiple mouse colitis models from independent laboratories show reduced inflammation severity and improved epithelial integrity with oral KPV.",
    },
    {
      domain: "Allergic skin inflammation",
      evidenceLevel: "preliminary",
      summary:
        "Topical applications in animal allergic contact dermatitis models show reduced inflammation. Limited human data.",
    },
    {
      domain: "General inflammatory tone",
      evidenceLevel: "preliminary",
      summary:
        "Animal models suggest broader anti-inflammatory effects extending beyond gut and skin contexts.",
    },
  ],
  typicalProtocol: {
    range:
      "Research-context oral dosing references 250–500 mcg daily. Topical formulations vary widely.",
    duration:
      "Cycles of 4–8 weeks are typical in research-context use.",
    caveats:
      "Most published evidence is from animal models; human RCTs are limited.",
  },
  contraindications: [
    "Pregnancy and lactation — limited safety data.",
    "Active immunosuppression without medical oversight.",
  ],
  keyResearch: [
    {
      title:
        "PepT1-mediated tripeptide KPV uptake reduces intestinal inflammation",
      authors:
        "Dalmasso G, Charrier-Hisamuddin L, Nguyen HT, Yan Y, Sitaraman S, Merlin D",
      year: 2008,
      journal: "Gastroenterology",
      url: "https://pubmed.ncbi.nlm.nih.gov/18242211/",
    },
    {
      title:
        "Anti-inflammatory peptide KPV decreases intestinal inflammation by binding to NLRP3 inflammasome",
      authors: "Various; subsequent Sitaraman lab work",
      year: 2014,
      journal: "Mol Pharmacol",
    },
    {
      title:
        "Lysine-proline-valine, a tripeptide derived from alpha-melanocyte-stimulating hormone, ameliorates trinitrobenzene sulfonic acid-induced colitis in mice",
      authors: "Various",
      year: 2009,
      journal: "Inflamm Bowel Dis",
    },
  ],
  relatedCompounds: ["bpc-157", "thymalin", "ghk-cu"],
  matchSignals: [
    {
      questionId: "current_symptoms",
      answerValue: "gut_inflammation",
      weight: 9,
      reasoning:
        "KPV's strongest evidence base is in inflammatory bowel models — direct match for gut inflammation complaints.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "skin_hair_aging",
      weight: 4,
      reasoning:
        "Anti-inflammatory effects on skin contexts are documented; not the primary use case.",
    },
    {
      questionId: "current_symptoms",
      answerValue: "nagging_pain",
      weight: 4,
      reasoning:
        "General anti-inflammatory tone may help inflammation-driven pain.",
    },
    {
      questionId: "primary_goal",
      answerValue: "fix_specific",
      weight: 5,
      reasoning:
        "Specific gut or inflammation goals align well.",
    },
    {
      questionId: "pain_injury",
      answerValue: "generalized",
      weight: 5,
      reasoning:
        "Generalized inflammatory aches are a plausible secondary use case.",
    },
  ],
  underratedNote:
    "A small, inexpensive tripeptide with a real anti-inflammatory evidence base, almost no consumer-market visibility, and none of the downsides of α-MSH analogues like Melanotan II.",
  brandNote:
    "When the user's primary signal is gut inflammation, KPV deserves a seat at the table alongside BPC-157.",
  legalStatus: {
    region: "US",
    status: "research-only",
    note: "Sold as a research peptide in the United States. Not an approved drug for any indication.",
  },
};
