import { Activity, Stethoscope, Hourglass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card, CardTitle, CardBody } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const audiences = [
  {
    icon: Activity,
    label: "Performance athletes",
    title: "Compete past your ceiling.",
    body:
      "If you're already optimizing sleep, training load, and nutrition, peptides are the next axis. We focus on what's defensibly evidenced for recovery, repair, and output.",
  },
  {
    icon: Stethoscope,
    label: "Clinicians",
    title: "Brief your patients better.",
    body:
      "A practitioner-grade reference for the peptides patients are already asking about — synthesized from the literature, with citations, so you spend less time triaging hype.",
  },
  {
    icon: Hourglass,
    label: "Longevity-focused",
    title: "Compound the right inputs.",
    body:
      "For people building a thirty-year health stack, not chasing a quarter. Peptides that target the actual mechanisms of aging — with honest framing about what we do and don't yet know.",
  },
] as const;

export function BuiltForSection() {
  return (
    <Section id="built-for">
      <Container size="wide">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Built for</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-balance font-display text-display-md text-proteum-bone">
              Three audiences. One platform that takes each of you seriously.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.label} delay={i * 100}>
                <Card interactive className="h-full">
                  <div className="flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-proteum-bone">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-proteum-mist">
                    {a.label}
                  </p>
                  <CardTitle className="mt-2 text-lg md:text-xl">{a.title}</CardTitle>
                  <CardBody className="mt-3 text-sm">{a.body}</CardBody>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
