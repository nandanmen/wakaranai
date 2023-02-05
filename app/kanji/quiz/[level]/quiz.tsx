"use client";

import React from "react";
import { CheckIcon, Cross1Icon, MinusIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { Kanji } from "@/lib/kanji";

const JP_DELIMITER = `.`;

export const Quiz = ({ list }: { list: [string, Kanji][] }) => {
  const [current, setCurrent] = React.useState(0);
  return (
    <div className="text-white">
      <ProgressBar value={(current + 1) / list.length} steps={list.length} />
      <KanjiForm
        kanji={list[current]}
        onSubmit={() => setCurrent(current + 1)}
      />
    </div>
  );
};

const range = (start: number, end: number) => {
  const length = end - start;
  return Array.from({ length }, (_, i) => start + i);
};

const ProgressBar = ({ value, steps }: { value: number; steps: number }) => {
  return (
    <div className="w-full flex h-[6px] bg-neutral-900 rounded-full overflow-hidden relative">
      <motion.div
        className="bg-white h-full"
        animate={{ width: `${value * 100}%` }}
        transition={{ type: "spring", damping: 20 }}
      />
      {range(0, steps).map((index) => {
        const step = 100 / steps;
        const pos = step * (index + 1);
        return (
          <div
            key={pos}
            className="absolute h-full w-[2px] bg-black"
            style={{ left: `${pos}%` }}
          />
        );
      })}
    </div>
  );
};

type Result = {
  reading: Answer;
  meaning: Answer;
};

type Answer =
  | {
      type: "correct" | "incorrect";
      value: string;
    }
  | {
      type: "skipped";
      value: null;
    };

const isJapaneseReadingCorrect = (reading: string, input: string) => {
  if (reading.includes(JP_DELIMITER)) {
    return reading.split(JP_DELIMITER)[0] === input;
  }
  return reading === input;
};

const KanjiForm = ({
  kanji,
  onSubmit,
}: {
  kanji: [string, Kanji];
  onSubmit: (result: Result) => void;
}) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = React.useState(false);

  const result = React.useMemo((): Result | null => {
    if (!Array.isArray(kanji)) return null;
    const [, data] = kanji;

    if (!submitted) return null;
    const form = formRef.current;
    if (!form) return null;
    const readingInput = form.elements.namedItem("reading") as HTMLInputElement;
    const meaningInput = form.elements.namedItem("meaning") as HTMLInputElement;

    let readingAnswer: Answer;
    let meaningAnswer: Answer;

    const readingSkipped = readingInput.value === "";
    if (readingSkipped) {
      readingAnswer = {
        type: "skipped",
        value: null,
      };
    } else {
      const kunReadingCorrect = data.readings_kun.some((reading) =>
        isJapaneseReadingCorrect(reading, readingInput.value)
      );
      const onReadingCorrect = data.readings_on.some((reading) =>
        isJapaneseReadingCorrect(reading, readingInput.value)
      );
      const readingCorrect = kunReadingCorrect || onReadingCorrect;
      readingAnswer = {
        type: readingCorrect ? "correct" : "incorrect",
        value: readingInput.value,
      };
    }

    const meaningSkipped = meaningInput.value === "";
    if (meaningSkipped) {
      meaningAnswer = {
        type: "skipped",
        value: null,
      };
    } else {
      const meaningCorrect = data.meanings.some(
        (meaning) => meaning.toLowerCase() === meaningInput.value.toLowerCase()
      );
      meaningAnswer = {
        type: meaningCorrect ? "correct" : "incorrect",
        value: meaningInput.value,
      };
    }

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

  console.log(result);

  if (!Array.isArray(kanji)) return null;
  const [char, data] = kanji;

  return (
    <>
      <div className="flex border rounded-lg border-neutral-800 overflow-hidden my-6">
        <div className="text-[18rem] font-bold bg-gradient-to-br from-neutral-800 to-black p-16 border-r border-inherit overflow-hidden relative">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.h1
              key={char}
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              exit={{ x: -400 }}
              transition={{ type: "spring", damping: 20 }}
            >
              {char}
            </motion.h1>
          </AnimatePresence>
        </div>
        <div className="p-12 bg-black flex items-center">
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
              <motion.label layout="position" className="block w-full relative">
                <span className="font-mono text-base">Reading</span>
                <input
                  name="reading"
                  className="text-2xl block w-full bg-inherit py-2 border-b border-neutral-700 focus-visible:border-neutral-100 focus:outline-none"
                  type="text"
                />
                <Icon type={result?.reading.type} />
                {result?.reading.type === "skipped" && (
                  <motion.p
                    className="absolute bottom-2 italic text-neutral-500"
                    animate={{ x: 0, opacity: 1 }}
                    initial={{ x: -16, opacity: 0 }}
                    transition={{ type: "spring", damping: 20 }}
                  >
                    Skipped
                  </motion.p>
                )}
              </motion.label>
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
                    {data.readings_kun.join(", ")}
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
                    {data.readings_on.join(", ")}
                  </motion.p>
                </motion.div>
              )}
            </div>
            <div>
              <motion.label layout="position" className="block w-full relative">
                <span className="font-mono text-base">Meaning</span>
                <input
                  name="meaning"
                  className="text-2xl block w-full bg-inherit py-2 border-b border-neutral-700 focus-visible:border-neutral-100 focus:outline-none"
                  type="text"
                />
                <Icon type={result?.meaning.type} />
                {result?.meaning.type === "skipped" && (
                  <motion.p
                    className="absolute bottom-2 italic text-neutral-500"
                    animate={{ x: 0, opacity: 1 }}
                    initial={{ x: -16, opacity: 0 }}
                    transition={{ type: "spring", damping: 20 }}
                  >
                    Skipped
                  </motion.p>
                )}
              </motion.label>
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
                  <p>{data.meanings.join(", ")}</p>
                </motion.div>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-end">
        <motion.button
          layout
          className="px-4 py-2 rounded-md border border-neutral-700 bg-black"
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

const Icon = ({ type }: { type?: Answer["type"] }) => {
  if (!type) return null;
  const iconMap: Record<Answer["type"], typeof CheckIcon> = {
    correct: CheckIcon,
    incorrect: Cross1Icon,
    skipped: MinusIcon,
  };
  const _Icon = iconMap[type];
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: 16, opacity: 0 }}
      transition={{ type: "spring", damping: 20 }}
      className="absolute bottom-3 right-2"
    >
      <_Icon width="24" height="24" />
    </motion.div>
  );
};
