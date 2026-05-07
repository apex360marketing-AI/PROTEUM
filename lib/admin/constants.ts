/**
 * Edge-runtime-safe constants for the admin auth gate.
 * The crypto-using helpers live in lib/admin/auth.ts (Node runtime only).
 */
export const ADMIN_COOKIE_NAME = "proteum_admin";
export const ADMIN_COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days, in seconds
