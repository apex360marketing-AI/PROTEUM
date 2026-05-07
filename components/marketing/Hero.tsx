import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeroGlow } from "@/components/layout/BackgroundLayers";
import { StatCounter } from "@/components/marketing/StatCounter";

const stats = [
  { value: 247, suffix: "+", label: "Peptides catalogued" },
  { value: 42, suffix: "", label: "Clinically reviewed compounds" },
  { value: 17, suffix: "", label: "Vendor partners under audit" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-20 md:pb-40 md:pt-28">
      <HeroGlow />

      <Container size="wide" className="relative">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <Eyebrow tone="sapphire">
              <span className="size-1.5 rounded-full bg-proteum-sapphire-glow shadow-glow-sapphire" />
              The precision peptide intelligence platform
            </Eyebrow>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1
              className="mt-10 text-balance font-display text-proteum-bone"
              style={{
                fontVariationSettings: '"opsz" 144, "SOFT" 50',
                fontWeight: 300,
                fontSize: "clamp(2.75rem, 7.5vw, 5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Rise beyond
              <br />
              your{" "}
              <span className="hero-glow text-proteum-bone">biology.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p
              className="mt-8 max-w-2xl text-balance text-proteum-mist"
              style={{ fontSize: "clamp(1.0625rem, 1.5vw, 1.375rem)", lineHeight: 1.55 }}
            >
              Decoding the molecules redefining performance, recovery, and
              longevity — including the underrated compounds the major brands
              ignore because they can&apos;t be patented.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="mt-12 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button href="/assessment" size="lg">
                Take the assessment
                <ArrowRight size={16} />
              </Button>
              <Button href="#thesis" variant="chrome-ghost" size="lg">
                Why PROTEUM
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={320}>
            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-proteum-mist-low">
              Educational use only · Not medical advice
            </p>
          </ScrollReveal>

          {/* Stat strip */}
          <ScrollReveal delay={400} className="mt-16 md:mt-20">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-proteum-chrome-low/15 bg-proteum-chrome-low/5 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-proteum-void/40 px-6 py-7 backdrop-blur-sm">
                  <div
                    className="font-mono text-[clamp(2rem,3.5vw,2.75rem)] text-proteum-cyan"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    <StatCounter to={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-sm text-proteum-mist">{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Hero / page divider */}
          <div
            aria-hidden
            className="mx-auto mt-20 h-px w-full max-w-3xl"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, rgba(200, 205, 214, 0.3) 50%, transparent 100%)",
            }}
          />
        </div>
      </Container>
    </section>
  );
}
