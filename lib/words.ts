import { JMdictWord } from "@/data/types";
import { client, words } from "./supabase";

export type Word = {
  literal: string;
  reading: string;
  meanings: {
    texts: string[];
    partsOfSpeech: string[];
  }[];
  parts: {
    literal: string;
    reading?: string;
  }[];
  jlpt: number;
  jmdict: JMdictWord;
};

export async function getWords(limit: number, from = 0): Promise<Word[]> {
  const response = await words().select().gte("id", from).limit(limit);
  return response.data as Word[];
}

export async function getRandomWords(limit: number): Promise<Word[]> {
  const response = await client.rpc("get_random_words", {
    level: 5,
    max_count: limit,
  });
  return response.data as Word[];
}
