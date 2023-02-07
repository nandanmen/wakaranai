import { KanjiResult } from "@/components/quiz/types";
import { redirect } from "next/navigation";
import { QuizResults } from "./results";

export default function ResultsPage({ searchParams }: any) {
  if (!searchParams.results) redirect("/kanji/quiz/5");
  const results = JSON.parse(
    decodeURIComponent(searchParams.results)
  ) as KanjiResult[];
  return (
    <div className="w-fit mx-auto h-full">
      <QuizResults results={results} />
    </div>
  );
}
