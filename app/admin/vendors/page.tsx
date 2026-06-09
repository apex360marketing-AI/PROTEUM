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

type VendorClickRow = { vendor_id: string; compound_id: string };

export default async function AdminVendorsPage({ searchParams }: { searchParams: { days?: string } }) {
  const cookieStore = cookies();
  if (!isValidAdminCookie(cookieStore.get(ADMIN_COOKIE_NAME)?.value)) {
    redirect("/admin/login?from=/admin/vendors");
  }

  const daysParam = parseInt(searchParams.days || "30", 10);
  const days = isNaN(daysParam) || daysParam <= 0 ? 30 : daysParam;
  const since = new Date(Date.now() - (days * 24 * 60 * 60 * 1000)).toISOString();
  const { rows, error } = await fetchClicks(since);

  // Aggregate per vendor and per (vendor, compound).
  const totalsByVendor = new Map<string, number>();
  const totalsByVendorCompound = new Map<string, number>();
  const totalsByCompound = new Map<string, number>();
  
  for (const row of rows) {
    totalsByVendor.set(
      row.vendor_id,
      (totalsByVendor.get(row.vendor_id) ?? 0) + 1,
    );
    const key = `${row.vendor_id}::${row.compound_id}`;
    totalsByVendorCompound.set(key, (totalsByVendorCompound.get(key) ?? 0) + 1);
    totalsByCompound.set(row.compound_id, (totalsByCompound.get(row.compound_id) ?? 0) + 1);
  }

  const topCompounds = Array.from(totalsByCompound.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([id, clicks]) => ({ id, label: getCompoundLabel(id), clicks }));

  return (
    <div>
      <Eyebrow tone="sapphire" bare>
        Admin · Vendors
      </Eyebrow>
      <div className="mt-6 flex flex-wrap items-baseline justify-between gap-4">
        <h1
          className="font-display font-light text-proteum-bone"
          style={{
            fontVariationSettings: '"opsz" 144',
            fontSize: "clamp(2rem, 4vw, 3rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Vendor analytics
        </h1>
        
        <div className="flex items-center gap-2 rounded-full border border-proteum-chrome-low/20 bg-proteum-surface/40 p-1 backdrop-blur-md">
          {[7, 30, 90].map((d) => {
            const active = days === d;
            return (
              <Link
                key={d}
                href={`/admin/vendors?days=${d}`}
                className={active 
                  ? "rounded-full bg-proteum-sapphire/20 px-3 py-1 text-[13px] font-medium text-proteum-sapphire-glow shadow-[inset_0_0_0_1px_rgba(96,165,250,0.3)]"
                  : "rounded-full px-3 py-1 text-[13px] font-medium text-proteum-mist hover:text-proteum-bone"
                }
              >
                {d}d
              </Link>
            );
          })}
        </div>
      </div>
      <p className="mt-4 text-[15px] text-proteum-mist">
        Click counts on /go redirects per vendor and per compound. Reads use
        the Supabase service-role key.
      </p>

      {error ? (
        <Card variant="glass" className="mt-8 border border-proteum-gold-dim/40 p-5">
          <p
            className="font-mono text-[11px] uppercase text-proteum-gold-dim"
            style={{ letterSpacing: "0.18em" }}
          >
            Analytics unavailable
          </p>
          <p className="mt-2 text-[14px] text-proteum-mist">{error}</p>
          <div className="mt-4 rounded-lg bg-proteum-void/50 p-4 text-[13px] text-proteum-mist-low">
            <p><strong>Operational guidance:</strong></p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Ensure <code>SUPABASE_SERVICE_ROLE_KEY</code> is set in your environment.</li>
              <li>Verify the <code>affiliate_clicks</code> table has been created via migrations.</li>
            </ul>
          </div>
        </Card>
      ) : rows.length === 0 ? (
        <Card variant="glass" className="mt-8 p-8 text-center border border-proteum-chrome-mid/20">
          <p className="font-display text-[1.25rem] text-proteum-bone">No clicks recorded in the last {days} days.</p>
          <p className="mt-2 text-[14px] text-proteum-mist">As users complete assessments and visit vendors, metrics will appear here.</p>
        </Card>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card variant="glass" className="p-6 md:col-span-1">
            <p className="font-mono text-[10px] uppercase text-proteum-mist-low" style={{ letterSpacing: "0.18em" }}>Total Clicks ({days}d)</p>
            <p className="mt-2 font-display text-[2.5rem] text-proteum-bone leading-none">{rows.length}</p>
          </Card>
          <Card variant="glass" className="p-6 md:col-span-2">
            <p className="font-mono text-[10px] uppercase text-proteum-mist-low mb-4" style={{ letterSpacing: "0.18em" }}>Top Compounds</p>
            <div className="flex flex-wrap gap-3">
              {topCompounds.map(c => (
                <div key={c.id} className="flex items-center gap-2 rounded-lg border border-proteum-chrome-low/20 bg-proteum-surface/40 px-3 py-2">
                  <span className="text-[13px] text-proteum-bone">{c.label}</span>
                  <span className="font-mono text-[11px] text-proteum-cyan">{c.clicks}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
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
                    {days}-day clicks
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
