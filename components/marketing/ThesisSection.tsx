import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    n: "01",
    title: "Research access",
    body:
      "Peer-reviewed literature, clinical trial registries, and primary biochemistry are no longer locked behind institutional walls. The data is here. Most people just don't know how to read it.",
  },
  {
    n: "02",
    title: "Manufacturing precision",
    body:
      "GMP-grade synthesis, third-party analytical testing, and verified certificates of analysis have moved peptides from black-market chemistry into a category that can be evaluated rigorously.",
  },
  {
    n: "03",
    title: "Personalized protocols",
    body:
      "The same molecule serves wildly different goals depending on context. A precision platform translates individual variables — training, age, recovery debt, lab markers — into specific recommendations.",
  },
];

export function ThesisSection() {
  return (
    <Section id="thesis">
      <Container size="wide">
        <div className="grid gap-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <Reveal>
              <Eyebrow>The thesis</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-balance font-display text-display-md text-proteum-bone">
                Three forces have collided to make this category legible for the first time.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-proteum-mist">
                Peptides are not new. The ability to choose between them with confidence is.
                PROTEUM exists at that intersection.
              </p>
            </Reveal>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-2xl bg-white/[0.06] md:col-span-7">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.n} delay={120 + i * 80}>
                <article className="bg-proteum-deep/80 p-8 md:p-10">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-proteum-purple-glow">{p.n}</span>
                    <h3 className="font-display text-xl tracking-tight text-proteum-bone md:text-2xl">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-4 max-w-xl text-proteum-mist">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
