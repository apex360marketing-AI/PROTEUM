/**
 * PROTEUM recommendation engine.
 *
 * Maps a user's quiz answers (keyed by question id, values are option slugs)
 * onto a ranked list of compound and lifestyle recommendations.
 *
 * Algorithm:
 *  1. For every compound and lifestyle entry, sum the weights of all match
 *     signals whose (questionId, answerValue) pair appears in the user's
 *     answers. Multi-select answers contribute one match per selected value.
 *  2. Apply category caps: top 3 peptides, top 4 vitamins, top 2 lifestyle.
 *  3. Apply diversity: cap at 2 GH-axis peptides in the top 3.
 *  4. Apply age gate: demote longevity-only peptides for users under 30.
 *  5. Normalize scores to 0–100.
 *  6. Generate up to 3 user-facing reasons per recommendation from the
 *     highest-weight matched signals.
 */

import {
  allCompounds,
  lifestyleRecommendations as allLifestyle,
} from "@/content/knowledge-base";
import type {
  Compound,
  LifestyleRecommendation,
  MatchSignal,
} from "@/content/knowledge-base/types";
import type { QuizAnswer } from "@/content/quiz-questions";
import { OTHER_VALUE } from "@/content/quiz-questions";

export type QuizAnswers = Record<string, QuizAnswer>;

export type CompoundRecommendation = {
  compound: Compound;
  /** 0–100 normalized within its category (peptides / vitamins). */
  matchScore: number;
  /** 1–3 dots used in the UI; derived from matchScore. */
  matchStrength: 1 | 2 | 3;
  /** Up to 3 user-facing reasons. */
  reasonsToShow: string[];
  /** Raw matched signals — useful for "Why these?" expansion. */
  matchedSignals: MatchSignal[];
  /** Rank within its category (1-based). */
  rank: number;
};

export type LifestyleRecommendationOut = {
  item: LifestyleRecommendation;
  matchScore: number;
  matchStrength: 1 | 2 | 3;
  reasonsToShow: string[];
  matchedSignals: MatchSignal[];
  rank: number;
};

export type RecommendationResult = {
  peptides: CompoundRecommendation[];
  vitamins: CompoundRecommendation[];
  lifestyle: LifestyleRecommendationOut[];
};

const GH_AXIS_PEPTIDES = new Set([
  "cjc-1295",
  "sermorelin",
  "tesamorelin",
  "ipamorelin",
]);

const LONGEVITY_ONLY_PEPTIDES = new Set([
  "foxo4-dri",
  "epitalon",
  "pinealon",
  "thymalin",
]);

// ─────────────── Public entry point ───────────────

export function generateRecommendations(
  answers: QuizAnswers,
): RecommendationResult {
  const ageRange = pickFirstValue(answers["age_range"]);
  const isUnder30 = ageRange === "under_30";

  // Score every compound.
  const peptideRaw = scoreCompounds(
    allCompounds.filter((c) => c.category === "peptide"),
    answers,
  );
  const vitaminRaw = scoreCompounds(
    allCompounds.filter((c) => c.category !== "peptide"),
    answers,
  );

  // Apply age gate: demote longevity-only peptides for under-30 users
  // unless they have other strong signals.
  const peptidesAgeGated = isUnder30
    ? peptideRaw.map((p) => {
        if (LONGEVITY_ONLY_PEPTIDES.has(p.compound.id)) {
          return { ...p, score: p.score * 0.4 };
        }
        return p;
      })
    : peptideRaw;

  // Sort and apply diversity to peptides (cap GH-axis at 2 in top 3).
  const peptidesRanked = applyGhAxisDiversity(
    [...peptidesAgeGated].sort((a, b) => b.score - a.score),
    /* topN */ 3,
  );

  const vitaminsRanked = [...vitaminRaw]
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  // Lifestyle scoring.
  const lifestyleRaw = allLifestyle.map((item) => {
    const matched = matchSignalsAgainst(item.matchSignals, answers);
    const score = matched.reduce((sum, m) => sum + m.weight, 0);
    return { item, matched, score };
  });
  const lifestyleRanked = [...lifestyleRaw]
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);

  // Normalize scores to 0–100 within each category.
  const peptideMax = Math.max(1, peptidesRanked[0]?.score ?? 1);
  const vitaminMax = Math.max(1, vitaminsRanked[0]?.score ?? 1);
  const lifestyleMax = Math.max(1, lifestyleRanked[0]?.score ?? 1);

  return {
    peptides: peptidesRanked
      .slice(0, 3)
      .map((entry, i) =>
        toCompoundRecommendation(entry, peptideMax, i + 1),
      ),
    vitamins: vitaminsRanked.map((entry, i) =>
      toCompoundRecommendation(entry, vitaminMax, i + 1),
    ),
    lifestyle: lifestyleRanked.map((entry, i) =>
      toLifestyleRecommendation(entry, lifestyleMax, i + 1),
    ),
  };
}

