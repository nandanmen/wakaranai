import { getKanjiByLevelAndCount, Kanji } from "./kanji";
import { getVariations, WordV2Response } from "./words-v2";

export type QuizLevel = 1 | 2 | 3 | 4 | 5;

export async function getQuiz(
  level: number,
  count: "all" | number
): Promise<Kanji[]> {
  // TODO: generate quiz based on proficiency
  return getKanjiByLevelAndCount(level, count);
}

const getRandomIndex = (max: number) => Math.floor(Math.random() * max);

const pickUnique = <T>(seen: T[], arr: T[]): T => {
  const index = getRandomIndex(arr.length);
  const item = arr[index];
  if (seen.includes(item)) {
    return pickUnique(seen, arr);
  }
  return item;
};

export async function getQuizV2(
  level: number,
  count: "all" | number
): Promise<WordV2Response[]> {
  const kanji = await getKanjiByLevelAndCount(level, count);
  const variations = await Promise.all(
    kanji.map((kanji) => getVariations(kanji.literal))
  );

  const words = [] as WordV2Response[];
  for (const variation of variations) {
    const word = pickUnique(words, variation);
    words.push(word);
  }

  return words;
}
