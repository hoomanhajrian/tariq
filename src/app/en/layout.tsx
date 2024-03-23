import type { Metadata } from "next";
import NavBar from "@/components/en/NavBar";
import { FooterComponent } from "@/components/en/FooterComponent";

export const metadata: Metadata = {
  title: "Tariq Louis",
  description: "Member Of Iraqi Plastic Artists, ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar />
      <div className="p-3">{children}</div>
      <FooterComponent />
    </div>
  );
}
