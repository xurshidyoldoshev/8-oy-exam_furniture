import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { AppWrapper } from "@/context";
import { Providers } from "./GlobalRedux/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Furniture",
  description: "Furniture by Xurshid Yo'ldoshev ID19656",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-ico.png" />
      </head>
      <Providers>
        <AppWrapper>
          <body className={inter.className}>
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </body>
        </AppWrapper>
      </Providers>
    </html>
  );
}
