"use client";

import type { Word, WordProficiency } from "@/lib/types";
import { motion } from "framer-motion";

export function VocabList({
  words,
  proficiency,
}: {
  words: Word[];
  proficiency: Record<number, WordProficiency>;
}) {
  return (
    <div>
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-4">
        {words.map((word) => {
          const _proficiency = proficiency[word.id]?.proficiency / 3 ?? 0;
          return (
            <li
              className="p-2 bg-gray1 border-gray4 border rounded-md relative"
              key={word.id}
            >
              <motion.span
                style={{ originX: "left" }}
                animate={{ scaleX: _proficiency }}
                initial={{ scaleX: 0 }}
                transition={{ type: "spring", bounce: 0 }}
                className="absolute inset-0 bg-gray3"
              />
              <span className="relative">{word.literal}</span>
              {_proficiency === 1 && (
                <span className="absolute right-2 text-gray10">
                  <CheckCircle />
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const CheckCircle = () => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z" />
      <path d="M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75" />
    </svg>
  );
};
