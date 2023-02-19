"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Kanji } from "@/lib/kanji";
import { useSupabase } from "@/app/supabase";
import cn from "classnames";

export const KanjiItem = ({
  kanji,
  level,
  ...props
}: {
  kanji: Kanji;
  level: number;
} & Omit<React.ComponentPropsWithoutRef<"button">, "href">) => {
  const { session } = useSupabase();
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
      <button
        className={cn(
          "w-24 h-24 text-5xl font-bold rounded-md flex items-center justify-center bg-gray2 border border-gray4 relative overflow-hidden hover:border-gray6 hover:bg-gradient-to-b hover:from-gray5 hover:to-gray3 focus:outline-none focus-visible:border-2 focus-visible:border-gray8",
          proficiency < 1 ? "shadow-md" : "shadow-gray4/60 border-gray6"
        )}
        style={
          proficiency === 1
            ? { boxShadow: "0 0 10px 5px var(--tw-shadow-color)" }
            : undefined
        }
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
      </button>
    </li>
  );
};
