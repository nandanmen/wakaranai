import { getOrCreateQuiz, type QuizLevel } from "@/lib/quiz";
import { Quiz } from "./quiz";

export default async function QuizPage({ params, searchParams }: any) {
  const quiz = await getOrCreateQuiz(
    validateLevel(params.level),
    validateCount(searchParams.count)
  );
  return (
    <main className="min-h-screen">
      <Quiz quiz={quiz} />
    </main>
  );
}

const DEFAULT_COUNT = 15;

const validateCount = (count?: string): "all" | number => {
  if (!count) return DEFAULT_COUNT;
  if (count === "all") return count;
  const parsed = Number(count);
  if (Number.isNaN(parsed)) {
    return DEFAULT_COUNT;
  }
  return parsed;
};

const validateLevel = (level?: string): QuizLevel => {
  if (!level) return 5;
  const parsed = Number(level);
  if (Number.isNaN(parsed)) {
    return 5;
  }
  if (parsed < 1 || parsed > 5) {
    return 5;
  }
  return parsed as QuizLevel;
};
