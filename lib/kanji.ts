import { KanjiDic } from "@/data/types";
import { supabase } from "./supabase/public";

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

export async function getKanjiFromIds(ids: number[]): Promise<Kanji[]> {
  const { data } = await kanji().select().in("id", ids);
  if (!data) return [];

  const inOrder = [];
  for (const id of ids) {
    const kanji = data.find((k) => k.id === id);
    if (kanji) inOrder.push(kanji);
  }
  return inOrder;
}
