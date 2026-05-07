import { Activity, Stethoscope, Hourglass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Card } from "@/components/ui/Card";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

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

/**
 * Tiny molecular dot pattern used as a subtle background flavor on each card.
 * Renders at chrome-low/0.05 opacity per the spec.
 */
function MolecularDots() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
    >
      <defs>
        <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#C8CDD6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

export function BuiltForSection() {
  return (
    <Section id="built-for">
      <Container size="wide">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <Eyebrow tone="sapphire" bare>
              Built for
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
              Three audiences. One platform that takes each of you seriously.
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-7">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <ScrollReveal key={a.label} delay={i * 100}>
                <Card interactive className="relative h-full overflow-hidden">
                  <MolecularDots />
                  <div className="relative">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-proteum-chrome-mid/20 bg-proteum-chrome/[0.04] text-proteum-chrome">
                      <Icon size={20} strokeWidth={1.4} />
                    </div>
                    <p
                      className="mt-7 font-mono text-[11px] uppercase text-proteum-mist"
                      style={{ letterSpacing: "0.18em" }}
                    >
                      {a.label}
                    </p>
                    <h3
                      className="mt-2 font-display font-light text-proteum-bone"
                      style={{
                        fontVariationSettings: '"opsz" 144',
                        fontSize: "1.375rem",
                        lineHeight: 1.2,
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {a.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-proteum-mist">
                      {a.body}
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
