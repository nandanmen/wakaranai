import { notFound } from "next/navigation";
import { Word, WordProficiency } from "@/lib/types";
import { VocabList } from "./vocab-list";

const baseUrl = process.env.SUPABASE_URL as string;
const apiKey = process.env.SUPABASE_API_KEY as string;

const userId = "707be283-f753-49ed-8171-7106906d21bc";

async function getWords(level = 5) {
  const response = await fetch(`${baseUrl}/words?select=*&jlpt=eq.${level}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      apiKey: apiKey,
    },
    cache: "force-cache",
  });
  if (response.ok) {
    const body = await response.json();
    return body as Word[];
  }
}

async function getProficiency(level = 5) {
  const response = await fetch(
    `${baseUrl}/level_proficiency?select=*&user_id=eq.${userId}&jlpt=eq.${level}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        apiKey: apiKey,
      },
    }
  );
  if (!response.ok) {
    console.error(response);
    return {};
  }
  const body: WordProficiency[] = await response.json();
  const proficiencies = {} as Record<number, WordProficiency>;
  body.forEach((data) => {
    proficiencies[data.id] = data;
  });
  return body;
}

const getLevel = (level: string): number => {
  return Number(level.at(-1));
};

export default async function VocabPage({
  params,
}: {
  params: { level: string };
}) {
  const [words, proficiency] = await Promise.all([
    getWords(getLevel(params.level)),
    getProficiency(getLevel(params.level)),
  ]);
  if (!words) return notFound();
  return <VocabList words={words} proficiency={proficiency} />;
}
