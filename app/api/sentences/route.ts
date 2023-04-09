import { request } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  if (!searchParams.has("id")) {
    return new Response("Missing word parameter", { status: 400 });
  }

  const wordId = searchParams.get("id");
  const limit = searchParams.get("limit") || "2";
  const data = await request("/rpc/get_examples", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ search_id: wordId, max_count: limit }),
  });

  if (!data.ok) {
    return new Response("Error fetching sentences", { status: data.status });
  }

  return NextResponse.json(await data.json());
}
