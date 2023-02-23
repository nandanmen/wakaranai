import { Sidebar } from "@/app/sidebar";
import { getWordsAtLevel } from "@/lib/words-v2";
import { VocabListPage } from "./vocab-list-page";

export default async function VocabPage({
  params,
}: {
  params: { level: string };
}) {
  const words = await getWordsAtLevel(Number(params.level));
  return (
    <main className="h-screen overflow-y-scroll mx-auto px-8 py-24 flex gap-20 justify-center">
      <Sidebar level={Number(params.level)} mode="vocab" />
      <VocabListPage words={words} />
    </main>
  );
}
