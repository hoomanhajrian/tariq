import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  console.log(lang);

  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
