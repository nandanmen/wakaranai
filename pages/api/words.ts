import { createBrowserClient } from "@/lib/supabase/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.query.kanji) return res.status(400).send("No kanji provided");
  const kanji = decodeURIComponent(req.query.kanji as string);
  const words = await createBrowserClient()
    .from("words")
    .select()
    .like("literal", `%${kanji}%`);
  res.send(words);
}
