"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import React from "react";

import type { Result } from "@/components/quiz/types";
import type { Kanji } from "@/lib/kanji";
import { Icon } from "@/components/quiz/icon";

export function QuizResults({
  results,
  list,
}: {
  results: Result[];
  list: Kanji[];
}) {
  const textRef = React.useRef<HTMLParagraphElement>(null);
  const [key, setKey] = React.useState(0);

  const numReadingCorrect = results.filter(
    (result) => result.reading.type === "correct"
  );
  const numMeaningCorrect = results.filter(
    (result) => result.meaning.type === "correct"
  );
  const totalCorrect = numReadingCorrect.length + numMeaningCorrect.length;

  React.useEffect(() => {
    animate(0, totalCorrect, {
      type: "spring",
      damping: 10,
      stiffness: 15,
      onUpdate(latest) {
        if (!textRef.current) return;
        textRef.current.innerText = latest.toFixed(0);
      },
    });
  }, [totalCorrect, key]);

  return (
    <div className="w-fit mx-auto my-32 flex" key={key}>
      <button onClick={() => setKey(key + 1)} className="fixed top-2 left-2">
        Refresh
      </button>
      <motion.ul
        className="w-[1000px] space-y-12 mr-64"
        animate="shown"
        initial="hidden"
        transition={{ staggerChildren: 0.15 }}
      >
        {results.map((result, index) => {
          const question = list[index];
          return (
            <motion.li
              key={index}
              className="rounded-lg overflow-hidden bg-black border border-neutral-900 flex"
              variants={{
                shown: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 20 },
              }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="font-bold text-[7rem] leading-none bg-gradient-to-br from-neutral-900 to-black p-6 border-r border-inherit w-48 flex items-center justify-center">
                {question.literal}
              </div>
              <div className="border-r border-inherit flex-1 p-8 space-y-2">
                <h3 className="font-mono">Reading</h3>
                <p className="text-xl py-2 border-b border-inherit relative">
                  {result.reading.value || (
                    <span className="text-base italic text-neutral-700">
                      Skipped
                    </span>
                  )}
                  <Icon
                    type={result.reading.type}
                    variants={{
                      shown: { pathLength: 1 },
                      hidden: { pathLength: 0 },
                    }}
                  />
                </p>
                <motion.div
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  initial={{ y: -16, opacity: 0 }}
                  transition={{ type: "spring", damping: 20 }}
                >
                  <p className="flex">
                    <span className="w-[60px] text-sm mr-2 font-mono text-neutral-500 translate-y-[2px]">
                      Kunyomi
                    </span>{" "}
                    {question.readings.kun.join(", ")}
                  </p>
                  <p className="flex items-center">
                    <span className="w-[60px] text-sm mr-2 font-mono text-neutral-500">
                      Onyomi
                    </span>{" "}
                    {question.readings.on.join(", ")}
                  </p>
                </motion.div>
              </div>
              <div className="flex-1 p-8 space-y-2 border-inherit">
                <h3 className="font-mono">Meaning</h3>
                <p className="text-xl py-2 border-b border-inherit relative">
                  {result.meaning.value || (
                    <span className="text-base italic text-neutral-700">
                      Skipped
                    </span>
                  )}
                  <Icon
                    type={result.meaning.type}
                    variants={{
                      shown: { pathLength: 1 },
                      hidden: { pathLength: 0 },
                    }}
                  />
                </p>
                <motion.div
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  initial={{ y: -16, opacity: 0 }}
                  transition={{ type: "spring", damping: 20 }}
                >
                  <p className="text-sm font-mono text-neutral-500">Meanings</p>
                  <p>{question.meanings.join(", ")}</p>
                </motion.div>
              </div>
            </motion.li>
          );
        })}
      </motion.ul>
      <aside className="fixed h-fit right-[200px] rounded-lg border border-neutral-900 overflow-hidden w-[180px] flex flex-col">
        <p
          className="text-[6rem] font-bold leading-none flex-1 flex items-center justify-center bg-black py-8"
          ref={textRef}
        >
          0
        </p>
        <div className="h-px w-[150%] absolute bg-neutral-900 left-1/2 top-1/2 -translate-x-1/2 -rotate-12" />
        <p className="text-[6rem] font-bold leading-none flex-1 flex items-center justify-center py-8 bg-black">
          {list.length * 2}
        </p>
      </aside>
    </div>
  );
}
