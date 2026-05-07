import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { QualityRing } from "@/components/vendors/QualityRing";
import { ADMIN_COOKIE_NAME, isValidAdminCookie } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { allVendors, getCompoundLabel } from "@/content/vendors-helpers";

export const metadata = {
  title: "Vendor analytics",
  robots: { index: false, follow: false },
};

// Always render at request-time so click counts reflect current data.
export const dynamic = "force-dynamic";

const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

type VendorClickRow = { vendor_id: string; compound_id: string };

export default async function AdminVendorsPage() {
  const cookieStore = cookies();
  if (!isValidAdminCookie(cookieStore.get(ADMIN_COOKIE_NAME)?.value)) {
    redirect("/admin/login?from=/admin/vendors");
  }

  const since = new Date(Date.now() - THIRTY_DAYS_MS).toISOString();
  const { rows, error } = await fetchClicks(since);

  // Aggregate per vendor and per (vendor, compound).
  const totalsByVendor = new Map<string, number>();
  const totalsByVendorCompound = new Map<string, number>();
  for (const row of rows) {
    totalsByVendor.set(
      row.vendor_id,
      (totalsByVendor.get(row.vendor_id) ?? 0) + 1,
    );
    const key = `${row.vendor_id}::${row.compound_id}`;
    totalsByVendorCompound.set(key, (totalsByVendorCompound.get(key) ?? 0) + 1);
  }

  return (
    <div>
      <Eyebrow tone="sapphire" bare>
        Admin · Vendors
      </Eyebrow>
      <h1
        className="mt-6 font-display font-light text-proteum-bone"
        style={{
          fontVariationSettings: '"opsz" 144',
          fontSize: "clamp(2rem, 4vw, 3rem)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        }}
      >
        Vendor analytics — last 30 days.
      </h1>
      <p className="mt-4 text-[15px] text-proteum-mist">
        Click counts on /go redirects per vendor and per compound. Reads use
        the Supabase service-role key.
      </p>

      {error && (
        <Card variant="glass" className="mt-8 border border-proteum-gold-dim/40 p-5">
          <p
            className="font-mono text-[11px] uppercase text-proteum-gold-dim"
            style={{ letterSpacing: "0.18em" }}
          >
            Analytics unavailable
          </p>
          <p className="mt-2 text-[14px] text-proteum-mist">{error}</p>
        </Card>
      )}

      <div className="mt-10 flex flex-col gap-6">
        {allVendors.map((vendor) => {
          const totalClicks = totalsByVendor.get(vendor.id) ?? 0;
          const perCompound = vendor.carriedCompounds.map((p) => ({
            compoundId: p.compoundId,
            label: getCompoundLabel(p.compoundId),
            clicks:
              totalsByVendorCompound.get(`${vendor.id}::${p.compoundId}`) ?? 0,
            inStock: p.inStock,
          }));

          return (
            <Card key={vendor.id} variant="glass" className="p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="flex items-start gap-5">
                  <QualityRing score={vendor.qualityScore} size={56} />
                  <div>
                    <p
                      className="font-mono text-[10px] uppercase text-proteum-mist-low"
                      style={{ letterSpacing: "0.18em" }}
                    >
                      {vendor.proteumVerdict}
                    </p>
                    <h2
                      className="mt-1 font-display font-light text-proteum-bone"
                      style={{
                        fontVariationSettings: '"opsz" 36',
                        fontSize: "1.375rem",
                        lineHeight: 1.2,
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {vendor.name}
                    </h2>
                    <p className="mt-1 text-[13px] text-proteum-mist">
                      {vendor.tagline}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className="font-mono text-[10px] uppercase text-proteum-mist-low"
                    style={{ letterSpacing: "0.18em" }}
                  >
                    30-day clicks
                  </p>
                  <p
                    className="mt-1 font-display font-light text-proteum-bone"
                    style={{
                      fontVariationSettings: '"opsz" 96',
                      fontSize: "2rem",
                      lineHeight: 1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {totalClicks}
                  </p>
                </div>
              </div>

              <table className="mt-8 w-full text-left">
                <thead>
                  <tr
                    className="font-mono text-[10px] uppercase text-proteum-mist-low"
                    style={{ letterSpacing: "0.18em" }}
                  >
                    <th className="pb-2">Compound</th>
                    <th className="pb-2 text-right">Clicks</th>
                    <th className="pb-2 text-right">Stock</th>
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  {perCompound.length === 0 && (
                    <tr>
                      <td colSpan={3} className="py-3 text-proteum-mist">
                        No carried compounds.
                      </td>
                    </tr>
                  )}
                  {perCompound.map((row) => (
                    <tr
                      key={row.compoundId}
                      className="border-t border-proteum-chrome-low/15"
                    >
                      <td className="py-3 text-proteum-bone/90">
                        {row.label}
                      </td>
                      <td className="py-3 text-right font-mono text-proteum-cyan">
                        {row.clicks}
                      </td>
                      <td className="py-3 text-right">
                        <span
                          className={
                            row.inStock
                              ? "text-proteum-cyan"
                              : "text-proteum-mist-low"
                          }
                        >
                          {row.inStock ? "✓" : "—"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-[13px]">
                <Link
                  href={`/vendors/${vendor.id}`}
                  className="text-proteum-sapphire-glow hover:text-proteum-bone"
                >
                  Public profile →
                </Link>
                <span className="text-proteum-mist-low">
                  Last reviewed {vendor.lastReviewed}
                </span>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

async function fetchClicks(
  sinceIso: string,
): Promise<{ rows: VendorClickRow[]; error: string | null }> {
  const admin = createSupabaseAdminClient();
  if (!admin) {
    return {
      rows: [],
      error:
        "SUPABASE_SERVICE_ROLE_KEY not set. Add it to .env.local (and your Netlify env) to view aggregated click counts.",
    };
  }
  try {
    const { data, error } = await admin
      .from("affiliate_clicks")
      .select("vendor_id, compound_id")
      .gte("created_at", sinceIso);
    if (error) return { rows: [], error: error.message };
    return { rows: (data ?? []) as VendorClickRow[], error: null };
  } catch (err) {
    return {
      rows: [],
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}
