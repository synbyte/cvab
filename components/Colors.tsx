
import { Suspense } from "react";
import { ColorBoundary } from "./ColorBoundary";
import ColorLineDisplay from "./ColorLineDisplay";
import { fetchColorLineForPage } from "@/lib/colorLine";

async function ColorContent() {
  const result = await fetchColorLineForPage();
  if (result.ok) {
    console.log("Colors fetched for", result.colorLineDateYmd);
  }
  return <ColorLineDisplay initialResult={result} />;
}

function ColorLoading() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-md border-2 border-blue-200 p-4 w-5/6 mx-auto animate-pulse">
      <div className="flex flex-col items-center gap-2">
        <div className="h-8 bg-blue-100 rounded-md w-3/4">Loading...</div>
        <div className="h-4 bg-blue-50 rounded-md w-1/2">Loading...</div>
      </div>
    </div>
  );
}

export default function Colors() {
  return (
    <>
      <main className="animate-slide-down p-6 text-center rounded-2xl bg-white shadow-lg border border-gray-200">
        <div className="">
          <p className="bg-gradient-to-r from-orange-500 to-fuchsia-500 via-cyan-500 bg-clip-text text-2xl font-extrabold text-transparent mb-4">
            Colorline
          </p>
          <div className="bg-amber-100 border-2 border-amber-300 mx-5 rounded-lg text-amber-900 mb-5 text-sm p-3">
            <p className="text-xs font-medium uppercase tracking-wide">
              <strong>
                Complete{" "}
                <span className="text-orange-600 animate-pulse font-bold">
                  Web Report
                </span>{" "}
                by Wednesday before court{" "}
                <span className="text-orange-600 animate-pulse font-bold">
                  6pm
                </span>
                (DOSA) or{" "}
                <span className="text-orange-600 animate-pulse font-bold">
                  12pm
                </span>
                (DC)!
              </strong>
            </p>
          </div>
          <ColorBoundary>
            <Suspense fallback={<ColorLoading />}>
              <ColorContent />
            </Suspense>
          </ColorBoundary>
          <ul>
            <li> </li>
          </ul>
        </div>
      </main>
    </>
  );
}