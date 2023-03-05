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
    <div className="h-screen overflow-y-auto grid grid-cols-[300px_1fr_450px]">
      <Sidebar level={level} mode="kanji" />
      <main className="p-12 border-r border-gray4">
        <div className="w-fit mx-auto">
          <KanjiList list={list} level={level} onKanjiSelect={setActiveKanji} />
        </div>
      </main>
      <AnimatePresence mode="popLayout">
        {activeKanji && (
          <KanjiSidebar
            kanji={activeKanji}
            onClose={() => setActiveKanji(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
