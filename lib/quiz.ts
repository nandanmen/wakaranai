import { getKanjiByLevelAndCount, Kanji } from "./kanji";
import { createServerClient } from "./supabase/server";
import { getVariations, VariationsResponse, WordV2Response } from "./words-v2";

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

type ProficiencyResponse = {
  user_id: string;
  kanji: string;
  jlpt: number;
  word_id: number;
  proficiency: number;
  num_variations: number;
  literal: string;
};

const getKanjiProficiencies = (proficiencies: ProficiencyResponse[]) => {
  const map = {} as Record<string, { total: number; num_variations: number }>;

  proficiencies.forEach((proficiency) => {
    const { kanji, proficiency: prof, num_variations } = proficiency;
    if (!map[kanji])
      map[kanji] = {
        total: 0,
        num_variations,
      };
    map[kanji].total += prof;
  });

  return Object.entries(map).reduce(
    (acc, [kanji, { total, num_variations }]) => {
      acc[kanji] = total / num_variations;
      return acc;
    },
    {} as Record<string, number>
  );
};

export async function getQuizV2(
  level: number,
  count: "all" | number
): Promise<VariationsResponse[]> {
  const client = createServerClient();

  const {
    data: { session },
  } = await client.auth.getSession();
  if (!session) return getAnonymousQuiz(level, count);

  const { data: kanji } = await client.from("kanji").select().eq("jlpt", level);
  if (!kanji) throw new Error(`No kanji found for level ${level}`);

  // Select only kanji that are not fully proficient
  // Out of those kanji, select only variants that are not fully proficient

  const { data: proficiencies } = await client
    .from("kanji_proficiency")
    .select<"*", ProficiencyResponse>()
    .eq("user_id", session.user.id)
    .eq("jlpt", level);

  if (!proficiencies?.length) return getAnonymousQuiz(level, count);

  const kanjiProficiencies = getKanjiProficiencies(proficiencies);
  const blockList = Object.keys(kanjiProficiencies).filter(
    (kanji) => kanjiProficiencies[kanji] >= MAX_PROFICIENCY
  );
  const allowList = kanji.filter(({ literal }) => !blockList.includes(literal));
  const kanjiSet = sample(
    allowList,
    count === "all" ? allowList.length : count
  );

  const wordBlockList = proficiencies
    .filter((proficiency) => proficiency.proficiency >= MAX_PROFICIENCY)
    .map((proficiency) => proficiency.word_id);

  const variations = await Promise.all(
    kanjiSet.map((kanji) => getVariations(kanji.literal))
  );

  const words = [] as VariationsResponse[];
  for (const variation of variations) {
    const allowList = variation.filter((v) => !wordBlockList.includes(v.id));
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

  const words = [] as VariationsResponse[];
  for (const variation of variations) {
    const word = pickUnique(words, variation);
    words.push(word);
  }

  return words;
}
