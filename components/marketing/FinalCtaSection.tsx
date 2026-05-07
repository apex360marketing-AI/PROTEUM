import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeroGlow } from "@/components/layout/BackgroundLayers";

export function FinalCtaSection() {
  return (
    <Section spacing="loose" className="relative overflow-hidden">
      <HeroGlow tone="sapphire-glow" />

      <Container size="default" className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2
              className="text-balance font-display font-light text-proteum-bone"
              style={{
                fontVariationSettings: '"opsz" 144, "SOFT" 50',
                fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Don&apos;t guess. Know.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="mx-auto mt-8 max-w-xl text-[17px] leading-relaxed text-proteum-mist md:text-[19px]">
              Five minutes. No account required. The output is yours, whether
              you act on it now or later.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <div className="mt-12">
              <Button href="/assessment" size="lg">
                Take the assessment
                <ArrowRight size={16} />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
