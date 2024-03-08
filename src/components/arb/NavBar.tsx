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
      case "/arb":
        setActive({
          home: true,
          gallary: false,
          resume: false,
          services: false,
          about: false,
        });
        break;
      case "/arb/gallary":
        setActive({
          home: false,
          gallary: true,
          resume: false,
          services: false,
          about: false,
        });
        break;

      case "/arb/resume":
        setActive({
          home: false,
          gallary: false,
          resume: true,
          services: false,
          about: false,
        });
        break;

      case "/arb/services":
        setActive({
          home: false,
          gallary: false,
          resume: false,
          services: true,
          about: false,
        });
        break;

      case "/arb/about":
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
    <Navbar fluid rounded dir="rtl" className="bg-black">
      <NavbarBrand
        href="/arb"
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
            تارک لويس
          </h1>
          <h2 className="self-start whitespace-nowrap text-2xl font-semibold dark:text-white">
            نحات
          </h2>
        </div>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown label="لغة : عربي" dismissOnClick={false}>
          <Dropdown.Item href="/en">
            English
            <Image
              src={"/icons/uk-icon.png"}
              alt="uk language"
              width={20}
              height={20}
              style={{ width: "auto", height: "auto" }}
            />
          </Dropdown.Item>
          <Dropdown.Item disabled>
            عربي
            <Image
              src={"/icons/uae-icon.png"}
              alt="arabic language"
              width={20}
              height={20}
              style={{ width: "auto", height: "auto" }}
            />
          </Dropdown.Item>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink
          className="ml-5"
          href="/arb"
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
          الصفحة الرئيسية
        </NavbarLink>
        <NavbarLink
          href="/arb/gallary"
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
          الصور
        </NavbarLink>
        <NavbarLink
          href="/arb/resume"
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
          سيرة ذاتية
        </NavbarLink>
        <NavbarLink
          href="/arb/services"
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
          خدمات
        </NavbarLink>
        <NavbarLink
          href="/arb/about"
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
          عن
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};
export default NavBar;
