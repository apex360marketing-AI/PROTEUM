"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { QualityRing } from "@/components/vendors/QualityRing";
import type { ProteumVerdict, Vendor } from "@/content/vendors/types";
import { cn } from "@/lib/utils/cn";

type VerdictFilter = "all" | ProteumVerdict;
type RegionFilter = "all" | "US" | "EU" | "CA";

const VERDICT_FILTERS: { id: VerdictFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "recommended", label: "Recommended" },
  { id: "acceptable", label: "Acceptable" },
  { id: "cautious", label: "Use caution" },
];

const REGION_FILTERS: { id: RegionFilter; label: string }[] = [
  { id: "all", label: "Global" },
  { id: "US", label: "US" },
  { id: "EU", label: "EU" },
  { id: "CA", label: "CA" },
];

export function VendorsIndex({ vendors }: { vendors: Vendor[] }) {
  const [verdict, setVerdict] = useState<VerdictFilter>("all");
  const [region, setRegion] = useState<RegionFilter>("all");

  const filtered = useMemo(() => {
    return vendors.filter((v) => {
      if (verdict !== "all" && v.proteumVerdict !== verdict) return false;
      if (region !== "all" && !v.servesRegions.includes(region)) return false;
      return true;
    });
  }, [vendors, verdict, region]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="mr-2 font-mono text-[11px] uppercase text-proteum-mist-low"
          style={{ letterSpacing: "0.18em" }}
        >
          Verdict
        </span>
        {VERDICT_FILTERS.map((f) => (
          <Chip
            key={f.id}
            label={f.label}
            active={verdict === f.id}
            onClick={() => setVerdict(f.id)}
          />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span
          className="mr-2 font-mono text-[11px] uppercase text-proteum-mist-low"
          style={{ letterSpacing: "0.18em" }}
        >
          Region
        </span>
        {REGION_FILTERS.map((f) => (
          <Chip
            key={f.id}
            label={f.label}
            active={region === f.id}
            onClick={() => setRegion(f.id)}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-proteum-mist">
          No vendors match those filters.
        </p>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((v) => (
            <VendorCard key={v.id} vendor={v} />
          ))}
        </div>
      )}
    </div>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
        active
          ? "bg-proteum-sapphire/15 text-proteum-bone shadow-[inset_0_0_0_1px_rgba(96,165,250,0.45)]"
          : "border border-proteum-chrome-low/25 text-proteum-mist hover:border-proteum-chrome-mid/45 hover:text-proteum-bone",
      )}
    >
      {label}
    </button>
  );
}

function VendorCard({ vendor }: { vendor: Vendor }) {
  const isRecommended = vendor.proteumVerdict === "recommended";
  const isCautious = vendor.proteumVerdict === "cautious";
  return (
    <Link
      href={`/vendors/${vendor.id}`}
      className={cn(
        "glass glass-hover group flex flex-col gap-4 rounded-2xl p-6",
        isRecommended && "border-l-2 border-l-proteum-gold-dim",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <QualityRing score={vendor.qualityScore} size={56} />
        <span
          className={cn(
            "rounded-full px-2 py-0.5 font-mono text-[10px] uppercase",
            isRecommended &&
              "bg-proteum-gold-dim/15 text-proteum-gold-dim",
            !isRecommended &&
              !isCautious &&
              "bg-proteum-sapphire-glow/15 text-proteum-sapphire-glow",
            isCautious &&
              "bg-proteum-chrome-mid/15 text-proteum-chrome-mid",
          )}
          style={{ letterSpacing: "0.15em" }}
        >
          {verdictLabel(vendor.proteumVerdict)}
        </span>
      </div>

      <h3
        className="font-display font-light text-proteum-bone"
        style={{
          fontVariationSettings: '"opsz" 96',
          fontSize: "1.375rem",
          lineHeight: 1.2,
          letterSpacing: "-0.015em",
        }}
      >
        {vendor.name}
      </h3>
      <p className="text-[14px] leading-relaxed text-proteum-mist">
        {vendor.tagline}
      </p>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-2">
        <span className="font-mono text-[11px] text-proteum-mist-low">
          {vendor.servesRegions.join(" · ")}
        </span>
        <span className="text-[12px] font-medium text-proteum-sapphire-glow opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          View profile →
        </span>
      </div>
    </Link>
  );
}

function verdictLabel(v: ProteumVerdict): string {
  if (v === "recommended") return "Recommended";
  if (v === "acceptable") return "Acceptable";
  return "Use caution";
}
