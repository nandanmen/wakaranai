import React from "react";
import { getKanjiByLevel } from "@/lib/kanji";
import { redirect } from "next/navigation";
import { KanjiListPage } from "./kanji-list-page";

export default async function KanjiPage({
  params,
}: {
  params: { level: string };
}) {
  const { level } = params;
  const _level = Number(level);
  if (isNaN(_level) || _level < 1 || _level > 5) {
    redirect("/kanji/5");
  }
  const list = await getKanjiByLevel(_level);
  return <KanjiListPage list={list} level={_level} />;
}
