import { KanjiDic } from "@/data/types";
import { client, kanji } from "./supabase";
import { getRandomUnique } from "./utils";

export type Kanji = {
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
    response = await client.rpc("get_random_kanji", {
      level,
      max_count: count,
    });
  }
  return response.data as Kanji[];
}
