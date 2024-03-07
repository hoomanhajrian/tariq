import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// needs to be changed to arabic
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="arb">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
