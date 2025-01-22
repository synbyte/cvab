
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.scss";
import Nav from "@/components/Nav";

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
            "url(https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png)",
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
      ><Nav />
       
        <div>{children}</div>
      </body>
    </html>
  );
}
