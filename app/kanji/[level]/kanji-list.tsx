"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import cn from "classnames";
import { KanjiItem } from "./kanji-item";
import { Kanji } from "@/lib/kanji";
import { prefetchWordsForKanji, KanjiSidebar } from "./kanji-sidebar";

export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const levels = ["N5", "N4", "N3", "N2", "N1"];

export function KanjiList({
  list,
  level,
  progress,
}: {
  list: Kanji[];
  level: number;
  progress: Record<string, number>;
}) {
  const [activeKanji, setActiveKanji] = React.useState<Kanji | null>(list[0]);
  return (
    <main className="h-screen overflow-y-scroll mx-auto px-8 py-24 flex gap-20 justify-center">
      <motion.ul
        layout
        className={cn(
          "sticky -top-8 self-start",
          activeKanji ? "w-[150px]" : "w-[250px]"
        )}
      >
        {levels.map((_level) => {
          return (
            <motion.li layout key={_level}>
              <LevelLink
                level={_level}
                active={String(level) === _level.at(1)}
              />
            </motion.li>
          );
        })}
      </motion.ul>
      <motion.div layout>
        <motion.ul className="flex flex-wrap gap-6 col-start-2 w-[816px]">
          {list.map((kanji) => {
            return (
              <KanjiItem
                key={kanji.literal}
                kanji={kanji}
                progress={progress[kanji.literal]}
                onClick={() => setActiveKanji(kanji)}
                onMouseEnter={() => prefetchWordsForKanji(kanji.literal)}
                onFocus={() => prefetchWordsForKanji(kanji.literal)}
              />
            );
          })}
        </motion.ul>
        <div className="h-24" />
      </motion.div>
      {activeKanji && (
        <KanjiSidebar kanji={activeKanji} key={activeKanji.literal} />
      )}
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
        "font-mono py-2 flex items-center relative rounded-lg",
        active && "bg-gray2"
      )}
    >
      <span
        className={cn(
          "absolute block h-px left-0 right-0",
          active ? "bg-gray12" : "bg-gray2"
        )}
      />
      <span
        className={cn(
          "relative px-4",
          active ? "bg-gray2 text-gray12" : "bg-gray1 text-gray10"
        )}
      >
        {level}
      </span>
      <span
        className={cn(
          "ml-auto relative px-4",
          active ? "bg-gray2 text-gray12" : "bg-gray1 text-gray10"
        )}
      >
        50%
      </span>
    </Link>
  );
};
