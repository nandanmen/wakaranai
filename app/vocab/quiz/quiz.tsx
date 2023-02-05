"use client";

import React from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

import { FormInput } from "@/components/quiz/input";
import { ProgressBar } from "@/components/quiz/progress-bar";
import type { Result } from "@/components/quiz/types";
import { getInputAnswer } from "@/components/quiz/utils";
import { Word } from "@/lib/words";

export const Quiz = ({ list }: { list: Word[] }) => {
  const [current, setCurrent] = React.useState(0);
  return (
    <div>
      <LayoutGroup>
        <ProgressBar value={(current + 1) / list.length} steps={list.length} />
        <QuizForm
          word={list[current]}
          onSubmit={() => setCurrent(current + 1)}
        />
      </LayoutGroup>
    </div>
  );
};

const QuizForm = ({
  word,
  onSubmit,
}: {
  word: Word;
  onSubmit: (result: Result) => void;
}) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = React.useState(false);

  const result = React.useMemo((): Result | null => {
    if (!submitted) return null;
    const form = formRef.current;
    if (!form) return null;
    const readingInput = form.elements.namedItem("reading") as HTMLInputElement;
    const meaningInput = form.elements.namedItem("meaning") as HTMLInputElement;
    const readingAnswer = getInputAnswer(readingInput, (value) => {
      return word.furigana.length > 0 ? word.furigana === value : true;
    });
    const meaningAnswer = getInputAnswer(meaningInput, (value) => {
      return word.meaning
        .split(", ")
        .some((meaning) => meaning.toLowerCase() === value.toLowerCase());
    });
    return {
      reading: readingAnswer,
      meaning: meaningAnswer,
    };
  }, [submitted, word]);

  const handleSubmit = React.useCallback(() => {
    setSubmitted(false);
    const form = formRef.current;
    if (form) {
      form.reset();
      const readingInput = form.elements.namedItem(
        "reading"
      ) as HTMLInputElement;
      readingInput?.focus();
    }
    onSubmit(result as Result);
  }, [onSubmit, result]);

  React.useEffect(() => {
    const handleEnter = (evt: KeyboardEvent) => {
      if (evt.key === "Enter") {
        if (submitted) {
          handleSubmit();
          return;
        }
        if (evt.metaKey) {
          if (!submitted) {
            setSubmitted(true);
          }
          return;
        }
        if (
          document.activeElement ===
          formRef.current?.elements.namedItem("reading")
        ) {
          const meaningInput = formRef.current?.elements.namedItem(
            "meaning"
          ) as HTMLInputElement;
          meaningInput?.focus();
          return;
        }
        if (
          document.activeElement ===
          formRef.current?.elements.namedItem("meaning")
        ) {
          setSubmitted(true);
          return;
        }
      }
    };
    document.addEventListener("keydown", handleEnter);
    return () => document.removeEventListener("keydown", handleEnter);
  }, [result, submitted, handleSubmit]);

  const hasFurigana = word.furigana.length > 0;
  return (
    <>
      <motion.div
        layout
        className="border rounded-lg dark:border-neutral-800 overflow-hidden my-6 border-neutral-200 shadow-lg dark:shadow-none w-[900px]"
      >
        <motion.div
          layout
          className="text-[8rem] text-center font-bold bg-gradient-to-br dark:from-neutral-800 dark:to-black from-white to-white p-16 overflow-hidden relative -mt-12 pt-28"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.h1
              key={word.word}
              initial={{ y: -400 }}
              animate={{ y: 0 }}
              exit={{ y: 400 }}
              transition={{ type: "spring", damping: 20 }}
            >
              {word.word}
            </motion.h1>
          </AnimatePresence>
        </motion.div>
        <motion.div
          layout
          className="p-12 dark:bg-black bg-white flex items-center"
        >
          <form
            ref={formRef}
            className="w-full text-lg flex gap-12"
            onSubmit={(evt) => {
              evt.preventDefault();
              if (!submitted) {
                setSubmitted(true);
              } else {
                handleSubmit();
              }
            }}
          >
            <div className="relative flex-1">
              <FormInput
                label="Reading"
                type={result?.reading.type}
                disabled={!hasFurigana}
              />
              {submitted && hasFurigana && (
                <motion.div
                  className="text-sm mt-3"
                  animate="show"
                  initial="hidden"
                  variants={{
                    show: { y: 0, opacity: 1 },
                    hidden: { y: -16, opacity: 0 },
                  }}
                  transition={{ type: "spring", damping: 20, delay: 0.3 }}
                >
                  <p className="font-mono text-neutral-500 mb-1">Reading</p>
                  <p className="text-lg">{word.furigana}</p>
                </motion.div>
              )}
            </div>
            <div className="flex-1">
              <FormInput label="Meaning" type={result?.meaning.type} />
              {submitted && (
                <motion.div
                  className="text-sm mt-3"
                  animate="show"
                  initial="hidden"
                  variants={{
                    show: { y: 0, opacity: 1 },
                    hidden: { y: -16, opacity: 0 },
                  }}
                  transition={{ type: "spring", damping: 20, delay: 0.3 }}
                >
                  <p className="font-mono text-neutral-500 mb-1">Meaning</p>
                  <p>{word.meaning}</p>
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>
      </motion.div>
      <div className="flex justify-end">
        <motion.button
          layout
          className="px-4 py-2 rounded-md border dark:border-neutral-700 dark:bg-black bg-white border-neutral-300"
          onClick={() => {
            if (submitted) {
              handleSubmit();
            } else {
              setSubmitted(true);
            }
          }}
        >
          <motion.span
            layout
            key={String(submitted)}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            {submitted ? "Next" : "See Answer"}
          </motion.span>
        </motion.button>
      </div>
    </>
  );
};
