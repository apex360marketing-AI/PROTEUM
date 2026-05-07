"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QualityRing } from "@/components/vendors/QualityRing";
import { CriteriaIcons } from "@/components/vendors/CriteriaIcons";
import { AffiliateDisclosure } from "@/components/vendors/AffiliateDisclosure";
import { getCarriedCompound } from "@/content/vendors";
import type { Vendor } from "@/content/vendors/types";
import type { Compound } from "@/content/knowledge-base/types";
import { cn } from "@/lib/utils/cn";

type Props = {
  compound: Compound;
  vendors: Vendor[];
};

export function VendorSection({ compound, vendors }: Props) {
  const [lookForOpen, setLookForOpen] = useState(false);
  const [avoidOpen, setAvoidOpen] = useState(false);

  if (vendors.length === 0) {
    return (
      <Card variant="glass" className="p-6 md:p-8">
        <p
          className="font-mono text-[11px] uppercase text-proteum-mist-low"
          style={{ letterSpacing: "0.18em" }}
        >
          Where to source {compound.name}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-proteum-mist">
          We don&apos;t currently feature a vetted vendor for {compound.name}.
          New partners are evaluated on a 90-day cadence. See our{" "}
          <Link
            href="/methodology"
            className="text-proteum-sapphire-glow underline underline-offset-4 hover:text-proteum-bone"
          >
            methodology
          </Link>{" "}
          for what we look for.
        </p>
      </Card>
    );
  }

  const top = vendors[0]!;
  const alternatives = vendors.slice(1, 3);

  return (
    <div>
      {/* Header + disclosure */}
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2
          className="font-mono text-[11px] uppercase text-proteum-mist-low"
          style={{ letterSpacing: "0.18em" }}
        >
          Where to source {compound.name}
        </h2>
        <div className="max-w-[420px]">
          <AffiliateDisclosure variant="compact" />
        </div>
      </div>

      <div className="mt-5">
        <TopRecommendation vendor={top} compound={compound} />
      </div>

      {alternatives.length > 0 && (
        <div className="mt-6">
          <p
            className="font-mono text-[11px] uppercase text-proteum-mist-low"
            style={{ letterSpacing: "0.18em" }}
          >
            Alternatives
          </p>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            {alternatives.map((v) => (
              <AlternativeCard key={v.id} vendor={v} compound={compound} />
            ))}
          </div>
        </div>
      )}

      {/* What to look for */}
      <button
        type="button"
        onClick={() => setLookForOpen((v) => !v)}
        className="glass mt-8 flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left transition-colors hover:bg-proteum-surface/60"
        aria-expanded={lookForOpen}
      >
        <span
          className="font-display font-light text-proteum-bone"
          style={{
            fontVariationSettings: '"opsz" 36',
            fontSize: "1.0625rem",
            lineHeight: 1.4,
          }}
        >
          What to look for in any vendor
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "text-proteum-mist transition-transform duration-300",
            lookForOpen && "rotate-180 text-proteum-sapphire-glow",
          )}
        />
      </button>
      <Expandable open={lookForOpen}>
        <ul className="glass mt-3 space-y-2.5 rounded-2xl p-6">
          {top.whatToLookFor.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-[14px] leading-relaxed text-proteum-bone/85"
            >
              <span className="mt-2 size-1 shrink-0 rounded-full bg-proteum-sapphire-glow" />
              {item}
            </li>
          ))}
        </ul>
      </Expandable>

      {/* What to avoid */}
      <button
        type="button"
        onClick={() => setAvoidOpen((v) => !v)}
        className="glass mt-3 flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left transition-colors hover:bg-proteum-surface/60"
        aria-expanded={avoidOpen}
      >
        <span
          className="font-display font-light text-proteum-bone"
          style={{
            fontVariationSettings: '"opsz" 36',
            fontSize: "1.0625rem",
            lineHeight: 1.4,
          }}
        >
          Red flags to avoid
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "text-proteum-mist transition-transform duration-300",
            avoidOpen && "rotate-180 text-proteum-gold-dim",
          )}
        />
      </button>
      <Expandable open={avoidOpen}>
        <ul className="glass mt-3 space-y-2.5 rounded-2xl border-l-2 border-l-proteum-gold-dim p-6">
          {top.whatToAvoid.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-[14px] leading-relaxed text-proteum-bone/85"
            >
              <span className="mt-2 size-1 shrink-0 rounded-full bg-proteum-gold-dim" />
              {item}
            </li>
          ))}
        </ul>
      </Expandable>
    </div>
  );
}

