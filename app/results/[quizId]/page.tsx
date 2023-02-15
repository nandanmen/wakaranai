import { getQuizById } from "@/lib/quiz";
import { redirect } from "next/navigation";
import { QuizResults } from "./results";

export default async function ResultsPage({
  params,
}: {
  params: { quizId: string };
}) {
  const quiz = await getQuizById(validateQuizId(params.quizId));
  if (!quiz) redirect("/kanji/quiz");
  return (
    <div className="w-fit mx-auto h-full">
      <QuizResults quiz={quiz} />
    </div>
  );
}

const validateQuizId = (quizId?: string): string => {
  if (!quizId) return "";
  return quizId;
};
