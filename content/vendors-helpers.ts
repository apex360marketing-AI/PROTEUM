/**
 * Cross-module helper for the admin dashboard. Resolves a compound id to a
 * display label by looking it up in the knowledge base; falls back to the
 * raw id if the compound has been retired.
 */

import { allVendors as _allVendors, getVendorById as _getVendorById } from "./vendors";
import { getCompoundById } from "./knowledge-base";

export const allVendors = _allVendors;
export const getVendorById = _getVendorById;

export function getCompoundLabel(compoundId: string): string {
  return getCompoundById(compoundId)?.name ?? compoundId;
}
