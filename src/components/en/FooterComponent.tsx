import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import Logo from "@/app/icon.png";
import Image from "next/image";

export const FooterComponent = () => {
  const date = new Date();
  return (
    <Footer container className="bg-green p-10">
      <div className="flex flex-row">
        <Image src={Logo} alt="tariq-logo" width={100} height={100} />
        <h2 className="whitespace-nowrap text-3xl font-semibold text-white mt-8">
          Tariq Louis
        </h2>
      </div>
      <FooterLinkGroup className="gap-5">
        <FooterCopyright
          className="font-extrabold text-textLight"
          href="https://hh-portfolio.com"
          by="Hooman"
          year={date.getFullYear()}
        />
        <FooterLink href="#" className="font-extrabold text-textLight">
          Phone: +1(778)-751-1620
        </FooterLink>
        <FooterLink href="#" className="font-extrabold text-textLight">
          Email: tariqlouiss@yahoo.com
        </FooterLink>
        <FooterLink href="#" className="font-extrabold text-textLight">
          Facebook: tariq louis
        </FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
};
