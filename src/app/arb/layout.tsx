import NavBar from "@/components/arb/NavBar";
import { Footer } from "@/components/arb/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// needs to be changed to arabic
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="arb">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
