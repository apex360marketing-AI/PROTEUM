import { BookOpen, FlaskConical, FileSearch } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const principles = [
  {
    icon: BookOpen,
    title: "Reviewed against peer-reviewed literature.",
    body:
      "Every peptide brief is built from primary sources. We cite trial papers, systematic reviews, and mechanistic biochemistry — and we tell you when the evidence is thin.",
  },
  {
    icon: FlaskConical,
    title: "Vendor partners independently verified.",
    body:
      "Inclusion criteria are quality-first: third-party analytical testing, transparent sourcing, and a verifiable track record. The bar is high, the list is short.",
  },
  {
    icon: FileSearch,
    title: "Conflicts disclosed, claims qualified.",
    body:
      "We earn affiliate revenue when you research a vendor. That model is disclosed everywhere it's relevant — and it never gates which peptides we cover or how.",
  },
] as const;

export function TrustSection() {
  return (
    <Section id="trust" className="border-y border-white/[0.05]">
      <Container size="wide">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow tone="cyan">Trust &amp; rigor</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-balance font-display text-display-md text-proteum-bone">
                Editorial standards before commercial ones.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-proteum-mist">
                A clinical advisory panel and our methodology documentation will
                be published before launch. Until then, the principles below
                define how we work.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2">
                <span className="size-1.5 rounded-full bg-proteum-cyan" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-proteum-mist">
                  Advisory panel · Coming pre-launch
                </span>
              </div>
            </Reveal>
          </div>

          <ul className="space-y-3 md:col-span-7">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal as="li" key={p.title} delay={120 + i * 80}>
                  <div className="flex gap-5 rounded-2xl border border-white/[0.06] bg-proteum-deep/60 p-6 md:p-8">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] text-proteum-cyan">
                      <Icon size={18} strokeWidth={1.6} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg tracking-tight text-proteum-bone md:text-xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-proteum-mist">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
