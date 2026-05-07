import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    n: "01",
    title: "Assess",
    body:
      "A short, structured assessment captures your goals, training context, recovery patterns, and any relevant baseline markers.",
  },
  {
    n: "02",
    title: "Match",
    body:
      "Your inputs map to a ranked shortlist of peptides whose published evidence aligns with what you're trying to accomplish.",
  },
  {
    n: "03",
    title: "Educate",
    body:
      "For each match, you get a deep brief — mechanism of action, the strongest studies, known caveats, and the questions worth asking a clinician.",
  },
  {
    n: "04",
    title: "Source",
    body:
      "When you're ready, see vetted vendor partners that meet our quality bar. Compare them on what actually matters: testing, sourcing, transparency.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <Section id="how-it-works">
      <Container size="wide">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <Eyebrow tone="sapphire" bare>
              How it works
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
              Four steps from question to informed decision.
            </h2>
          </ScrollReveal>
        </div>

        <ol className="relative mt-16 grid gap-6 md:grid-cols-4 md:gap-5">
          {/* Connecting line — only on md+, sits behind the cards */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[3.25rem] hidden h-px md:block"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, rgba(200, 205, 214, 0.2) 12%, rgba(200, 205, 214, 0.2) 88%, transparent 100%)",
            }}
          />

          {steps.map((step, i) => (
            <ScrollReveal as="li" key={step.n} delay={i * 80}>
              <Card interactive className="group relative h-full text-left">
                {/* Sapphire ring on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    boxShadow: "inset 0 0 0 1px rgba(96, 165, 250, 0.4), 0 0 32px rgba(96, 165, 250, 0.18)",
                  }}
                />

                <span
                  className="font-mono text-[12px] text-proteum-cyan"
                  style={{ letterSpacing: "0.18em" }}
                >
                  {step.n}
                </span>
                <h3
                  className="mt-6 font-display font-light text-proteum-bone"
                  style={{
                    fontVariationSettings: '"opsz" 144',
                    fontSize: "1.375rem",
                    lineHeight: 1.2,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {step.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-proteum-mist">
                  {step.body}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
