import { supabase } from "@/lib/supabase/public";
import { NextApiRequest, NextApiResponse } from "next";
import { isKanji } from "wanakana";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { word } = req.query;

  if (!word || Array.isArray(word)) {
    res.status(400).json({
      error: "Missing word or word is incorrectly formatted",
    });
    return;
  }

  const kanji = word.split("").filter(isKanji);
  if (!kanji.length) return res.status(200).json([]);

  const { data } = await supabase.from("kanji").select().in("literal", kanji);

  if (!data?.length) return res.status(404).end();
  return res.status(200).json(data);
}
