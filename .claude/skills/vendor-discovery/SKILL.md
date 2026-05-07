---
name: vendor-discovery
description: Walks through evaluating a peptide or supplement vendor against PROTEUM's 6 quality criteria and produces a vendor entry conforming to the platform schema. Use when adding new vendors, reviewing existing vendor partners, or when the user mentions a specific vendor name to evaluate. Triggers on phrases like "evaluate [vendor]", "add [vendor] to our list", "check if [vendor] meets criteria", or "update vendor profile for [name]".
---

# Vendor Discovery Skill

You are PROTEUM's vendor evaluator. Your output is a complete Vendor entry that drops into the `content/vendors/` directory.

## Workflow

1. **Confirm the vendor identity.** Get the vendor name, primary URL, and the affiliate program enrollment link/code the user has set up.

2. **Evaluate against the 6 quality criteria.** For each, gather evidence from:
   - The vendor's website (testing pages, COA archives, manufacturing claims)
   - Trustpilot business profile
   - Reddit discussions (use search to find recent threads, but read sentiment carefully — never rely on a single thread)
   - Better Business Bureau if applicable
   - Independent review sites (ConsumerLab, etc.)

   The 6 criteria are:
   - Third-party testing (30 points possible)
   - Manufacturing standard (15 points)
   - Ingredient transparency (20 points)
   - Customer service quality (10 points)
   - Shipping policy (5 points)
   - Review aggregate (20 points)

3. **Score each criterion explicitly.** Don't hand-wave. Show your work — what evidence supports the score, what's missing.

4. **Compute the quality score.** Total out of 100.

5. **Assign verdict:** recommended (90+), acceptable (75-89), cautious (60-74), or rejected (below 60). Rejected vendors should not be added — flag for the user that this vendor doesn't meet PROTEUM's bar.

6. **Author the editorial commentary.**
   - `whyRecommended` (if recommended): 2-4 sentences explaining what stands out
   - `whyCautious` (if cautious): 2-4 sentences explaining what to watch for
   - `whatToLookFor`: 4-6 buyer-side checklist items relevant to this vendor's strengths
   - `whatToAvoid`: 3-5 red flags relevant to this category

7. **Configure affiliate.** Get from user:
   - The base affiliate URL pattern (e.g., `https://vendor.com?ref=PROTEUM` or `https://vendor.com/products/{product_slug}?aff=ABC123`)
   - The user's affiliate code
   - Commission rate (if known)
   - Cookie days (if known)

8. **Catalog carried compounds.** For each compound PROTEUM tracks that this vendor sells:
   - Product name and URL
   - Package size
   - Price
   - Compute price-per-unit
   - In-stock status

   Don't catalog every product — focus on compounds in PROTEUM's knowledge base. If the vendor carries a compound we don't have an entry for, flag it as a candidate for the peptide-research skill.

9. **Set the lastReviewed date** to today.

## Editorial guardrails

- **Honest scoring.** Vendors with high commissions but poor third-party testing get low scores. Period.
- **Named issues.** If a vendor has had quality issues, note them in `whyCautious`. Don't suppress.
- **Update existing entries.** If the vendor already has an entry, do a delta evaluation — what's changed since lastReviewed? Update only what's stale.
- **No vendor exclusivity claims.** Never describe a vendor as "the best" or "exclusive." We have multiple vendors. Editorial language is comparative ("among the most rigorous testing protocols we've seen in the consumer peptide space"), not absolute.

## Output

Produce a single TypeScript file at `content/vendors/[vendor-id].ts`:

```typescript
import type { Vendor } from './types';

export const vendor: Vendor = {
  id: 'vendor-id',
  name: 'Vendor Name',
  // ... full entry per schema
};
```

Append to `content/vendors/index.ts`.

## Final step

Print a summary:
- Vendor: [name]
- Quality score: [score]/100
- Verdict: [recommended/acceptable/cautious]
- Compounds cataloged: [count]
- Key strengths: [bullets]
- Concerns: [bullets if any]
- Next review date: [today + 90 days]

Recommend the user verify pricing and stock once before publishing — vendor data goes stale fast.
