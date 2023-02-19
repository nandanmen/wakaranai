"use client";

import { useSupabase } from "@/app/supabase";
import { LoginModal } from "@/components/login-modal";
import { FormInput } from "@/components/quiz/input";
import { MarkCorrectButton } from "@/components/quiz/mark-correct-button";
import { ProgressBar } from "@/components/quiz/progress-bar";
import type { Result } from "@/components/quiz/types";
import { getInputAnswer } from "@/components/quiz/utils";
import { WordV2Response } from "@/lib/words-v2";
import { Root, Trigger } from "@radix-ui/react-dialog";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toHiragana } from "wanakana";

const JP_DELIMITER = `.`;

const shouldIncrement = (result: Result) => {
  return result.reading.type === "correct" && result.meaning.type === "correct";
};

const PhraseText = ({
  phrase,
  showReading = false,
}: {
  phrase: WordV2Response;
  showReading?: boolean;
}) => {
  const { parts } = phrase.senses[0];
  if (parts.length === 0) {
    return <h1>{phrase.literal}</h1>;
  }
  return (
    <div className="flex">
      {parts.map((part) => {
        return (
          <div key={part.literal} className="relative">
            {showReading && (
              <motion.div
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 16, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="text-[3rem] w-full flex justify-center absolute -top-[1.5em] whitespace-nowrap"
              >
                {part.reading}
              </motion.div>
            )}
            <motion.h1 layout="position" className="leading-none">
              {part.literal}
            </motion.h1>
          </div>
        );
      })}
    </div>
  );
};

export const Quiz = ({
  level,
  quiz,
}: {
  quiz: WordV2Response[];
  level: number;
}) => {
  const [current, setCurrent] = React.useState(0);
  const [results, setResults] = React.useState<
    Array<Result & { kanjiId: number }>
  >([]);
  const [list, setList] = React.useState(quiz);
  const router = useRouter();

  /* React.useEffect(() => {
    const lastResult = results.at(-1);
    if (lastResult) {
      fetch("/api/proficiency", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kanjiId: lastResult.kanjiId,
          increment: shouldIncrement(lastResult),
        }),
      });
    }
  }, [results]); */

  const isLast = current === list.length - 1;
  return (
    <div className="w-fit mx-auto h-full">
      <Link
        href={`/kanji/${level}`}
        className="flex items-center gap-2 text-gray9 fixed top-12 hover:text-gray12"
      >
        <ArrowLeftIcon width="20" height="20" />
        <span>Home</span>
      </Link>
      <div className="flex flex-col justify-center h-screen gap-6">
        <ProgressBar value={(current + 1) / quiz.length} steps={quiz.length} />
        <QuizForm
          reviewing={current >= quiz.length}
          word={list[current]}
          index={current}
          onSubmit={async (result, kanjiId) => {
            setResults([...results, { ...result, kanjiId }]);
            if (
              result.reading.type !== "correct" ||
              result.meaning.type !== "correct"
            ) {
              setList([...list, list[current]]);
              setCurrent(current + 1);
              return;
            }
            if (isLast) {
              router.push(`/kanji/${level}`);
            } else {
              setCurrent(current + 1);
            }
          }}
        />
      </div>
    </div>
  );
};

const isJapaneseReadingCorrect = (reading: string, input: string) => {
  let _reading = reading;
  if (reading.includes(JP_DELIMITER)) {
    _reading = reading.split(JP_DELIMITER)[0];
  }
  return toHiragana(_reading) === toHiragana(input);
};

const IN_PARENS = /\(.*\)/g;

const calculateAnswer = (
  form: HTMLFormElement,
  word: WordV2Response
): Result => {
  const readingInput = form.elements.namedItem("reading") as HTMLInputElement;
  const meaningInput = form.elements.namedItem("meaning") as HTMLInputElement;
  const readingAnswer = getInputAnswer(readingInput, (value) => {
    return word.senses.some((sense) => {
      return sense.readings.some((reading) =>
        isJapaneseReadingCorrect(reading, value)
      );
    });
  });
  const meaningAnswer = getInputAnswer(meaningInput, (value) => {
    return word.senses.some((sense) => {
      const meanings = sense.meanings.flatMap((m) => m.texts);
      return meanings
        .map((m) => m.replaceAll(IN_PARENS, "").trim())
        .some((meaning) => meaning.toLowerCase() === value.toLowerCase());
    });
  });
  return {
    reading: readingAnswer,
    meaning: meaningAnswer,
  };
};

