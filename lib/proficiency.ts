import { createServerClient } from "./supabase/server";

export type Proficiency = Record<number, number>;

export async function getKanjiProficiencies(ids: number[]) {
  const client = createServerClient();
  const {
    data: { session },
  } = await client.auth.getSession();
  if (!session) return {};

  const { data } = await client
    .from("kanji_proficiency")
    .select()
    .in("kanji_id", ids)
    .eq("user_id", session.user.id);
  if (!data) return {};

  const proficiencies = {} as Record<number, number>;
  for (const { kanji_id, proficiency } of data) {
    proficiencies[kanji_id] = proficiency;
  }
  return proficiencies;
}
