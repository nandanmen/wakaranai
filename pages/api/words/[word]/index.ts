import { supabase } from "@/lib/supabase/public";
import { NextApiRequest, NextApiResponse } from "next";

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

  const { data } = await supabase
    .from("words")
    .select()
    .eq("literal", word)
    .single();

  if (!data) return res.status(404).end();
  return res.status(200).json(data);
}
