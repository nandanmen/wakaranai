import { createClient } from "@/lib/supabase/api";
import { KanjiProficiency } from "@/lib/supabase/types";
import { NextApiRequest, NextApiResponse } from "next";

const MAX_PROFICIENCY = 4;
const MIN_PROFICIENCY = 0;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const { kanjiId, increment } = req.body;
  if (!kanjiId) {
    res.status(400).json({
      error: "Missing kanjiId",
    });
    return;
  }

  const client = createClient(req, res);
  const {
    data: { session },
  } = await client.auth.getSession();

  // do nothing if not logged in
  if (!session) {
    res.status(200).end();
    return;
  }

  const userId = session.user.id;
  const { data: kanjiProficiency } = await client
    .from("kanji_proficiency")
    .select()
    .eq("user_id", userId)
    .eq("kanji_id", kanjiId)
    .single<KanjiProficiency>();

  let proficiency = kanjiProficiency?.proficiency ?? 0;
  if (increment) {
    proficiency = Math.min(MAX_PROFICIENCY, proficiency + 1);
  } else {
    proficiency = Math.max(MIN_PROFICIENCY, proficiency - 1);
  }

  const { error } = await client.from("kanji_proficiency").upsert(
    {
      user_id: userId,
      kanji_id: kanjiId,
      updated_at: new Date(),
      proficiency,
    },
    { onConflict: "kanji_id,user_id" }
  );
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(201).end();
}
