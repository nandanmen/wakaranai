const fs = require("fs");

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_API_KEY = process.env.SUPABASE_API_KEY;

const insert = async () => {
  const file = JSON.parse(fs.readFileSync("./data/sentences.json"));
  const body = Object.entries(file)
    .filter((_, index) => index % 20 === 0)
    .map(([text, meaning]) => ({ text, meaning }));

  const response = await fetch(`${SUPABASE_URL}/sentences`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_API_KEY,
      Authorization: `Bearer ${SUPABASE_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    console.error(response);
  }
};

const deduplicate = () => {
  const file = JSON.parse(fs.readFileSync("./data/sentences.json"));

  const meanings = new Set();
  const matches = {};
  Object.entries(file).forEach(([text, meaning]) => {
    if (!matches[text] && !meanings.has(meaning)) {
      matches[text] = meaning;
      meanings.add(meaning);
    }
  });

  fs.writeFileSync("./data/sentences.json", JSON.stringify(matches, null, 2));
};
