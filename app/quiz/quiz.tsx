"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Word } from "@/lib/types";
import { useRouter } from "next/navigation";
import { Title } from "../[level]/title";

type Progress = {
  id: number;
  answer: {
    reading: string;
    meaning: string;
  };
};

export function Quiz({
  level,
  type,
  words,
}: {
  level: number;
  type: string;
  words: Word[];
}) {
  const router = useRouter();
  const [progress, setProgress] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  return (
    <div className="flex h-screen overflow-hidden items-center justify-center">
      <header className="fixed top-0 p-8 w-full flex justify-between">
        <Title />
        <Link href={`/n${level}/${type}`}>Quit Quiz</Link>
      </header>
      <main className="relative w-[1000px] grid grid-cols-[2fr_3fr] gap-y-4">
        <div className="relative bg-gray2 rounded-full overflow-hidden h-3">
          <motion.div
            className="absolute inset-0 bg-gray12"
            style={{ originX: "left" }}
            animate={{ scaleX: index / words.length }}
            initial={{ scaleX: 0 }}
            transition={{ type: "spring", bounce: 0 }}
          />
        </div>
        <div className="border bg-gray1 border-gray3 rounded-md col-start-1 col-span-2 divide-x divide-gray3 grid grid-cols-[2fr_3fr]">
          <form
            className="flex flex-col justify-center p-12 h-[400px]"
            onSubmit={(evt) => {
              evt.preventDefault();
              const form = evt.target as HTMLFormElement;
              form.reset();
              setIndex(index + 1);
            }}
          >
            <label htmlFor="reading">Reading</label>
            <input
              id="reading"
              type="text"
              className="bg-gray1 border-b border-gray8 py-2 focus:outline-none"
            />
            <label className="mt-6" htmlFor="meaning">
              Meaning
            </label>
            <input
              id="meaning"
              type="text"
              className="bg-gray1 border-b border-gray8 py-2 focus:outline-none"
            />
            <button type="submit" />
          </form>
          <div className="flex justify-center">
            <motion.ul
              animate={{ y: getOffset(index) }}
              transition={{ type: "spring", bounce: 0 }}
              className="absolute flex flex-col items-center text-7xl top-0 space-y-4"
            >
              {words.map((word, i) => {
                const active = i === index;
                const getOpacity = () => {
                  if (active) return 1;
                  const distance = Math.abs(index - i);
                  return Math.max(0.3 - distance * 0.1, 0);
                };
                return (
                  <motion.li
                    key={word.id}
                    animate={{ opacity: getOpacity() }}
                    initial={{ opacity: 0 }}
                    layout
                    className={
                      active
                        ? "h-[400px] flex items-center justify-center my-8"
                        : undefined
                    }
                  >
                    <motion.span className="block" layout>
                      {word.literal}
                    </motion.span>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </main>
    </div>
  );
}

function getOffset(index: number) {
  if (index < 2) return index * -56;
  return index * -56 - 32 * (index - 1);
}
