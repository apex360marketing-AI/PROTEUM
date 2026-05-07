"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils/cn";

type Item = { q: string; a: string };

const items: Item[] = [
  {
    q: "Is this medical advice?",
    a: "No. PROTEUM is an educational platform. Nothing on this site diagnoses, treats, prescribes, or directs you to consume any substance. Recommendations are informational and intended to support a conversation with a qualified healthcare professional.",
  },
  {
    q: "Are peptides legal?",
    a: "It depends on the specific peptide, your jurisdiction, and the context of use. Many peptides discussed here are sold for research purposes and are not approved as drugs by most regulators. PROTEUM frames every molecule in that research-and-education context. We do not advise you to break any law and we encourage you to verify the regulatory status that applies to you.",
  },
  {
    q: "How do you choose vendor partners?",
    a: "Quality criteria first, commercial terms second. We require independent third-party analytical testing, transparent supply-chain documentation, a verifiable operating history, and responsive customer service. Vendors who can't meet the bar don't make the list, regardless of what they're willing to pay.",
  },
  {
    q: "Do you sell peptides?",
    a: "No. PROTEUM is an information and recommendation platform. We do not manufacture, hold inventory, or fulfill orders. When you choose to research a vendor, you transact with that vendor directly, on their terms, under their policies.",
  },
  {
    q: "When does the platform launch?",
    a: "The full platform — including the assessment engine, peptide briefs, and vetted vendor directory — is targeting a 2026 launch. The site you're on now establishes the foundation; deeper functionality will roll out in subsequent phases.",
  },
  {
    q: "How do affiliate links work?",
    a: "When you click through to a vendor partner and complete a purchase, PROTEUM may earn a commission. The price you pay is unaffected. This funding model lets us keep the educational content free, and it does not influence which peptides we cover or how we evaluate vendors. The disclosure appears wherever affiliate links are present.",
  },
];

export function FaqSection() {
  return (
    <Section id="faq">
      <Container size="default">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <Eyebrow tone="sapphire" bare>
              FAQ
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
              The questions that come up most.
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={140}>
          <ul className="glass mt-14 overflow-hidden rounded-2xl">
            {items.map((item, i) => (
              <FaqItem key={item.q} item={item} index={i} isLast={i === items.length - 1} />
            ))}
          </ul>
        </ScrollReveal>
      </Container>
    </Section>
  );
}

function FaqItem({
  item,
  index,
  isLast,
}: {
  item: Item;
  index: number;
  isLast: boolean;
}) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;

  return (
    <li
      className={cn(
        !isLast && "border-b border-proteum-chrome-low/15",
      )}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8",
          "transition-colors duration-200 hover:bg-proteum-chrome/[0.025]",
        )}
      >
        <span
          className="font-display font-medium text-proteum-bone"
          style={{
            fontVariationSettings: '"opsz" 36',
            fontSize: "1.125rem",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
          }}
        >
          {item.q}
        </span>
        <span
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-full border border-proteum-chrome-low/30 text-proteum-mist transition-all duration-300",
            open && "rotate-45 border-proteum-sapphire-glow text-proteum-sapphire-glow",
          )}
          aria-hidden
        >
          <Plus size={16} />
        </span>
      </button>
      <div
        id={id}
        role="region"
        className={cn(
          "grid overflow-hidden px-6 transition-all duration-300 ease-out md:px-8",
          open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <p className="max-w-3xl text-[15px] leading-relaxed text-proteum-mist">
            {item.a}
          </p>
        </div>
      </div>
    </li>
  );
}
