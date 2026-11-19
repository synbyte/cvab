"use server";

import { fetchColorLine, type ColorLineResult } from "@/lib/colorLine";

export async function refreshColorLineAction(): Promise<ColorLineResult> {
  return fetchColorLine({ bypassCache: true });
}