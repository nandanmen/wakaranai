"use client";

import { Kanji } from "@/lib/kanji";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { KanjiList } from "./kanji-list";
import { KanjiSidebar } from "./kanji-sidebar";
import { Sidebar } from "@/app/sidebar";

export const KanjiListPage = ({
  list,
  level,
}: {
  list: Kanji[];
  level: number;
}) => {
  const [activeKanji, setActiveKanji] = React.useState<Kanji | null>(null);
  return (
    <>
      <Sidebar level={level} mode="kanji" />
      <motion.div layout>
        <KanjiList list={list} level={level} onKanjiSelect={setActiveKanji} />
        <div className="h-24" />
      </motion.div>
      <AnimatePresence mode="popLayout">
        {activeKanji && (
          <KanjiSidebar
            kanji={activeKanji}
            onClose={() => setActiveKanji(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
