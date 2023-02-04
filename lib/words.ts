import * as fs from "fs/promises";

export type Word = {
  word: string;
  meaning: string;
  furigana: string;
  romaji: string;
  level: number;
  pos: number;
};

const cache: Record<"n5", Word[] | null> = {
  n5: null,
};

const getWordList = async (level: keyof typeof cache): Promise<Word[]> => {
  if (cache[level]) {
    return cache[level] as Word[];
  }
  const words = JSON.parse(await fs.readFile(`data/${level}.json`, "utf-8"));
  cache[level] = words.map((word: Word, index: number) => {
    return {
      ...word,
      pos: index,
    };
  });
  return cache[level] as Word[];
};

export async function getWords(limit: number, from = 0): Promise<Word[]> {
  const words = await getWordList("n5");
  return words.slice(from, limit);
}

export async function getWord(level: string, pos: number): Promise<any> {
  const words = await getWordList(level as keyof typeof cache);
  const word = words[pos];

  const parts = await Promise.all(
    word.word.split("").map((char) =>
      fetch(`https://kanjialive-api.p.rapidapi.com/api/public/kanji/${char}`, {
        headers: {
          "X-RapidAPI-Key": process.env.KANJI_API_KEY as string,
          "X-RapidAPI-Host": "kanjialive-api.p.rapidapi.com",
        },
      }).then((res) => res.json())
    )
  );

  return {
    ...word,
    parts: parts.filter((part) => part.kanji).map((part) => part.kanji),
  };
}
