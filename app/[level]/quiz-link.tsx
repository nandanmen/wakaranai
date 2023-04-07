"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function QuizLink() {
  const path = usePathname() as string;
  const [, level, type] = path.split("/");
  return (
    <Link
      href={`/quiz?level=${level}&type=${type}&limit=20`}
      className="h-full bg-gray12 w-full rounded-md text-gray1 font-semibold px-4 flex items-center"
    >
      Start Quiz
    </Link>
  );
}
