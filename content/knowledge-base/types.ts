/**
 * PROTEUM knowledge base type system.
 * Every compound entry conforms to the Compound shape; the recommendation
 * engine consumes the matchSignals[] field to map quiz answers onto rankings.
 */

export type CompoundCategory = "peptide" | "vitamin" | "mineral" | "cofactor";
export type Classification = "popular" | "underrated" | "foundational";
export type EvidenceLevel = "preliminary" | "emerging" | "established";
export type LegalRegion = "US" | "EU" | "CA" | "global";
export type LegalRegionStatus =
  | "research-only"
  | "approved-supplement"
  | "prescription"
  | "restricted";

export type StudiedFor = {
  /** Human-readable domain — "recovery", "cognition", "longevity", "immune", etc. */
  domain: string;
  evidenceLevel: EvidenceLevel;
  /** 2–3 sentence plain-language summary of what the literature shows. */
  summary: string;
};

export type ProtocolNote = {
  /** "Studies typically use X–Y mcg daily" */
  range: string;
  /** "Short cycles of 4–8 weeks are most studied" */
  duration: string;
  /** "Variability exists; not medical advice" */
  caveats: string;
};

export type ResearchCitation = {
  title: string;
  /** "Sikiric P, et al." */
  authors: string;
  year: number;
  journal: string;
  /** PubMed or DOI link, optional. */
  url?: string;
};

export type MatchSignal = {
  /** Matches a quiz question id from content/quiz-questions.ts. */
  questionId: string;
  /** The specific option value that signals this compound. */
  answerValue: string;
  /** 1–10. Higher = stronger signal. */
  weight: number;
  /** Why this answer signals this compound — used to derive user-facing reasons. */
  reasoning: string;
};

export type LegalStatus = {
  region: LegalRegion;
  status: LegalRegionStatus;
  note: string;
};

export type Compound = {
  /** Slug — used for routing: /compounds/[id]. Lower-snake. */
  id: string;
  /** Display name. */
  name: string;
  category: CompoundCategory;
  classification: Classification;
  /** 1-line summary, max ~80 chars. */
  tagline: string;
  /** 200–400 word overview. Markdown-friendly. */
  longDescription: string;
  /** 3–6 short use phrases. */
  primaryUses: string[];
  /** 100–200 word how-it-works explanation. */
  mechanism: string;
  studiedFor: StudiedFor[];
  typicalProtocol?: ProtocolNote;
  contraindications: string[];
  keyResearch: ResearchCitation[];
  /** IDs of related compounds. */
  relatedCompounds: string[];
  matchSignals: MatchSignal[];
  /** Optional editorial commentary. 1–2 sentences. */
  brandNote?: string;
  /** Optional reason this compound is underrated, for the underrated set. */
  underratedNote?: string;
  legalStatus: LegalStatus;
};

/**
 * Lifestyle entries are simpler — they aren't compounds and don't get a
 * detail page (yet). They surface in the results recommendations alongside
 * peptides and vitamins.
 */
export type LifestyleRecommendation = {
  id: string;
  name: string;
  tagline: string;
  rationale: string;
  matchSignals: MatchSignal[];
};
