import type { Compound } from "./types";

// Popular peptides
import { bpc157 } from "./peptides-popular/bpc-157";
import { tb500 } from "./peptides-popular/tb-500";
import { cjc1295 } from "./peptides-popular/cjc-1295";
import { ipamorelin } from "./peptides-popular/ipamorelin";
import { sermorelin } from "./peptides-popular/sermorelin";
import { tesamorelin } from "./peptides-popular/tesamorelin";
import { ghkCu } from "./peptides-popular/ghk-cu";
import { melanotanII } from "./peptides-popular/melanotan-ii";
import { pt141 } from "./peptides-popular/pt-141";
import { semax } from "./peptides-popular/semax";
import { aod9604 } from "./peptides-popular/aod-9604";
import { epitalon } from "./peptides-popular/epitalon";

// Underrated peptides
import { thymalin } from "./peptides-underrated/thymalin";
import { selank } from "./peptides-underrated/selank";
import { cerebrolysin } from "./peptides-underrated/cerebrolysin";
import { kpv } from "./peptides-underrated/kpv";
import { dsip } from "./peptides-underrated/dsip";
import { foxo4Dri } from "./peptides-underrated/foxo4-dri";
import { pinealon } from "./peptides-underrated/pinealon";
import { ss31 } from "./peptides-underrated/ss-31";

// Foundational vitamins
import { vitaminD3 } from "./vitamins/vitamin-d3";
import { magnesiumGlycinate } from "./vitamins/magnesium-glycinate";
import { omega3 } from "./vitamins/omega-3";
import { bComplex } from "./vitamins/b-complex";
import { zinc } from "./vitamins/zinc";
import { coq10 } from "./vitamins/coq10";
import { creatine } from "./vitamins/creatine";
import { nac } from "./vitamins/nac";
import { lTheanine } from "./vitamins/l-theanine";
import { ashwagandha } from "./vitamins/ashwagandha";
import { turmeric } from "./vitamins/turmeric";
import { glycine } from "./vitamins/glycine";

import { lifestyleRecommendations } from "./lifestyle";

export { lifestyleRecommendations };
export type * from "./types";

export const popularPeptides: readonly Compound[] = [
  bpc157,
  tb500,
  cjc1295,
  ipamorelin,
  sermorelin,
  tesamorelin,
  ghkCu,
  melanotanII,
  pt141,
  semax,
  aod9604,
  epitalon,
];

export const underratedPeptides: readonly Compound[] = [
  thymalin,
  selank,
  cerebrolysin,
  kpv,
  dsip,
  foxo4Dri,
  pinealon,
  ss31,
];

export const foundationalVitamins: readonly Compound[] = [
  vitaminD3,
  magnesiumGlycinate,
  omega3,
  bComplex,
  zinc,
  coq10,
  creatine,
  nac,
  lTheanine,
  ashwagandha,
  turmeric,
  glycine,
];

export const allCompounds: readonly Compound[] = [
  ...popularPeptides,
  ...underratedPeptides,
  ...foundationalVitamins,
];

const compoundById = new Map(allCompounds.map((c) => [c.id, c]));

export function getCompoundById(id: string): Compound | undefined {
  return compoundById.get(id);
}

export function getCompoundsByCategory(
  category: Compound["category"],
): readonly Compound[] {
  return allCompounds.filter((c) => c.category === category);
}

export function getCompoundsByClassification(
  classification: Compound["classification"],
): readonly Compound[] {
  return allCompounds.filter((c) => c.classification === classification);
}
