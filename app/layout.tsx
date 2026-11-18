import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.scss";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TC-Info",
  description: "Therapeutic Courts Information",
  themeColor: "#1d4ed8",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} flex min-h-screen flex-col`}>
        <CopilotKit publicApiKey="ck_pub_b6c29a1db431c592d75d490eace6c893">
          <Nav />
          <div className="flex w-full flex-1 flex-col">{children}</div>
          <Footer />
          <CopilotPopup
            instructions={
              "You are an assistant for the therapeutic courts information hub. Answer only with information you have. If you dont have the information, recommend the user to reach out to their case manager. All Drug Court documents also pertain to DOSA."
            }
            labels={{
              title: "Cousin Spinny",
              initial: "What can I help you find?",
            }}
          />
        </CopilotKit>
        <Analytics />
      </body>
    </html>
  );
}