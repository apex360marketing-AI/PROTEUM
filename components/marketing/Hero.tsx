import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-24 pt-20 md:pb-40 md:pt-32">
      <HeroBackdrop />

      <Container size="wide" className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow tone="purple" className="mx-auto">
              <span className="size-1.5 rounded-full bg-proteum-purple-glow shadow-glow-purple" />
              Coming 2026 · Educational platform
            </Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 text-balance font-display text-display-lg md:text-display-xl text-proteum-bone">
              Rise beyond
              <br />
              <span className="bg-gradient-to-br from-proteum-bone via-proteum-bone to-proteum-purple-glow bg-clip-text text-transparent">
                your biology.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-8 max-w-2xl text-balance text-base leading-relaxed text-proteum-mist md:text-lg">
              The precision intelligence platform for clinical-grade peptides —
              decoding the molecules redefining performance, recovery, and
              longevity.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href="/assessment" size="lg">
                Take the assessment
                <ArrowRight size={16} />
              </Button>
              <Button href="#thesis" variant="secondary" size="lg">
                Learn more
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.22em] text-proteum-mist/70">
              Educational use only · Not medical advice
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[-20%] h-[80vh] w-[80vh] -translate-x-1/2 rounded-full bg-radial-purple blur-3xl animate-drift" />
      <div className="absolute right-[-10%] bottom-[-20%] h-[60vh] w-[60vh] rounded-full bg-radial-cyan blur-3xl animate-drift" />
      <GridLines />
      <div className="absolute inset-0 bg-grain opacity-40 mix-blend-overlay" />
    </div>
  );
}

function GridLines() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
          <path d="M 64 0 L 0 0 0 64" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
        <radialGradient id="fade" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="gridMask">
          <rect width="100%" height="100%" fill="url(#fade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridMask)" />
    </svg>
  );
}
