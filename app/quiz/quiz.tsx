"use client";

import React from "react";
import Link from "next/link";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import type { Word } from "@/lib/types";
import { Title } from "../[level]/title";
import { WordExplanation } from "./word-explanation";
import { Form } from "./form";

export function Quiz({
  level,
  type,
  words: startingWords,
}: {
  level: number;
  type: string;
  words: Word[];
}) {
  const [words, setWords] = React.useState([...startingWords]);
  const [index, setIndex] = React.useState(0);
  const [showAnswer, setShowAnswer] = React.useState(false);

  React.useEffect(() => {
    setShowAnswer(false);
  }, [index]);

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      <header className="fixed top-0 left-0 p-8 w-full flex justify-between">
        <Title />
        <Link href={`/n${level}/${type}`}>Quit Quiz</Link>
      </header>
      <main className="relative grid grid-cols-[3fr_4fr] grid-rows-[min-content_1fr] gap-y-4 max-h-[800px] max-w-[1200px] w-full">
        <div className="relative bg-gray-6 rounded-full overflow-hidden h-3 col-span-2">
          <motion.div
            className="absolute inset-0 bg-gray-12"
            style={{ originX: "left" }}
            animate={{ scaleX: index / words.length }}
            initial={{ scaleX: 0 }}
            transition={{ type: "spring", bounce: 0 }}
          />
        </div>
        <Form
          word={words[index]}
          onSubmit={(form, result) => {
            if (showAnswer && result) {
              if (
                result.meaning.type !== "correct" ||
                result.reading.type !== "correct"
              ) {
                setWords((words) => [...words, words[index]]);
              }
              form.reset();
              setIndex(index + 1);
            } else {
              setShowAnswer(true);
            }
          }}
        />
        <div className="row-start-2 col-start-2 bg-gray-1 rounded-tr-xl rounded-br-xl border border-gray-6 border-l-0 h-full flex flex-col justify-center overflow-hidden relative">
          {index >= startingWords.length && (
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 16, opacity: 0 }}
              transition={{ type: "spring", bounce: 0 }}
              className="bg-gray-4 absolute right-0 top-4 px-3 py-2 rounded-l-md shadow-sm"
            >
              Reviewing terms you missed
            </motion.div>
          )}
          <LayoutGroup>
            <div className="quiz-mask w-full overflow-hidden">
              <motion.ul
                initial={{ y: -200 }}
                animate={{ y: index * -104 - 200 }}
                transition={{ type: "spring", bounce: 0 }}
                className="relative top-1/2 flex flex-col items-center text-7xl "
              >
                {words.map((word, i) => {
                  const active = i === index;
                  const distance = Math.abs(index - i);
                  const opacity =
                    index < i ? 0 : Math.max(1 - distance * 0.3, 0);
                  const scale = active ? 1.5 : 1;
                  return (
                    <motion.li
                      animate={{ opacity, scale }}
                      initial={{ opacity, scale }}
                      transition={{ type: "spring", bounce: 0 }}
                      key={word.id + i}
                      layout
                      className={
                        active ? `h-[400px] shrink-0 flex items-center` : `py-4`
                      }
                    >
                      <motion.div className="flex items-end">
                        <TextWithReading
                          word={word}
                          showReading={active && showAnswer}
                        />
                      </motion.div>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
            <AnimatePresence mode="popLayout">
              {showAnswer && <WordExplanation word={words[index]} />}
            </AnimatePresence>
          </LayoutGroup>
        </div>
      </main>
    </div>
  );
}

const TextWithReading = ({
  word,
  showReading = false,
}: {
  word: Word;
  showReading?: boolean;
}) => {
  const [sense] = word.senses;
  if (sense.parts.length === 0) {
    return (
      <motion.span layout transition={{ type: "spring", bounce: 0 }}>
        {word.literal}
      </motion.span>
    );
  }
  return (
    <>
      {sense.parts.map((part) => {
        return (
          <span key={part.literal} className="flex flex-col items-center gap-3">
            {showReading && (
              <motion.span
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: "1em", opacity: 0 }}
                transition={{ type: "spring", bounce: 0 }}
                className="text-2xl"
              >
                {part.reading}
              </motion.span>
            )}
            <motion.span layout transition={{ type: "spring", bounce: 0 }}>
              {part.literal}
            </motion.span>
          </span>
        );
      })}
    </>
  );
};
