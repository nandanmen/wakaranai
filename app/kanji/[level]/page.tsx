import { getKanjiByLevel } from "@/lib/kanji";
import { KanjiList } from "./kanji-list";

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default async function KanjiPage({
  params,
}: {
  params: { level: string };
}) {
  const _level = Number(params.level);
  const list = await getKanjiByLevel(_level);

  const progress = {} as Record<string, number>;
  list.map((kanji) => {
    progress[kanji.literal] = getRandomNumber(0, 5) / 5;
  });

  return <KanjiList list={list} level={_level} progress={progress} />;
}
