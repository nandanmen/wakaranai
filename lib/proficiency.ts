import { createServerClient } from "./supabase/server";
import { Proficiency } from "./supabase/types";
import { getVariations } from "./words-v2";

export async function getKanjiProficiency(kanji: string, level: number) {
  const client = createServerClient();
  const {
    data: { session },
  } = await client.auth.getSession();

  if (!session) return null;

  const variations = await getVariations(kanji, level);
  if (!variations) return null;

  const proficiencies = await Promise.all(
    variations.map(({ id }) => getProficiency(id, session.user.id))
  );

  const total = proficiencies.reduce((acc, cur) => acc + cur, 0);
  return total / proficiencies.length;
}

export async function getProficiency(wordId: number, userId: string) {
  const client = createServerClient();

  const { data } = await client
    .from("proficiency")
    .select()
    .eq("user_id", userId)
    .eq("word_id", wordId)
    .single<Proficiency>();

  return data?.proficiency ?? 0;
}
