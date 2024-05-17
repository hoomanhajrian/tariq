import { lazy } from "react";
import type { Metadata } from "next";
const NavBar = lazy(()=>import('@/components/arb/NavBar'));
const FooterComponent = lazy(() => import("@/components/arb/FooterComponent"));
import { Noto_Naskh_Arabic } from "next/font/google";
const noto_Naskh_Arabic = Noto_Naskh_Arabic({ subsets: ["arabic"] });

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
    <div className={noto_Naskh_Arabic.className} style={{ direction: "rtl" }}>
      <NavBar />
      <div className="p-3">{children}</div>
      <FooterComponent />
    </div>
  );
}
