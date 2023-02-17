import { KanjiDic } from "@/data/types";
import { supabase } from "./supabase/public";
import { Word } from "./words";

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

const kanji = () => supabase.from("kanji");

export async function getWordsWithKanji(kanji: string) {
  const response = await supabase
    .from("words")
    .select()
    .like("literal", `%${kanji}%`);
  return response.data as Word[];
}

export async function getKanjiFromLiteral(literal: string, level: number) {
  const response = await kanji()
    .select()
    .eq("literal", literal)
    .eq("jlpt", level);
  return response.data?.[0] as Kanji;
}

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
    response = await supabase.rpc("get_random_kanji", {
      level,
      max_count: count,
    });
  }
  return response.data as Kanji[];
}
