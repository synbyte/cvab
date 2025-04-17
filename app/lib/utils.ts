// lib/colorsCache.ts
import fs from "fs/promises";
import path from "path";
import cheerio from "cheerio";

const cachePath = path.resolve(process.cwd(), "colors-cache.json");

export async function getColors(): Promise<string | null> {
  const now = new Date();
  const today = now.toISOString().split("T")[0];

  try {
    const cache = JSON.parse(await fs.readFile(cachePath, "utf-8"));
    if (cache.date === today && cache.html) return cache.html;
  } catch {}

  const response = await fetch("https://lifelineconnections.org/color-line/", {
    method: "GET",
    headers: { "Content-Type": "text/html" },
    cache: "no-store",
  });
  const content = await response.text();
  const $ = cheerio.load(content);
  const item = $(".cl-line-container").html();

  await fs.writeFile(
    cachePath,
    JSON.stringify({ date: today, html: item }),
    "utf-8"
  );

  return item;
}
