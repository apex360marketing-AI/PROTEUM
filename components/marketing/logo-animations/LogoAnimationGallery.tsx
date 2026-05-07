"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import LogoAnimationA from "./LogoAnimationA";
import LogoAnimationB from "./LogoAnimationB";
import LogoAnimationC from "./LogoAnimationC";
import LogoAnimationD from "./LogoAnimationD";
import LogoAnimationE from "./LogoAnimationE";
import { Button } from "@/components/ui/Button";

const concepts = [
  { id: "A", title: "Convergence", duration: 5500, Component: LogoAnimationA, summary: "Letters slide in from random 3D directions and land with a sapphire halo." },
  { id: "B", title: "Particle assembly", duration: 6000, Component: LogoAnimationB, summary: "Cloud of chrome dots converges into letterforms; gold-dim halo at end." },
  { id: "C", title: "Helix unwind", duration: 5500, Component: LogoAnimationC, summary: "Sapphire DNA helix unwinds into the wordmark; chrome shine sweep finishes." },
  { id: "D", title: "Molecular bond", duration: 7000, Component: LogoAnimationD, summary: "Chrome nodes pop in, sapphire bonds draw, letters solidify left → right." },
  { id: "E", title: "Light sweep", duration: 5000, Component: LogoAnimationE, summary: "Sapphire beam sweeps left → right; letters materialize; gold-dim halo." },
] as const;

export function LogoAnimationGallery() {
  const [tick, setTick] = useState(0);
  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <div>
          <p
            className="font-mono text-[12px] uppercase text-proteum-sapphire-glow"
            style={{ letterSpacing: "0.18em" }}
          >
            Dev / Logo gallery
          </p>
          <h1
            className="mt-3 font-display font-light text-proteum-bone"
            style={{
              fontVariationSettings: '"opsz" 144',
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Five logo loading animations
          </h1>
          <p className="mt-3 max-w-2xl text-proteum-mist">
            Click <em>Replay all</em> to re-trigger every animation in lockstep.
            Pick the concept that best suits the brand and tell the engineer to
            wire it into <code className="font-mono text-proteum-sapphire-glow">/assessment/results</code>.
          </p>
        </div>
        <Button onClick={() => setTick((t) => t + 1)} variant="chrome-ghost" size="sm">
          <RotateCcw size={14} />
          Replay all
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {concepts.map((c) => {
          const C = c.Component;
          return (
            <div key={c.id} className="glass rounded-2xl p-8">
              <div className="flex items-baseline justify-between">
                <p
                  className="font-mono text-[11px] uppercase text-proteum-mist-low"
                  style={{ letterSpacing: "0.18em" }}
                >
                  Concept {c.id}
                </p>
                <span className="font-mono text-[11px] text-proteum-mist-low">
                  {(c.duration / 1000).toFixed(1)}s
                </span>
              </div>
              <h2
                className="mt-2 font-display font-light text-proteum-bone"
                style={{
                  fontVariationSettings: '"opsz" 96',
                  fontSize: "1.5rem",
                  lineHeight: 1.2,
                }}
              >
                {c.title}
              </h2>
              <p className="mt-2 text-sm text-proteum-mist">{c.summary}</p>

              <div
                key={tick}
                className="mt-8 flex h-44 items-center justify-center rounded-xl border border-proteum-chrome-low/20 bg-proteum-void/60"
              >
                <C duration={c.duration} size={56} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
