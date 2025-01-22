import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.scss";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CCDC",
  description: "Clark County Drug Court",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage:
            "url(https://www.toptal.com/designers/subtlepatterns/uploads/diagonal-squares.png)",
          backgroundSize: "tile",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100vh",
          color: "white",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className={`${raleway.className}`}
      >
        <nav className={`top-0 z-50 fixed w-full py-3 shadow shadow-gray-400 bg-cyan-50/70 backdrop-blur-md rounded-b-2xl align-baseline flex ${raleway.className}`}>
          <ul className={`nav text-cyan-900 text-sm md:text-lg space-x-5 ${raleway.className}`}>
            <li className="transition hover:-translate-y-0.5">
              <a id="link" href="/">
                Home
              </a>
            </li>
            <li className="transition hover:-translate-y-0.5">
              <a id="link" href="/support">
                Groups/Resources
              </a>
            </li>
            <li className="transition hover:-translate-y-0.5">
              <a id="link" href="/forms">
                Forms
              </a>
            </li>
            <li className="transition hover:-translate-y-0.5 text-orange-500 font-bold">
              <a id="link" href="https://treatment-court.clark.wa.gov/?id=1">
                Web Report
              </a>
            </li>
          </ul>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  );
}
