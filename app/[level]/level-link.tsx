"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function LevelLink({ level }: { level: string }) {
  const path = usePathname() as string;
  const [, currentLevel, subsection] = path.split("/");
  return (
    <li key={level}>
      <Link
        href={`/${level.toLowerCase()}/${subsection}`}
        className={`hover:bg-gray4 bg-gray1 flex justify-between w-full relative rounded-md overflow-hidden py-1 ${
          level.toLowerCase() === currentLevel.toLowerCase() && "bg-gray4"
        }`}
      >
        <span className="absolute bg-gray6 left-0 right-0 top-1/2 h-px" />
        <span className="bg-inherit relative px-2">{level}</span>
        <span className="bg-inherit relative px-2">0%</span>
      </Link>
    </li>
  );
}
