/**
 * PROTEUM vendor schema. Every featured vendor is an affiliate partner.
 * The qualityScore is computed from six weighted criteria; the proteumVerdict
 * is derived from the score band.
 *
 * Quality criteria weights (total 100):
 *   - thirdPartyTested        : 30
 *   - manufacturingStandard   : 15
 *   - ingredientTransparency  : 20
 *   - customerService         : 10
 *   - shippingPolicy          :  5
 *   - reviewAggregate         : 20
 *
 * Verdict bands:
 *   90+   → recommended
 *   75–89 → acceptable
 *   60–74 → cautious
 *   <60   → not featured
 */

export type ThirdPartyTesting = {
  status: "verified" | "partial" | "unverified" | "none";
  /** Plain-language detail, e.g. "COAs published per batch via Janoshik Analytical". */
  details: string;
  /** Whether COAs are publicly accessible. */
  coaPublic: boolean;
  /** Name of the third-party lab, or null. */
  testingLab: string | null;
};

export type ManufacturingStandard = {
  status: "GMP" | "ISO" | "self-attested" | "unverified";
  details: string;
};

export type IngredientTransparency = {
  status: "full" | "partial" | "opaque";
  details: string;
};

export type ServiceQuality = {
  /** Average response time in hours, or null if unknown. */
  responseTimeHours: number | null;
  shipsTrackedFromUS: boolean;
  refundPolicy: string;
};

export type ShippingPolicy = {
  /** USD threshold for free shipping, or null if no threshold. */
  freeThreshold: number | null;
  averageDays: number;
  international: boolean;
};

export type ReviewAggregate = {
  trustpilotRating?: number;
  trustpilotReviewCount?: number;
  redditSentiment?: "positive" | "mixed" | "negative" | "unknown";
  /** Links to verifiable review sources for users to dig deeper. */
  externalReviewLinks: string[];
};

export type AffiliateConfig = {
  /** Base URL of the vendor with our affiliate code already embedded. */
  baseAffiliateUrl: string;
  affiliateCode: string;
  /** 0–100 percentage; null if unknown. */
  commissionRate: number | null;
  cookieDays: number | null;
  payoutMethod: string | null;
  trackingMethod: "redirect" | "direct-link" | "discount-code";
};

export type VendorCompound = {
  /** Matches Compound.id from the knowledge base. */
  compoundId: string;
  productName: string;
  packageSize: string;
  price: number;
  /** Computed: price per mg / per serving / per unit. */
  pricePerUnit: number;
  /** Plain-language unit label, e.g. "/mg" or "/serving". */
  pricePerUnitLabel: string;
  currency: "USD" | "EUR" | "CAD";
  /** Direct product page URL with affiliate code already appended. */
  productUrl: string;
  inStock: boolean;
  notes?: string;
};

export type ProteumVerdict = "recommended" | "acceptable" | "cautious";

export type Vendor = {
  /** Slug — used for /vendors/[id] and /go/[vendorId]/. Lower-snake. */
  id: string;
  name: string;
  /** Canonical homepage URL (no affiliate code). */
  url: string;
  logoUrl?: string;
  tagline: string;

  // Quality criteria
  thirdPartyTested: ThirdPartyTesting;
  manufacturingStandard: ManufacturingStandard;
  ingredientTransparency: IngredientTransparency;
  customerService: ServiceQuality;
  shippingPolicy: ShippingPolicy;
  reviewAggregate: ReviewAggregate;

  /** 0–100 weighted aggregate of the six criteria. */
  qualityScore: number;

  // Editorial assessment
  proteumVerdict: ProteumVerdict;
  /** 2–4 sentences explaining why this is recommended (if applicable). */
  whyRecommended?: string;
  /** Used when proteumVerdict === "cautious". */
  whyCautious?: string;
  /** User-facing buyer guidance — what good vendors look like. */
  whatToLookFor: string[];
  /** Red flags. */
  whatToAvoid: string[];

  affiliate: AffiliateConfig;

  carriedCompounds: VendorCompound[];

  // Operational
  servesRegions: string[];
  paymentMethods: string[];
  /** ISO date — review every 90 days per editorial cadence. */
  lastReviewed: string;
};

