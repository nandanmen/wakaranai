import { createClient } from "@/lib/supabase/api";
import { Proficiency } from "@/lib/supabase/types";
import { NextApiRequest, NextApiResponse } from "next";

const MAX_PROFICIENCY = 3;
const MIN_PROFICIENCY = 0;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const { wordId, increment } = req.body;
  if (!wordId) {
    res.status(400).json({
      error: "Missing wordId",
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
  const { data: wordProficiency } = await client
    .from("proficiency")
    .select()
    .eq("user_id", userId)
    .eq("word_id", wordId)
    .single<Proficiency>();

  let proficiency = wordProficiency?.proficiency ?? 0;
  if (increment) {
    proficiency = Math.min(MAX_PROFICIENCY, proficiency + 1);
  } else {
    proficiency = Math.max(MIN_PROFICIENCY, proficiency - 1);
  }

  const { error } = await client.from("proficiency").upsert(
    {
      user_id: userId,
      word_id: wordId,
      updated_at: new Date(),
      proficiency,
    },
    { onConflict: "word_id,user_id" }
  );
  if (error) {
    return res.status(400).json({ error });
  }
  return res.status(201).end();
}
