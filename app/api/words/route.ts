import * as fs from "fs";
import { NextResponse } from "next/server";
import { connect } from "@planetscale/database";

const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};

const words = Object.entries(
  JSON.parse(fs.readFileSync("./out/words.json", "utf-8"))
);

export async function GET() {
  const conn = connect(config);

  const inserted = await conn.execute("select literal from words");
  const insertedSet = new Set(inserted.rows.map((row) => row.literal));

  const promises = words.map(([literal, senses]) => {
    if (insertedSet.has(literal)) return Promise.resolve();

    const _senses = senses.filter(Boolean);
    if (!_senses.length) return Promise.resolve();
    const level = _senses[0].level;
    return conn.execute(
      "INSERT INTO words (literal, jlpt, senses) VALUES (?, ?, ?)",
      [literal, level, JSON.stringify(senses)]
    );
  });

  await Promise.all(promises);

  return NextResponse.json({ ok: true });
}
