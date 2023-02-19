import { getKanjiByLevelAndCount, Kanji } from "./kanji";
import { getKanjiProficiency, getProficiency } from "./proficiency";
import { createServerClient } from "./supabase/server";
import { getVariations, WordV2Response } from "./words-v2";

export type QuizLevel = 1 | 2 | 3 | 4 | 5;

const MAX_PROFICIENCY = 3;

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

const sample = <T>(arr: T[], count: number): T[] => {
  const seen = [] as T[];
  for (let i = 0; i < Math.min(arr.length, count); i++) {
    seen.push(pickUnique(seen, arr));
  }
  return seen;
};

export async function getQuizV2(
  level: number,
  count: "all" | number
): Promise<WordV2Response[]> {
  const client = createServerClient();

  const {
    data: { session },
  } = await client.auth.getSession();
  if (!session) return getAnonymousQuiz(level, count);

  const { data: kanji } = await client.from("kanji").select().eq("jlpt", level);
  if (!kanji) throw new Error(`No kanji found for level ${level}`);

  const proficiencies = await Promise.all(
    kanji.map(async (kanji) => {
      const proficiency = (await getKanjiProficiency(
        kanji.literal,
        level
      )) as number;
      return { kanji, proficiency };
    })
  );
  const allowList = proficiencies.filter(
    ({ proficiency }) => proficiency < MAX_PROFICIENCY
  );
  const kanjiSet = sample(
    allowList,
    count === "all" ? allowList.length : count
  );

  const variations = await Promise.all(
    kanjiSet.map(async (kanji) => {
      const variations = await getVariations(kanji.kanji.literal);
      return Promise.all(
        variations.map(async (variation) => {
          const proficiency = await getProficiency(
            variation.id,
            session.user.id
          );
          return { variation, proficiency };
        })
      );
    })
  );

  const words = [] as WordV2Response[];
  for (const variation of variations) {
    const allowList = variation
      .filter(({ proficiency }) => proficiency < MAX_PROFICIENCY)
      .map(({ variation }) => variation);
    const word = pickUnique(words, allowList);
    words.push(word);
  }

  return words;
}

async function getAnonymousQuiz(level: number, count: "all" | number) {
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
