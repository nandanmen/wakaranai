"use client";

import { useSupabase } from "@/app/supabase";
import { Kanji } from "@/lib/kanji";
import useSWR, { preload } from "swr";
import { KanjiItem } from "./kanji-item";
import { fetchWords } from "./kanji-sidebar";

type KanjiProficiency = {
  kanji: string;
  jlpt: number;
  word_id: number;
  proficiency: number;
  literal: number;
  num_variations: number;
};

function consolidateData(data: KanjiProficiency[] | null) {
  if (!data) return {};
  const totals = data.reduce((acc, item) => {
    if (!acc[item.kanji]) {
      acc[item.kanji] = { count: 0, total: item.num_variations };
    }
    acc[item.kanji].count += item.proficiency;
    return acc;
  }, {} as Record<string, { count: number; total: number }>);

  const result = {} as Record<string, number>;
  for (const kanji in totals) {
    result[kanji] = totals[kanji].count / totals[kanji].total;
  }
  return result;
}

export function KanjiList({
  list,
  level,
  onKanjiSelect,
}: {
  list: Kanji[];
  level: number;
  onKanjiSelect: (kanji: Kanji) => void;
}) {
  const { supabase, session } = useSupabase();
  const { data } = useSWR(
    `${session?.user.id}/kanji/${level}`,
    async (key: string) => {
      const [userId, _, level] = key.split("/");
      if (!userId || userId === "undefined") return {};
      const { data } = await supabase
        .from("kanji_proficiency")
        .select()
        .eq("user_id", userId)
        .eq("jlpt", Number(level));
      return consolidateData(data);
    }
  );
  return (
    <ul className="flex flex-wrap gap-6 col-start-2 w-[816px]">
      {list.map((kanji) => {
        return (
          <KanjiItem
            key={kanji.literal}
            kanji={kanji}
            level={level}
            proficiency={data?.[kanji.literal]}
            onClick={() => onKanjiSelect(kanji)}
            onMouseEnter={() =>
              preload(`/api/words?kanji=${kanji.literal}`, fetchWords)
            }
          />
        );
      })}
    </ul>
  );
}
