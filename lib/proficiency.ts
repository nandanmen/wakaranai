import { SupabaseClient } from "@supabase/supabase-js";
import { createServerClient } from "./supabase/server";
import { Proficiency } from "./supabase/types";
import { getVariations } from "./words-v2";

export async function getProficiency(
  client: SupabaseClient,
  wordId: number,
  userId: string
) {
  const { data } = await client
    .from("proficiency")
    .select()
    .eq("user_id", userId)
    .eq("word_id", wordId)
    .single<Proficiency>();
  return data?.proficiency ?? 0;
}

export async function getKanjiProficiency(
  client: SupabaseClient,
  kanji: string,
  userId: string
) {
  const { data } = await client
    .from("kanji_proficiency")
    .select("proficiency,num_variations")
    .eq("user_id", userId)
    .eq("kanji", kanji);

  if (!data?.length) return 0;
  const numVariations = data[0].num_variations;
  const total = data.reduce((acc, cur) => acc + cur.proficiency, 0);
  return total / numVariations;
}
