import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";

/**
 * Creates a supabase client suitable for use in Next.js server components.
 * Use the `./api` client instead if you're using an API route, or the `./
 * public` client if you don't need access to the current user.
 */
export const createServerClient = () =>
  createServerComponentSupabaseClient({
    headers,
    cookies,
  });

export const getSession = () => {
  const supabase = createServerClient();
  return supabase.auth.getSession();
};

export const words = () => createServerClient().from("words");

export const kanji = () => createServerClient().from("kanji");

export const quizzes = () => createServerClient().from("quizzes");
