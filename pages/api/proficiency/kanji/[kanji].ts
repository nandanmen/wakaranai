import { getKanjiProficiency } from "@/lib/proficiency";
import { createClient } from "@/lib/supabase/api";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { kanji } = req.query;

  if (!kanji || Array.isArray(kanji)) {
    res.status(400).json({
      error: "Missing kanji",
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

  const proficiency = await getKanjiProficiency(client, kanji, session.user.id);
  return res.status(200).json({ proficiency });
}
