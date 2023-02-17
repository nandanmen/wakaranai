import { getKanjiByLevelAndCount, Kanji } from "./kanji";

export type QuizLevel = 1 | 2 | 3 | 4 | 5;

export async function getQuiz(
  level: number,
  count: "all" | number
): Promise<Kanji[]> {
  // TODO: generate quiz based on proficiency
  return getKanjiByLevelAndCount(level, count);
}
