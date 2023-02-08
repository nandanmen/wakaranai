import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";

export const createServerClient = () =>
  createServerComponentSupabaseClient({
    headers,
    cookies,
  });

export const words = () => createServerClient().from("words");

export const kanji = () => createServerClient().from("kanji");

export const kanjiQuizzes = () => createServerClient().from("kanji_quizzes");
