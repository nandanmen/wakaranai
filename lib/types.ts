type Tag = string;

type WordMeaning = {
  tags: Tag[];
  info: string[];
  related: string[];
  texts: string[];
  partsOfSpeech: string[];
};

export type WordPart = {
  literal: string;
  reading?: string;
};

export type WordSense = {
  readings: string[];
  meanings: WordMeaning[];
  parts: WordPart[];
  sourceId: string;
};

export type Word = {
  id: number;
  created_at: string;
  literal: string;
  jlpt: number;
  senses: WordSense[];
};

export type WordProficiency = {
  proficiency: number;
  id: number;
  user_id: string;
  jlpt: number;
};

export type Sentence = {
  sentence_id: number;
  text: string;
  meaning: string;
};
