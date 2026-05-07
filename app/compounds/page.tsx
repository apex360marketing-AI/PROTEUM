import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CompoundsIndex } from "@/components/compounds/CompoundsIndex";
import { allCompounds } from "@/content/knowledge-base";

export const metadata: Metadata = {
  title: "Compounds — Peptides, vitamins, and longevity research",
  description:
    "Editorial briefs on the peptides, vitamins, and lifestyle interventions PROTEUM tracks — including the underrated compounds the major brands ignore.",
  alternates: { canonical: "/compounds" },
  openGraph: {
    title: "Compounds — PROTEUM",
    description:
      "Editorial briefs on the peptides, vitamins, and lifestyle interventions PROTEUM tracks.",
    url: "/compounds",
    type: "website",
  },
};

export default function CompoundsIndexPage() {
  return (
    <>
      <Section spacing="tight" className="pt-12 md:pt-16">
        <Container size="wide">
          <Eyebrow tone="sapphire" bare>
            Compound library
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
            Every compound we track, in one place.
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-proteum-mist md:text-[19px]">
            32 entries — popular peptides, the underrated compounds the
            consumer market hasn&apos;t caught up to, and the foundational
            vitamins that support everything. Each has a structured editorial
            brief grounded in real published research.
          </p>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container size="wide">
          <CompoundsIndex compounds={[...allCompounds]} />
        </Container>
      </Section>
    </>
  );
}
