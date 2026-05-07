import { createClient } from "@supabase/supabase-js";

/**
 * Service-role Supabase client for server-only admin reads.
 * NEVER expose this to the browser; the service-role key bypasses RLS.
 *
 * Returns null if env vars are missing — callers should treat this as
 * "no analytics available" and degrade gracefully.
 */
export function createSupabaseAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) return null;
  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
