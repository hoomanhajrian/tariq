import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import Image from "next/image";
const FooterComponent = () => {
  const date = new Date();
  return (
    <Footer container className=" bg-green p-10" dir="rtl">
      <div className="flex flex-row">
        <Image src={"/icon.png"} alt="tariq-logo" width={100} height={100} />
        <h2 className="whitespace-nowrap text-3xl font-semibold text-white mt-8">
        طارق لويس
        </h2>
      </div>
      <FooterLinkGroup className="gap-5">
        <FooterCopyright
          className="font-extrabold text-textLight"
          href="https://hh-portfolio.com"
          by="هومن"
          year={date.getFullYear()}
        />
        <FooterLink href="tel:+17787511620" className="font-extrabold text-textLight">
          هاتف : +1 (778)-751-1620
        </FooterLink>
        <FooterLink href="mailto:tariqlouiss@yahoo.com" className="font-extrabold text-textLight">
          بريد إلكتروني : tariqlouiss@yahoo.com
        </FooterLink>
        <FooterLink href="https://www.facebook.com/tariqlouiss" target="_blank" className="font-extrabold text-textLight">
          فيسبوك : tariq louis
        </FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
};

export default FooterComponent;