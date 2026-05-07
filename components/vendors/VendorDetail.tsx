import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Eye,
  FlaskConical,
  ShieldCheck,
  Star,
  Truck,
  UserCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { QualityRing } from "@/components/vendors/QualityRing";
import { AffiliateDisclosure } from "@/components/vendors/AffiliateDisclosure";
import type { Vendor } from "@/content/vendors/types";
import { getCompoundById } from "@/content/knowledge-base";
import { cn } from "@/lib/utils/cn";

export function VendorDetail({ vendor }: { vendor: Vendor }) {
  const verdictTone =
    vendor.proteumVerdict === "recommended"
      ? "border-proteum-gold-dim/40 bg-proteum-gold-dim/10 text-proteum-gold-dim"
      : vendor.proteumVerdict === "acceptable"
        ? "border-proteum-sapphire-glow/40 bg-proteum-sapphire-glow/10 text-proteum-sapphire-glow"
        : "border-proteum-chrome-mid/40 bg-proteum-chrome-mid/10 text-proteum-chrome-mid";

  return (
    <article>
      {/* Breadcrumb */}
      <Section spacing="tight" className="pt-8 md:pt-12 pb-0">
        <Container size="wide">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1 text-[12px] text-proteum-mist-low"
          >
            <Link href="/" className="hover:text-proteum-bone">
              Home
            </Link>
            <ChevronRight size={12} className="opacity-50" />
            <Link href="/vendors" className="hover:text-proteum-bone">
              Vendors
            </Link>
            <ChevronRight size={12} className="opacity-50" />
            <span className="text-proteum-bone">{vendor.name}</span>
          </nav>
        </Container>
      </Section>

      {/* Hero */}
      <Section spacing="tight" className="pt-8 md:pt-10">
        <Container size="wide">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-6">
              <QualityRing score={vendor.qualityScore} size={96} />
              <div>
                <p
                  className="font-mono text-[11px] uppercase text-proteum-mist-low"
                  style={{ letterSpacing: "0.18em" }}
                >
                  Vendor profile
                </p>
                <h1
                  className="mt-3 text-balance font-display font-light text-proteum-bone"
                  style={{
                    fontVariationSettings: '"opsz" 144',
                    fontSize: "clamp(2rem, 5vw, 3.25rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {vendor.name}
                </h1>
                <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-proteum-mist">
                  {vendor.tagline}
                </p>
              </div>
            </div>
            <span
              className={cn(
                "inline-flex shrink-0 items-center rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase",
                verdictTone,
              )}
              style={{ letterSpacing: "0.18em" }}
            >
              {verdictLabel(vendor.proteumVerdict)}
            </span>
          </div>

          <div className="mt-8">
            <AffiliateDisclosure variant="compact" />
          </div>
        </Container>
      </Section>

      {/* Editorial verdict */}
      {(vendor.whyRecommended || vendor.whyCautious) && (
        <Section spacing="tight">
          <Container size="wide">
            <h2
              className="font-mono text-[11px] uppercase text-proteum-mist-low"
              style={{ letterSpacing: "0.18em" }}
            >
              {vendor.whyRecommended ? "Why we recommend" : "Why we're cautious"}
            </h2>
            <p className="mt-4 max-w-3xl text-[16px] leading-[1.7] text-proteum-bone/90">
              {vendor.whyRecommended ?? vendor.whyCautious}
            </p>
          </Container>
        </Section>
      )}

      {/* Quality breakdown */}
      <Section spacing="tight">
        <Container size="wide">
          <h2
            className="font-mono text-[11px] uppercase text-proteum-mist-low"
            style={{ letterSpacing: "0.18em" }}
          >
            Quality breakdown
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <CriterionCard
              icon={FlaskConical}
              label="Third-party testing"
              weight={30}
              status={vendor.thirdPartyTested.status}
              detail={vendor.thirdPartyTested.details}
              extra={
                vendor.thirdPartyTested.testingLab
                  ? `Lab: ${vendor.thirdPartyTested.testingLab}${vendor.thirdPartyTested.coaPublic ? " · COAs public" : " · COAs private"}`
                  : undefined
              }
            />
            <CriterionCard
              icon={ShieldCheck}
              label="Manufacturing standard"
              weight={15}
              status={vendor.manufacturingStandard.status}
              detail={vendor.manufacturingStandard.details}
            />
            <CriterionCard
              icon={Eye}
              label="Ingredient transparency"
              weight={20}
              status={vendor.ingredientTransparency.status}
              detail={vendor.ingredientTransparency.details}
            />
            <CriterionCard
              icon={UserCheck}
              label="Customer service"
              weight={10}
              status={
                vendor.customerService.responseTimeHours !== null
                  ? `~${vendor.customerService.responseTimeHours}h response`
                  : "Unknown"
              }
              detail={vendor.customerService.refundPolicy}
              extra={
                vendor.customerService.shipsTrackedFromUS
                  ? "Tracked shipping from US"
                  : "Non-US tracked shipping"
              }
            />
            <CriterionCard
              icon={Truck}
              label="Shipping policy"
              weight={5}
              status={`Avg ${vendor.shippingPolicy.averageDays} days`}
              detail={
                vendor.shippingPolicy.freeThreshold !== null
                  ? `Free shipping at $${vendor.shippingPolicy.freeThreshold}+`
                  : "No free-shipping threshold disclosed"
              }
              extra={
                vendor.shippingPolicy.international
                  ? "International available"
                  : "US-only"
              }
            />
            <CriterionCard
              icon={Star}
              label="Review aggregate"
              weight={20}
              status={
                typeof vendor.reviewAggregate.trustpilotRating === "number"
                  ? `${vendor.reviewAggregate.trustpilotRating.toFixed(1)} ★ on Trustpilot`
                  : "No Trustpilot data"
              }
              detail={
                typeof vendor.reviewAggregate.trustpilotReviewCount ===
                "number"
                  ? `${vendor.reviewAggregate.trustpilotReviewCount.toLocaleString()} reviews`
                  : ""
              }
              extra={
                vendor.reviewAggregate.redditSentiment
                  ? `Reddit: ${vendor.reviewAggregate.redditSentiment}`
                  : undefined
              }
            />
          </div>
        </Container>
      </Section>

      {/* Compounds available */}
      {vendor.carriedCompounds.length > 0 && (
        <Section spacing="tight">
          <Container size="wide">
            <h2
              className="font-mono text-[11px] uppercase text-proteum-mist-low"
              style={{ letterSpacing: "0.18em" }}
            >
              Compounds available
            </h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {vendor.carriedCompounds.map((p) => {
                const compound = getCompoundById(p.compoundId);
                return (
                  <li
                    key={p.compoundId + p.productName}
                    className="glass glass-hover rounded-2xl p-5"
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h3
                        className="font-display font-light text-proteum-bone"
                        style={{
                          fontVariationSettings: '"opsz" 36',
                          fontSize: "1.125rem",
                          lineHeight: 1.3,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {p.productName}
                      </h3>
                      <span
                        className={cn(
                          "shrink-0 rounded-full px-2 py-0.5 font-mono text-[10px] uppercase",
                          p.inStock
                            ? "bg-proteum-cyan/15 text-proteum-cyan"
                            : "bg-proteum-chrome-low/20 text-proteum-mist-low",
                        )}
                        style={{ letterSpacing: "0.15em" }}
                      >
                        {p.inStock ? "In stock" : "Out of stock"}
                      </span>
                    </div>
                    <p className="mt-2 text-[13px] text-proteum-mist">
                      {p.packageSize}
                    </p>
                    <p className="mt-3 text-[15px] text-proteum-bone">
                      <span className="font-mono text-proteum-cyan">
                        ${p.price.toFixed(2)}
                      </span>{" "}
                      <span className="text-[12px] text-proteum-mist-low">
                        ({p.currency} ${p.pricePerUnit.toFixed(2)}
                        {p.pricePerUnitLabel})
                      </span>
                    </p>
                    {p.notes && (
                      <p className="mt-2 text-[12px] text-proteum-mist">
                        {p.notes}
                      </p>
                    )}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                      {compound ? (
                        <Link
                          href={`/compounds/${compound.id}`}
                          className="text-[13px] font-medium text-proteum-mist hover:text-proteum-sapphire-glow"
                        >
                          About {compound.name} →
                        </Link>
                      ) : (
                        <span className="text-[13px] text-proteum-mist-low">
                          {p.compoundId}
                        </span>
                      )}
                      {p.inStock && (
                        <a
                          href={`/go/${vendor.id}/${p.compoundId}`}
                          className="text-[13px] font-medium text-proteum-sapphire-glow hover:text-proteum-bone"
                        >
                          View on {vendor.name} →
                        </a>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </Container>
        </Section>
      )}

      {/* External reviews */}
      {vendor.reviewAggregate.externalReviewLinks.length > 0 && (
        <Section spacing="tight">
          <Container size="wide">
            <h2
              className="font-mono text-[11px] uppercase text-proteum-mist-low"
              style={{ letterSpacing: "0.18em" }}
            >
              External reviews
            </h2>
            <ul className="mt-5 flex flex-col gap-2">
              {vendor.reviewAggregate.externalReviewLinks.map((link) => (
                <li key={link}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[14px] text-proteum-sapphire-glow hover:text-proteum-bone"
                  >
                    {hostnameOf(link)}
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      {/* Operational info */}
      <Section spacing="tight">
        <Container size="wide">
          <Card variant="glass" className="p-6 md:p-8">
            <dl className="grid gap-5 md:grid-cols-3">
              <div>
                <dt
                  className="font-mono text-[10px] uppercase text-proteum-mist-low"
                  style={{ letterSpacing: "0.18em" }}
                >
                  Serves
                </dt>
                <dd className="mt-2 text-[14px] text-proteum-bone/90">
                  {vendor.servesRegions.join(" · ")}
                </dd>
              </div>
              <div>
                <dt
                  className="font-mono text-[10px] uppercase text-proteum-mist-low"
                  style={{ letterSpacing: "0.18em" }}
                >
                  Payment
                </dt>
                <dd className="mt-2 text-[14px] text-proteum-bone/90">
                  {vendor.paymentMethods.join(" · ")}
                </dd>
              </div>
              <div>
                <dt
                  className="font-mono text-[10px] uppercase text-proteum-mist-low"
                  style={{ letterSpacing: "0.18em" }}
                >
                  Last reviewed
                </dt>
                <dd className="mt-2 text-[14px] text-proteum-bone/90">
                  {formatDate(vendor.lastReviewed)}
                </dd>
              </div>
            </dl>
            <p className="mt-5 text-[12px] leading-relaxed text-proteum-mist-low">
              We review vendor partners every 90 days. PROTEUM is not
              affiliated with {vendor.name} except via affiliate program. The
              vendor does not pay for placement and does not influence our
              evaluation.
            </p>
          </Card>
        </Container>
      </Section>

      {/* CTAs */}
      <Section spacing="tight" className="pb-16">
        <Container size="wide">
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/vendors"
              className="inline-flex items-center gap-1 text-sm text-proteum-sapphire-glow hover:text-proteum-bone"
            >
              ← All vendors
            </Link>
            <Button
              href={vendor.affiliate.baseAffiliateUrl}
              external
              size="md"
              variant="chrome-ghost"
            >
              Visit {vendor.name}
              <ArrowUpRight size={14} />
            </Button>
          </div>
        </Container>
      </Section>
    </article>
  );
}

function CriterionCard({
  icon: Icon,
  label,
  weight,
  status,
  detail,
  extra,
}: {
  icon: typeof Eye;
  label: string;
  weight: number;
  status: string;
  detail: string;
  extra?: string;
}) {
  return (
    <Card variant="glass" className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg border border-proteum-sapphire-glow/25 bg-proteum-sapphire/10 text-proteum-sapphire-glow">
            <Icon size={18} strokeWidth={1.5} />
          </div>
          <div>
            <p
              className="font-mono text-[10px] uppercase text-proteum-mist-low"
              style={{ letterSpacing: "0.18em" }}
            >
              {label} · {weight} pts
            </p>
            <p className="mt-1 text-[15px] text-proteum-bone capitalize">
              {status}
            </p>
          </div>
        </div>
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-proteum-mist">
        {detail}
      </p>
      {extra && (
        <p className="mt-2 text-[12px] text-proteum-mist-low">{extra}</p>
      )}
    </Card>
  );
}

function verdictLabel(v: Vendor["proteumVerdict"]): string {
  if (v === "recommended") return "Recommended";
  if (v === "acceptable") return "Acceptable";
  return "Use caution";
}

function formatDate(iso: string): string {
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

function hostnameOf(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}
