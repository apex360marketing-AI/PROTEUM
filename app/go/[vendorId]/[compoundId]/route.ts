import { NextResponse, type NextRequest } from "next/server";
import { getVendorById, getCarriedCompound } from "@/content/vendors";
import { getCompoundById } from "@/content/knowledge-base";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/**
 * /go/[vendorId]/[compoundId]
 *
 * Affiliate redirect handler. Resolves the vendor + compound, logs the click
 * to public.affiliate_clicks, then 302-redirects to the vendor's product URL.
 *
 * - On unknown vendor or compound: redirects to /compounds/[id] (or / if
 *   compound is also missing).
 * - On click-log failure: still redirects — never block the user on telemetry.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { vendorId: string; compoundId: string } },
) {
  const { vendorId, compoundId } = params;

  const vendor = getVendorById(vendorId);
  const compound = getCompoundById(compoundId);

  // If we can't resolve the vendor, send the user back to the compound page
  // (or home if neither resolves).
  if (!vendor) {
    if (compound) {
      return NextResponse.redirect(new URL(`/compounds/${compound.id}`, request.url));
    }
    return NextResponse.redirect(new URL("/compounds", request.url));
  }

  const product = compound ? getCarriedCompound(vendor, compound.id) : undefined;

  // Pick the most specific URL we can: product → vendor's affiliate base →
  // canonical vendor homepage. Never the unknown-compound case to a vendor
  // that doesn't actually carry the compound's product page.
  const targetUrl =
    product?.productUrl ?? vendor.affiliate.baseAffiliateUrl ?? vendor.url;

  // Best-effort click log. Never throw — telemetry must not block redirects.
  void logClick({
    vendorId: vendor.id,
    compoundId: compound?.id ?? compoundId,
    productUrl: targetUrl,
    referrer: request.headers.get("referer"),
    userAgent: request.headers.get("user-agent"),
  });

  // 302 — temporary, so caches don't stick the user to a stale URL if we
  // change affiliate codes later.
  return NextResponse.redirect(targetUrl, { status: 302 });
}

async function logClick(params: {
  vendorId: string;
  compoundId: string;
  productUrl: string;
  referrer: string | null;
  userAgent: string | null;
}): Promise<void> {
  // If Supabase isn't configured (e.g. preview deploy without env), skip.
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return;
  }

  try {
    const supabase = createSupabaseServerClient();
    await supabase.from("affiliate_clicks").insert({
      vendor_id: params.vendorId,
      compound_id: params.compoundId,
      product_url: params.productUrl,
      referrer: params.referrer,
      user_agent: params.userAgent,
    });
  } catch (err) {
    // Surface to logs but never to the user.
    console.warn("PROTEUM: affiliate click log failed", err);
  }
}
