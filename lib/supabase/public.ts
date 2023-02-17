import { createClient } from "@supabase/supabase-js";

/**
 * Creates a supabase client with the anon key. Use this client when you don't
 * need to know about the current user.
 *
 * You _can_ use the client from `./server`, however that will turn the page to
 * be dynamically rendered because it accesses the cookies and headers objects.
 */
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);
