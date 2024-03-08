import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
} from "flowbite-react";
const NavBar = () => {
  return (
    <Navbar fluid rounded className="bg-black">
      <NavbarBrand href="https://flowbite-react.com">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">Gallary</NavbarLink>
        <NavbarLink href="#">Resume</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};
export default NavBar;
