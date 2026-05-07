import type { Metadata } from "next";
import {
  Eye,
  FlaskConical,
  ShieldCheck,
  Star,
  Truck,
  UserCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { AffiliateDisclosure } from "@/components/vendors/AffiliateDisclosure";
import { VendorsIndex } from "@/components/vendors/VendorsIndex";
import { allVendors } from "@/content/vendors";

export const metadata: Metadata = {
  title: "Vendor partners — Quality criteria & evaluations",
  description:
    "PROTEUM's vendor partners and the quality criteria they meet — third-party testing, manufacturing, transparency, service, shipping, and review aggregate.",
  alternates: { canonical: "/vendors" },
  openGraph: {
    title: "Vendor partners — PROTEUM",
    description:
      "PROTEUM's vendor partners and the criteria we use to evaluate them.",
    url: "/vendors",
    type: "website",
  },
};

const CRITERIA = [
  {
    icon: FlaskConical,
    label: "Third-party testing",
    weight: 30,
    body: "Independent lab COAs published per batch — not in-house testing, not screenshots without provenance.",
  },
  {
    icon: ShieldCheck,
    label: "Manufacturing standard",
    weight: 15,
    body: "GMP- or ISO-certified manufacturing partners with documented audit history. Self-attested standards count for less.",
  },
  {
    icon: Eye,
    label: "Ingredient transparency",
    weight: 20,
    body: "Full disclosure of peptide purity, bacteriostatic content, excipients, and provenance — not vague 'pharmaceutical grade' claims.",
  },
  {
    icon: UserCheck,
    label: "Customer service",
    weight: 10,
    body: "Reasonable response times, written refund policies, tracked shipping. Practical signals of operational maturity.",
  },
  {
    icon: Truck,
    label: "Shipping policy",
    weight: 5,
    body: "Reliable delivery windows, free-shipping thresholds, international availability where it makes sense.",
  },
  {
    icon: Star,
    label: "Review aggregate",
    weight: 20,
    body: "Trustpilot ratings + review counts, plus a sentiment read on Reddit and similar venues. Verified, not curated.",
  },
] as const;

export default function VendorsIndexPage() {
  return (
    <>
      {/* Hero */}
      <Section spacing="tight" className="pt-12 md:pt-16">
        <Container size="wide">
          <Eyebrow tone="sapphire" bare>
            Vendor partners
          </Eyebrow>
          <h1
            className="mt-6 max-w-3xl text-balance font-display font-light text-proteum-bone"
            style={{
              fontVariationSettings: '"opsz" 144',
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Our vendor partners — and why we chose them.
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-proteum-mist md:text-[19px]">
            We vet every vendor on the same six criteria, regardless of
            commission rate. A vendor with a 30% affiliate rate but no
            third-party testing is rejected. A vendor with a 5% rate and
            transparent COAs is featured. Quality first, revenue second.
          </p>
        </Container>
      </Section>

      {/* Methodology */}
      <Section spacing="tight">
        <Container size="wide">
          <h2
            className="font-mono text-[11px] uppercase text-proteum-sapphire-glow"
            style={{ letterSpacing: "0.18em" }}
          >
            How we evaluate vendors
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CRITERIA.map((c) => (
              <Card key={c.label} variant="glass" chromeAccent className="p-6">
                <div className="flex size-11 items-center justify-center rounded-xl border border-proteum-sapphire-glow/25 bg-proteum-sapphire/10 text-proteum-sapphire-glow">
                  <c.icon size={20} strokeWidth={1.5} />
                </div>
                <p
                  className="mt-5 font-mono text-[10px] uppercase text-proteum-mist-low"
                  style={{ letterSpacing: "0.18em" }}
                >
                  {c.weight} pts
                </p>
                <h3
                  className="mt-2 font-display font-light text-proteum-bone"
                  style={{
                    fontVariationSettings: '"opsz" 36',
                    fontSize: "1.25rem",
                    lineHeight: 1.25,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {c.label}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-proteum-mist">
                  {c.body}
                </p>
              </Card>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-[14px] leading-relaxed text-proteum-mist">
            Total possible: 100 points. Vendors at 90+ are{" "}
            <span className="text-proteum-gold-dim">recommended</span>; 75–89
            are <span className="text-proteum-sapphire-glow">acceptable</span>;
            60–74 are{" "}
            <span className="text-proteum-chrome-mid">cautious</span>. Below 60
            we don&apos;t feature at all. Vendors are re-reviewed every 90
            days.
          </p>
        </Container>
      </Section>

      {/* Vendor list */}
      <Section spacing="tight">
        <Container size="wide">
          <VendorsIndex vendors={[...allVendors]} />
        </Container>
      </Section>

      {/* Buyer's guide */}
      <Section spacing="tight">
        <Container size="wide">
          <Card variant="glass" className="p-8 md:p-10">
            <h2
              className="font-display font-light text-proteum-bone"
              style={{
                fontVariationSettings: '"opsz" 96',
                fontSize: "1.625rem",
                lineHeight: 1.2,
                letterSpacing: "-0.015em",
              }}
            >
              What to look for in any peptide vendor.
            </h2>
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-proteum-mist">
              Even if you don&apos;t use one of our partners, the same six
              criteria apply. The single highest-yield diligence step is
              asking for a recent third-party COA on the specific product
              you&apos;re considering. Vendors that can produce one quickly
              are usually fine. Vendors that can&apos;t, or won&apos;t,
              should be off your list. The rest is corroboration.
            </p>
            <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-proteum-mist">
              We&apos;re educators, not salespeople — even when revenue is
              involved. The buyer&apos;s guide framing protects credibility
              for both of us.
            </p>
          </Card>
        </Container>
      </Section>

      {/* Full affiliate disclosure */}
      <Section spacing="tight" className="pb-16">
        <Container size="wide">
          <AffiliateDisclosure variant="full" />
        </Container>
      </Section>
    </>
  );
}
