"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Kanji } from "@/lib/kanji";
import Link from "next/link";

export const KanjiItem = ({
  kanji,
  progress,
  ...props
}: {
  kanji: Kanji;
  progress: number;
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href">) => {
  return (
    <li>
      <Link
        href={`/kanji/${kanji.jlpt}/${kanji.literal}`}
        className="w-24 h-24 text-5xl font-bold rounded-md flex items-center justify-center bg-gray2 border border-gray4 shadow-md relative overflow-hidden hover:border-gray6 hover:bg-gradient-to-b hover:from-gray5 hover:to-gray3 focus:outline-none focus-visible:border-2 focus-visible:border-gray8"
        {...props}
      >
        {/* <motion.span
          className="absolute inset-0 bg-gray4"
          style={{ originY: "bottom" }}
          animate={{ scaleY: progress }}
          initial={{ scaleY: 0 }}
          transition={{ type: "spring", damping: 20 }}
        /> */}
        <span className="relative">{kanji.literal}</span>
      </Link>
    </li>
  );
};
