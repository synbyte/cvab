import cheerio from "cheerio";

async function getColors(): Promise<string | null> {
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
}
export default async function Colors() {
  return (
    <>
      <main className=" animate-slide-down  p-3 text-center text-white rounded-2xl  bg-cyan-50/10 backdrop-blur-sm shadow-sm shadow-gray-400">
        <div className="">
          <p className="bg-gradient-to-r from-orange-500 to-fuchsia-500 via-cyan-500 bg-clip-text text-2xl font-extrabold text-transparent">
            Colorline
          </p>
          <div className="bg-cyan-400 ring-1 ring-sky-500 mx-5 rounded-md text-cyan-700 mb-5 text-sm">
            <p className='text-xs font-light uppercase tracking-wide font-mono'>
              <strong>
                Complete <span className="text-orange-600 animate-pulse font-bold">Web Report</span> by
                Wednesday before court{" "}
                <span className="text-orange-600 animate-pulse font-bold">6pm</span>(DOSA) or{" "}
                <span className="text-orange-600 animate-pulse font-bold">12pm</span>(DC)!
              </strong>
            </p>
          </div>

          <div
            className="bg-cyan-700 rounded-lg shadow-sm shadow-gray-400 border-cyan-500 border-2 p-3  w-5/6 mx-auto"
            dangerouslySetInnerHTML={{ __html: (await getColors()) ?? "" }}
          ></div>

          <ul>
            <li> </li>
          </ul>
        </div>
      </main>
    </>
  );
}
