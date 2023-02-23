"use client";

import React from "react";
import { WordV2Response } from "@/lib/words-v2";
import { fetchWord, VocabSidebar } from "./vocab-sidebar";
import { preload } from "swr";

export function VocabListPage({ words }: { words: WordV2Response[] }) {
  const [activeWord, setActiveWord] = React.useState<WordV2Response | null>(
    null
  );
  return (
    <>
      <div>
        <ul className="flex flex-wrap w-[948px] gap-6">
          {words
            .filter((word) => word.literal.length > 1)
            .map((word) => (
              <li key={word.id}>
                <button
                  className="block w-[300px] text-3xl bg-gray2 rounded-md p-4 border border-gray4 shadow-md font-bold"
                  onClick={() => setActiveWord(word)}
                >
                  {word.literal}
                </button>
              </li>
            ))}
        </ul>
        <div className="h-24" />
      </div>
      {activeWord && (
        <VocabSidebar word={activeWord} onClose={() => setActiveWord(null)} />
      )}
    </>
  );
}
