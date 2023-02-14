import { getWords } from "@/lib/words";
import Link from "next/link";

const LIMIT = 100;

export default async function VocabPage() {
  const words = await getWords(LIMIT);
  return (
    <main className="max-w-[700px] mx-auto">
      <ul className="text-2xl my-32">
        {words.map((word) => {
          return (
            <li key={word.literal}>
              <Link
                href={`/words`}
                className="flex items-center relative p-2 dark:bg-neutral-900 bg-white hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-md"
              >
                <span className="absolute left-2 right-2 dark:bg-neutral-800 bg-neutral-300 h-[1px]" />
                <span className="bg-inherit px-1 relative">
                  <span className="font-bold">{word.literal}</span>
                  {word.parts.length > 0 && (
                    <span className="text-neutral-500 ml-1">
                      {word.reading}
                    </span>
                  )}
                </span>
                <span className="relative text-base dark:text-neutral-500 text-neutral-700 text-righ ml-auto bg-inherit px-1">
                  {word.meanings[0].texts[0]}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
