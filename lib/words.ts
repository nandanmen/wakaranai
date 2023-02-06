import * as fs from "fs/promises";
import { CheerioAPI, load } from "cheerio";

import { fetch } from "./fetch";
import { sampleItemsFromArray } from "./kanji";

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
  cache[level] = words
    .map((word: Word, index: number) => {
      return {
        ...word,
        word: word.word.split("/")[0].trim(),
        pos: index,
      };
    })
    .filter((word: Word) => word.word.length > 1);
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

export type Phrase = {
  text: string;
  reading: string | null;
  meanings: Meaning[];
  parts: PhrasePart[];
};

type Meaning = {
  definitions: string[];
  tags: string[];
  notes: string;
};

type PhrasePart = {
  text: string;
  reading: string | null;
};

const jishoCache: Map<string, Phrase> = new Map();

const JISHO_BASE_URI = "https://jisho.org";

const getJishoWordUrl = (phrase: string) => {
  return `${JISHO_BASE_URI}/word/${encodeURIComponent(phrase)}`;
};

/**
 * Jisho returns a 404 if the word is kana only, even if it's usually written
 * only with kana. If we find the word is a 404, we need to search for it and
 * get the first result to get the kanji form.
 */
const getPhraseHtml = async (
  phrase: string
): Promise<[string, string] | null> => {
  const res = await fetch(getJishoWordUrl(phrase));
  if (res.status < 400) {
    return [await res.text(), phrase];
  }

  const searchUrl = `${JISHO_BASE_URI}/search/${encodeURIComponent(phrase)}`;
  const searchRes = await fetch(searchUrl);
  if (searchRes.status >= 400) return null;

  const searchPage = load(await searchRes.text());
  const firstResult = searchPage("#primary").children(".exact_block").first();
  const match = firstResult.find(".text").first().text().trim();

  let link = firstResult.find(".light-details_link").first().attr("href");
  if (!link?.startsWith("https:")) {
    link = `https:${link}`;
  }

  const html = await fetch(link).then((res) => res.text());
  return [html, match];
};

const getReadingFromHtml = (html: CheerioAPI, query: string) => {
  const kanaOnly = query.split("").every((word) => /[ぁ-んァ-ンー]/.test(word));
  if (kanaOnly) {
    return {
      reading: null,
      parts: query.split("").map((text) => {
        return {
          reading: null,
          text,
        };
      }),
    };
  }
  const kana = html(".furigana").first().children("span");
  const parts: PhrasePart[] = [];
  kana.each((i, el) => {
    const text = html(el).text();
    parts.push({
      text: query.at(i) as string,
      reading: text.length > 0 ? text.trim() : null,
    });
  });
  const reading = parts
    .map((part) => part.reading ?? part.text)
    .join("")
    .trim();
  return { reading, parts };
};

const getMeaningsFromHtml = (html: CheerioAPI): Meaning[] => {
  const skipElements = ["other forms", "notes", "wikipedia definition"];
  const meaningElements = html(".meanings-wrapper")
    .children(".meaning-wrapper")
    .filter((_, el) => {
      return !skipElements.includes(html(el).prev().text().toLowerCase());
    });

  const meanings: Meaning[] = [];
  meaningElements.each((_, el) => {
    const tags = html(el)
      .prev()
      .filter(".meaning-tags")
      .text()
      .split(",")
      .map((t) => t.trim());
    const next = html(el);
    const definitions = next
      .find(".meaning-meaning")
      .text()
      .split(";")
      .map((t) => t.trim());
    const notes = next.find(".supplemental_info").text().trim();
    meanings.push({ definitions, tags: tags.filter(Boolean), notes });
  });

  return meanings;
};

export const clearCache = () => {
  jishoCache.clear();
};

export const getPhrase = async (phrase: string): Promise<Phrase | null> => {
  if (jishoCache.has(phrase)) {
    return jishoCache.get(phrase) as Phrase;
  }

  const pageResults = await getPhraseHtml(phrase);
  if (!pageResults) return null;

  const [html, match] = pageResults;
  const $ = load(html);
  const { reading, parts } = getReadingFromHtml($, phrase);
  const meanings = getMeaningsFromHtml($);

  const parsedPhrase = {
    text: phrase,
    reading,
    meanings,
    parts,
  };

  jishoCache.set(phrase, parsedPhrase);
  return parsedPhrase;
};

export async function getRandomWords(limit: number): Promise<Phrase[]> {
  const words = sampleItemsFromArray(await getWordList("n5"), limit);
  const phrases = await Promise.all(words.map((word) => getPhrase(word.word)));
  return phrases.filter(Boolean) as Phrase[];
}
