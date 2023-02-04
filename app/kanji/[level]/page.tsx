import { getKanjiByLevel } from "@/lib/kanji";
import Link from "next/link";

const getRandomIndex = (length: number) => {
  return Math.floor(Math.random() * length);
};

const progress = [1, 3, 5, 7, 9];

export default async function KanjiPage({
  params,
}: {
  params: { level: string };
}) {
  const kanji = await getKanjiByLevel(Number(params.level));
  return (
    <main className="max-w-[816px] mx-auto">
      <ul className="flex flex-wrap my-32 gap-6">
        {kanji.map(([char, data]) => {
          const currentProgress = progress[getRandomIndex(progress.length)];
          return (
            <li key={char}>
              <Link
                href={`/kanji/${char}`}
                className={`w-24 h-24 text-5xl font-bold rounded-md border dark:border-neutral-900 bg-gradient-to-br dark:from-neutral-900 dark:to-black flex items-center justify-center from-white to-neutral-100 dark:hover:from-neutral-800 dark:text-neutral-${currentProgress}00 transition-all`}
              >
                {char}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
