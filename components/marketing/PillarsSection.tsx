import { Microscope, Target, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card, CardTitle, CardBody } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

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
          <Reveal>
            <Eyebrow>What PROTEUM is</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-balance font-display text-display-md text-proteum-bone">
              A precision intelligence layer for peptide research.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-proteum-mist">
              Three things, done deeply, instead of everything done shallowly.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.label} delay={i * 100}>
                <Card interactive className="h-full">
                  <div className="flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-proteum-purple/10 text-proteum-purple-glow">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-proteum-mist">
                    {p.label}
                  </p>
                  <CardTitle className="mt-2">{p.title}</CardTitle>
                  <CardBody className="mt-3 text-sm">{p.body}</CardBody>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
