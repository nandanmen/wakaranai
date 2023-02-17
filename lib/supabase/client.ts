import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

/**
 * Creates a supabase client suitable for use in the browser.
 */
export const createBrowserClient = () => createBrowserSupabaseClient();
