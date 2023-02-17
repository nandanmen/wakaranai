"use client";

import { useSupabase } from "@/app/supabase";
import { LoginModal } from "@/components/login-modal";
import { FormInput } from "@/components/quiz/input";
import { MarkCorrectButton } from "@/components/quiz/mark-correct-button";
import { ProgressBar } from "@/components/quiz/progress-bar";
import type { Result } from "@/components/quiz/types";
import { getInputAnswer } from "@/components/quiz/utils";
import { Kanji } from "@/lib/kanji";
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

export const Quiz = ({ level, quiz }: { quiz: Kanji[]; level: number }) => {
  const [current, setCurrent] = React.useState(0);
  const [results, setResults] = React.useState<
    Array<Result & { kanjiId: number }>
  >([]);
  const [list, setList] = React.useState(quiz);
  const router = useRouter();

  React.useEffect(() => {
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
  }, [results]);

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
        <KanjiForm
          reviewing={current >= quiz.length}
          kanji={list[current]}
          onSubmit={async (result, kanjiId) => {
            setResults([...results, { ...result, kanjiId }]);
            if (
              result.reading.type !== "correct" ||
              result.meaning.type !== "correct"
            ) {
              setList([...list, list[current]]);
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
  reviewing,
  onSubmit,
}: {
  kanji: Kanji;
  reviewing: boolean;
  onSubmit: (result: Result, kanjiId: number) => void;
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
    onSubmit(result as Result, kanji.id);
  }, [onSubmit, result, kanji]);

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
      <div className="flex shadow-lg relative">
        <div className="text-[18rem] font-bold bg-gradient-to-br from-gray3 to-gray1 p-16 overflow-hidden relative rounded-l-lg border border-gray4">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.h1
              key={kanji.literal}
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: -400 }}
              transition={{ type: "spring", damping: 20 }}
              className="text-gray12"
            >
              {kanji.literal}
            </motion.h1>
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
                  <p>{kanji.meanings.join(", ")}</p>
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
