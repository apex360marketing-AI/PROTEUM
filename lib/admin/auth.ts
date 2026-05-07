import { createHash, timingSafeEqual } from "node:crypto";

/**
 * Admin auth — lightweight password-based gate for /admin/*.
 *
 * The cookie stores a SHA-256 hash of the configured ADMIN_PASSWORD. On each
 * request the middleware re-hashes the env-var password and compares it
 * against the cookie value with a constant-time check. Rotating the env var
 * invalidates all existing sessions; clearing the cookie logs out.
 *
 * This is deliberately not a full auth system — there is no user database,
 * no roles, no session expiry beyond the cookie maxAge. Adequate for a
 * single-operator analytics dashboard, not for high-stakes data.
 */

export const ADMIN_COOKIE_NAME = "proteum_admin";
export const ADMIN_COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days, in seconds

export function getAdminPasswordHash(): string | null {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw || pw.length < 8) return null;
  return hashPassword(pw);
}

export function hashPassword(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

export function isValidAdminCookie(cookieValue: string | undefined): boolean {
  if (!cookieValue) return false;
  const expected = getAdminPasswordHash();
  if (!expected) return false;
  // Constant-time compare. Both inputs must be the same length for
  // timingSafeEqual; SHA-256 hex is always 64 chars.
  if (cookieValue.length !== expected.length) return false;
  try {
    return timingSafeEqual(
      Buffer.from(cookieValue),
      Buffer.from(expected),
    );
  } catch {
    return false;
  }
}
