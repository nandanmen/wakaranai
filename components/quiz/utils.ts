import { Answer } from "./types";

export const getInputAnswer = (
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
