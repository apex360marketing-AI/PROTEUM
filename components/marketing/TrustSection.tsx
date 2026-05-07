import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const referencedIn = ["PubMed", "NIH", "Examine.com", "Mayo Clinic"];

export function TrustSection() {
  return (
    <Section id="trust">
      <Container size="default">
        <div className="mx-auto max-w-2xl text-center">
          {/* Chrome line above the gold mark */}
          <ScrollReveal>
            <div
              aria-hidden
              className="mx-auto h-px w-32"
              style={{
                background:
                  "linear-gradient(to right, transparent 0%, rgba(200, 205, 214, 0.4) 50%, transparent 100%)",
              }}
            />
          </ScrollReveal>

          {/* Gold-dim verified mark — gold's first appearance on the page */}
          <ScrollReveal delay={80}>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-proteum-gold-dim/40 bg-proteum-gold-dim/[0.06] px-4 py-2 backdrop-blur-sm">
              <ShieldCheck
                size={14}
                strokeWidth={1.6}
                className="text-proteum-gold-dim"
              />
              <span
                className="font-mono text-[11px] uppercase text-proteum-gold-dim"
                style={{ letterSpacing: "0.18em" }}
              >
                Verified by clinical advisors
              </span>
            </div>
          </ScrollReveal>

          {/* Chrome line below */}
          <ScrollReveal delay={120}>
            <div
              aria-hidden
              className="mx-auto mt-6 h-px w-32"
              style={{
                background:
                  "linear-gradient(to right, transparent 0%, rgba(200, 205, 214, 0.4) 50%, transparent 100%)",
              }}
            />
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <h2
              className="mt-12 text-balance font-display font-light text-proteum-bone"
              style={{
                fontVariationSettings: '"opsz" 144',
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Editorial standards before commercial ones.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-proteum-mist md:text-[17px]">
              Every brief is built from primary sources — peer-reviewed trials,
              systematic reviews, and mechanistic biochemistry. We cite the
              evidence, qualify the limits, and disclose the conflicts. The
              clinical advisory panel signs off on the methodology before
              anything ships.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={320}>
            <div className="mt-12">
              <p
                className="font-mono text-[11px] uppercase text-proteum-mist-low"
                style={{ letterSpacing: "0.18em" }}
              >
                Referenced in
              </p>
              <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                {referencedIn.map((name) => (
                  <li
                    key={name}
                    className="font-display text-[18px] font-light text-proteum-chrome-mid"
                    style={{
                      fontVariationSettings: '"opsz" 24',
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
