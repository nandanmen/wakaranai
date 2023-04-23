import { request } from "@/lib/db";
import { Kanji } from "@/lib/types";
import { NextResponse } from "next/server";
import { isKanji } from "wanakana";

export async function GET(
  _: Request,
  {
    params,
  }: {
    params: { kanji: string };
  }
) {
  const kanji = params.kanji.split("").filter((char) => isKanji(char));
  if (!kanji.length) return NextResponse.json([]);

  const response = await request(
    `/kanji?select=*&literal=in.(${kanji.join(",")})`,
    {
      cache: "force-cache",
    }
  );

  if (!response.ok) {
    return new Response("Error fetching sentences", {
      status: response.status,
    });
  }

  const body: Kanji[] = await response.json();
  return NextResponse.json(body);
}
