"use client";

import React from "react";
import { useCycle } from "framer-motion";
import { WordV2Response } from "@/lib/words-v2";
import { fetchWord, VocabSidebar } from "./vocab-sidebar";
import useSWR, { preload } from "swr";
import { DotBackground } from "../../dot-background";
import { useSupabase } from "@/app/supabase";
import { ProgressButton } from "../../progress-button";

export function VocabListPage({ words }: { words: WordV2Response[] }) {
  const [sortAscending, cycle] = useCycle(null, true, false);
  const [activeWord, setActiveWord] = React.useState<WordV2Response | null>(
    null
  );

  const { supabase, session } = useSupabase();
  const { data } = useSWR(
    [`${session?.user.id}/vocab`, words.map((word) => word.id)],
    async ([key, wordIds]) => {
      const [userId] = key.split("/");
      if (!userId || userId === "undefined") return {};
      const { data } = await supabase
        .from("proficiency")
        .select()
        .eq("user_id", userId)
        .in("word_id", wordIds);
      if (!data) return {};
      const result = {} as Record<number, number>;
      for (const item of data) {
        result[item.word_id] = item.proficiency / 3;
      }
      return result;
    }
  );

  const sortedWords = React.useMemo(() => {
    if (sortAscending === null) return words;
    const newList = [...words];
    newList.sort((a, b) => {
      const aProf = data?.[a.id] ?? 0;
      const bProf = data?.[b.id] ?? 0;
      return aProf - bProf;
    });
    if (sortAscending) newList.reverse();
    return newList;
  }, [words, sortAscending, data]);

  return (
    <>
      <main className="p-12 relative">
        <DotBackground />
        <div className="relative">
          <ul className="grid grid-cols-[repeat(auto-fill,300px)] justify-center gap-6 px-20">
            {sortedWords.map((word) => {
              return (
                <li key={word.id}>
                  <ProgressButton
                    className="block w-[300px] text-3xl p-4 font-bold"
                    proficiency={data?.[word.id] ?? 0}
                    direction="x"
                    onClick={() => setActiveWord(word)}
                  >
                    {word.literal}
                  </ProgressButton>
                </li>
              );
            })}
          </ul>
          <button className="fixed top-12 text-3xl" onClick={() => cycle()}>
            {sortAscending === null && <SwitchIcon />}
            {sortAscending === false && <ArrowDown />}
            {sortAscending === true && <ArrowUp />}
          </button>
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

const SwitchIcon = () => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.75 15.75L16 19.25L19.25 15.75"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M4.75 8.25L8 4.75L11.25 8.25"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M16 8.75V19.25"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M8 4.75V15.25"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};

const ArrowDown = () => {
  return (
    <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M17.25 13.75L12 19.25L6.75 13.75"
      ></path>
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M12 18.25V4.75"
      ></path>
    </svg>
  );
};

const ArrowUp = () => {
  return (
    <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M17.25 10.25L12 4.75L6.75 10.25"
      ></path>
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M12 19.25V5.75"
      ></path>
    </svg>
  );
};
