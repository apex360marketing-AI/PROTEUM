import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

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
    <Section id="how-it-works" className="border-y border-white/[0.05] bg-proteum-deep/30">
      <Container size="wide">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-balance font-display text-display-md text-proteum-bone">
              Four steps from question to informed decision.
            </h2>
          </Reveal>
        </div>

        <ol className="relative mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/[0.06] md:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 80}>
              <div className="flex h-full flex-col bg-proteum-deep p-8 md:p-10">
                <span className="font-mono text-xs text-proteum-cyan">{step.n}</span>
                <h3 className="mt-6 font-display text-xl tracking-tight text-proteum-bone">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-proteum-mist">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
