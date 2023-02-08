import { KanjiDic } from "@/data/types";
import { createServerClient, kanji } from "./supabase/server";

export type Kanji = {
  id: number;
  literal: string;
  jlpt: number;
  meanings: string[];
  readings: {
    on: string[];
    kun: string[];
  };
  source: KanjiDic;
};

export async function getKanjiByLevel(level = 5) {
  const response = await kanji().select().eq("jlpt", level);
  return response.data as Kanji[];
}

export async function getKanjiByLevelAndCount(
  level: number,
  count: number | "all"
) {
  let response;
  if (count === "all") {
    response = await kanji().select().eq("jlpt", level);
  } else {
    response = await createServerClient().rpc("get_random_kanji", {
      level,
      max_count: count,
    });
  }
  return response.data as Kanji[];
}
