
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
    <div className="tc-color-panel mx-auto max-w-full">
      <div className="flex flex-col items-center gap-3">
        <div className="tc-skeleton h-8 w-3/4" />
        <div className="tc-skeleton h-4 w-1/2" />
      </div>
    </div>
  );
}

export default function Colors() {
  return (
    <section className="tc-card text-center">
      <h2 className="tc-card-title mb-4">Colorline</h2>
      <div className="tc-callout mb-5 mx-auto max-w-xl text-left sm:text-center">
        <p className="tc-label uppercase text-ink-muted">
          <strong>
            Complete{" "}
            <span className="text-accent font-bold">Web Report</span> by
            Wednesday before court{" "}
            <span className="text-accent font-bold">6pm</span>
            (DOSA) or <span className="text-accent font-bold">12pm</span>
            (DC)!
          </strong>
        </p>
      </div>
      <ColorBoundary>
        <Suspense fallback={<ColorLoading />}>
          <ColorContent />
        </Suspense>
      </ColorBoundary>
    </section>
  );
}