import type { KanjiResult } from "@/components/quiz/types";
import { getKanjiByLevelAndCount, Kanji } from "@/lib/kanji";
import { createServerClient } from "@/lib/supabase/server";
import { Quiz } from "./quiz";

export const dynamic = "force-dynamic";

interface KanjiQuiz {
  id: number;
  created_at: string;
  user_id: string;
  kanji_ids: number[];
  completed: boolean;
  progress: KanjiResult[];
}

async function getLatestQuiz(userId: string): Promise<KanjiQuiz | null> {
  const client = createServerClient();

  const { data } = await client
    .from("kanji_quizzes")
    .select()
    .eq("user_id", userId)
    .is("completed_at", null)
    .order("created_at", { ascending: false })
    .limit(1);

  if (!data || data.length < 1) return null;
  return data[0];
}

async function getOrCreateQuiz(
  level: number,
  count: "all" | number
): Promise<Kanji[]> {
  const client = createServerClient();
  const {
    data: { session },
  } = await client.auth.getSession();

  if (!session) {
    return getKanjiByLevelAndCount(level, count);
  }

  const quiz = await getLatestQuiz(session.user.id);
  if (quiz) return getKanjiList(quiz);

  const list = await getKanjiByLevelAndCount(level, count);
  const kanjiIds = list.map((k) => k.id);

  await client.from("kanji_quizzes").insert({
    user_id: session.user.id,
    kanji_ids: kanjiIds,
    progress: [],
  });

  return list;
}

async function getKanjiList(quiz: KanjiQuiz): Promise<Kanji[]> {
  const client = createServerClient();
  const { data } = await client.from("kanji").select().in("id", quiz.kanji_ids);
  return data as Kanji[];
}

export default async function QuizPage({ params, searchParams }: any) {
  const list = await getOrCreateQuiz(
    Number(params.level),
    validateCount(searchParams.count)
  );
  return (
    <main className="min-h-screen">
      <Quiz list={list} />
    </main>
  );
}

const DEFAULT_COUNT = 35;

const validateCount = (count?: string): "all" | number => {
  if (!count) return DEFAULT_COUNT;
  if (count === "all") return count;
  const parsed = Number(count);
  if (Number.isNaN(parsed)) {
    return DEFAULT_COUNT;
  }
  return parsed;
};
