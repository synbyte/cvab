
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.scss";
import Nav from "@/components/Nav";
import Head from "next/head";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TC-Info",
  description: "Therapeutic Courts Information",
  themeColor: "#000000",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#000000" />
      </Head>
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
