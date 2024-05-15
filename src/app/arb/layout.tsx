import NavBar from "@/components/arb/NavBar";
import { FooterComponent } from "@/components/arb/FooterComponent";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "طارق لویس",
  description: "عضو جمعية الفنانين التشكيليين والرسامين العراقيين",
  applicationName: "طارق لویس",
  alternates:{
    canonical:'https://www.tariq-mesopotamiaart.com/arb'
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className} style={{ direction: "rtl" }}>
      <NavBar />
      <div className="p-3">{children}</div>
      <FooterComponent />
    </div>
  );
}
