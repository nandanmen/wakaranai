"use client";

import { Kanji } from "@/lib/kanji";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { KanjiList } from "./kanji-list";
import { KanjiSidebar } from "./kanji-sidebar";
import Link from "next/link";
import cn from "classnames";
import { SessionButton } from "./session-button";

const levels = ["N5", "N4", "N3", "N2", "N1"];

export const KanjiListPage = ({
  list,
  level,
}: {
  list: Kanji[];
  level: number;
}) => {
  const [activeKanji, setActiveKanji] = React.useState<Kanji | null>(null);
  return (
    <>
      <motion.div
        className="sticky -top-8 self-start w-[150px] space-y-6"
        layout
      >
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
        <div className="space-y-2">
          <Link
            href={`/kanji/${level}/quiz`}
            className="block w-full text-center border rounded-md border-gray4 p-2 bg-gray2 text-sm font-bold hover:bg-gray4"
          >
            Start Quiz
          </Link>
          <SessionButton />
        </div>
      </motion.div>
      <motion.div layout>
        <KanjiList list={list} level={level} onKanjiSelect={setActiveKanji} />
        <div className="h-24" />
      </motion.div>
      <AnimatePresence mode="popLayout">
        {activeKanji && (
          <KanjiSidebar
            kanji={activeKanji}
            onClose={() => setActiveKanji(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

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
