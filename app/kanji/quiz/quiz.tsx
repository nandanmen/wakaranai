"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toHiragana } from "wanakana";
import { Root, Trigger } from "@radix-ui/react-dialog";

import { FormInput } from "@/components/quiz/input";
import { ProgressBar } from "@/components/quiz/progress-bar";
import type { Result } from "@/components/quiz/types";
import { getInputAnswer } from "@/components/quiz/utils";
import { Kanji } from "@/lib/kanji";
import { useSupabase } from "@/app/supabase";
import { useRouter } from "next/navigation";
import type { KanjiQuiz } from "@/lib/quiz";
import { LoginModal } from "@/components/login-modal";

const JP_DELIMITER = `.`;

export const Quiz = ({ quiz }: { quiz: KanjiQuiz }) => {
  const { supabase } = useSupabase();
  const [current, setCurrent] = React.useState(0);
  const [results, setResults] = React.useState<Result[]>([]);
  const router = useRouter();

  const list = quiz.questions;
  return (
    <div className="w-fit mx-auto h-full">
      <div className="flex flex-col justify-center h-screen">
        <ProgressBar value={(current + 1) / list.length} steps={list.length} />
        <KanjiForm
          kanji={list[current]}
          onSubmit={async (result) => {
            const newResults = [...results, result];
            console.log(newResults);
            setResults(newResults);
            await supabase
              .from("quizzes")
              .update({ progress: newResults })
              .eq("id", quiz.quizId);
            if (current === list.length - 1) {
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

const KanjiForm = ({
  kanji,
  onSubmit,
}: {
  kanji: Kanji;
  onSubmit: (result: Result) => void;
}) => {
  const { supabase } = useSupabase();

  const formRef = React.useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = React.useState(false);

  const result = React.useMemo((): Result | null => {
    if (!submitted) return null;
    const form = formRef.current;
    if (!form) return null;
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
  }, [submitted, kanji]);

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

  return (
    <>
      <div className="flex border rounded-lg dark:border-neutral-800 overflow-hidden my-6 border-neutral-200 shadow-lg dark:shadow-none">
        <div className="text-[18rem] font-bold bg-gradient-to-br dark:from-neutral-800 dark:to-black from-white to-white p-16 border-r border-inherit overflow-hidden relative">
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
        <div className="p-12 dark:bg-black bg-white flex items-center">
          <form
            ref={formRef}
            className="w-[400px] text-lg"
            onSubmit={(evt) => {
              evt.preventDefault();
              if (!submitted) {
                setSubmitted(true);
              } else {
                handleSubmit();
              }
            }}
          >
            <div className="mb-8 relative">
              <FormInput label="Reading" type={result?.reading.type} />
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
            <div>
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
