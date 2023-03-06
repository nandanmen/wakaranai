"use client";

import React from "react";
import type { Kanji } from "@/lib/kanji";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { VariationsResponse, WordV2Response } from "@/lib/words-v2";
import useSWR from "swr";
import { IconOnly } from "@/components/quiz/icon";

const SKIP_TAGS = ["obs", "ok", "oK", "col"];

export const fetchWord = (url: string): Promise<VariationsResponse[]> => {
  return fetch(url).then((res) => res.json());
};

export const VocabSidebar = ({
  word,
  onClose,
}: {
  word: WordV2Response;
  onClose: () => void;
}) => {
  return (
    <motion.aside
      key={word.literal}
      animate={{
        y: 0,
        opacity: 1,
      }}
      initial={{ y: 16, opacity: 0 }}
      transition={{ type: "spring", damping: 20 }}
      className="h-full px-12 flex flex-col"
    >
      <div className="p-8 bg-gray3 border rounded-lg border-gray5 shadow-lg flex items-center justify-center font-bold leading-none text-[5rem]">
        <PhraseText phrase={word} />
      </div>
      <h3 className="font-mono text-sm mt-6 relative text-center">
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
    </motion.aside>
  );
};

const PhraseText = ({
  phrase,
}: {
  phrase: WordV2Response;
  showReading?: boolean;
}) => {
  const { parts } = phrase.senses[0];
  if (parts.length === 0) {
    return <h1>{phrase.literal}</h1>;
  }
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
