"use client";

import { useCallback, useState, useTransition } from "react";
import { refreshColorLineAction } from "@/app/actions/colorLine";
import type { ColorLineResult } from "@/lib/colorLine";

type Props = {
  initialResult: ColorLineResult;
};

function RefreshIcon({ spinning }: { spinning: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-5 w-5 ${spinning ? "animate-spin" : ""}`}
      aria-hidden="true"
    >
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <polyline points="21 3 21 9 15 9" />
    </svg>
  );
}

export default function ColorLineDisplay({ initialResult }: Props) {
  const [result, setResult] = useState<ColorLineResult>(initialResult);
  const [isPending, startTransition] = useTransition();

  const onRefresh = useCallback(() => {
    startTransition(async () => {
      const next = await refreshColorLineAction();
      setResult(next);
    });
  }, []);

  const isRefreshing = isPending;

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-md border-2 border-blue-200 p-4 pt-10 w-5/6 mx-auto">
      <button
        type="button"
        onClick={onRefresh}
        disabled={isRefreshing}
        aria-label="Refresh colors"
        className="absolute top-2 right-2 flex h-9 w-9 items-center justify-center rounded-full border border-blue-200 bg-white/90 text-blue-700 shadow-sm transition hover:bg-blue-50 hover:text-blue-900 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
      >
        <RefreshIcon spinning={isRefreshing} />
      </button>
      <div
        className={isRefreshing ? "opacity-60 pointer-events-none" : ""}
        dangerouslySetInnerHTML={{ __html: result.html }}
      />
    </div>
  );
}