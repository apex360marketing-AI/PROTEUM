"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FlaskConical, Leaf, Pill, Repeat } from "lucide-react";
import type { Compound } from "@/content/knowledge-base/types";
import { cn } from "@/lib/utils/cn";

type CategoryFilter = "all" | "peptide" | "vitamin" | "lifestyle";
type ClassificationFilter = "all" | "popular" | "underrated";

const CATEGORY_FILTERS: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "peptide", label: "Peptides" },
  { id: "vitamin", label: "Vitamins" },
  { id: "lifestyle", label: "Lifestyle" },
];

const CLASSIFICATION_FILTERS: { id: ClassificationFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "popular", label: "Popular" },
  { id: "underrated", label: "Underrated" },
];

export function CompoundsIndex({ compounds }: { compounds: Compound[] }) {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [classification, setClassification] =
    useState<ClassificationFilter>("all");

  const filtered = useMemo(() => {
    return compounds.filter((c) => {
      if (category === "lifestyle") return false;
      if (category !== "all") {
        if (category === "peptide" && c.category !== "peptide") return false;
        if (
          category === "vitamin" &&
          c.category !== "vitamin" &&
          c.category !== "mineral" &&
          c.category !== "cofactor"
        )
          return false;
      }
      if (classification !== "all" && c.classification !== classification) {
        return false;
      }
      return true;
    });
  }, [compounds, category, classification]);

  return (
    <div>
      {/* Category filter chips */}
      <div className="flex flex-wrap items-center gap-2">
        <span
          className="mr-2 font-mono text-[11px] uppercase text-proteum-mist-low"
          style={{ letterSpacing: "0.18em" }}
        >
          Category
        </span>
        {CATEGORY_FILTERS.map((f) => (
          <Chip
            key={f.id}
            label={f.label}
            active={category === f.id}
            onClick={() => setCategory(f.id)}
          />
        ))}
      </div>

      {/* Classification filter chips */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span
          className="mr-2 font-mono text-[11px] uppercase text-proteum-mist-low"
          style={{ letterSpacing: "0.18em" }}
        >
          Classification
        </span>
        {CLASSIFICATION_FILTERS.map((f) => (
          <Chip
            key={f.id}
            label={f.label}
            active={classification === f.id}
            onClick={() => setClassification(f.id)}
          />
        ))}
      </div>

      {category === "lifestyle" ? (
        <div className="glass mt-12 rounded-2xl p-8 text-center">
          <p className="text-proteum-mist">
            Lifestyle interventions appear inside the assessment results, paired
            with peptide and vitamin recommendations. Standalone lifestyle
            entries are coming in a future update.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <CompoundCard key={c.id} compound={c} />
          ))}
        </div>
      )}

      {filtered.length === 0 && category !== "lifestyle" && (
        <p className="mt-12 text-center text-proteum-mist">
          No compounds match those filters.
        </p>
      )}
    </div>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
        active
          ? "bg-proteum-sapphire/15 text-proteum-bone shadow-[inset_0_0_0_1px_rgba(96,165,250,0.45)]"
          : "border border-proteum-chrome-low/25 text-proteum-mist hover:border-proteum-chrome-mid/45 hover:text-proteum-bone",
      )}
    >
      {label}
    </button>
  );
}

function CompoundCard({ compound }: { compound: Compound }) {
  const Icon = pickIcon(compound);
  const isUnderrated = compound.classification === "underrated";

  return (
    <Link
      href={`/compounds/${compound.id}`}
      className={cn(
        "glass glass-hover group relative flex flex-col gap-4 rounded-2xl p-6",
        isUnderrated && "border-l-2 border-l-proteum-gold-dim",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl border border-proteum-sapphire-glow/25 bg-proteum-sapphire/10 text-proteum-sapphire-glow">
          <Icon size={18} strokeWidth={1.5} />
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <span
            className={cn(
              "rounded-full px-2 py-0.5 font-mono text-[10px] uppercase",
              "bg-proteum-chrome-low/15 text-proteum-chrome-mid",
            )}
            style={{ letterSpacing: "0.15em" }}
          >
            {compoundCategoryLabel(compound)}
          </span>
          {isUnderrated && (
            <span
              className="rounded-full bg-proteum-gold-dim/15 px-2 py-0.5 font-mono text-[10px] uppercase text-proteum-gold-dim"
              style={{ letterSpacing: "0.15em" }}
            >
              Underrated
            </span>
          )}
        </div>
      </div>

      <h3
        className="font-display font-light text-proteum-bone"
        style={{
          fontVariationSettings: '"opsz" 96',
          fontSize: "1.375rem",
          lineHeight: 1.2,
          letterSpacing: "-0.015em",
        }}
      >
        {compound.name}
      </h3>

      <p className="text-[14px] leading-relaxed text-proteum-mist">
        {compound.tagline}
      </p>

      <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-proteum-sapphire-glow opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        Read brief →
      </span>
    </Link>
  );
}

function pickIcon(c: Compound) {
  if (c.category === "peptide") return FlaskConical;
  if (c.category === "vitamin") return Pill;
  if (c.category === "mineral") return Pill;
  if (c.category === "cofactor") return Leaf;
  return Repeat;
}

function compoundCategoryLabel(c: Compound): string {
  if (c.category === "peptide") return "Peptide";
  if (c.category === "vitamin") return "Vitamin";
  if (c.category === "mineral") return "Mineral";
  if (c.category === "cofactor") return "Cofactor";
  return c.category;
}
