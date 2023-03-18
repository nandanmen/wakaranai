"use client";

import React from "react";
import { WordV2Response } from "@/lib/words-v2";
import { fetchWord, VocabSidebar } from "./vocab-sidebar";
import { preload } from "swr";
import { DotBackground } from "../../dot-background";

export function VocabListPage({ words }: { words: WordV2Response[] }) {
  const [activeWord, setActiveWord] = React.useState<WordV2Response | null>(
    null
  );
  return (
    <>
      <main className="p-12 relative">
        <DotBackground />
        <div className="w-fit mx-auto">
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
        </div>
      </main>
      <aside className="sticky top-0 h-screen flex flex-col border-l border-gray4">
        {activeWord && (
          <VocabSidebar word={activeWord} onClose={() => setActiveWord(null)} />
        )}
      </aside>
    </>
  );
}
