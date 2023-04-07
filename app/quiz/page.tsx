import { request } from "@/lib/db";
import { Word } from "@/lib/types";
import { Quiz } from "./quiz";

async function getRandomWords(level = 5, limit = 20) {
  const response = await request("/rpc/get_random_words", {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    method: "POST",
    body: JSON.stringify({ level, max_count: limit }),
  });
  if (!response.ok) {
    console.error(response);
    return [];
  }
  const body = await response.json();
  return body as Word[];
}

function parseParams(searchParams: {
  level?: string;
  type?: string;
  limit?: string;
}) {
  const { level = "n5", limit = "20", type = "vocab" } = searchParams;
  return { level: Number(level.at(-1)), limit: Number(limit), type };
}

export default async function QuizPage({
  searchParams,
}: {
  searchParams: {
    level?: string;
    type?: string;
    limit?: string;
  };
}) {
  const { level, type, limit } = parseParams(searchParams);
  const words = await getRandomWords(level, limit);
  return <Quiz level={level} type={type} words={words} />;
}
