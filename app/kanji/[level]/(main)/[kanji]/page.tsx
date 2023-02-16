import { getKanjiFromLiteral, getWordsWithKanji } from "@/lib/kanji";
import { KanjiSidebar } from "./kanji-sidebar";

export default async function KanjiPage({
  params,
}: {
  params: { kanji: string; level: string };
}) {
  const literal = decodeURIComponent(params.kanji);
  const [kanji, words] = await Promise.all([
    getKanjiFromLiteral(literal, Number(params.level)),
    getWordsWithKanji(literal),
  ]);
  return <KanjiSidebar kanji={kanji} words={words} />;
}
