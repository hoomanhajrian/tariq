import { lazy } from "react";
import type { Metadata } from "next";
const NavBar = lazy(()=>import('@/components/en/NavBar'));
const FooterComponent = lazy(() => import("@/components/en/FooterComponent"));
import { Kanit } from "next/font/google";
const kanit = Kanit({ subsets: ["latin"],weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "Tariq Louis",
  description: "Member Of Iraqi Plastic Artists and Painters",
  applicationName: "Tariq Louis",
  alternates:{
    canonical:'https://www.tariq-mesopotamiaart.com/en'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={kanit.className}>
      <NavBar />
      <div className="p-3">{children}</div>
      <FooterComponent />
    </div>
  );
}
