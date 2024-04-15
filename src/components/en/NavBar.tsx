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
import UK from "@/icons/uk-icon.png";
import UAE from "@/icons/uae-icon.png";
import { Typography } from "@mui/material";

const NavBar = () => {
  const [active, setActive] = useState<{
    home: undefined | boolean;
    gallary: undefined | boolean;
    resume: undefined | boolean;
    services: undefined | boolean;
  }>({
    home: undefined,
    gallary: undefined,
    resume: undefined,
    services: undefined,
  });

  useEffect(() => {
    switch (document.location.pathname) {
      case "/en":
        setActive({
          home: true,
          gallary: false,
          resume: false,
          services: false,
        });
        break;
      case "/en/gallary":
        setActive({
          home: false,
          gallary: true,
          resume: false,
          services: false,
        });
        break;

      case "/en/resume":
        setActive({
          home: false,
          gallary: false,
          resume: true,
          services: false,
        });
        break;

      case "/en/services":
        setActive({
          home: false,
          gallary: false,
          resume: false,
          services: true,
        });
        break;

      case "/en/about":
        setActive({
          home: false,
          gallary: false,
          resume: false,
          services: false,
        });
        break;

      default:
        setActive({
          home: true,
          gallary: false,
          resume: false,
          services: false,
        });
        break;
    }
  }, []);
  return (
    <Navbar rounded className="bg-green">
      <NavbarBrand
        href="/en"
        onClick={() => {
          setActive({
            home: true,
            gallary: false,
            resume: false,
            services: false,
          });
        }}
      >
        <Image
          src={Logo}
          className="mr-0"
          alt="Tariq Logo"
          width={100}
          height={100}
          style={{ width: "auto", height: "auto" }}
        />

        <div className="flex flex-col">
          <Typography
            component={"h1"}
            className="self-start whitespace-nowrap sm:text-sm md:text-4xl font-semibold text-white mt-0"
          >
            Tariq Louis
          </Typography>
          <Typography
            component={"h2"}
            variant="body1"
            className="self-start whitespace-nowrap sm:text-sm md:text-xl font-semibold text-white"
          >
            Sculptor and Painter
          </Typography>
        </div>
      </NavbarBrand>
      <div className="flex flex-row flex-wrap justify-between md:order-2 w-100">
        <Dropdown
          label="Language : en"
          className="font-extrabold sm:ml-10"
          dismissOnClick={true}
          color="primary"
        >
          <Dropdown.Item
            disabled
            className="flex flex-row w-100 justify-between"
          >
            <Image
              src={UK}
              alt="uk language"
              width={20}
              height={20}
              style={{ width: "auto", height: "auto" }}
            />
            English
          </Dropdown.Item>
          <Dropdown.Item
            href="/arb"
            className="flex flex-row w-100 justify-between"
          >
            <Image
              src={UAE}
              alt="arabic language"
              width={20}
              height={20}
              style={{ width: "auto", height: "auto" }}
            />
            عربي
          </Dropdown.Item>
        </Dropdown>
        <NavbarToggle className="mr-5 ml-auto" />
      </div>
      <NavbarCollapse className="w-100">
        <NavbarLink
          className="font-extrabold"
          href="/en"
          as={Link}
          active={active.home}
          onClick={() => {
            setActive({
              home: true,
              gallary: false,
              resume: false,
              services: false,
            });
          }}
        >
          Home
        </NavbarLink>
        <NavbarLink
          className="font-extrabold"
          href="/en/gallary"
          as={Link}
          active={active.gallary}
          onClick={() => {
            setActive({
              home: false,
              gallary: true,
              resume: false,
              services: false,
            });
          }}
        >
          Gallary
        </NavbarLink>
        <NavbarLink
          className="font-extrabold"
          href="/en/resume"
          as={Link}
          active={active.resume}
          onClick={() => {
            setActive({
              home: false,
              gallary: false,
              resume: true,
              services: false,
            });
          }}
        >
          Resume
        </NavbarLink>
        <NavbarLink
          className="font-extrabold"
          href="/en/services"
          as={Link}
          active={active.services}
          onClick={() => {
            setActive({
              home: false,
              gallary: false,
              resume: false,
              services: true,
            });
          }}
        >
          Services
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};
export default NavBar;
