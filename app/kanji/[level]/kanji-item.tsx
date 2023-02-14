"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Kanji } from "@/lib/kanji";

export const KanjiItem = ({
  kanji,
  progress,
  ...props
}: {
  kanji: Kanji;
  progress: number;
} & React.ComponentPropsWithoutRef<"button">) => {
  return (
    <li>
      <button
        className="w-24 h-24 text-5xl font-bold rounded-md flex items-center justify-center bg-gray2 border border-gray4 shadow-md relative overflow-hidden hover:border-gray8 hover:bg-gradient-to-b hover:from-gray3 hover:to-gray2 focus:outline-none focus-visible:border-2 focus-visible:border-gray8"
        {...props}
      >
        <motion.span
          className="absolute inset-0 bg-gray4"
          style={{ originY: "bottom" }}
          animate={{ scaleY: progress }}
          initial={{ scaleY: 0 }}
          transition={{ type: "spring", damping: 20 }}
        />
        <span className="relative">{kanji.literal}</span>
      </button>
    </li>
  );
};
