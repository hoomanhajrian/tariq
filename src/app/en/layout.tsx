import type { Metadata } from "next";
import NavBar from "@/components/en/NavBar";
import { FooterComponent } from "@/components/en/FooterComponent";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tariq Louis",
  description: "Member Of Iraqi Plastic Artists and Painters",
  applicationName: "Tariq Louis",
  alternates:{
    canonical:'/en'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
      <NavBar />
      <div className="p-3">{children}</div>
      <FooterComponent />
    </div>
  );
}
