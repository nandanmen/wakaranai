import { Result } from "@/components/quiz/types";
import { getKanjiByLevelAndCount, getKanjiFromIds, Kanji } from "./kanji";
import { createServerClient } from "./supabase/server";

interface SupabaseQuiz {
  id: number;
  created_at: string;
  user_id: string;
  item_ids: number[];
  completed_at: string | null;
  is_kanji: boolean;
  progress: Result[];
}

export interface KanjiQuiz {
  quizId: number;
  progress: Result[];
  questions: Kanji[];
}

export type QuizLevel = 1 | 2 | 3 | 4 | 5;

export async function getLatestQuiz(
  userId?: string
): Promise<SupabaseQuiz | null> {
  if (!userId) return null;

  const client = createServerClient();

  const { data } = await client
    .from("quizzes")
    .select()
    .eq("user_id", userId)
    .eq("is_kanji", true)
    .is("completed_at", null)
    .order("created_at", { ascending: false })
    .limit(1);

  if (!data || data.length < 1) return null;
  return data[0];
}

export async function updateQuizProgress(
  quizId: number,
  progress: Result[]
): Promise<void> {
  const client = createServerClient();
  await client.from("quizzes").update({ progress }).eq("id", quizId);
}

export async function getQuizById(quizId: string): Promise<KanjiQuiz | null> {
  const client = createServerClient();
  const { data } = await client.from("quizzes").select().eq("id", quizId);
  if (!data || data.length < 1) return null;

  const quiz = data[0] as SupabaseQuiz;
  return {
    quizId: quiz.id,
    progress: quiz.progress,
    questions: await getKanjiFromIds(quiz.item_ids),
  };
}

export async function getOrCreateQuiz(
  level: number,
  count: "all" | number
): Promise<KanjiQuiz> {
  const client = createServerClient();
  const {
    data: { session },
  } = await client.auth.getSession();

  const quiz = await getLatestQuiz(session?.user.id);
  if (quiz) {
    return {
      quizId: quiz.id,
      progress: quiz.progress,
      questions: await getKanjiFromIds(quiz.item_ids),
    };
  }

  const list = await getKanjiByLevelAndCount(level, count);
  const kanjiIds = list.map((k) => k.id);

  const { data } = await client
    .from("quizzes")
    .insert({
      user_id: session?.user.id,
      item_ids: kanjiIds,
      progress: [],
      is_kanji: true,
    })
    .select("id");

  const quizId = data?.[0].id;
  return {
    quizId,
    questions: list,
    progress: [],
  };
}
