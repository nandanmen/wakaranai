"use client";

import React from "react";
import type { Kanji } from "@/lib/kanji";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import type { Word } from "@/lib/words";

export const KanjiSidebar = ({
  kanji,
  words,
}: {
  kanji: Kanji;
  words: Word[];
}) => {
  const getWordOptions = () => {
    if (!words) return [];

    const options: Word[] = [];
    const meanings = new Set<string>();
    words.forEach((word) => {
      if (meanings.has(word.meanings[0].texts[0])) return;
      meanings.add(word.meanings[0].texts[0]);
      options.push(word);
    });

    return options;
  };

  return (
    <aside className="w-[350px] p-8 pb-4 bg-gray2 border border-gray4 h-fit rounded-lg sticky -top-8 self-start">
      <div className="py-8 bg-gray3 border rounded-lg border-gray5 shadow-lg flex items-center justify-center text-[10rem] font-bold leading-none">
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
      <ul className="divide-y divide-dashed divide-gray6">
        {getWordOptions()
          .slice(0, 5)
          .map((word) => {
            return (
              <li key={word.literal} className="text-lg py-4 flex items-center">
                <p className="shrink-0">{word.literal}</p>
                <p className="text-gray10 ml-2 text-base shrink-0">
                  {word.reading}
                </p>
                <p className="text-sm ml-auto text-right">
                  {word.meanings[0].texts[0]}
                </p>
              </li>
            );
          })}
      </ul>
    </aside>
  );
};
