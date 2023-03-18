"use client";

import React from "react";
import type { Kanji } from "@/lib/kanji";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { VariationsResponse, WordPart, WordV2Response } from "@/lib/words-v2";
import useSWR from "swr";
import { IconOnly } from "@/components/quiz/icon";

const SKIP_TAGS = ["obs", "ok", "oK", "col"];

export const VocabSidebar = ({
  word,
  onClose,
}: {
  word: WordV2Response;
  onClose: () => void;
}) => {
  const [sense] = word.senses;
  const { data: kanji } = useSWR<Kanji[]>(
    `/api/words/${word.literal}/kanji`,
    (url) => {
      return fetch(url).then((res) => res.json());
    }
  );
  return (
    <motion.div
      key={word.literal}
      animate={{
        y: 0,
        opacity: 1,
      }}
      initial={{ y: 16, opacity: 0 }}
      transition={{ type: "spring", damping: 20 }}
      className="h-full p-12 flex flex-col space-y-10 overflow-y-auto"
    >
      <div className="p-8 bg-gray2 border rounded-lg border-gray5 shadow-lg flex items-center justify-center font-bold leading-none text-[5rem]">
        {sense.parts.length ? (
          <PhraseText parts={sense.parts} />
        ) : (
          <h1>{word.literal}</h1>
        )}
      </div>
      <section className="space-y-6">
        <h3 className="font-mono text-sm relative text-center">
          <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gray6"></span>
          <span className="relative bg-gray2 text-gray10 px-4">Meanings</span>
        </h3>
        {word.senses.map((sense) => {
          return (
            <div key={sense.sourceId} className="mt-4">
              <p>{sense.meanings.flatMap((m) => m.texts).join(", ")}</p>
            </div>
          );
        })}
      </section>
      <section>
        <h3 className="font-mono text-sm relative text-center">
          <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gray6"></span>
          <span className="relative bg-gray2 text-gray10 px-4">Kanji</span>
        </h3>
        <ul className="divide-y divide-gray4 divide-dashed">
          {kanji?.map((char) => {
            const part = sense.parts.find((p) => p.literal === char.literal);
            return (
              <li key={char.literal} className="text-lg py-4 flex items-center">
                <p className="shrink-0 text-2xl">{char.literal}</p>
                {part?.reading && (
                  <p className="text-gray10 ml-2 shrink-0">{part.reading}</p>
                )}
                <p className="text-sm ml-auto pl-4 text-right">
                  {char.meanings.slice(0, 2).join(", ")}
                </p>
                <button className="ml-4">
                  <ArrowRight />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </motion.div>
  );
};

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

const PhraseText = ({
  parts,
}: {
  parts: WordPart[];
  showReading?: boolean;
}) => {
  return (
    <div className="flex items-end">
      {parts.map((part) => {
        return (
          <div key={part.literal} className="relative">
            <div className="text-3xl w-full flex justify-center whitespace-nowrap mb-2">
              {part.reading}
            </div>
            <h1 className="leading-none">{part.literal}</h1>
          </div>
        );
      })}
    </div>
  );
};
