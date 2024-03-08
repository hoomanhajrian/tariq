import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
export const FooterComponent = () => {
  return (
    <Footer container className="absolute bottom-0 left-0 bg-black">
      <FooterCopyright
        href="https://hh-portfolio.com"
        by="Hooman"
        year={2022}
      />
      <FooterLinkGroup>
        <FooterLink href="#">Phone: +1(778)-751-1620</FooterLink>
        <FooterLink href="#">Email: tariqlouiss@yahoo.com</FooterLink>
        <FooterLink href="#">Facebook: tariq louis</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
};
