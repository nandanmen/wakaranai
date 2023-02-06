import { getKanjiByLevelAndCount } from "@/lib/kanji";
import { Quiz } from "./quiz";

export const dynamic = "force-dynamic";

export default async function QuizPage({ params, searchParams }: any) {
  const list = await getKanjiByLevelAndCount(
    Number(params.level),
    validateCount(searchParams.count)
  );
  return (
    <main className="mx-auto w-fit h-screen flex items-center justify-center">
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
