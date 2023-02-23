import { supabase } from "@/lib/supabase/public";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.query.kanji) return res.status(400).send("No kanji provided");
  const kanji = decodeURIComponent(req.query.kanji as string);
  const { data: words } = await supabase
    .from("variations")
    .select("id,literal,senses")
    .eq("kanji", kanji);
  res.send(words);
}
