import { createClient } from "@/lib/supabase/api";
import { Proficiency } from "@/lib/supabase/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { kanji, level } = req.query;

  const client = createClient(req, res);
  const {
    data: { session },
  } = await client.auth.getSession();

  // do nothing if not logged in
  if (!session) {
    res.status(200).end();
    return;
  }

  const { data } = await client
    .from("words")
    .select("id")
    .like("literal", `%${kanji}%`)
    .eq("jlpt", Number(level));

  if (!data?.length) {
    return res.status(404).end();
  }

  const proficiencies = await Promise.all(
    data.map(async ({ id }) => {
      const { data } = await client
        .from("proficiency")
        .select()
        .eq("user_id", session.user.id)
        .eq("word_id", id)
        .single<Proficiency>();
      if (!data) return 0;
      return data.proficiency;
    })
  );

  const total = proficiencies.reduce((acc, cur) => acc + cur, 0);
  const average = total / proficiencies.length;

  return res.status(200).json({ proficiency: average });
}
