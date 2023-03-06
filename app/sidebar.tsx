"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import cn from "classnames";
import { SessionButton } from "./session-button";

const levels = ["N5", "N4", "N3", "N2", "N1"];

export const Sidebar = ({
  level,
  mode,
}: {
  level: number;
  mode: "kanji" | "vocab";
}) => {
  return (
    <div className="sticky top-12 space-y-6 h-[calc(100vh_-_6rem)] px-12 my-12 border-r border-gray4">
      <div>
        <Link href={`/kanji/${level}`}>Kanji</Link>
        <Link href={`/vocab/${level}`}>Vocab</Link>
      </div>
      <ul>
        {levels.map((_level) => {
          return (
            <li key={_level}>
              <LevelLink
                level={_level}
                mode={mode}
                active={String(level) === _level.at(1)}
              />
            </li>
          );
        })}
      </ul>
      <div className="space-y-2">
        <Link
          href={`/${mode}/${level}/quiz`}
          className="block w-full text-center border rounded-md border-gray4 p-2 bg-gray2 text-sm font-bold hover:bg-gray4"
        >
          Start Quiz
        </Link>
        <SessionButton />
      </div>
    </div>
  );
};

const LevelLink = ({
  level,
  mode,
  active = false,
}: {
  level: string;
  mode: "kanji" | "vocab";
  active?: boolean;
}) => {
  return (
    <Link
      href={`/${mode}/${level.at(1)}`}
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
