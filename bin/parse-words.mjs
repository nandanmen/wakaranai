import * as fs from "fs";

const words = JSON.parse(fs.readFileSync("./data/jlpt-words.json", "utf-8"));
console.log(words[0]);

const dictionary = JSON.parse(
  fs.readFileSync("./data/dictionary.json", "utf-8")
);
console.log(dictionary.words[0]);

const readings = JSON.parse(
  fs.readFileSync("./data/readings.json", "utf-8").trim()
);
console.log(readings[0]);

const parseEntry = (word, entry) => {
  const sense = entry.sense.map(
    ({
      dialect,
      languageSource,
      appliesToKanji,
      appliesToKana,
      gloss,
      ...sense
    }) => {
      return {
        ...sense,
        meaning: gloss
          .filter((entry) => entry.lang === "eng")
          .map((entry) => entry.text),
      };
    }
  );

  const mapEntry = {
    level: word.level,
    sense,
  };

  const hasKanji = entry.kanji.find((kanji) => kanji.common);
  if (hasKanji) {
    const readingEntry = readings.find((entry) => entry.text === word.word);
    if (!readingEntry) {
      console.log(`No reading entry found for ${word.word}`);
      return;
    }
    mapEntry.reading = readingEntry.reading;
    mapEntry.furigana = readingEntry.furigana.map(({ ruby, rt }) => {
      return {
        literal: ruby,
        reading: rt ?? null,
      };
    });
  }

  return mapEntry;
};

const map = {};

words.forEach((word) => {
  const entry = dictionary.words.filter((entry) => {
    const hasKanji = entry.kanji.find(
      (kanji) => kanji.common && kanji.text === word.word
    );
    const hasKana = entry.kana.find(
      (kana) => kana.common && kana.text === word.word
    );
    return hasKanji || hasKana;
  });

  if (entry.length < 1) {
    console.log(`No entry found for ${word.word}`);
    return;
  }

  const entries = entry.map((entry) => parseEntry(word, entry));

  map[word.word] = entries;
});

fs.writeFileSync("./out/words.json", JSON.stringify(map, null, 2), "utf-8");
