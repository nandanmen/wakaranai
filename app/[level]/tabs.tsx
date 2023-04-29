"use client";

import { TABS } from "@/lib/constants";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const notAvailable = ["Kanji", "Stories"];

export function Tabs() {
  const params = useParams();
  const pathname = usePathname();
  const activeTab = pathname?.split("/").at(-1);
  return (
    <ul className="flex bg-gray-1 p-1 border border-gray-6 rounded-full w-fit">
      {TABS.map((tab) => {
        if (notAvailable.includes(tab))
          return (
            <li>
              <p className="px-2 py-1 rounded-full text-gray-11 flex items-center gap-1">
                <span>{tab}</span>
                <span className="rounded-md border border-gray-6 text-sm leading-none p-1">
                  soon
                </span>
              </p>
            </li>
          );
        return (
          <li key={tab}>
            <Link
              href={`/${params?.level}/${tab.toLowerCase()}`}
              className={`px-3 py-1 block rounded-full hover:bg-gray-4 ${
                activeTab === tab.toLowerCase() && "bg-gray-4"
              }`}
            >
              {tab}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
