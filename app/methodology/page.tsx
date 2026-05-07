import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { AffiliateDisclosure } from "@/components/vendors/AffiliateDisclosure";

export const metadata: Metadata = {
  title:
    "Methodology — How PROTEUM evaluates compounds, vendors, and editorial integrity",
  description:
    "How PROTEUM writes its compound briefs, evaluates vendor partners, manages affiliate disclosure, and decides when to update content.",
  alternates: { canonical: "/methodology" },
  openGraph: {
    title: "Methodology — PROTEUM",
    description:
      "Editorial principles, vendor evaluation, affiliate disclosure, update cadence, and limitations.",
    url: "/methodology",
    type: "article",
  },
};

export default function MethodologyPage() {
  return (
    <>
      {/* Hero */}
      <Section spacing="tight" className="pt-12 md:pt-16">
        <Container size="default">
          <Eyebrow tone="sapphire" bare>
            Methodology
          </Eyebrow>
          <h1
            className="mt-6 text-balance font-display font-light text-proteum-bone"
            style={{
              fontVariationSettings: '"opsz" 144',
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            How we work, why you should trust it.
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-proteum-mist md:text-[19px]">
            PROTEUM&apos;s value rests on a single thing: that the editorial
            content is honest about what the research actually shows, and that
            the vendor recommendations are filtered on quality before
            commercial considerations. This page explains exactly how. If
            anything below stops being true, the platform stops being useful —
            so we treat these principles as load-bearing.
          </p>
        </Container>
      </Section>

      {/* Section 1: Editorial principles */}
      <Section spacing="tight">
        <Container size="default">
          <SectionHeader number="01" title="Editorial principles" />
          <div className="prose-proteum mt-6 max-w-[65ch] space-y-5 text-[16px] leading-[1.75] text-proteum-bone/90">
            <p>
              Every compound brief in our knowledge base is structured around
              the same template: a long-form description, a mechanism
              explanation, a list of studied effects with explicit evidence
              levels, contraindications, and a key research section with real
              citations. The schema is enforced in TypeScript — the templates
              don&apos;t allow shortcuts.
            </p>
            <p>
              We label evidence rigorously. A compound studied in two small
              animal trials is{" "}
              <em className="not-italic text-proteum-mist-low">preliminary</em>.
              A compound with multiple registered RCTs but unsettled clinical
              translation is{" "}
              <em className="not-italic text-proteum-cyan">emerging</em>. A
              compound with FDA-approved indications, large meta-analyses, or
              decades of clinical use is{" "}
              <em className="not-italic text-proteum-sapphire-glow">established</em>.
              We never promote preliminary evidence to emerging or established,
              even when the consumer narrative does.
            </p>
            <p>
              Citations are real PubMed and DOI references. When we cannot find
              independently verifiable sources for a claim, we either remove
              the claim or write more conservatively. Where Russian-language
              clinical literature is the bulk of a compound&apos;s evidence
              base — Selank, Pinealon, Thymalin, Epitalon — we say so directly
              and frame the regulatory disconnect honestly rather than dressing
              it up as Western evidence.
            </p>
            <p>
              No compound entry mentions any specific vendor. The two are
              separated for a reason: editorial integrity depends on knowing
              where the line is.
            </p>
          </div>
        </Container>
      </Section>

      {/* Section 2: Vendor evaluation */}
      <Section spacing="tight">
        <Container size="default">
          <SectionHeader number="02" title="Vendor evaluation" />
          <div className="prose-proteum mt-6 max-w-[65ch] space-y-5 text-[16px] leading-[1.75] text-proteum-bone/90">
            <p>
              Every vendor is scored on six criteria, weighted to total 100
              points. Vendors below 60 are not featured at all. Vendors at
              60–74 are listed as <em>cautious</em>. 75–89 are{" "}
              <em>acceptable</em>. 90+ are <em>recommended</em>.
            </p>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <strong className="text-proteum-bone">
                  Third-party testing — 30 points.
                </strong>{" "}
                Independent lab COAs published per batch. Self-attested testing
                or in-house assays earn a fraction of the score.
              </li>
              <li>
                <strong className="text-proteum-bone">
                  Manufacturing standard — 15 points.
                </strong>{" "}
                GMP- or ISO-certified facilities with documented audit history.
              </li>
              <li>
                <strong className="text-proteum-bone">
                  Ingredient transparency — 20 points.
                </strong>{" "}
                Full disclosure of peptide purity, bacteriostatic content, and
                excipients — not vague &quot;pharmaceutical grade&quot; claims.
              </li>
              <li>
                <strong className="text-proteum-bone">
                  Customer service — 10 points.
                </strong>{" "}
                Response times, refund policy, tracked shipping. Practical
                signals of operational maturity.
              </li>
              <li>
                <strong className="text-proteum-bone">
                  Shipping policy — 5 points.
                </strong>{" "}
                Reliable delivery, free-shipping threshold, international
                availability where relevant.
              </li>
              <li>
                <strong className="text-proteum-bone">
                  Review aggregate — 20 points.
                </strong>{" "}
                Trustpilot rating + count, Reddit sentiment. Verified, not
                curated.
              </li>
            </ul>
            <p>
              The full list of vendors and their current scores lives at{" "}
              <Link
                href="/vendors"
                className="text-proteum-sapphire-glow underline underline-offset-4 hover:text-proteum-bone"
              >
                /vendors
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>

      {/* Section 3: Affiliate disclosure */}
      <Section spacing="tight">
        <Container size="default">
          <SectionHeader number="03" title="Affiliate disclosure" />
          <div className="prose-proteum mt-6 max-w-[65ch] space-y-5 text-[16px] leading-[1.75] text-proteum-bone/90">
            <p>
              PROTEUM earns commissions when users click through to a vendor
              partner and complete a purchase. Commissions vary by vendor and
              are disclosed on each vendor profile. The price you pay is
              unaffected.
            </p>
            <p>
              Our editorial criteria — listed above — determine which vendors
              we feature. Commission rate does not. A vendor with a 30%
              affiliate rate but no third-party testing is rejected. A vendor
              with a 5% rate and verified COAs is featured. We&apos;ve turned
              down higher-paying programs because the vendor failed our
              quality review, and the platform&apos;s reputation depends on
              continuing to do that.
            </p>
            <p>
              Affiliate links are surfaced exclusively on dedicated vendor
              sections of compound pages and on the{" "}
              <Link
                href="/vendors"
                className="text-proteum-sapphire-glow underline underline-offset-4 hover:text-proteum-bone"
              >
                vendor index
              </Link>
              . Compound briefs themselves are vendor-neutral.
            </p>
          </div>

          <div className="mt-8">
            <AffiliateDisclosure variant="full" />
          </div>
        </Container>
      </Section>

      {/* Section 4: Update cadence */}
      <Section spacing="tight">
        <Container size="default">
          <SectionHeader number="04" title="Update cadence" />
          <div className="prose-proteum mt-6 max-w-[65ch] space-y-5 text-[16px] leading-[1.75] text-proteum-bone/90">
            <p>
              Vendors are reviewed every 90 days. Each vendor profile shows
              the date of its most recent review. If a vendor&apos;s status
              changes between reviews — a recall, a quality incident, a major
              change in operations — we re-evaluate immediately.
            </p>
            <p>
              Compound briefs are reviewed annually as a baseline, and
              revisited whenever significant new research is published — a
              registered Phase III trial reading out, a major meta-analysis, a
              regulatory action. Our citation set is treated as a living
              document, not a one-time research dump.
            </p>
            <p>
              The recommendation engine is treated as code: every change is
              version-controlled, the match-signal weights are visible to the
              team, and the diversity and age-gating rules are documented in
              the engine&apos;s source.
            </p>
          </div>
        </Container>
      </Section>

      {/* Section 5: Limitations */}
      <Section spacing="tight" className="pb-16">
        <Container size="default">
          <SectionHeader number="05" title="Limitations" />
          <div className="prose-proteum mt-6 max-w-[65ch] space-y-5 text-[16px] leading-[1.75] text-proteum-bone/90">
            <p>
              PROTEUM is not a clinical service. Nothing on this site
              diagnoses, treats, or directs you to consume any substance. Every
              recommendation is intended as the starting point for a
              conversation with a qualified clinician. We say this everywhere
              we surface a recommendation, not because the lawyers told us to,
              but because it&apos;s the truth: precision-medicine claims
              require precision-medicine accountability, and we are an
              educational platform, not a prescriber.
            </p>
            <p>
              Several of the most interesting compounds in our knowledge base
              — particularly the underrated set — have evidence bases skewed
              toward Russian, Chinese, or Eastern European literature. We
              reference what we can verify in English and flag the rest. If
              you have access to that literature in original languages and
              spot a gap or correction, we&apos;d like to hear about it.
            </p>
            <p>
              Vendor evaluation is necessarily a snapshot. A vendor that meets
              our criteria today may not next quarter. The 90-day cadence is
              meant to keep the snapshot fresh, but cannot prevent every
              between-review surprise. Buyer due diligence — particularly
              asking for a current COA — remains essential.
            </p>
            <p>
              Where we don&apos;t know something, we say we don&apos;t know.
              That&apos;s the principle the rest of the methodology rests on.
            </p>
          </div>

          <Card variant="glass" className="mt-12 p-6 md:p-8">
            <p
              className="font-mono text-[11px] uppercase text-proteum-cyan"
              style={{ letterSpacing: "0.18em" }}
            >
              Last updated
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-proteum-mist">
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              — this page is reviewed alongside every quarterly vendor cycle.
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span
        className="font-mono text-[12px] text-proteum-sapphire-glow"
        style={{ letterSpacing: "0.18em" }}
      >
        {number}
      </span>
      <h2
        className="font-display font-light text-proteum-bone"
        style={{
          fontVariationSettings: '"opsz" 96',
          fontSize: "clamp(1.625rem, 3vw, 2.25rem)",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
