/**
 * IMPORTANT: These are PLACEHOLDER vendors for UI development only.
 * Replace with real vendor data using the vendor-discovery-skill in
 * .claude/skills/vendor-discovery/SKILL.md.
 *
 * The placeholders are intentionally generic and cover the three verdict
 * tiers (recommended / acceptable / cautious) so the UI can be exercised
 * end-to-end without making implicit endorsements.
 *
 * Every product URL on a placeholder vendor links back to PROTEUM.
 */

import type { Vendor } from "./types";

const TODAY = new Date().toISOString().slice(0, 10);

export const PLACEHOLDER_VENDORS: Vendor[] = [
  {
    id: "placeholder-vendor-one",
    name: "Placeholder Vendor One",
    url: "https://example.com/vendor-one",
    tagline:
      "Demo recommended-tier vendor — replace with a real partner before launch.",
    thirdPartyTested: {
      status: "verified",
      details:
        "Per-batch HPLC and mass-spec COAs published publicly via an independent analytical lab.",
      coaPublic: true,
      testingLab: "Janoshik Analytical (placeholder)",
    },
    manufacturingStandard: {
      status: "GMP",
      details:
        "Manufactured at a GMP-certified facility; certificate of facility audit available on request.",
    },
    ingredientTransparency: {
      status: "full",
      details:
        "Full peptide purity, bacteriostatic content, and excipient list disclosed for every product.",
    },
    customerService: {
      responseTimeHours: 12,
      shipsTrackedFromUS: true,
      refundPolicy:
        "30-day no-questions return policy on unopened items; partial refund on opened.",
    },
    shippingPolicy: {
      freeThreshold: 100,
      averageDays: 3,
      international: true,
    },
    reviewAggregate: {
      trustpilotRating: 4.7,
      trustpilotReviewCount: 850,
      redditSentiment: "positive",
      externalReviewLinks: [
        "https://example.com/trustpilot/vendor-one",
        "https://example.com/reddit-thread-1",
      ],
    },
    qualityScore: 92,
    proteumVerdict: "recommended",
    whyRecommended:
      "Verified third-party testing on every batch with publicly accessible COAs, GMP manufacturing, full transparency on peptide purity and bacteriostatic content, and a long-standing positive review record. Customer service responds within hours and ships tracked from US warehouses.",
    whatToLookFor: [
      "Public COAs from an independent third-party lab — not in-house testing.",
      "Stated peptide purity above 98% and clear bacteriostatic content disclosure.",
      "GMP-certified manufacturing partner with documented audit history.",
      "Tracked shipping from US-based warehouses where applicable.",
      "Responsive customer service with a clear, written refund policy.",
    ],
    whatToAvoid: [
      "Vendors who refuse to share COAs or only show one outdated test.",
      "Stock photos of vials with no batch numbers visible.",
      "Vague language like 'lab tested' without naming the lab.",
      "No physical address, customer service phone, or registered business entity.",
      "Aggressive discount stacking that would imply unrealistic margins.",
    ],
    affiliate: {
      baseAffiliateUrl: "https://example.com/vendor-one?ref=proteum",
      affiliateCode: "PROTEUM (placeholder)",
      commissionRate: 12,
      cookieDays: 60,
      payoutMethod: "PayPal / wire (placeholder)",
      trackingMethod: "redirect",
    },
    carriedCompounds: [
      {
        compoundId: "bpc-157",
        productName: "BPC-157 5mg",
        packageSize: "5mg vial",
        price: 49.99,
        pricePerUnit: 9.998,
        pricePerUnitLabel: "/mg",
        currency: "USD",
        productUrl: "https://example.com/vendor-one/bpc-157?ref=proteum",
        inStock: true,
        notes: "98%+ HPLC purity per batch COA.",
      },
      {
        compoundId: "tb-500",
        productName: "TB-500 5mg",
        packageSize: "5mg vial",
        price: 64.99,
        pricePerUnit: 12.998,
        pricePerUnitLabel: "/mg",
        currency: "USD",
        productUrl: "https://example.com/vendor-one/tb-500?ref=proteum",
        inStock: true,
      },
      {
        compoundId: "ipamorelin",
        productName: "Ipamorelin 5mg",
        packageSize: "5mg vial",
        price: 39.99,
        pricePerUnit: 7.998,
        pricePerUnitLabel: "/mg",
        currency: "USD",
        productUrl: "https://example.com/vendor-one/ipamorelin?ref=proteum",
        inStock: true,
      },
    ],
    servesRegions: ["US", "EU", "CA"],
    paymentMethods: ["credit-card", "crypto"],
    lastReviewed: TODAY,
  },

  {
    id: "placeholder-vendor-two",
    name: "Placeholder Vendor Two",
    url: "https://example.com/vendor-two",
    tagline:
      "Demo acceptable-tier vendor — solid fundamentals, narrower compound range.",
    thirdPartyTested: {
      status: "partial",
      details:
        "COAs published for most but not all products; testing program in active expansion.",
      coaPublic: true,
      testingLab: "Independent analytical lab (placeholder)",
    },
    manufacturingStandard: {
      status: "ISO",
      details:
        "Manufactured at an ISO 9001-certified facility; GMP audit not yet documented.",
    },
    ingredientTransparency: {
      status: "full",
      details:
        "Peptide purity and bacteriostatic content clearly disclosed; some excipient details summarized rather than itemized.",
    },
    customerService: {
      responseTimeHours: 36,
      shipsTrackedFromUS: true,
      refundPolicy: "14-day return window on unopened items.",
    },
    shippingPolicy: {
      freeThreshold: 150,
      averageDays: 5,
      international: false,
    },
    reviewAggregate: {
      trustpilotRating: 4.2,
      trustpilotReviewCount: 220,
      redditSentiment: "mixed",
      externalReviewLinks: ["https://example.com/trustpilot/vendor-two"],
    },
    qualityScore: 79,
    proteumVerdict: "acceptable",
    whyRecommended:
      "Solid third-party testing on most of the catalog, transparent ingredient disclosure, and a generally positive review record. Smaller compound range and longer customer-service response time keep it below the recommended tier — but it remains a credible option for the products it does carry.",
    whatToLookFor: [
      "Confirm the specific product you're considering has a published COA — not all do.",
      "Ask for a sample COA before committing to a larger order.",
      "Note the longer ~36h customer response window when planning purchases.",
    ],
    whatToAvoid: [
      "Don't assume every product has a COA — verify the specific one.",
      "Avoid expecting same-day support; build the response window into your timing.",
    ],
    affiliate: {
      baseAffiliateUrl: "https://example.com/vendor-two?ref=proteum",
      affiliateCode: "PROTEUM (placeholder)",
      commissionRate: 8,
      cookieDays: 30,
      payoutMethod: "ACH (placeholder)",
      trackingMethod: "redirect",
    },
    carriedCompounds: [
      {
        compoundId: "bpc-157",
        productName: "BPC-157 5mg",
        packageSize: "5mg vial",
        price: 44.99,
        pricePerUnit: 8.998,
        pricePerUnitLabel: "/mg",
        currency: "USD",
        productUrl: "https://example.com/vendor-two/bpc-157?ref=proteum",
        inStock: true,
      },
      {
        compoundId: "ghk-cu",
        productName: "GHK-Cu Topical Serum 30ml",
        packageSize: "30ml bottle",
        price: 59.99,
        pricePerUnit: 1.999,
        pricePerUnitLabel: "/ml",
        currency: "USD",
        productUrl: "https://example.com/vendor-two/ghk-cu?ref=proteum",
        inStock: true,
        notes: "Topical serum formulation; injectable forms not stocked.",
      },
    ],
    servesRegions: ["US"],
    paymentMethods: ["credit-card"],
    lastReviewed: TODAY,
  },

  {
    id: "placeholder-vendor-three",
    name: "Placeholder Vendor Three",
    url: "https://example.com/vendor-three",
    tagline:
      "Demo cautious-tier vendor — included to demonstrate the warning treatment in the UI.",
    thirdPartyTested: {
      status: "unverified",
      details:
        "Self-attested testing only; no independent lab disclosed and no public COAs.",
      coaPublic: false,
      testingLab: null,
    },
    manufacturingStandard: {
      status: "self-attested",
      details:
        "Vendor claims GMP-equivalent manufacturing standards but no independent audit documentation is published.",
    },
    ingredientTransparency: {
      status: "partial",
      details:
        "Peptide name and dose disclosed; purity claims provided but not independently verified.",
    },
    customerService: {
      responseTimeHours: 72,
      shipsTrackedFromUS: false,
      refundPolicy: "Refunds case-by-case; no published policy.",
    },
    shippingPolicy: {
      freeThreshold: null,
      averageDays: 10,
      international: true,
    },
    reviewAggregate: {
      trustpilotRating: 3.8,
      trustpilotReviewCount: 60,
      redditSentiment: "mixed",
      externalReviewLinks: ["https://example.com/trustpilot/vendor-three"],
    },
    qualityScore: 64,
    proteumVerdict: "cautious",
    whyCautious:
      "No independent third-party testing or published COAs, manufacturing standards are self-attested, and customer service is inconsistent. Listed here only because some users will encounter the brand and we'd rather they see our concerns than discover them after purchasing — not as an endorsement.",
    whatToLookFor: [
      "Independent lab COAs — request one for any specific product before purchase.",
      "Documented manufacturing audit, not self-attested standards.",
      "A published written refund policy with a defined window.",
    ],
    whatToAvoid: [
      "Long customer service response windows during issue resolution.",
      "Assumptions about purity without seeing a real COA.",
      "International-only shipping when domestic alternatives exist with verified testing.",
    ],
    affiliate: {
      baseAffiliateUrl: "https://example.com/vendor-three?ref=proteum",
      affiliateCode: "PROTEUM (placeholder)",
      commissionRate: 15,
      cookieDays: 30,
      payoutMethod: "Crypto only (placeholder)",
      trackingMethod: "redirect",
    },
    carriedCompounds: [
      {
        compoundId: "bpc-157",
        productName: "BPC-157 5mg",
        packageSize: "5mg vial",
        price: 32.99,
        pricePerUnit: 6.598,
        pricePerUnitLabel: "/mg",
        currency: "USD",
        productUrl: "https://example.com/vendor-three/bpc-157?ref=proteum",
        inStock: true,
        notes: "Lower price reflects lower verification — not a discount.",
      },
    ],
    servesRegions: ["US", "EU", "CA", "global"],
    paymentMethods: ["crypto"],
    lastReviewed: TODAY,
  },
];

export const allVendors: readonly Vendor[] = PLACEHOLDER_VENDORS;

const vendorById = new Map(allVendors.map((v) => [v.id, v]));

export function getVendorById(id: string): Vendor | undefined {
  return vendorById.get(id);
}

/**
 * Vendors that carry the given compound, sorted by quality score descending.
 * Out-of-stock products are filtered out by default.
 */
export function getVendorsForCompound(
  compoundId: string,
  { includeOutOfStock = false }: { includeOutOfStock?: boolean } = {},
): Vendor[] {
  return [...allVendors]
    .filter((v) =>
      v.carriedCompounds.some(
        (p) => p.compoundId === compoundId && (includeOutOfStock || p.inStock),
      ),
    )
    .sort((a, b) => b.qualityScore - a.qualityScore);
}

export function getCarriedCompound(vendor: Vendor, compoundId: string) {
  return vendor.carriedCompounds.find((p) => p.compoundId === compoundId);
}
