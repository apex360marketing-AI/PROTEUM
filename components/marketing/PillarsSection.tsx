import { Microscope, Target, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const pillars = [
  {
    icon: Microscope,
    label: "Decode",
    title: "The science, made readable.",
    body:
      "Mechanism, evidence base, and known limitations for every molecule we cover — written by people who read trial papers, edited for people who don't.",
  },
  {
    icon: Target,
    label: "Contextualize",
    title: "Built around your goals.",
    body:
      "An adaptive assessment translates your training, recovery, and longevity priorities into a personalized shortlist with the reasoning shown in plain language.",
  },
  {
    icon: ShieldCheck,
    label: "Apply",
    title: "Curated, vetted sources.",
    body:
      "When you're ready to research a vendor, you see only those that meet our quality criteria — third-party tested, transparent sourcing, established reputation.",
  },
] as const;

export function PillarsSection() {
  return (
    <Section spacing="default" id="what">
      <Container size="wide">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <Eyebrow tone="sapphire" bare>
              What PROTEUM is
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
              A precision intelligence layer for peptide research.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="mx-auto mt-5 max-w-xl text-proteum-mist">
              Three things, done deeply, instead of everything done shallowly.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-7">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <ScrollReveal key={p.label} delay={i * 100}>
                <Card interactive chromeAccent className="h-full">
                  <div className="flex size-11 items-center justify-center rounded-xl border border-proteum-sapphire-glow/25 bg-proteum-sapphire/10 text-proteum-sapphire-glow shadow-[inset_0_1px_0_rgba(96,165,250,0.2)]">
                    <Icon size={20} strokeWidth={1.4} />
                  </div>
                  <p
                    className="mt-7 font-mono text-[11px] uppercase text-proteum-mist"
                    style={{ letterSpacing: "0.18em" }}
                  >
                    {p.label}
                  </p>
                  <h3
                    className="mt-2 font-display font-light text-proteum-bone"
                    style={{
                      fontVariationSettings: '"opsz" 144',
                      fontSize: "1.5rem",
                      lineHeight: 1.2,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-proteum-mist">
                    {p.body}
                  </p>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
