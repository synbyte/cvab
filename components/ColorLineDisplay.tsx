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
    <div className="tc-color-panel mx-auto max-w-full">
      <button
        type="button"
        onClick={onRefresh}
        disabled={isRefreshing}
        aria-label="Refresh colors"
        className="tc-btn-icon"
      >
        <RefreshIcon spinning={isRefreshing} />
      </button>
      <div
        className={isRefreshing ? "pointer-events-none opacity-60" : ""}
        dangerouslySetInnerHTML={{ __html: result.html }}
      />
    </div>
  );
}