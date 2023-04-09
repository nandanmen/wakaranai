"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  motion,
  LayoutGroup,
  AnimatePresence,
  useIsPresent,
} from "framer-motion";
import type { Sentence, Word } from "@/lib/types";
import { toKana } from "wanakana";
import useSWR from "swr";
import { Title } from "../[level]/title";
import { clsx } from "clsx";
import { CheckCircle, CloseCircle, ExpandIcon, MinimizeIcon } from "../icons";

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
  const [index, setIndex] = React.useState(0);
  const [showAnswer, setShowAnswer] = React.useState(false);

  React.useEffect(() => {
    setShowAnswer(false);
  }, [index]);

  return (
    <div className="h-screen overflow-hidden p-32">
      <header className="fixed top-0 left-0 p-8 w-full flex justify-between">
        <Title />
        <Link href={`/n${level}/${type}`}>Quit Quiz</Link>
      </header>
      <main className="relative grid grid-cols-[2fr_3fr] grid-rows-[min-content_1fr] gap-y-4 h-full">
        <div className="relative bg-gray2 rounded-full overflow-hidden h-3 col-span-2">
          <motion.div
            className="absolute inset-0 bg-gray12"
            style={{ originX: "left" }}
            animate={{ scaleX: index / words.length }}
            initial={{ scaleX: 0 }}
            transition={{ type: "spring", bounce: 0 }}
          />
        </div>
        <Form
          word={words[index]}
          onSubmit={(form) => {
            if (showAnswer) {
              form.reset();
              setIndex(index + 1);
            } else {
              setShowAnswer(true);
            }
          }}
        />
        <div className="row-start-2 col-start-2 bg-gray1 rounded-tr-xl rounded-br-xl border border-gray3 border-l-0 h-full flex flex-col justify-center overflow-hidden relative">
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
                      key={word.id}
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

const WordExplanation = React.forwardRef<HTMLDivElement, { word: Word }>(
  function WordExplanation({ word: givenWord }, ref) {
    const isPresent = useIsPresent();
    const [word, setWord] = useState(givenWord);
    const { data } = useSWR<Sentence[]>(
      `/api/sentences?id=${word.id}`,
      (url) => {
        return fetch(url).then((res) => res.json());
      }
    );
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
            "p-1 bg-gray2 border-gray4 relative",
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
                "w-8 h-8 rounded-full hover:bg-gray6 flex items-center justify-center",
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
            <motion.ul
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="mt-2 divide-y divide-gray6"
            >
              {data?.map((sentence) => {
                const [before, after] = sentence.text.split(word.literal);
                return (
                  <li
                    key={sentence.sentence_id}
                    className="py-4 text-center last:pb-0"
                  >
                    <p className="text-lg">
                      <span>{before}</span>
                      <span className="text-blue11 font-bold">
                        {word.literal}
                      </span>
                      <span>{after}</span>
                    </p>
                    <p className="text-gray11">{sentence.meaning}</p>
                  </li>
                );
              })}
            </motion.ul>
          )}
        </motion.div>
      </motion.div>
    );
  }
);

const IN_PARENS = /\(.*\)/g;

type Answer =
  | {
      type: "correct" | "incorrect";
      value: string;
    }
  | {
      type: "skipped";
      value: null;
    };

const getInputAnswer = (
  input: HTMLInputElement,
  isCorrect: (value: string) => boolean
): Answer => {
  if (input.value === "") {
    return {
      type: "skipped",
      value: null,
    };
  }
  return {
    type: isCorrect(input.value) ? "correct" : "incorrect",
    value: input.value,
  };
};

const getResult = (
  form: HTMLFormElement,
  word: Word
): { reading: Answer; meaning: Answer } => {
  const readingInput = form.elements.namedItem("reading") as HTMLInputElement;
  const meaningInput = form.elements.namedItem("meaning") as HTMLInputElement;
  const readingAnswer = getInputAnswer(readingInput, (value) => {
    return word.senses.some((sense) => {
      return sense.readings.some((reading) => reading === toKana(value));
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

const Form = ({
  word,
  onSubmit,
}: {
  word: Word;
  onSubmit: (form: HTMLFormElement) => void;
}) => {
  const readingRef = React.useRef<HTMLInputElement>(null);
  const [result, setResult] = React.useState<{
    reading: Answer;
    meaning: Answer;
  } | null>(null);
  const [value, setValue] = React.useState("");

  const parseValue = (newValue: string) => {
    // we want to press n twice to go from n to ん
    if (value.at(-1) === "n" && newValue.at(-1) === "n") {
      return setValue(toKana(newValue.slice(0, -1)));
    }
    if (newValue.at(-1) === "n") {
      return setValue(toKana(newValue.slice(0, -1)) + "n");
    }
    setValue(toKana(newValue));
  };

  return (
    <form
      className="flex flex-col justify-center p-12 col-start-1 rounded-tl-xl rounded-bl-xl bg-gray1 border border-gray3"
      onSubmit={(evt) => {
        evt.preventDefault();
        const form = evt.target as HTMLFormElement;
        if (!result) {
          setResult(getResult(form, word));
        } else {
          form.reset();
          setValue("");
          readingRef.current?.focus();
          setResult(null);
        }
        onSubmit(form);
      }}
    >
      <div className="relative flex flex-col">
        <label htmlFor="reading">Reading</label>
        <input
          ref={readingRef}
          id="reading"
          type="text"
          className="bg-gray1 border-b border-gray8 py-2 focus:outline-none"
          value={value}
          onChange={(evt) => parseValue(evt.target.value)}
        />
        {result?.reading && <AnswerIcon answer={result.reading} />}
      </div>
      <div className="relative flex flex-col mt-6">
        <label htmlFor="meaning">Meaning</label>
        <input
          id="meaning"
          type="text"
          className="bg-gray1 border-b border-gray8 py-2 focus:outline-none"
        />
        {result?.meaning && <AnswerIcon answer={result.meaning} />}
      </div>
      <button type="submit" />
    </form>
  );
};

const AnswerIcon = ({ answer }: { answer: Answer }) => {
  if (answer.type === "correct") {
    return (
      <span className="absolute right-0 bottom-2">
        <CheckCircle
          animate={{ pathLength: 1 }}
          initial={{ pathLength: 0 }}
          transition={{ type: "spring", bounce: 0 }}
        />
      </span>
    );
  }
  return (
    <span className="absolute right-0 bottom-2">
      <CloseCircle
        animate={{ pathLength: 1 }}
        initial={{ pathLength: 0 }}
        transition={{ type: "spring", bounce: 0 }}
      />
    </span>
  );
};
