import { Accordion, AccordionItem } from "@nextui-org/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO here we should set the state for darkMode !
  return (
    <html
      dir='rtl'
      lang='en'
      className='light'
    >
      <body className={inter.className}>
        <Providers>
          {children}
          <section className='fixed md:hidden w-full dark:text-white bg-dark-color bottom-0 h-16'>
            {/* <Accordion>
              <AccordionItem
                key='1'
                aria-label='ابزار'
                title='ابزار'
              >
                ابزار
              </AccordionItem>
              <AccordionItem
                key='2'
                aria-label='عملگر ها'
                title='عملگر ها'
              >
                عملگر ها
              </AccordionItem>
            </Accordion> */}
            123
          </section>
        </Providers>
      </body>
    </html>
  );
}
