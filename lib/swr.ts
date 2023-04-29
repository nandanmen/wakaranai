import useSWR from "swr";
import type { Kanji, Sentence } from "./types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useSentences = (wordId: number) => {
  return useSWR<Sentence[]>(`/api/sentences?id=${wordId}`, fetcher);
};

export const useKanji = (literal: string) => {
  return useSWR<Kanji[]>(`/api/kanji/${literal}`, fetcher);
};
