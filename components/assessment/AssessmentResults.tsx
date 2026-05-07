"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  FlaskConical,
  Leaf,
  Pill,
  Repeat,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { useQuizStore } from "@/lib/stores/quiz-store";
import {
  generateRecommendations,
  type CompoundRecommendation,
  type LifestyleRecommendationOut,
} from "@/lib/recommendations/engine";
import { OTHER_VALUE } from "@/content/quiz-questions";
import type { Compound } from "@/content/knowledge-base/types";
import { cn } from "@/lib/utils/cn";

type TabId = "peptides" | "vitamins" | "lifestyle";

export function AssessmentResults() {
  const answers = useQuizStore((s) => s.answers);
  const completedAt = useQuizStore((s) => s.completedAt);
  const hydrated = useQuizStore((s) => s.hydrated);
  const resetSession = useQuizStore((s) => s.resetSession);

  const [activeTab, setActiveTab] = useState<TabId>("peptides");
  const [whyOpen, setWhyOpen] = useState(false);

  const recs = useMemo(() => generateRecommendations(answers), [answers]);
  const summary = useMemo(() => buildSummary(answers), [answers]);

  useEffect(() => {
    if (!hydrated) return;
  }, [hydrated]);

  const hasAnswers = Object.keys(answers).length > 0;
  const isStaleVisit = hydrated && !hasAnswers && !completedAt;

  if (isStaleVisit) {
    return (
      <div>
        <Eyebrow tone="sapphire">Results</Eyebrow>
        <h1
          className="mt-6 font-display font-light text-proteum-bone"
          style={{
            fontVariationSettings: '"opsz" 144',
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          You haven&apos;t taken the assessment yet.
        </h1>
        <p className="mt-6 text-proteum-mist">
          Start with the 15-question intake — it takes about five minutes.
        </p>
        <div className="mt-10">
          <Button href="/assessment" size="lg">
            Begin assessment
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    );
  }

  const counts = {
    peptides: recs.peptides.length,
    vitamins: recs.vitamins.length,
    lifestyle: recs.lifestyle.length,
  };

  return (
    <div>
      <Eyebrow tone="sapphire" bare>
        Your protocol
      </Eyebrow>

      <h1
        className="mt-6 text-balance font-display font-light text-proteum-bone"
        style={{
          fontVariationSettings: '"opsz" 144',
          fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        }}
      >
        Built around your goals.
      </h1>

      <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-proteum-mist md:text-[19px]">
        {summary}
      </p>

      {/* Tab strip */}
      <div className="mt-12 flex flex-wrap gap-1 rounded-full border border-proteum-chrome-low/25 bg-proteum-surface/40 p-1 backdrop-blur-[16px]">
        {(["peptides", "vitamins", "lifestyle"] as const).map((id) => {
          const active = activeTab === id;
          const count = counts[id];
          const label =
            id === "peptides"
              ? "Peptides"
              : id === "vitamins"
                ? "Vitamins"
                : "Lifestyle";
          return (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200",
                active
                  ? "bg-proteum-sapphire/15 text-proteum-bone shadow-[inset_0_0_0_1px_rgba(96,165,250,0.45)]"
                  : "text-proteum-mist hover:text-proteum-bone",
              )}
              aria-pressed={active}
            >
              {label}
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 font-mono text-[10px]",
                  active
                    ? "bg-proteum-sapphire-glow/20 text-proteum-sapphire-glow"
                    : "bg-proteum-chrome-low/20 text-proteum-mist-low",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Recommendation cards */}
      <ul className="mt-8 flex flex-col gap-5">
        {activeTab === "peptides" &&
          recs.peptides.map((r) => (
            <CompoundRecommendationCard key={r.compound.id} rec={r} />
          ))}
        {activeTab === "vitamins" &&
          recs.vitamins.map((r) => (
            <CompoundRecommendationCard key={r.compound.id} rec={r} />
          ))}
        {activeTab === "lifestyle" &&
          recs.lifestyle.map((r) => (
            <LifestyleRecommendationCard key={r.item.id} rec={r} />
          ))}
        {((activeTab === "peptides" && recs.peptides.length === 0) ||
          (activeTab === "vitamins" && recs.vitamins.length === 0) ||
          (activeTab === "lifestyle" && recs.lifestyle.length === 0)) && (
          <li className="glass rounded-2xl p-8 text-center text-proteum-mist">
            We didn&apos;t find strong matches in this category. Try adjusting
            your assessment answers if this is unexpected.
          </li>
        )}
      </ul>

      {/* Why these? */}
      <button
        type="button"
        onClick={() => setWhyOpen((v) => !v)}
        className="glass mt-12 flex w-full items-center justify-between rounded-2xl px-6 py-5 text-left transition-colors hover:bg-proteum-surface/60"
        aria-expanded={whyOpen}
      >
        <span>
          <span
            className="font-mono text-[11px] uppercase text-proteum-sapphire-glow"
            style={{ letterSpacing: "0.18em" }}
          >
            Why these?
          </span>
          <span
            className="mt-2 block font-display font-light text-proteum-bone"
            style={{
              fontVariationSettings: '"opsz" 36',
              fontSize: "1.0625rem",
              lineHeight: 1.4,
            }}
          >
            See how your answers shaped each recommendation.
          </span>
        </span>
        <ChevronDown
          size={20}
          className={cn(
            "shrink-0 text-proteum-mist transition-transform duration-300",
            whyOpen && "rotate-180 text-proteum-sapphire-glow",
          )}
        />
      </button>

      <div
        className={cn(
          "grid overflow-hidden transition-all duration-300 ease-out",
          whyOpen ? "grid-rows-[1fr] mt-3 opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <div className="glass space-y-4 rounded-2xl p-6 md:p-8">
            <p className="text-[15px] leading-relaxed text-proteum-mist">
              The recommendation engine cross-references your answers against
              every compound in our knowledge base. Each compound has a set of
              <em> match signals</em> — quiz answers that signal alignment with
              the compound&apos;s strongest evidence. We sum the weights of all
              your matched signals, apply diversity rules (no more than two
              GH-axis peptides at a time), and demote longevity-only compounds
              for users under 30.
            </p>
            <p className="text-[15px] leading-relaxed text-proteum-mist">
              Higher match-strength dots mean tighter alignment between the
              compound&apos;s strongest published evidence and your specific
              inputs. Click <em>Read brief</em> on any card to see the full
              editorial entry — mechanism, key research, contraindications, and
              the legal status that applies in your region.
            </p>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="glass mt-12 rounded-2xl p-6 md:p-8">
        <p
          className="font-mono text-[11px] uppercase text-proteum-gold-dim"
          style={{ letterSpacing: "0.18em" }}
        >
          Coming soon
        </p>
        <h3
          className="mt-3 font-display font-light text-proteum-bone"
          style={{
            fontVariationSettings: '"opsz" 96',
            fontSize: "1.5rem",
            lineHeight: 1.2,
            letterSpacing: "-0.015em",
          }}
        >
          Get the full report.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-proteum-mist">
          Deep briefs per molecule, vetted vendor partners, dosing protocols
          backed by trial data, and a printable PDF. We&apos;ll wire this up in
          the next phase.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button disabled size="md">
            Get the full report
            <ArrowRight size={16} />
          </Button>
          <Button variant="ghost" onClick={resetSession}>
            <RotateCcw size={14} />
            Start over
          </Button>
        </div>
      </div>
    </div>
  );
}

// ─────────────── Recommendation cards ───────────────

function CompoundRecommendationCard({ rec }: { rec: CompoundRecommendation }) {
  const Icon = pickIcon(rec.compound);
  const isUnderrated = rec.compound.classification === "underrated";

  return (
    <li
      className={cn(
        "glass glass-hover rounded-2xl p-6 md:p-7",
        isUnderrated && "border-l-2 border-l-proteum-gold-dim",
      )}
    >
      <div className="flex items-start gap-5">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-proteum-sapphire-glow/30 bg-proteum-sapphire/10 text-proteum-sapphire-glow">
          <Icon size={20} strokeWidth={1.5} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <h3
                className="font-display text-proteum-bone"
                style={{
                  fontVariationSettings: '"opsz" 96',
                  fontSize: "1.375rem",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: "-0.015em",
                }}
              >
                {rec.compound.name}
              </h3>
              <p className="mt-1 text-[14px] text-proteum-mist">
                {rec.compound.tagline}
              </p>
              {isUnderrated && (
                <span
                  className="mt-2 inline-flex rounded-full bg-proteum-gold-dim/15 px-2 py-0.5 font-mono text-[10px] uppercase text-proteum-gold-dim"
                  style={{ letterSpacing: "0.15em" }}
                >
                  Underrated
                </span>
              )}
            </div>
            <MatchDots strength={rec.matchStrength} />
          </div>

          {rec.reasonsToShow.length > 0 && (
            <ul className="mt-4 space-y-2">
              {rec.reasonsToShow.map((reason, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-[14px] leading-relaxed text-proteum-bone/85"
                >
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-proteum-sapphire-glow" />
                  {reason}
                </li>
              ))}
            </ul>
          )}

          <div
            aria-hidden
            className="mt-6 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, rgba(200, 205, 214, 0.2) 50%, transparent 100%)",
            }}
          />

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <Link
              href={`/compounds/${rec.compound.id}`}
              className="text-sm font-medium text-proteum-sapphire-glow transition-colors hover:text-proteum-bone"
            >
              Read brief →
            </Link>
            <Button
              variant="chrome-ghost"
              size="sm"
              disabled
              aria-disabled
              className="opacity-60"
            >
              View vendor options
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}

function LifestyleRecommendationCard({
  rec,
}: {
  rec: LifestyleRecommendationOut;
}) {
  return (
    <li className="glass glass-hover rounded-2xl p-6 md:p-7">
      <div className="flex items-start gap-5">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-proteum-cyan/30 bg-proteum-cyan/10 text-proteum-cyan">
          <Repeat size={20} strokeWidth={1.5} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <div>
              <h3
                className="font-display text-proteum-bone"
                style={{
                  fontVariationSettings: '"opsz" 96',
                  fontSize: "1.375rem",
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                {rec.item.name}
              </h3>
              <p className="mt-1 text-[14px] text-proteum-mist">
                {rec.item.tagline}
              </p>
            </div>
            <MatchDots strength={rec.matchStrength} />
          </div>

          <p className="mt-4 text-[14px] leading-relaxed text-proteum-bone/85">
            {rec.item.rationale}
          </p>
        </div>
      </div>
    </li>
  );
}

function MatchDots({ strength }: { strength: 1 | 2 | 3 }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="font-mono text-[10px] uppercase text-proteum-mist-low"
        style={{ letterSpacing: "0.18em" }}
      >
        Match
      </span>
      <span
        className="flex items-center gap-1"
        aria-label={`Match strength ${strength} of 3`}
      >
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={cn(
              "size-1.5 rounded-full",
              i <= strength
                ? "bg-proteum-sapphire-glow"
                : "bg-proteum-chrome-low/30",
            )}
            style={
              i <= strength
                ? { boxShadow: "0 0 6px rgba(96, 165, 250, 0.7)" }
                : undefined
            }
          />
        ))}
      </span>
    </div>
  );
}

function pickIcon(c: Compound) {
  if (c.category === "peptide") return FlaskConical;
  if (c.category === "vitamin") return Pill;
  if (c.category === "mineral") return Pill;
  if (c.category === "cofactor") return Leaf;
  return Sparkles;
}

// ─────────────── Summary ───────────────

function buildSummary(
  answers: Record<string, { selected: string[] }>,
): string {
  const goal = answers["primary_goal"]?.selected.find((v) => v !== OTHER_VALUE);
  const win = answers["90_day_win"]?.selected.find((v) => v !== OTHER_VALUE);

  const goalCopy: Record<string, string> = {
    perform_higher: "perform at a higher level",
    feel_younger: "feel younger and extend healthspan",
    fix_specific: "fix something specific",
  };
  const winCopy: Record<string, string> = {
    physical_change: "with measurable physical change in 90 days",
    mental_change: "with sharper focus and mood in 90 days",
    health_markers: "with better health markers in 90 days",
  };

  const goalText = goal ? goalCopy[goal] : null;
  const winText = win ? winCopy[win] : null;

  if (goalText && winText) {
    return `You're here to ${goalText}, ${winText}. Here's the protocol that best matches your inputs.`;
  }
  if (goalText) {
    return `You're here to ${goalText}. Here's the protocol that best matches your inputs.`;
  }
  return "Here's the protocol that best matches your inputs.";
}
