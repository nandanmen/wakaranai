import { createClient } from "@supabase/supabase-js";

export const client = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);

export const words = () => client.from("words");

export const kanji = () => client.from("kanji");
