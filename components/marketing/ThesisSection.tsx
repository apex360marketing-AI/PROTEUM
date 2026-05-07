import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const pillars = [
  {
    n: "01",
    title: "Research access",
    body:
      "Peer-reviewed literature, clinical trial registries, and primary biochemistry are no longer locked behind institutional walls. The data is here. Most people just don't know how to read it.",
  },
  {
    n: "02",
    title: "Manufacturing precision",
    body:
      "GMP-grade synthesis, third-party analytical testing, and verified certificates of analysis have moved peptides from black-market chemistry into a category that can be evaluated rigorously.",
  },
  {
    n: "03",
    title: "Personalized protocols",
    body:
      "The same molecule serves wildly different goals depending on context. A precision platform translates individual variables — training, age, recovery debt, lab markers — into specific recommendations.",
  },
];

export function ThesisSection() {
  return (
    <Section id="thesis">
      <Container size="wide">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <Eyebrow tone="sapphire" bare>
              The thesis
            </Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2
              className="mt-6 text-balance font-display font-light text-proteum-bone"
              style={{
                fontVariationSettings: '"opsz" 144',
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Three forces collided to make this category legible for the first time.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="mt-6 max-w-xl text-proteum-mist">
              Peptides are not new. The ability to choose between them with
              confidence is. PROTEUM exists at that intersection.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-7">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.n} delay={120 + i * 80}>
              <Card
                interactive
                chromeAccent={false}
                className="group h-full"
              >
                {/* Sapphire-glow top accent on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to right, transparent 0%, #60A5FA 50%, transparent 100%)",
                    boxShadow: "0 0 12px rgba(96, 165, 250, 0.6)",
                  }}
                />
                <span
                  className="font-mono text-[12px] text-proteum-sapphire-glow"
                  style={{ letterSpacing: "0.18em" }}
                >
                  {p.n}
                </span>
                <h3
                  className="mt-5 font-display font-light text-proteum-bone"
                  style={{
                    fontVariationSettings: '"opsz" 144',
                    fontSize: "1.5rem",
                    lineHeight: 1.2,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {p.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-proteum-mist">
                  {p.body}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
