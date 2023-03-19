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
    <>
      <Sidebar level={Number(params.level)} mode="vocab" />
      <VocabListPage words={words} />
    </>
  );
}
