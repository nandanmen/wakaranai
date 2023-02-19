import { JMdictWord } from "@/data/types";
import { createServerClient, words } from "./supabase/server";

export type Word = {
  literal: string;
  readings: string[];
  meanings: {
    texts: string[];
    partsOfSpeech: string[];
  }[];
  parts: {
    literal: string;
    reading?: string;
  }[];
  jlpt: number;
  source: JMdictWord;
};

export async function getWords(limit: number, from = 0): Promise<Word[]> {
  const response = await words().select().gte("id", from).limit(limit);
  return response.data as Word[];
}

export async function getRandomWords(limit: number): Promise<Word[]> {
  const response = await createServerClient().rpc("get_random_words", {
    level: 5,
    max_count: limit,
  });
  return response.data as Word[];
}
