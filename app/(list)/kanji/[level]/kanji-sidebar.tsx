"use client";

import React from "react";
import type { Kanji } from "@/lib/kanji";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { VariationsResponse, WordV2Response } from "@/lib/words-v2";
import useSWR from "swr";
import { IconOnly } from "@/components/quiz/icon";

const SKIP_TAGS = ["obs", "ok", "oK", "col"];

export const fetchWords = (url: string): Promise<VariationsResponse[]> => {
  return fetch(url).then((res) => res.json());
};

type KanjiSidebarProps = {
  kanji: Kanji;
  onWordSelect: (word: WordV2Response) => void;
};

export const KanjiSidebar = React.forwardRef<HTMLDivElement, KanjiSidebarProps>(
  function KanjiSidebar({ kanji, onWordSelect }, ref) {
    const { data: words } = useSWR(
      `/api/words?kanji=${kanji.literal}`,
      fetchWords
    );
    return (
      <motion.div
        ref={ref}
        key={kanji.literal}
        style={{ originX: "100%", originY: 0 }}
        className="h-full p-12 flex flex-col"
      >
        <div className="py-8 bg-gray2 border rounded-lg border-gray5 shadow-lg flex items-center justify-center text-[10rem] font-bold leading-none">
          {kanji.literal}
        </div>
        <h2 className="text-center text-xl font-bold mt-4 mb-6">
          <Balancer>{kanji.meanings.slice(0, 3).join(", ")}</Balancer>
        </h2>
        {kanji.readings.kun.length > 0 && (
          <section className="flex gap-2 mb-2">
            <h3 className="text-gray10 font-mono text-sm w-[30px] shrink-0">
              Kun
            </h3>
            <p className="text-lg leading-[1.2]">
              {kanji.readings.kun.slice(0, 4).join(", ")}
            </p>
          </section>
        )}
        {kanji.readings.on.length > 0 && (
          <section className="flex gap-2">
            <h3 className="text-gray10 font-mono text-sm w-[30px] shrink-0">
              On
            </h3>
            <p className="text-lg leading-[1.2]">
              {kanji.readings.on.slice(0, 4).join(", ")}
            </p>
          </section>
        )}
        <h3 className="font-mono text-sm mt-6 relative text-center">
          <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gray6"></span>
          <span className="relative bg-gray2 text-gray10 px-4">Words</span>
        </h3>
        <ul className="divide-y divide-dashed divide-gray6 overflow-y-auto h-full">
          {words?.map((word) => {
            const [sense] = word.senses;
            return (
              <li key={word.literal} className="text-lg py-4 flex items-center">
                <p className="shrink-0">{word.literal}</p>
                <p className="text-gray10 ml-2 text-base shrink-0">
                  {sense.readings.join(", ")}
                </p>
                <p className="text-sm ml-auto pl-4 text-right">
                  {sense.meanings
                    .filter((meaning) =>
                      meaning.tags.every((tag) => !SKIP_TAGS.includes(tag))
                    )
                    .flatMap((meaning) => meaning.texts)
                    .slice(0, 2)
                    .join(", ")}
                </p>
                <button
                  className="ml-2"
                  onClick={() =>
                    onWordSelect(word as unknown as WordV2Response)
                  }
                >
                  <ArrowRight />
                </button>
              </li>
            );
          })}
        </ul>
      </motion.div>
    );
  }
);

const ArrowRight = () => {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M13.75 6.75L19.25 12L13.75 17.25"
      ></path>
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M19 12H4.75"
      ></path>
    </svg>
  );
};
