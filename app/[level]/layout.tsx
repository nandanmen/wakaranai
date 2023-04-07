import React from "react";
import { LEVELS } from "@/lib/constants";
import { LevelLink } from "./level-link";
import { Title } from "./title";
import { Tabs } from "./tabs";

export function generateStaticParams() {
  return LEVELS.map((level) => {
    return { level };
  });
}

export default function LevelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Background />
      <div className="grid grid-cols-[250px_1fr] grid-rows-[min-content_1fr] p-16 min-h-screen gap-12">
        <Title />
        <div className="sticky flex justify-between top-4 z-10">
          <Tabs />
          <div>
            <button className="block h-full bg-gray12 w-full rounded-md text-gray1 font-semibold px-4">
              Start Quiz
            </button>
          </div>
        </div>
        <aside className="space-y-4 sticky top-16 h-fit">
          <div className="bg-gray1 border rounded-lg border-gray3 w-[250px] p-4">
            <ul className="font-mono">
              {LEVELS.map((level) => {
                return <LevelLink key={level} level={level} />;
              })}
            </ul>
          </div>
          <div className="space-y-2">
            <button className="block bg-gray2 w-full rounded-md py-1 border border-gray5">
              Login with GitHub
            </button>
            <button className="block bg-gray2 w-full rounded-md py-1 border border-gray5">
              Login
            </button>
          </div>
        </aside>
        <main className="relative">{children}</main>
      </div>
    </div>
  );
}

function Background() {
  const id = React.useId();
  return (
    <svg className="fixed inset-0" width="100%" height="100%">
      <defs>
        <pattern
          id={id}
          width="25"
          height="25"
          viewBox="0 0 10 10"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="5" cy="5" r="1" className="fill-gray2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
