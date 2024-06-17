import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eCommerce Site",
  description: "A simple eCommerce site built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          {children}
          <footer className="footer footer-center bg-base-300 text-base-content py-4 ">
            Build with ❤️ by Aatmik
          </footer>
        </div>
      </body>
    </html>
  );
}