// ─────────────── Scoring ───────────────

type CompoundScore = {
  compound: Compound;
  matched: MatchSignal[];
  score: number;
};

function scoreCompounds(
  compounds: readonly Compound[],
  answers: QuizAnswers,
): CompoundScore[] {
  return compounds.map((compound) => {
    const matched = matchSignalsAgainst(compound.matchSignals, answers);
    const score = matched.reduce((sum, m) => sum + m.weight, 0);
    return { compound, matched, score };
  });
}

function matchSignalsAgainst(
  signals: readonly MatchSignal[],
  answers: QuizAnswers,
): MatchSignal[] {
  const out: MatchSignal[] = [];
  for (const signal of signals) {
    const ans = answers[signal.questionId];
    if (!ans) continue;
    const values = ans.selected.filter((v) => v !== OTHER_VALUE);
    if (values.includes(signal.answerValue)) {
      out.push(signal);
    }
  }
  return out;
}

// ─────────────── Diversity ───────────────

/**
 * Walk the sorted list and cap GH-axis peptides at 2 within the top N.
 * If the third top-ranked peptide is GH-axis and the first two are also
 * GH-axis, swap in the highest-ranked non-GH-axis candidate.
 */
function applyGhAxisDiversity(
  sorted: CompoundScore[],
  topN: number,
): CompoundScore[] {
  const top: CompoundScore[] = [];
  const ghAxisCount = (list: CompoundScore[]) =>
    list.filter((c) => GH_AXIS_PEPTIDES.has(c.compound.id)).length;

  for (const entry of sorted) {
    if (top.length === topN) break;
    const isGh = GH_AXIS_PEPTIDES.has(entry.compound.id);
    if (isGh && ghAxisCount(top) >= 2) continue;
    top.push(entry);
  }

  // If we couldn't fill topN due to skipping, pad with anything else.
  if (top.length < topN) {
    for (const entry of sorted) {
      if (top.length === topN) break;
      if (top.includes(entry)) continue;
      top.push(entry);
    }
  }

  return top;
}

// ─────────────── Output transforms ───────────────

function toCompoundRecommendation(
  entry: CompoundScore,
  maxScore: number,
  rank: number,
): CompoundRecommendation {
  const matchScore = Math.round((entry.score / maxScore) * 100);
  return {
    compound: entry.compound,
    matchScore,
    matchStrength: scoreToStrength(matchScore),
    matchedSignals: entry.matched,
    reasonsToShow: pickTopReasons(entry.matched),
    rank,
  };
}

function toLifestyleRecommendation(
  entry: { item: LifestyleRecommendation; matched: MatchSignal[]; score: number },
  maxScore: number,
  rank: number,
): LifestyleRecommendationOut {
  const matchScore = Math.round((entry.score / maxScore) * 100);
  return {
    item: entry.item,
    matchScore,
    matchStrength: scoreToStrength(matchScore),
    matchedSignals: entry.matched,
    reasonsToShow: pickTopReasons(entry.matched),
    rank,
  };
}

function scoreToStrength(score: number): 1 | 2 | 3 {
  if (score >= 80) return 3;
  if (score >= 50) return 2;
  return 1;
}

function pickTopReasons(signals: MatchSignal[]): string[] {
  const sorted = [...signals].sort((a, b) => b.weight - a.weight);
  // Deduplicate by questionId — only show one reason per quiz question.
  const seen = new Set<string>();
  const out: string[] = [];
  for (const s of sorted) {
    if (seen.has(s.questionId)) continue;
    seen.add(s.questionId);
    out.push(s.reasoning);
    if (out.length === 3) break;
  }
  return out;
}

function pickFirstValue(answer: QuizAnswer | undefined): string | null {
  if (!answer) return null;
  return answer.selected.find((v) => v !== OTHER_VALUE) ?? null;
}
