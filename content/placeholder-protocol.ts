/**
 * Placeholder protocol data for the results page UI shell.
 * Real recommendations are generated in Prompt 3 (STEP 04+).
 */

export type RecommendationCategory = "peptides" | "vitamins" | "lifestyle";

export type Recommendation = {
  id: string;
  category: RecommendationCategory;
  name: string;
  tagline: string;
  /** 1–3 sapphire dots — higher = stronger match. */
  matchStrength: 1 | 2 | 3;
  rationale: string;
  /** True when a vendor selection screen exists (Prompt 4). */
  hasVendorOptions: boolean;
};

export const placeholderRecommendations: Recommendation[] = [
  // Peptides
  {
    id: "bpc-157",
    category: "peptides",
    name: "BPC-157",
    tagline: "Recovery & tissue repair",
    matchStrength: 3,
    rationale:
      "Pentadecapeptide with the strongest evidence base for soft-tissue and gut repair. Maps directly to the recovery-state and pain-or-injury inputs you flagged.",
    hasVendorOptions: false,
  },
  {
    id: "tesamorelin",
    category: "peptides",
    name: "Tesamorelin",
    tagline: "Body composition & longevity",
    matchStrength: 2,
    rationale:
      "GHRH analogue. Trial data supports visceral-fat reduction and downstream IGF-1 effects — fits the body-composition and longevity-marker goals.",
    hasVendorOptions: false,
  },
  {
    id: "selank",
    category: "peptides",
    name: "Selank",
    tagline: "Cognitive & mood",
    matchStrength: 2,
    rationale:
      "Anxiolytic peptide with cognitive-enhancement signal in Russian and Eastern European literature. Aligns with cognitive-state and mood inputs.",
    hasVendorOptions: false,
  },

  // Vitamins
  {
    id: "vitamin-d3-k2",
    category: "vitamins",
    name: "Vitamin D3 + K2",
    tagline: "Foundational hormone & bone",
    matchStrength: 3,
    rationale:
      "The single highest-yield supplement for most adults. K2 directs calcium where it belongs; D3 underpins testosterone, immunity, and mood.",
    hasVendorOptions: false,
  },
  {
    id: "magnesium-glycinate",
    category: "vitamins",
    name: "Magnesium glycinate",
    tagline: "Sleep, recovery, nervous system",
    matchStrength: 3,
    rationale:
      "Glycinate form crosses the BBB readily and pairs cleanly with sleep, anxiety, and recovery inputs. Almost everyone is deficient.",
    hasVendorOptions: false,
  },
  {
    id: "omega-3",
    category: "vitamins",
    name: "Omega-3 (EPA/DHA)",
    tagline: "Inflammation, cognition, cardiovascular",
    matchStrength: 2,
    rationale:
      "High-EPA blends modulate inflammatory tone; DHA supports neural membranes. Strong fit if cognitive or inflammation symptoms came up.",
    hasVendorOptions: false,
  },
  {
    id: "b-complex",
    category: "vitamins",
    name: "B-complex (methylated)",
    tagline: "Energy & methylation",
    matchStrength: 2,
    rationale:
      "Methylated forms (methylfolate, methylcobalamin) bypass MTHFR variants. Underrated for energy-state and mood-state inputs.",
    hasVendorOptions: false,
  },

  // Lifestyle
  {
    id: "sleep-protocol",
    category: "lifestyle",
    name: "Sleep optimization protocol",
    tagline: "The non-negotiable foundation",
    matchStrength: 3,
    rationale:
      "Light timing, temperature, magnesium, and consistency. Compounds upstream of every other recommendation — including peptide response.",
    hasVendorOptions: false,
  },
  {
    id: "resistance-training",
    category: "lifestyle",
    name: "Resistance training cadence",
    tagline: "The other non-negotiable",
    matchStrength: 3,
    rationale:
      "3–4 sessions per week, mostly compound lifts, periodized. The single most-evidenced intervention for body composition, longevity, and metabolic health.",
    hasVendorOptions: false,
  },
];

export const recommendationCounts = {
  peptides: placeholderRecommendations.filter((r) => r.category === "peptides")
    .length,
  vitamins: placeholderRecommendations.filter((r) => r.category === "vitamins")
    .length,
  lifestyle: placeholderRecommendations.filter(
    (r) => r.category === "lifestyle",
  ).length,
} as const;
