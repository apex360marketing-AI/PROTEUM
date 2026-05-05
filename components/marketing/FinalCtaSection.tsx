import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCtaSection() {
  return (
    <Section spacing="loose" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 mx-auto h-[40rem] w-[40rem] -translate-y-1/2 rounded-full bg-radial-purple blur-3xl"
      />
      <Container size="default">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-balance font-display text-display-md md:text-display-lg text-proteum-bone">
              Ready to start? Take the assessment.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-6 max-w-lg text-proteum-mist">
              Five minutes. No account required. The output is yours, whether
              you act on it now or later.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-10">
              <Button href="/assessment" size="lg">
                Take the assessment
                <ArrowRight size={16} />
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
