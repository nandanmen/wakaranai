import React from "react";
import { motion, useIsPresent } from "framer-motion";
import type { Word } from "@/lib/types";
import { clsx } from "clsx";
import { ExpandIcon, MinimizeIcon } from "../icons";
import { useKanji, useSentences } from "@/lib/swr";

export const WordExplanation = React.forwardRef<HTMLDivElement, { word: Word }>(
  function WordExplanation({ word: givenWord }, ref) {
    const isPresent = useIsPresent();
    const [word, setWord] = React.useState(givenWord);
    const { data } = useSentences(word.id);
    const { data: kanjiData } = useKanji(word.literal);
    const [expanded, setExpanded] = React.useState(false);

    const [sense] = word.senses;
    const meanings = [
      ...new Set(sense.meanings.flatMap((meaning) => meaning.texts)),
    ];

    React.useEffect(() => {
      if (isPresent) {
        setWord(givenWord);
      }
    }, [isPresent]);

    React.useEffect(() => {
      const handleQuestion = (e: KeyboardEvent) => {
        if (e.key === "?" && isPresent) {
          e.preventDefault();
          setExpanded(true);
        }
      };
      window.addEventListener("keydown", handleQuestion);
      return () => {
        window.removeEventListener("keydown", handleQuestion);
      };
    }, [isPresent]);

    return (
      <motion.div
        key={word.literal}
        ref={ref}
        animate={{ y: "0%" }}
        initial={{ y: "100%" }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", bounce: 0 }}
        className={clsx(
          "w-full gap-2 p-8 shrink-0",
          !expanded && "absolute bottom-0 flex justify-center"
        )}
      >
        <motion.div
          layout
          style={{ borderWidth: 1 }}
          animate={{ borderRadius: expanded ? 8 : 24 }}
          initial={{ borderRadius: 24 }}
          transition={{ type: "spring", bounce: 0 }}
          className={clsx(
            "p-1 bg-gray-3 border-gray-6 relative shadow-md",
            expanded && "h-full p-4"
          )}
        >
          <header className="flex justify-center gap-2">
            <p className={clsx(!expanded && "py-1 pl-3")}>
              <motion.span
                className="block"
                layout
                transition={{ type: "spring", bounce: 0 }}
              >
                {meanings.slice(0, 2).join(", ")}
              </motion.span>
            </p>
            <motion.button
              layout
              transition={{ type: "spring", bounce: 0 }}
              className={clsx(
                "w-8 h-8 rounded-full hover:bg-gray-6 flex items-center justify-center",
                expanded && "absolute top-2 right-2"
              )}
              onClick={() => {
                if (expanded) {
                  setExpanded(false);
                } else {
                  setExpanded((data?.length ?? 0) > 0);
                }
              }}
            >
              {expanded ? <MinimizeIcon /> : <ExpandIcon />}
            </motion.button>
          </header>
          {expanded && (
            <motion.div
              className="mt-2 flex"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              <ul className="divide-y divide-gray-6 w-full pr-4">
                {data?.map((sentence) => {
                  const [before, after] = sentence.text.split(word.literal);
                  return (
                    <li key={sentence.sentence_id} className="py-4 last:pb-0">
                      <p className="text-lg">
                        <span>{before}</span>
                        <span className="text-blue10">{word.literal}</span>
                        <span>{after}</span>
                      </p>
                      <p className="text-gray-11">{sentence.meaning}</p>
                    </li>
                  );
                })}
              </ul>
              <ul className="flex items-center pl-4 gap-4">
                {kanjiData?.map((kanji) => {
                  return (
                    <li
                      key={kanji.literal}
                      className="flex-1 text-center space-y-4"
                    >
                      <p className="text-6xl">{kanji.literal}</p>
                      <p>{kanji.meanings[0]}</p>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    );
  }
);
