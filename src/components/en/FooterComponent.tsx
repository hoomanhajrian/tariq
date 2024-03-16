import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export const FooterComponent = () => {
  const date = new Date();
  return (
    <Footer container className="bg-green p-10">
      <FooterCopyright
        className="font-extrabold text-textLight"
        href="https://hh-portfolio.com"
        by="Hooman"
        year={date.getFullYear()}
      />
      <FooterLinkGroup>
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
