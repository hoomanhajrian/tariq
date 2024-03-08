import NavBar from "@/components/arb/NavBar";
import { FooterComponent } from "@/components/arb/FooterComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      {children}
      <FooterComponent />
    </>
  );
}
