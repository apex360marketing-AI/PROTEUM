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
        <header className="border-b border-white/[0.06] pb-12">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-balance font-display text-display-md text-proteum-bone">
            {title}
          </h1>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-proteum-mist">
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
      <h2 className="font-display text-2xl tracking-tight text-proteum-bone md:text-3xl">
        {heading}
      </h2>
      <div className="space-y-4 text-proteum-mist [&_strong]:text-proteum-bone [&_a]:text-proteum-bone [&_a]:underline [&_a]:underline-offset-4">
        {children}
      </div>
    </section>
  );
}
