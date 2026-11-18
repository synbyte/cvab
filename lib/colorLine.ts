import cheerio from "cheerio";
import { unstable_noStore as noStore } from "next/cache";

export const COLOR_LINE_REVALIDATE_SECONDS = 300;
export const COLOR_LINE_FETCH_TIMEOUT_MS = 15000;

const COLOR_LINE_URL = "https://lifelineconnections.org/color-line/";

export const COLOR_LINE_ERROR_HTML =
  "<div class='text-red-100 bg-red-500/60 p-3 rounded-md border-red-500 border-2 font-bold'>Error fetching colors. Press the refresh button or check the Lifeline Connections website.</div>";

export const COLOR_LINE_NO_DATA_HTML =
  "<div class='text-yellow-100 bg-yellow-500/60 p-3 rounded-md border-yellow-500 border-2 font-bold'>No color data available.</div>";

const MONTH_INDEX: Record<string, number> = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

export type ColorLineSuccess = {
  ok: true;
  html: string;
  colorLineDateYmd: string;
};

export type ColorLineFailure = {
  ok: false;
  html: string;
};

export type ColorLineResult = ColorLineSuccess | ColorLineFailure;

function isNextDynamicUsageError(error: unknown): boolean {
  if (!(error instanceof Error)) {
    return false;
  }
  if (error.message.includes("Dynamic server usage")) {
    return true;
  }
  const digest = (error as Error & { digest?: string }).digest;
  return digest === "DYNAMIC_SERVER_USAGE";
}

export function getTodayPacificYmd(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Los_Angeles",
  }).format(new Date());
}

function ymdFromParts(year: number, monthIndex: number, day: number): string {
  return `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

/** Parse Lifeline headings like "Wednesday November 18th, 2026". */
export function parseColorLineDateYmd(text: string): string | null {
  const match = text.match(
    /(\w+)\s+(\d{1,2})(?:st|nd|rd|th)?,\s*(\d{4})/i
  );
  if (!match) {
    return null;
  }
  const monthIndex = MONTH_INDEX[match[1].toLowerCase()];
  if (monthIndex === undefined) {
    return null;
  }
  const day = Number.parseInt(match[2], 10);
  const year = Number.parseInt(match[3], 10);
  if (!Number.isFinite(day) || !Number.isFinite(year)) {
    return null;
  }
  return ymdFromParts(year, monthIndex, day);
}

function extractColorLineDateYmd($: ReturnType<typeof cheerio.load>): string | null {
  const fromContainer = $(".cl-line-container h4").first().text().trim();
  const fromH4 = parseColorLineDateYmd(fromContainer);
  if (fromH4) {
    return fromH4;
  }
  const pageText = $("h2")
    .filter((_, el) => /today/i.test($(el).text()))
    .first()
    .text();
  return parseColorLineDateYmd(pageText);
}

function scrapeColorLineHtml(content: string): {
  html: string | null;
  dateYmd: string | null;
} {
  const $ = cheerio.load(content);
  const html = $(".cl-line-container").html() ?? null;
  const dateYmd = extractColorLineDateYmd($);
  return { html, dateYmd };
}

async function fetchColorLinePage(bypassCache: boolean): Promise<string> {
  const response = await fetch(COLOR_LINE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "text/html",
    },
    ...(bypassCache
      ? { cache: "no-store" as const }
      : { next: { revalidate: COLOR_LINE_REVALIDATE_SECONDS } }),
    signal: AbortSignal.timeout(COLOR_LINE_FETCH_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.text();
}

function success(html: string, colorLineDateYmd: string): ColorLineSuccess {
  return { ok: true, html, colorLineDateYmd };
}

function failure(html: string): ColorLineFailure {
  return { ok: false, html };
}

/**
 * Fetches Lifeline color HTML and only returns it when the page date matches
 * today in America/Los_Angeles. A cached response from a previous day is never
 * shown: we bypass cache and refetch once; if today still cannot be confirmed,
 * callers receive the error HTML (not yesterday's colors).
 */
export async function fetchColorLine(options?: {
  bypassCache?: boolean;
}): Promise<ColorLineResult> {
  const bypassCache = options?.bypassCache ?? false;

  try {
    const content = await fetchColorLinePage(bypassCache);
    const scraped = scrapeColorLineHtml(content);

    if (!scraped.html) {
      return failure(COLOR_LINE_NO_DATA_HTML);
    }

    const todayPacificYmd = getTodayPacificYmd();
    if (scraped.dateYmd === todayPacificYmd) {
      return success(scraped.html, scraped.dateYmd);
    }

    if (bypassCache) {
      return failure(COLOR_LINE_ERROR_HTML);
    }

    const freshContent = await fetchColorLinePage(true);
    const fresh = scrapeColorLineHtml(freshContent);

    if (!fresh.html) {
      return failure(COLOR_LINE_NO_DATA_HTML);
    }

    if (fresh.dateYmd === todayPacificYmd) {
      return success(fresh.html, fresh.dateYmd);
    }

    return failure(COLOR_LINE_ERROR_HTML);
  } catch (error) {
    if (isNextDynamicUsageError(error)) {
      throw error;
    }
    console.error("Error fetching colors: ", error);
    return failure(COLOR_LINE_ERROR_HTML);
  }
}

/** Per-request render so ISR page HTML never serves a previous day's colors. */
export async function fetchColorLineForPage(): Promise<ColorLineResult> {
  noStore();
  return fetchColorLine();
}