function TopRecommendation({
  vendor,
  compound,
}: {
  vendor: Vendor;
  compound: Compound;
}) {
  const product = getCarriedCompound(vendor, compound.id);
  const verdictIsRecommended = vendor.proteumVerdict === "recommended";
  const verdictIsCautious = vendor.proteumVerdict === "cautious";

  return (
    <Card variant="glass" chromeAccent className="relative p-6 md:p-8">
      {verdictIsRecommended && (
        <span
          className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-proteum-gold-dim/40 bg-proteum-gold-dim/10 px-3 py-1 font-mono text-[10px] uppercase text-proteum-gold-dim"
          style={{ letterSpacing: "0.18em" }}
        >
          Recommended
        </span>
      )}
      {verdictIsCautious && (
        <span
          className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-proteum-chrome-mid/40 bg-proteum-chrome-mid/10 px-3 py-1 font-mono text-[10px] uppercase text-proteum-chrome-mid"
          style={{ letterSpacing: "0.18em" }}
        >
          Use caution
        </span>
      )}

      <div className="flex items-start gap-5">
        <QualityRing score={vendor.qualityScore} size={72} />
        <div className="min-w-0 flex-1">
          <h3
            className="font-display font-light text-proteum-bone"
            style={{
              fontVariationSettings: '"opsz" 96',
              fontSize: "1.5rem",
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
            }}
          >
            {vendor.name}
          </h3>
          <p className="mt-1 text-[14px] text-proteum-mist">{vendor.tagline}</p>
          {product && (
            <p className="mt-3 text-[15px] text-proteum-bone">
              <span className="font-medium">{product.productName}</span>{" "}
              <span className="text-proteum-mist">·</span>{" "}
              <span className="text-proteum-mist">
                {product.packageSize}
              </span>{" "}
              <span className="text-proteum-mist">·</span>{" "}
              <span className="font-mono text-proteum-cyan">
                ${product.price.toFixed(2)}
              </span>
              <span className="ml-1 text-[12px] text-proteum-mist-low">
                ({product.currency} ${product.pricePerUnit.toFixed(2)}
                {product.pricePerUnitLabel})
              </span>
            </p>
          )}
        </div>
      </div>

      {(vendor.whyRecommended || vendor.whyCautious) && (
        <p className="mt-5 text-[14px] leading-relaxed text-proteum-bone/85">
          {vendor.whyRecommended ?? vendor.whyCautious}
        </p>
      )}

      <div className="mt-6">
        <CriteriaIcons vendor={vendor} />
      </div>

      <div
        aria-hidden
        className="mt-6 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, rgba(200, 205, 214, 0.2) 50%, transparent 100%)",
        }}
      />

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <p
          className="font-mono text-[11px] text-proteum-mist-low"
          style={{ letterSpacing: "0.12em" }}
        >
          Verified {formatDate(vendor.lastReviewed)}
        </p>
        <div className="flex items-center gap-3">
          <Link
            href={`/vendors/${vendor.id}`}
            className="text-sm font-medium text-proteum-sapphire-glow transition-colors hover:text-proteum-bone"
          >
            Vendor profile →
          </Link>
          <Button
            href={`/go/${vendor.id}/${compound.id}`}
            external
            size="md"
          >
            View on {vendor.name}
            <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </Card>
  );
}

function AlternativeCard({
  vendor,
  compound,
}: {
  vendor: Vendor;
  compound: Compound;
}) {
  const product = getCarriedCompound(vendor, compound.id);
  return (
    <div className="glass glass-hover flex flex-col gap-4 rounded-2xl p-5">
      <div className="flex items-start gap-4">
        <QualityRing score={vendor.qualityScore} size={48} />
        <div className="min-w-0 flex-1">
          <h4
            className="font-display font-light text-proteum-bone"
            style={{
              fontVariationSettings: '"opsz" 36',
              fontSize: "1.125rem",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            {vendor.name}
          </h4>
          <p className="mt-1 text-[12px] text-proteum-mist">{vendor.tagline}</p>
        </div>
      </div>

      {product && (
        <p className="text-[13px] text-proteum-bone">
          {product.productName}{" "}
          <span className="text-proteum-mist">·</span>{" "}
          <span className="font-mono text-proteum-cyan">
            ${product.price.toFixed(2)}
          </span>
        </p>
      )}

      <div className="mt-auto flex items-center justify-between gap-3">
        <Link
          href={`/vendors/${vendor.id}`}
          className="text-[12px] font-medium text-proteum-mist hover:text-proteum-sapphire-glow"
        >
          Profile →
        </Link>
        <a
          href={`/go/${vendor.id}/${compound.id}`}
          className="text-[12px] font-medium text-proteum-sapphire-glow hover:text-proteum-bone"
        >
          View on {vendor.name} →
        </a>
      </div>
    </div>
  );
}

function Expandable({
  open,
  children,
}: {
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid overflow-hidden transition-all duration-300 ease-out",
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
      )}
    >
      <div className="min-h-0">{children}</div>
    </div>
  );
}

function formatDate(iso: string): string {
  // Defensive — keep the raw string if Date parsing fails.
  try {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}
