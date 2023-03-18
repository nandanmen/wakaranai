"use client";

import { Kanji } from "@/lib/kanji";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { KanjiList } from "./kanji-list";
import { KanjiSidebar } from "./kanji-sidebar";
import { Sidebar } from "@/app/sidebar";
import { DotBackground } from "../../dot-background";

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
      <main className="p-12 relative">
        <DotBackground />
        <KanjiList list={list} level={level} onKanjiSelect={setActiveKanji} />
      </main>
      <aside className="sticky top-0 h-screen flex flex-col border-l border-gray4">
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
