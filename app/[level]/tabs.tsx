"use client";

import { TABS } from "@/lib/constants";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function Tabs() {
  const params = useParams();
  const pathname = usePathname();
  const activeTab = pathname?.split("/").at(-1);
  return (
    <ul className="flex bg-gray1 p-1 border border-gray6 rounded-full w-fit">
      {TABS.map((tab) => {
        return (
          <li key={tab}>
            <Link
              href={`/${params?.level}/${tab.toLowerCase()}`}
              className={`px-3 py-1 block rounded-full hover:bg-gray4 ${
                activeTab === tab.toLowerCase() && "bg-gray4"
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
