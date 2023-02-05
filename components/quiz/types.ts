export type Result = {
  reading: Answer;
  meaning: Answer;
};

export type Answer =
  | {
      type: "correct" | "incorrect";
      value: string;
    }
  | {
      type: "skipped";
      value: null;
    };