// ─────────────── Score helpers ───────────────

/**
 * Component scores (0–N) for each criterion. Used to compute qualityScore.
 * Authors can either set qualityScore manually or call computeQualityScore().
 */
export function scoreThirdPartyTesting(t: ThirdPartyTesting): number {
  // Out of 30
  switch (t.status) {
    case "verified":
      return t.coaPublic ? 30 : 24;
    case "partial":
      return t.coaPublic ? 20 : 14;
    case "unverified":
      return 8;
    case "none":
      return 0;
  }
}

export function scoreManufacturingStandard(m: ManufacturingStandard): number {
  // Out of 15
  switch (m.status) {
    case "GMP":
      return 15;
    case "ISO":
      return 13;
    case "self-attested":
      return 7;
    case "unverified":
      return 0;
  }
}

export function scoreIngredientTransparency(t: IngredientTransparency): number {
  // Out of 20
  switch (t.status) {
    case "full":
      return 20;
    case "partial":
      return 12;
    case "opaque":
      return 0;
  }
}

export function scoreServiceQuality(s: ServiceQuality): number {
  // Out of 10
  let score = 0;
  if (s.responseTimeHours !== null) {
    if (s.responseTimeHours <= 12) score += 4;
    else if (s.responseTimeHours <= 48) score += 2;
    else score += 1;
  }
  if (s.shipsTrackedFromUS) score += 3;
  if (s.refundPolicy && s.refundPolicy.length > 12) score += 3;
  return Math.min(10, score);
}

export function scoreShippingPolicy(p: ShippingPolicy): number {
  // Out of 5
  let score = 0;
  if (p.averageDays <= 3) score += 2;
  else if (p.averageDays <= 7) score += 1;
  if (p.freeThreshold !== null) score += 1;
  if (p.international) score += 1;
  // Always award baseline 1 for having defined shipping at all.
  score += 1;
  return Math.min(5, score);
}

export function scoreReviewAggregate(r: ReviewAggregate): number {
  // Out of 20
  let score = 0;
  if (typeof r.trustpilotRating === "number") {
    if (r.trustpilotRating >= 4.5) score += 10;
    else if (r.trustpilotRating >= 4.0) score += 7;
    else if (r.trustpilotRating >= 3.5) score += 4;
    else score += 1;
  }
  if (typeof r.trustpilotReviewCount === "number") {
    if (r.trustpilotReviewCount >= 500) score += 5;
    else if (r.trustpilotReviewCount >= 100) score += 3;
    else if (r.trustpilotReviewCount >= 25) score += 1;
  }
  if (r.redditSentiment === "positive") score += 5;
  else if (r.redditSentiment === "mixed") score += 2;
  return Math.min(20, score);
}

export function computeQualityScore(
  v: Pick<
    Vendor,
    | "thirdPartyTested"
    | "manufacturingStandard"
    | "ingredientTransparency"
    | "customerService"
    | "shippingPolicy"
    | "reviewAggregate"
  >,
): number {
  return (
    scoreThirdPartyTesting(v.thirdPartyTested) +
    scoreManufacturingStandard(v.manufacturingStandard) +
    scoreIngredientTransparency(v.ingredientTransparency) +
    scoreServiceQuality(v.customerService) +
    scoreShippingPolicy(v.shippingPolicy) +
    scoreReviewAggregate(v.reviewAggregate)
  );
}

export function verdictFromScore(score: number): ProteumVerdict | "rejected" {
  if (score >= 90) return "recommended";
  if (score >= 75) return "acceptable";
  if (score >= 60) return "cautious";
  return "rejected";
}
