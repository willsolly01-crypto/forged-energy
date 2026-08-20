import { createClient, SupabaseClient } from "@supabase/supabase-js";

// SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in Vercel project
// environment variables. The service role key bypasses Row Level Security,
// so this client must only ever be used from server-side code (API routes)
// — never imported into a "use client" component.
//
// Built lazily (not at module scope) because supabase-js throws immediately
// if constructed with an empty URL/key, which would crash the Next.js
// build's page-data collection step before any env vars are set.
let _client: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (!_client) {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) {
      throw new Error("Supabase admin credentials are not set");
    }
    _client = createClient(url, key, { auth: { persistSession: false } });
  }
  return _client;
}
