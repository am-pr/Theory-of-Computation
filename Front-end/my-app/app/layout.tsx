import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import MobileNav from "../components/MobileNav";
import SideBar from "@/components/SideBar";
import NextNProgressBar from "@/components/NextNProgress";
import MainFrame from "@/components/MainFrame";
import LoadingBar from "@/components/LoadingBar";

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
    <html
      lang='en'
      className='light'
    >
      <body
        style={{ fontFamily: "vazir" }}
        className={`${inter.className} w-full`}
      >
        <Providers>
          <LoadingBar />
          <SideBar />
          {children}
          <MobileNav />
        </Providers>
      </body>
    </html>
  );
}
