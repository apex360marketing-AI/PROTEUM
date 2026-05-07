import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { VendorSection } from "@/components/vendors/VendorSection";
import type {
  Compound,
  EvidenceLevel,
  StudiedFor,
} from "@/content/knowledge-base/types";
import { getCompoundById } from "@/content/knowledge-base";
import { getVendorsForCompound } from "@/content/vendors";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

const EVIDENCE_TONE: Record<EvidenceLevel, string> = {
  preliminary: "text-proteum-mist-low border-proteum-chrome-low/30",
  emerging: "text-proteum-cyan border-proteum-cyan/35",
  established: "text-proteum-sapphire-glow border-proteum-sapphire-glow/40",
};

const EVIDENCE_LABEL: Record<EvidenceLevel, string> = {
  preliminary: "Preliminary",
  emerging: "Emerging",
  established: "Established",
};

export function CompoundDetail({ compound }: { compound: Compound }) {
  const isUnderrated = compound.classification === "underrated";
  const categoryLabel = capitalize(compound.category);
  const classificationLabel = capitalize(compound.classification);

  return (
    <article>
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildStructuredData(compound)),
        }}
      />

      {/* Breadcrumb */}
      <Section spacing="tight" className="pt-8 md:pt-12 pb-0">
        <Container size="wide">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1 text-[12px] text-proteum-mist-low"
            style={{ letterSpacing: "0.04em" }}
          >
            <Link href="/" className="hover:text-proteum-bone">
              Home
            </Link>
            <ChevronRight size={12} className="opacity-50" />
            <Link href="/compounds" className="hover:text-proteum-bone">
              Compounds
            </Link>
            <ChevronRight size={12} className="opacity-50" />
            <span className="text-proteum-bone">{compound.name}</span>
          </nav>
        </Container>
      </Section>

      {/* Hero */}
      <Section spacing="tight" className="pt-8 md:pt-10">
        <Container size="wide">
          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0 flex-1">
              <p
                className="font-mono text-[12px] uppercase text-proteum-sapphire-glow"
                style={{ letterSpacing: "0.18em" }}
              >
                {categoryLabel} · {classificationLabel}
              </p>
              <h1
                className="mt-5 text-balance font-display font-light text-proteum-bone"
                style={{
                  fontVariationSettings: '"opsz" 144',
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                {compound.name}
              </h1>
              <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-proteum-mist md:text-[19px]">
                {compound.tagline}
              </p>
            </div>
            {isUnderrated && (
              <span
                className="hidden shrink-0 rounded-full border border-proteum-gold-dim/40 bg-proteum-gold-dim/10 px-3 py-1.5 font-mono text-[10px] uppercase text-proteum-gold-dim md:inline-flex"
                style={{ letterSpacing: "0.18em" }}
              >
                Underrated
              </span>
            )}
          </div>
        </Container>
      </Section>

      {/* Long description */}
      <Section spacing="tight" className="pt-12">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2
                className="font-mono text-[11px] uppercase text-proteum-mist-low"
                style={{ letterSpacing: "0.18em" }}
              >
                Why this matters
              </h2>
              <div className="mt-5 space-y-5 text-[16px] leading-[1.7] text-proteum-bone/90">
                {compound.longDescription
                  .split(/\n\n+/)
                  .map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
              </div>

              {compound.underratedNote && (
                <Card
                  variant="glass"
                  chromeAccent
                  className="mt-8 border-l-2 border-l-proteum-gold-dim"
                >
                  <p
                    className="font-mono text-[11px] uppercase text-proteum-gold-dim"
                    style={{ letterSpacing: "0.18em" }}
                  >
                    Why it&apos;s underrated
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-proteum-bone/90">
                    {compound.underratedNote}
                  </p>
                </Card>
              )}
            </div>

            <aside className="lg:col-span-4">
              <Card variant="glass" className="sticky top-24">
                <h3
                  className="font-mono text-[11px] uppercase text-proteum-mist-low"
                  style={{ letterSpacing: "0.18em" }}
                >
                  Primary uses
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {compound.primaryUses.map((u) => (
                    <li
                      key={u}
                      className="flex items-start gap-2 text-[14px] text-proteum-bone/85"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-proteum-sapphire-glow" />
                      {u}
                    </li>
                  ))}
                </ul>
              </Card>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Studied for */}
      <Section spacing="tight">
        <Container size="wide">
          <h2
            className="font-mono text-[11px] uppercase text-proteum-mist-low"
            style={{ letterSpacing: "0.18em" }}
          >
            Studied for
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {compound.studiedFor.map((s) => (
              <StudiedForCard key={s.domain} item={s} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Mechanism */}
      <Section spacing="tight">
        <Container size="wide">
          <h2
            className="font-mono text-[11px] uppercase text-proteum-mist-low"
            style={{ letterSpacing: "0.18em" }}
          >
            How it works
          </h2>
          <div
            className="prose-proteum mt-5 max-w-[65ch] text-[16px] leading-[1.75] text-proteum-bone/90"
          >
            <p>{compound.mechanism}</p>
          </div>
        </Container>
      </Section>

      {/* Typical protocols */}
      {compound.typicalProtocol && (
        <Section spacing="tight">
          <Container size="wide">
            <h2
              className="font-mono text-[11px] uppercase text-proteum-mist-low"
              style={{ letterSpacing: "0.18em" }}
            >
              Typical protocols
            </h2>
            <Card variant="glass" className="mt-5 border border-proteum-chrome-low/25">
              <div className="flex items-start gap-3 rounded-lg border border-proteum-gold-dim/30 bg-proteum-gold-dim/5 p-4">
                <AlertTriangle
                  size={16}
                  className="mt-0.5 shrink-0 text-proteum-gold-dim"
                />
                <p className="text-[13px] leading-relaxed text-proteum-bone/90">
                  <strong className="text-proteum-bone">
                    Educational reference only.
                  </strong>{" "}
                  Not medical advice. These are summary references from the
                  research literature, not dosing recommendations. Discuss any
                  use with a qualified clinician.
                </p>
              </div>

              <dl className="mt-6 space-y-5">
                <div>
                  <dt
                    className="font-mono text-[10px] uppercase text-proteum-mist-low"
                    style={{ letterSpacing: "0.18em" }}
                  >
                    Range referenced
                  </dt>
                  <dd className="mt-1.5 text-[15px] text-proteum-bone/90">
                    {compound.typicalProtocol.range}
                  </dd>
                </div>
                <div>
                  <dt
                    className="font-mono text-[10px] uppercase text-proteum-mist-low"
                    style={{ letterSpacing: "0.18em" }}
                  >
                    Duration
                  </dt>
                  <dd className="mt-1.5 text-[15px] text-proteum-bone/90">
                    {compound.typicalProtocol.duration}
                  </dd>
                </div>
                <div>
                  <dt
                    className="font-mono text-[10px] uppercase text-proteum-mist-low"
                    style={{ letterSpacing: "0.18em" }}
                  >
                    Caveats
                  </dt>
                  <dd className="mt-1.5 text-[15px] text-proteum-bone/90">
                    {compound.typicalProtocol.caveats}
                  </dd>
                </div>
              </dl>
            </Card>
          </Container>
        </Section>
      )}

      {/* Contraindications */}
      <Section spacing="tight">
        <Container size="wide">
          <h2
            className="font-mono text-[11px] uppercase text-proteum-mist-low"
            style={{ letterSpacing: "0.18em" }}
          >
            Contraindications &amp; considerations
          </h2>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {compound.contraindications.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 rounded-xl border border-proteum-chrome-low/20 bg-proteum-surface/40 p-4 backdrop-blur-[8px]"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-proteum-chrome-mid" />
                <span className="text-[14px] leading-relaxed text-proteum-bone/90">
                  {c}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Key research */}
      <Section spacing="tight">
        <Container size="wide">
          <h2
            className="font-mono text-[11px] uppercase text-proteum-mist-low"
            style={{ letterSpacing: "0.18em" }}
          >
            Key research
          </h2>
          <ul className="mt-5 divide-y divide-proteum-chrome-low/15 border-y border-proteum-chrome-low/15">
            {compound.keyResearch.map((r, i) => (
              <li key={i} className="py-5">
                <p className="font-display text-[17px] font-light leading-snug text-proteum-bone">
                  {r.title}
                </p>
                <p className="mt-2 text-[13px] text-proteum-mist">
                  {r.authors} · <em className="not-italic">{r.journal}</em> ·{" "}
                  {r.year}
                </p>
                {r.url && (
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-[13px] font-medium text-proteum-sapphire-glow hover:text-proteum-bone"
                  >
                    PubMed / DOI
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Related compounds */}
      {compound.relatedCompounds.length > 0 && (
        <Section spacing="tight">
          <Container size="wide">
            <h2
              className="font-mono text-[11px] uppercase text-proteum-mist-low"
              style={{ letterSpacing: "0.18em" }}
            >
              Related compounds
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {compound.relatedCompounds
                .map((id) => getCompoundById(id))
                .filter((c): c is Compound => Boolean(c))
                .map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/compounds/${rel.id}`}
                    className="glass glass-hover group rounded-2xl p-5"
                  >
                    <p
                      className="font-mono text-[10px] uppercase text-proteum-mist-low"
                      style={{ letterSpacing: "0.18em" }}
                    >
                      {capitalize(rel.category)}
                    </p>
                    <h3
                      className="mt-2 font-display font-light text-proteum-bone"
                      style={{
                        fontVariationSettings: '"opsz" 36',
                        fontSize: "1.125rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {rel.name}
                    </h3>
                    <p className="mt-2 text-[13px] text-proteum-mist">
                      {rel.tagline}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-medium text-proteum-sapphire-glow opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      Read brief →
                    </span>
                  </Link>
                ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Vendor section */}
      <Section spacing="tight">
        <Container size="wide">
          <VendorSection
            compound={compound}
            vendors={getVendorsForCompound(compound.id)}
          />
        </Container>
      </Section>

      {/* Legal status */}
      <Section spacing="tight">
        <Container size="wide">
          <div className="rounded-2xl border border-proteum-chrome-low/20 bg-proteum-surface/30 p-6 backdrop-blur-[8px]">
            <p
              className="font-mono text-[11px] uppercase text-proteum-mist-low"
              style={{ letterSpacing: "0.18em" }}
            >
              Legal status
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-proteum-mist">
              In the {compound.legalStatus.region}, {compound.name} is
              currently classified as{" "}
              <span className="text-proteum-bone">
                {humanizeStatus(compound.legalStatus.status)}
              </span>
              . {compound.legalStatus.note}
            </p>
          </div>
        </Container>
      </Section>

      {/* Disclaimer footer */}
      <Section spacing="tight" className="pb-16">
        <Container size="wide">
          <p className="text-[12px] leading-relaxed text-proteum-mist-low">
            Educational content only. Not medical advice. Nothing on this page
            diagnoses, treats, prescribes, or directs you to consume any
            substance. Recommendations are informational and intended to
            support a conversation with a qualified healthcare professional.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/compounds"
              className="inline-flex items-center gap-1 text-sm text-proteum-sapphire-glow hover:text-proteum-bone"
            >
              ← Back to compound library
            </Link>
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 text-sm font-medium text-proteum-bone hover:text-proteum-sapphire-glow"
            >
              Take the assessment
              <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </Section>
    </article>
  );
}

function StudiedForCard({ item }: { item: StudiedFor }) {
  return (
    <Card variant="glass" className="p-6">
      <div className="flex items-baseline justify-between gap-3">
        <h3
          className="font-display text-[17px] font-light leading-snug text-proteum-bone"
          style={{ fontVariationSettings: '"opsz" 36' }}
        >
          {item.domain}
        </h3>
        <span
          className={cn(
            "rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase",
            EVIDENCE_TONE[item.evidenceLevel],
          )}
          style={{ letterSpacing: "0.15em" }}
        >
          {EVIDENCE_LABEL[item.evidenceLevel]}
        </span>
      </div>
      <p className="mt-3 text-[14px] leading-relaxed text-proteum-mist">
        {item.summary}
      </p>
    </Card>
  );
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function humanizeStatus(s: string): string {
  switch (s) {
    case "research-only":
      return "research-only (not approved for human consumption)";
    case "approved-supplement":
      return "an approved dietary supplement";
    case "prescription":
      return "a prescription medication";
    case "restricted":
      return "restricted";
    default:
      return s;
  }
}

function buildStructuredData(c: Compound) {
  const description = `${c.tagline} ${c.longDescription.split(". ").slice(0, 2).join(". ")}`;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalEntity",
    name: c.name,
    alternateName: c.id,
    description,
    url: `${siteConfig.url}/compounds/${c.id}`,
    additionalType:
      c.category === "peptide"
        ? "https://schema.org/Drug"
        : "https://schema.org/DietarySupplement",
    medicineSystem: "https://schema.org/WesternConventional",
    relevantSpecialty: ["Endocrinology", "Sports Medicine", "Geriatrics"],
    author: {
      "@type": "Organization",
      name: "PROTEUM Editorial",
      url: siteConfig.url,
    },
    citation: c.keyResearch.map((r) => ({
      "@type": "ScholarlyArticle",
      name: r.title,
      author: r.authors,
      datePublished: String(r.year),
      publisher: r.journal,
      ...(r.url ? { url: r.url } : {}),
    })),
  };
}
