import { getKanjiByLevelAndCount } from "@/lib/kanji";
import { Quiz } from "./quiz";

export default async function QuizPage({
  params,
}: {
  params: { level: string };
}) {
  const list = await getKanjiByLevelAndCount(Number(params.level), 35);
  return (
    <main className="mx-auto w-fit h-screen flex items-center justify-center">
      <Quiz list={list} />
    </main>
  );
}
