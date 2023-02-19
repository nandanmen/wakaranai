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

export async function getQuizV2(
  level: number,
  count: "all" | number
): Promise<WordV2Response[]> {
  const kanji = await getKanjiByLevelAndCount(level, count);
  const words = await Promise.all(
    kanji.map(async (kanji) => {
      const variations = await getVariations(kanji.literal);
      return variations[getRandomIndex(variations.length)];
    })
  );
  return words;
}
