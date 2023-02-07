import { Kanji } from "@/lib/kanji";

export interface Result {
  reading: Answer;
  meaning: Answer;
}

export interface KanjiResult extends Result {
  kanji: Kanji;
}

export type Answer =
  | {
      type: "correct" | "incorrect";
      value: string;
    }
  | {
      type: "skipped";
      value: null;
    };
