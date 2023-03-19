"use client";

import React from "react";
import { motion, useCycle } from "framer-motion";
import { useSupabase } from "@/app/supabase";
import { Kanji } from "@/lib/kanji";
import useSWR, { preload } from "swr";
import { fetchWords } from "./kanji-sidebar";
import { ProgressButton } from "../../progress-button";

type KanjiProficiency = {
  kanji: string;
  jlpt: number;
  word_id: number;
  proficiency: number;
  literal: number;
  num_variations: number;
};

function consolidateData(data: KanjiProficiency[] | null) {
  if (!data) return {};
  const totals = data.reduce((acc, item) => {
    if (!acc[item.kanji]) {
      acc[item.kanji] = { count: 0, total: item.num_variations };
    }
    acc[item.kanji].count += item.proficiency;
    return acc;
  }, {} as Record<string, { count: number; total: number }>);

  const result = {} as Record<string, number>;
  for (const kanji in totals) {
    result[kanji] = totals[kanji].count / totals[kanji].total / 3;
  }
  return result;
}

export function KanjiList({
  list,
  level,
  onKanjiSelect,
}: {
  list: Kanji[];
  level: number;
  onKanjiSelect: (kanji: Kanji) => void;
}) {
  const [sortAscending, cycle] = useCycle(null, true, false);

  const { supabase, session } = useSupabase();
  const { data } = useSWR(
    `${session?.user.id}/kanji/${level}`,
    async (key: string) => {
      const [userId, _, level] = key.split("/");
      if (!userId || userId === "undefined") return {};
      const { data } = await supabase
        .from("kanji_proficiency")
        .select()
        .eq("user_id", userId)
        .eq("jlpt", Number(level));
      return consolidateData(data);
    }
  );

  const sortedList = React.useMemo(() => {
    if (sortAscending === null) return list;
    const newList = [...list];
    newList.sort((a, b) => {
      const aProf = data?.[a.literal] ?? 0;
      const bProf = data?.[b.literal] ?? 0;
      return aProf - bProf;
    });
    if (sortAscending) newList.reverse();
    return newList;
  }, [list, sortAscending, data]);

  return (
    <div className="relative">
      <ul className="grid grid-cols-[repeat(auto-fill,theme(space.24))] justify-center gap-6 px-24">
        {sortedList.map((kanji) => {
          return (
            <li key={kanji.literal} className="aspect-square">
              <ProgressButton
                className="w-full h-full text-5xl font-bold"
                proficiency={data?.[kanji.literal] ?? 0}
                onClick={() => onKanjiSelect(kanji)}
                onMouseEnter={() =>
                  preload(`/api/words?kanji=${kanji.literal}`, fetchWords)
                }
              >
                {kanji.literal}
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
