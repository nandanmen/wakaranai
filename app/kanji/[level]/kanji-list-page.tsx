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
      <main className="p-12">
        <div className="w-fit mx-auto">
          <KanjiList list={list} level={level} onKanjiSelect={setActiveKanji} />
        </div>
      </main>
      <aside className="sticky top-12 h-[calc(100vh_-_6rem)] flex flex-col border-l border-gray4">
        <AnimatePresence mode="popLayout">
          {activeKanji && (
            <KanjiSidebar
              kanji={activeKanji}
              onClose={() => setActiveKanji(null)}
            />
          )}
        </AnimatePresence>
      </aside>
    </>
  );
};
