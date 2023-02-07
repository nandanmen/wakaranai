import { KanjiDic } from "@/data/types";
import { kanji } from "./supabase";
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

const levelToBounds = {
  5: [1, 79],
  4: [80, 245],
} as Record<number, [number, number]>;

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
    const [min, max] = levelToBounds[level];
    const ids = getRandomUnique(min, max, count);
    response = await kanji().select().eq("jlpt", level).in("id", ids);
  }
  return response.data as Kanji[];
}
