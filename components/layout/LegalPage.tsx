import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  effective: string;
  intro?: string;
  children: React.ReactNode;
};

export function LegalPage({ eyebrow, title, effective, intro, children }: LegalPageProps) {
  return (
    <article className="py-16 md:py-24">
      <Container size="narrow">
        <header className="border-b border-proteum-chrome-low/20 pb-12">
          <Eyebrow tone="sapphire">{eyebrow}</Eyebrow>
          <h1
            className="mt-6 text-balance font-display font-light text-proteum-bone"
            style={{
              fontVariationSettings: '"opsz" 144',
              fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>
          <p
            className="mt-6 font-mono text-[11px] uppercase text-proteum-mist"
            style={{ letterSpacing: "0.18em" }}
          >
            Effective {effective}
          </p>
          {intro && <p className="mt-6 text-proteum-mist">{intro}</p>}
        </header>

        <div className="prose-proteum mt-12 space-y-8 text-proteum-bone/90">
          {children}
        </div>
      </Container>
    </article>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2
        className="font-display font-light text-proteum-bone"
        style={{
          fontVariationSettings: '"opsz" 96',
          fontSize: "1.625rem",
          lineHeight: 1.2,
          letterSpacing: "-0.015em",
        }}
      >
        {heading}
      </h2>
      <div className="space-y-4 text-proteum-mist [&_strong]:text-proteum-bone [&_a]:text-proteum-sapphire-glow [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-proteum-bone">
        {children}
      </div>
    </section>
  );
}
