"use client";

import { CheckCircle } from "@/app/icons";
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
