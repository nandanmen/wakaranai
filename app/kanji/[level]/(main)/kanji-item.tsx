"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Kanji } from "@/lib/kanji";
import Link from "next/link";
import { useSupabase } from "@/app/supabase";

export const KanjiItem = ({
  kanji,
  level,
  ...props
}: {
  kanji: Kanji;
  level: number;
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href">) => {
  const { supabase, session } = useSupabase();
  const [proficiency, setProficiency] = React.useState(0);

  React.useEffect(() => {
    if (!session) {
      setProficiency(0);
      return;
    }
    fetch(`/api/proficiency/kanji/${kanji.literal}?level=${level}`)
      .then((res) => res.json())
      .then(({ proficiency }) => setProficiency(proficiency / 3));
  }, [session, level, kanji.literal]);

  return (
    <li>
      <Link
        href={`/kanji/${kanji.jlpt}/${kanji.literal}`}
        className="w-24 h-24 text-5xl font-bold rounded-md flex items-center justify-center bg-gray2 border border-gray4 shadow-md relative overflow-hidden hover:border-gray6 hover:bg-gradient-to-b hover:from-gray5 hover:to-gray3 focus:outline-none focus-visible:border-2 focus-visible:border-gray8"
        {...props}
      >
        <motion.span
          className="absolute inset-0 bg-gray4"
          style={{ originY: "bottom" }}
          animate={{ scaleY: proficiency }}
          initial={{ scaleY: 0 }}
          transition={{ type: "spring", damping: 20 }}
        />
        <span className="relative">{kanji.literal}</span>
      </Link>
    </li>
  );
};
