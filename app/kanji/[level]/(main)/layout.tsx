import React from "react";
import Link from "next/link";
import cn from "classnames";
import { getKanjiByLevel } from "@/lib/kanji";
import { KanjiItem } from "./kanji-item";

const levels = ["N5", "N4", "N3", "N2", "N1"];

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default async function KanjiLayout({
  params,
  children,
}: {
  params: { level: string };
  children: React.ReactNode;
}) {
  const { level } = params;
  const _level = Number(level);
  const list = await getKanjiByLevel(_level);

  const progress = {} as Record<string, number>;
  list.map((kanji) => {
    progress[kanji.literal] = getRandomNumber(0, 5) / 5;
  });

  return (
    <main className="h-screen overflow-y-scroll mx-auto px-8 py-24 flex gap-20 justify-center">
      <div className="sticky -top-8 self-start w-[150px] space-y-6">
        <Link
          href={`/kanji/${level}/quiz`}
          className="block w-full text-center border rounded-md border-gray4 p-2 bg-gray2 text-sm font-bold hover:bg-gray4"
        >
          Start Quiz
        </Link>
        <ul>
          {levels.map((_level) => {
            return (
              <li key={_level}>
                <LevelLink
                  level={_level}
                  active={String(level) === _level.at(1)}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul className="flex flex-wrap gap-6 col-start-2 w-[816px]">
          {list.map((kanji) => {
            return (
              <KanjiItem
                key={kanji.literal}
                kanji={kanji}
                progress={progress[kanji.literal]}
              />
            );
          })}
        </ul>
        <div className="h-24" />
      </div>
      {children}
    </main>
  );
}

const LevelLink = ({
  level,
  active = false,
}: {
  level: string;
  active?: boolean;
}) => {
  return (
    <Link
      href={`/kanji/${level.at(1)}`}
      className={cn(
        "font-mono py-2 flex items-center relative rounded-lg hover:text-gray12",
        active && "bg-gray2",
        active ? "text-gray12" : "text-gray8"
      )}
    >
      <span className="absolute block h-px left-0 right-0 bg-current" />
      <span className={cn("relative px-4", active ? "bg-gray2" : "bg-gray1")}>
        {level}
      </span>
      <span
        className={cn(
          "w-4 aspect-square block ml-auto relative",
          active ? "bg-gray2" : "bg-gray1"
        )}
      />
      {/* <span
        className={cn(
          "ml-auto relative px-4",
          active ? "bg-gray2 text-gray12" : "bg-gray1 text-gray10"
        )}
      >
        50%
      </span> */}
    </Link>
  );
};
