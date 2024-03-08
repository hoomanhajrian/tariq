"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Dropdown,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/app/icon.png";

const NavBar = () => {
  const [active, setActive] = useState<{
    home: undefined | boolean;
    gallary: undefined | boolean;
    resume: undefined | boolean;
    services: undefined | boolean;
    about: undefined | boolean;
  }>({
    home: undefined,
    gallary: undefined,
    resume: undefined,
    services: undefined,
    about: undefined,
  });

  useEffect(() => {
    switch (document.location.pathname) {
      case "/en":
        setActive({
          home: true,
          gallary: false,
          resume: false,
          services: false,
          about: false,
        });
        break;
      case "/en/gallary":
        setActive({
          home: false,
          gallary: true,
          resume: false,
          services: false,
          about: false,
        });
        break;

      case "/en/resume":
        setActive({
          home: false,
          gallary: false,
          resume: true,
          services: false,
          about: false,
        });
        break;

      case "/en/services":
        setActive({
          home: false,
          gallary: false,
          resume: false,
          services: true,
          about: false,
        });
        break;

      case "/en/about":
        setActive({
          home: false,
          gallary: false,
          resume: false,
          services: false,
          about: true,
        });
        break;

      default:
        setActive({
          home: true,
          gallary: false,
          resume: false,
          services: false,
          about: false,
        });
        break;
    }
  }, []);
  return (
    <Navbar fluid rounded className="bg-black">
      <NavbarBrand
        href="/en"
        onClick={() => {
          setActive({
            home: true,
            gallary: false,
            resume: false,
            services: false,
            about: false,
          });
        }}
      >
        <Image
          src={Logo}
          className="mr-3 h-6 sm:h-9"
          alt="Tariq Logo"
          width={150}
          height={150}
          style={{ width: "auto", height: "auto" }}
        />
        <div className="flex flex-col">
          <h1 className="self-start whitespace-nowrap text-4xl font-semibold dark:text-white">
            Tariq Louis
          </h1>
          <h2 className="self-start whitespace-nowrap text-2xl font-semibold dark:text-white">
            Sculptor
          </h2>
        </div>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown label="Language: en" dismissOnClick={false}>
          <Dropdown.Item disabled>
            <Image
              src="/icons/uk-icon.png"
              alt="uk language"
              width={20}
              height={20}
              style={{ width: "auto", height: "auto" }}
            />
            English
          </Dropdown.Item>
          <Dropdown.Item href="/arb">
            <Image
              src={"/icons/uae-icon.png"}
              alt="arabic language"
              width={20}
              height={20}
              style={{ width: "auto", height: "auto" }}
            />
            عربي
          </Dropdown.Item>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink
          href="/en"
          as={Link}
          active={active.home}
          onClick={() => {
            setActive({
              home: true,
              gallary: false,
              resume: false,
              services: false,
              about: false,
            });
          }}
        >
          Home
        </NavbarLink>
        <NavbarLink
          href="/en/gallary"
          as={Link}
          active={active.gallary}
          onClick={() => {
            setActive({
              home: false,
              gallary: true,
              resume: false,
              services: false,
              about: false,
            });
          }}
        >
          Gallary
        </NavbarLink>
        <NavbarLink
          href="/en/resume"
          as={Link}
          active={active.resume}
          onClick={() => {
            setActive({
              home: false,
              gallary: false,
              resume: true,
              services: false,
              about: false,
            });
          }}
        >
          Resume
        </NavbarLink>
        <NavbarLink
          href="/en/services"
          as={Link}
          active={active.services}
          onClick={() => {
            setActive({
              home: false,
              gallary: false,
              resume: false,
              services: true,
              about: false,
            });
          }}
        >
          Services
        </NavbarLink>
        <NavbarLink
          href="/en/about"
          as={Link}
          active={active.about}
          onClick={() => {
            setActive({
              home: false,
              gallary: false,
              resume: false,
              services: false,
              about: true,
            });
          }}
        >
          About
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};
export default NavBar;
