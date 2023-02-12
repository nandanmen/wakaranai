"use client";

import { useSupabase } from "@/app/supabase";
import { LoginModal } from "@/components/login-modal";
import { FormInput } from "@/components/quiz/input";
import { MarkCorrectButton } from "@/components/quiz/mark-correct-button";
import { ProgressBar } from "@/components/quiz/progress-bar";
import type { Result } from "@/components/quiz/types";
import { getInputAnswer } from "@/components/quiz/utils";
import { Kanji } from "@/lib/kanji";
import type { KanjiQuiz } from "@/lib/quiz";
import { Root, Trigger } from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React from "react";
import { toHiragana } from "wanakana";

const JP_DELIMITER = `.`;

export const Quiz = ({ quiz }: { quiz: KanjiQuiz }) => {
  const { supabase } = useSupabase();
  const [current, setCurrent] = React.useState(0);
  const [results, setResults] = React.useState<Result[]>([]);
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const list = quiz.questions;
  const isLast = current === list.length - 1;

  React.useEffect(() => {
    async function saveResults() {
      await supabase
        .from("quizzes")
        .update({ progress: results })
        .eq("id", quiz.quizId);
    }
    saveResults();
  }, [results, supabase, quiz.quizId]);

  return (
    <div className="w-fit mx-auto h-full">
      <div className="flex flex-col justify-center h-screen">
        <ProgressBar value={(current + 1) / list.length} steps={list.length} />
        <KanjiForm
          loading={loading}
          kanji={list[current]}
          onSubmit={async (result) => {
            setResults([...results, result]);
            if (isLast) {
              setLoading(true);
              await supabase
                .from("quizzes")
                .update({ completed_at: new Date() })
                .eq("id", quiz.quizId);
              router.push(`/results/${quiz.quizId}`);
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

const calculateAnswer = (form: HTMLFormElement, kanji: Kanji): Result => {
  const readingInput = form.elements.namedItem("reading") as HTMLInputElement;
  const meaningInput = form.elements.namedItem("meaning") as HTMLInputElement;
  const readingAnswer = getInputAnswer(readingInput, (value) => {
    const kunReadingCorrect = kanji.readings.kun.some((reading) =>
      isJapaneseReadingCorrect(reading, value)
    );
    const onReadingCorrect = kanji.readings.on.some((reading) =>
      isJapaneseReadingCorrect(reading, value)
    );
    return kunReadingCorrect || onReadingCorrect;
  });
  const meaningAnswer = getInputAnswer(meaningInput, (value) => {
    return kanji.meanings.some(
      (meaning) => meaning.toLowerCase() === value.toLowerCase()
    );
  });
  return {
    reading: readingAnswer,
    meaning: meaningAnswer,
  };
};

const KanjiForm = ({
  kanji,
  loading,
  onSubmit,
}: {
  kanji: Kanji;
  loading: boolean;
  onSubmit: (result: Result) => void;
}) => {
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
    onSubmit(result as Result);
  }, [onSubmit, result]);

  const handleSubmit = React.useCallback(() => {
    setSubmitted(true);
    const form = formRef.current;
    if (form) {
      const result = calculateAnswer(form, kanji);
      setResult(result);
    }
  }, [kanji]);

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
      <div className="flex my-6 shadow-lg dark:shadow-none">
        <div className="text-[18rem] font-bold bg-gradient-to-br dark:from-neutral-800 dark:to-black from-white to-white p-16 border-r border-inherit overflow-hidden relative rounded-l-lg border border-neutral-800">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.h1
              key={kanji.literal}
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: -400 }}
              transition={{ type: "spring", damping: 20 }}
            >
              {kanji.literal}
            </motion.h1>
          </AnimatePresence>
        </div>
        <div className="p-12 dark:bg-black bg-white flex items-center rounded-r-lg border border-neutral-800 border-l-0">
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
              <FormInput
                label="Reading"
                type={result?.reading.type}
                disabled={loading}
              />
              <AnimatePresence>
                {result?.reading.type === "incorrect" && (
                  <div className="absolute -right-12 top-7 translate-x-1/2 translate-y-[3px]">
                    <MarkCorrectButton onClick={markCorrect("reading")} />
                  </div>
                )}
              </AnimatePresence>
              {submitted && (
                <motion.div className="mt-2" animate="show" initial="hidden">
                  <motion.p
                    variants={{
                      show: { y: 0, opacity: 1 },
                      hidden: { y: -16, opacity: 0 },
                    }}
                    transition={{ type: "spring", damping: 20, delay: 0.3 }}
                    className="flex"
                  >
                    <span className="w-[60px] text-sm mr-2 font-mono text-neutral-500 translate-y-[2px]">
                      Kunyomi
                    </span>{" "}
                    {kanji.readings.kun.join(", ")}
                  </motion.p>
                  <motion.p
                    variants={{
                      show: { y: 0, opacity: 1 },
                      hidden: { y: -16, opacity: 0 },
                    }}
                    transition={{ type: "spring", damping: 20, delay: 0.3 }}
                    className="flex items-center"
                  >
                    <span className="w-[60px] text-sm mr-2 font-mono text-neutral-500">
                      Onyomi
                    </span>{" "}
                    {kanji.readings.on.join(", ")}
                  </motion.p>
                </motion.div>
              )}
            </div>
            <div className="relative">
              <FormInput
                label="Meaning"
                type={result?.meaning.type}
                disabled={loading}
              />
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
                  <p>{kanji.meanings.join(", ")}</p>
                </motion.div>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="flex">
        <Root>
          <p className="text-sm text-neutral-600">
            <Trigger asChild>
              <button className="underline hover:text-white focus:outline-none focus-visible:text-white">
                Login
              </button>
            </Trigger>
            {` `} to save your progress
          </p>
          <LoginModal />
        </Root>
        <motion.button
          layout
          className="ml-auto px-4 py-2 rounded-md border dark:border-neutral-700 dark:bg-black bg-white border-neutral-300"
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
