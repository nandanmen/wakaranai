"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function LevelLink({ level }: { level: string }) {
  const path = usePathname();
  const subsection = path.split("/").at(-1);
  return (
    <li key={level}>
      <Link
        href={`/${level.toLowerCase()}/${subsection}`}
        className="group hover:bg-gray4 bg-gray1 flex justify-between w-full relative rounded-md overflow-hidden py-1"
      >
        <span className="absolute bg-gray6 left-0 right-0 top-1/2 h-px" />
        <span className="bg-inherit relative px-2">{level}</span>
        <span className="bg-inherit relative px-2">0%</span>
      </Link>
    </li>
  );
}
