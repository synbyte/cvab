import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.scss";
import Nav from "@/components/Nav";
import Head from "next/head";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

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
          backgroundColor: "#D2B48C",
          height: "100vh",
          color: "#333",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className={`${raleway.className}`}
      ><CopilotKit publicApiKey="ck_pub_b6c29a1db431c592d75d490eace6c893"><Nav />
       
        <div>{children}      <CopilotPopup 
        instructions={"You are an assistant for the therapeutic courts information hub. Answer only with information you have. If you dont have the information, recommend the user to reach out to their case manager. All Drug Court documents also pertain to DOSA."}
        labels={{
          title: "Cousin Spinny",
          initial: "What can I help you find?",
        }}
      /></div></CopilotKit><Analytics/>
      </body>
    </html>
  );
}
