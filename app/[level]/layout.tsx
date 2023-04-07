import Link from "next/link";
import React from "react";
import { LEVELS, TABS } from "@/lib/constants";
import { LevelLink } from "./level-link";

export function generateStaticParams() {
  return LEVELS.map((level) => {
    return { level };
  });
}

export default function LevelLayout({
  params,
  children,
}: {
  params: { level: string };
  children: React.ReactNode;
}) {
  return (
    <div>
      <Background />
      <div className="grid grid-cols-[250px_1fr] grid-rows-[min-content_1fr] p-20 min-h-screen gap-12">
        <h2 className="relative text-xl flex items-center font-title">
          わからない
        </h2>
        <ul className="flex bg-gray1 p-1 border border-gray3 rounded-full relative w-fit h-fit">
          {TABS.map((tab) => {
            return (
              <li key={tab}>
                <Link
                  href={`/${params.level}/${tab.toLowerCase()}`}
                  className="px-3 py-1 block rounded-full hover:bg-gray4"
                >
                  {tab}
                </Link>
              </li>
            );
          })}
        </ul>
        <aside className="space-y-4 sticky top-20">
          <div className="bg-gray1 border rounded-lg border-gray3 w-[250px] p-4">
            <ul className="font-mono">
              {LEVELS.map((level) => {
                return <LevelLink key={level} level={level} />;
              })}
            </ul>
          </div>
          <div className="space-y-2 bg-gray1 border rounded-lg border-gray3 p-6">
            <button className="block bg-gray2 w-full rounded-md py-1 border border-gray5">
              Login
            </button>
            <button className="block bg-gray2 w-full rounded-md py-1 border border-gray5">
              Login with GitHub
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
