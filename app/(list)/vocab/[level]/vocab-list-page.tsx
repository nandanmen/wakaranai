"use client";

import React from "react";
import { AnimatePresence, useCycle } from "framer-motion";
import { WordV2Response } from "@/lib/words-v2";
import { VocabSidebar } from "./vocab-sidebar";
import useSWR, { preload } from "swr";
import { motion } from "framer-motion";
import { DotBackground } from "../../dot-background";
import { useSupabase } from "@/app/supabase";
import { ProgressButton } from "../../progress-button";
import { KanjiSidebar } from "../../kanji/[level]/kanji-sidebar";
import { Kanji } from "@/lib/kanji";
import cn from "classnames";

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
          <ul className="grid grid-cols-[repeat(auto-fill,250px)] justify-center gap-6">
            {sortedWords.map((word) => {
              return (
                <li key={word.id}>
                  <ProgressButton
                    className="block w-full text-2xl p-4 font-bold"
                    proficiency={data?.[word.id] ?? 0}
                    direction="x"
                    onClick={() => setActiveWord(word)}
                    onMouseEnter={() =>
                      preload(`/api/words/${word.literal}/kanji`, (url) => {
                        return fetch(url).then((res) => res.json());
                      })
                    }
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
      {activeWord && <SidebarStack initialWord={activeWord} />}
    </>
  );
}

const SidebarStack = ({ initialWord }: { initialWord: WordV2Response }) => {
  const [stack, setStack] = React.useState<
    Array<
      { type: "word"; word: WordV2Response } | { type: "kanji"; kanji: Kanji }
    >
  >([{ type: "word", word: initialWord }]);

  React.useEffect(() => {
    setStack([{ type: "word", word: initialWord }]);
  }, [initialWord]);

  const top = stack.at(-1);
  return (
    <aside className="sticky top-0 h-screen">
      <AnimatePresence>
        {stack.length > 1 && (
          <motion.div
            className="w-[50px] h-screen absolute right-[450px] border-l border-gray4 bg-gray1 text-2xl font-bold divide divide-y divide-gray4 divide-dashed"
            animate={{ x: 0 }}
            initial={{ x: "100%" }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0 }}
          >
            {stack.map((item, index) => {
              const literal =
                item.type === "word" ? item.word.literal : item.kanji.literal;
              return (
                <motion.button
                  key={index}
                  className={cn(
                    "w-full py-3",
                    index === stack.length - 1
                      ? "bg-gray2"
                      : "hover:bg-gray2 text-gray9"
                  )}
                  animate={{ y: 0, opacity: 1 }}
                  initial={{ y: -8, opacity: 0.6 }}
                >
                  {literal.split("").map((char, index) => {
                    return (
                      <motion.span
                        className="block"
                        layoutId={literal + char + index}
                        key={char + index}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="border-l relative border-gray4 bg-gray1 shadow-lg h-full w-[450px]">
        {top && top.type === "word" && (
          <VocabSidebar
            word={top.word}
            onKanjiClick={(kanji) => {
              const lastOccurrence = stack.findIndex(
                (s) => s.type === "kanji" && s.kanji.literal === kanji.literal
              );
              if (lastOccurrence >= 0) {
                setStack(stack.slice(0, lastOccurrence + 1));
                return;
              }
              setStack([...stack, { type: "kanji", kanji }]);
            }}
          />
        )}
        {top && top.type === "kanji" && (
          <KanjiSidebar
            kanji={top.kanji}
            onWordSelect={(word) => {
              const lastOccurrence = stack.findIndex(
                (s) => s.type === "word" && s.word.literal === word.literal
              );
              console.log(lastOccurrence);
              if (lastOccurrence >= 0) {
                setStack(stack.slice(0, lastOccurrence + 1));
                return;
              }
              setStack([...stack, { type: "word", word }]);
            }}
          />
        )}
      </div>
    </aside>
  );
};

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
