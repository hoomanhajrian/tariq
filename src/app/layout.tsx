import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  authors: [{ name: "Hooman" }],
  generator: 'Next.js',
  keywords: ['tariq louis'],
  referrer: 'origin-when-cross-origin',
  creator: 'Hooman',
  publisher: 'Hooman',
  alternates:{
    canonical:'https://www.tariqmesopotemia-art.com'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <main className="bg-lightGreen p-2 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
