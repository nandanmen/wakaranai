import React from "react";
import { isKanji, toKana } from "wanakana";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { Word } from "@/lib/types";
import { CheckCircle, CloseCircle } from "../icons";

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

const hasReading = (word: Word): boolean => {
  if (word.literal.length === 1 && isKanji(word.literal)) return true;
  return word.senses.some((sense) => sense.parts.length > 0);
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
  const defaultReading = word.senses.flatMap((sense) => sense.readings)[0];
  return {
    reading: hasReading(word)
      ? readingAnswer
      : {
          type: "correct",
          value: defaultReading,
        },
    meaning: meaningAnswer,
  };
};

export const Form = ({
  word,
  onSubmit,
}: {
  word: Word;
  onSubmit: (
    form: HTMLFormElement,
    result: {
      reading: Answer;
      meaning: Answer;
    } | null
  ) => void;
}) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const readingRef = React.useRef<HTMLInputElement>(null);
  const meaningRef = React.useRef<HTMLInputElement>(null);
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

  const markCorrect = (type: "reading" | "meaning") => {
    setResult((result) => {
      if (!result) return null;
      return {
        ...result,
        [type]: {
          type: "correct",
          value: result[type].value,
        },
      };
    });
  };

  React.useEffect(() => {
    formRef.current?.reset();
    setValue("");
    setResult(null);
    if (hasReading(word)) {
      readingRef.current?.focus();
    } else {
      meaningRef.current?.focus();
    }
  }, [word]);

  return (
    <form
      ref={formRef}
      className="flex flex-col justify-center p-8 col-start-1 rounded-tl-xl rounded-bl-xl bg-gray-1 border border-gray-6 text-lg relative"
      onSubmit={(evt) => {
        evt.preventDefault();
        const form = evt.target as HTMLFormElement;
        if (!result) {
          setResult(getResult(form, word));
        }
        onSubmit(form, result);
      }}
    >
      <div
        className={clsx(
          "relative flex flex-col",
          !hasReading(word) && "opacity-30"
        )}
      >
        <label htmlFor="reading">Reading</label>
        <input
          ref={readingRef}
          id="reading"
          type="text"
          className="bg-gray-1 border-b border-gray-8 py-4 focus:outline-none"
          value={value}
          onChange={(evt) => parseValue(evt.target.value)}
          disabled={!hasReading(word)}
        />
        {result?.reading && <AnswerIcon answer={result.reading} />}
        {result?.reading.type === "incorrect" && (
          <button
            type="button"
            className="absolute -right-8 translate-x-1/2 z-10 bg-gray-1 bottom-4"
            onClick={() => markCorrect("reading")}
          >
            <CheckCircle size={36} />
          </button>
        )}
      </div>
      <div className="relative flex flex-col mt-12">
        <label htmlFor="meaning">Meaning</label>
        <input
          ref={meaningRef}
          id="meaning"
          type="text"
          className="bg-gray-1 border-b border-gray-8 py-4 focus:outline-none"
        />
        {result?.meaning && <AnswerIcon answer={result.meaning} />}
        {result?.meaning.type === "incorrect" && (
          <button
            type="button"
            className="absolute -right-8 translate-x-1/2 z-10 bg-gray-1 bottom-4"
            onClick={() => markCorrect("meaning")}
          >
            <CheckCircle size={36} />
          </button>
        )}
      </div>
      <div className="text-base absolute bottom-8 flex justify-between left-8 right-8">
        <motion.button
          layout
          type="submit"
          className="bg-gray-4 rounded-md px-3 py-2"
        >
          <motion.span
            key={result ? "next" : "submit"}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            {result ? "Next" : "Submit"}
          </motion.span>
        </motion.button>
        <motion.button
          animate={{ opacity: result ? 0 : 1 }}
          type="submit"
          className="text-gray-11"
        >
          Reveal Answer
        </motion.button>
      </div>
    </form>
  );
};

const AnswerIcon = ({ answer }: { answer: Answer }) => {
  if (answer.type === "skipped") return null;
  if (answer.type === "correct") {
    return (
      <span className="absolute right-0 bottom-4">
        <CheckCircle
          animate={{ pathLength: 1 }}
          initial={{ pathLength: 0 }}
          transition={{ type: "spring", bounce: 0 }}
          size={36}
        />
      </span>
    );
  }
  return (
    <span className="absolute right-0 bottom-4">
      <CloseCircle
        animate={{ pathLength: 1 }}
        initial={{ pathLength: 0 }}
        transition={{ type: "spring", bounce: 0 }}
        size={36}
      />
    </span>
  );
};
