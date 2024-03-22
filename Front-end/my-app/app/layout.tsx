import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import MobileNav from "../components/MobileNav";
import SideBar from "@/components/SideBar";
import LoadingBar from "@/components/LoadingBar";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Machine designer",
  description:
    "Machine designer and calculator DFA and capable of minimizing DFA machines.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='light'>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        style={{ fontFamily: "vazir" }}
        className={`${inter.className} w-full`}
      >
        <MantineProvider>
          <Providers>
            <LoadingBar />
            <SideBar />
            {children}
            <MobileNav />
          </Providers>
        </MantineProvider>
      </body>
    </html>
  );
}