const QuizForm = ({
  word,
  reviewing,
  onSubmit,
  index,
}: {
  word: WordV2Response;
  reviewing: boolean;
  onSubmit: (result: Result, wordId: number) => void;
  index: number;
}) => {
  const { session } = useSupabase();
  const formRef = React.useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = React.useState(false);
  const [result, setResult] = React.useState<Result | null>(null);

  const handleNext = React.useCallback(() => {
    setSubmitted(false);
    setResult(null);
    const form = formRef.current;
    if (form) {
      form.reset();
      const readingInput = form.elements.namedItem(
        "reading"
      ) as HTMLInputElement;
      readingInput?.focus();
    }
    onSubmit(result as Result, word.id);
  }, [onSubmit, result, word.id]);

  const handleSubmit = React.useCallback(() => {
    setSubmitted(true);
    const form = formRef.current;
    if (form) {
      const result = calculateAnswer(form, word);
      setResult(result);
    }
  }, [word]);

  React.useEffect(() => {
    const handleEnter = (evt: KeyboardEvent) => {
      if (evt.key === "Enter") {
        if (submitted) {
          handleNext();
          return;
        }
        if (evt.metaKey) {
          if (!submitted) {
            handleSubmit();
          }
          return;
        }
        if (
          document.activeElement ===
          formRef.current?.elements.namedItem("meaning")
        ) {
          evt.preventDefault();
          handleSubmit();
          return;
        }
      }
    };
    document.addEventListener("keydown", handleEnter);
    return () => document.removeEventListener("keydown", handleEnter);
  }, [result, submitted, handleNext, handleSubmit]);

  const markCorrect = (type: "reading" | "meaning") => () => {
    if (!result) return;
    setResult({
      ...result,
      [type]: {
        ...result?.[type],
        type: "correct",
      },
    });
  };

  return (
    <>
      <div className="flex shadow-lg relative">
        <div className="w-[1000px] h-[600px] font-bold bg-gradient-to-br from-gray3 to-gray1 overflow-hidden relative rounded-l-lg border border-gray4 flex items-center justify-center">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={word.literal + index}
              initial={{ y: 600 }}
              animate={{ y: 0 }}
              exit={{ y: -600 }}
              transition={{ type: "spring", damping: 20 }}
              className="text-gray12 text-[12rem]"
            >
              <PhraseText phrase={word} showReading={submitted} />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="p-12 bg-gray2 flex items-center rounded-r-lg border border-gray4 border-l-0">
          <form
            ref={formRef}
            className="w-[400px] text-lg"
            onSubmit={(evt) => {
              evt.preventDefault();
              if (!submitted) {
                handleSubmit();
              } else {
                handleNext();
              }
            }}
          >
            <div className="mb-8 relative">
              <FormInput label="Reading" type={result?.reading.type} />
              <AnimatePresence>
                {result?.reading.type === "incorrect" && (
                  <div className="absolute -right-12 top-7 translate-x-1/2 translate-y-[3px]">
                    <MarkCorrectButton onClick={markCorrect("reading")} />
                  </div>
                )}
              </AnimatePresence>
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
                  <p className="font-mono text-neutral-500 mb-1">Readings</p>
                  <p>
                    {word.senses.flatMap((sense) => sense.readings).join(", ")}
                  </p>
                </motion.div>
              )}
            </div>
            <div className="relative">
              <FormInput label="Meaning" type={result?.meaning.type} />
              <AnimatePresence>
                {result?.meaning.type === "incorrect" && (
                  <div className="absolute -right-12 top-7 translate-x-1/2 translate-y-[3px]">
                    <MarkCorrectButton onClick={markCorrect("meaning")} />
                  </div>
                )}
              </AnimatePresence>
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
                  <p className="font-mono text-neutral-500 mb-1">Meanings</p>
                  <p>
                    {word.senses
                      .flatMap((sense) =>
                        sense.meanings
                          .filter((m) => !m.tags.includes("col"))
                          .map((m) => m.texts)
                          .flatMap((text) => text.flatMap((t) => t.split(",")))
                      )
                      .slice(0, 5)
                      .join(", ")}
                  </p>
                </motion.div>
              )}
            </div>
          </form>
        </div>
        {reviewing && (
          <motion.p
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -16, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="absolute top-4 -left-3 bg-gray2 border rounded-[4px] p-3 border-gray6 shadow-sm text-sm text-gray11"
          >
            {`Reviewing terms you've missed`}
          </motion.p>
        )}
      </div>
      <div className="flex">
        {!session && (
          <Root>
            <p className="text-sm text-gray10">
              <Trigger asChild>
                <button className="underline hover:text-gray12 focus:outline-none focus-visible:text-gray12">
                  Login
                </button>
              </Trigger>
              {` `} to save your progress
            </p>
            <LoginModal />
          </Root>
        )}
        <motion.button
          layout
          className="ml-auto px-4 py-2 rounded-md border border-gray4"
          onClick={() => {
            if (submitted) {
              handleNext();
            } else {
              handleSubmit();
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
