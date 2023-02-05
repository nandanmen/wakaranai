import * as fs from "fs/promises";
import path from "path";

export type Kanji = {
  strokes: number;
  grade: number;
  freq: number | null;
  jlpt_old: number;
  jlpt_new: number;
  meanings: string[];
  readings_on: string[];
  readings_kun: string[];
};

const getKanjiList = async () => {
  const dir = path.join(process.cwd(), "data");
  const kanji = JSON.parse(await fs.readFile(`${dir}/kanji.json`, "utf-8"));
  return kanji as Record<string, Kanji>;
};

export async function getKanjiByLevel(level: number) {
  const kanjiList = await getKanjiList();
  const kanjiByLevel = Object.entries(kanjiList).filter(
    ([, data]) => data.jlpt_new === level
  );
  return kanjiByLevel;
}

export async function getKanji(kanji: string): Promise<any> {
  const kanjiList = await getKanjiList();
  const kanjiData = kanjiList[kanji];
  return kanjiData;
}

export const sampleItemsFromArray = <T>(
  array: T[],
  count: number | "all"
): T[] => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  if (count === "all") return shuffled;
  return shuffled.slice(0, count);
};

export async function getKanjiByLevelAndCount(
  level: number,
  count: number | "all"
) {
  const kanjiByLevel = await getKanjiByLevel(level);
  const kanjiByLevelAndCount = sampleItemsFromArray(kanjiByLevel, count);
  return kanjiByLevelAndCount;
}
