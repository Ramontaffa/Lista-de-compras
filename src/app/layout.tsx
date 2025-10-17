import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interfont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Shopping List",
  description: "A simple shopping list application built with Next.js and Zustand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${interfont.variable} antialiased bg-gray-600`}
      >
        {children}
      </body>
    </html>
  );
}
