import cheerio from "cheerio";
import { Suspense } from "react";

async function getColors(): Promise<string | null> {
  try {
    const response = await fetch("https://lifelineconnections.org/color-line/", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/html",
      },
      next: { revalidate: 0 },
      cache: "no-store",
    });
    const content = await response.text();
    const $ = cheerio.load(content);
    const item = $(".cl-line-container").html();
    console.log("Colors fetched: ", $(".cl-line-container div").text());
    return item;
  } catch (error) {
    console.error("Error fetching colors: ", error);
    return "<div class='text-red-100 bg-red-500/60 p-3 rounded-md border-red-500 border-2 font-bold'>Error fetching colors, check Lifeline Connections website.</div>";
  }
}

async function ColorContent() {
  const colors = await getColors();
  return (
    <div
      className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-md border-2 border-blue-200 p-4 w-5/6 mx-auto"
      dangerouslySetInnerHTML={{ __html: colors ?? "" }}
    ></div>
  );
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

          <Suspense fallback={<ColorLoading />}>
            <ColorContent />
          </Suspense>

          <ul>
            <li> </li>
          </ul>
        </div>
      </main>
    </>
  );
}
