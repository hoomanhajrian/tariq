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
    <Navbar fluid rounded dir="rtl" className="bg-green">
      <div className="flex flex-col justify-center">
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
              طارق لويس
            </h1>
            <h2 className="self-start whitespace-nowrap text-2xl font-semibold dark:text-white">
              نحات
            </h2>
          </div>
        </NavbarBrand>
        <Dropdown
          label="لغة : عربي"
          dismissOnClick={false}
          className="font-extrabold"
        >
          <Dropdown.Item href="/en" className="flex flex-row justify-between">
            English
            <Image
              src={UK}
              alt="uk language"
              width={20}
              height={20}
              style={{ width: "auto", height: "auto" }}
            />
          </Dropdown.Item>
          <Dropdown.Item disabled className="flex flex-row justify-between">
            عربي
            <Image
              src={UAE}
              alt="arabic language"
              width={20}
              height={20}
              style={{ width: "auto", height: "auto" }}
            />
          </Dropdown.Item>
        </Dropdown>
      </div>

      <NavbarToggle />

      <NavbarCollapse>
        <NavbarLink
          className="ml-5 font-extrabold"
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
          className="font-extrabold"
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
          className="font-extrabold"
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
          className="font-extrabold"
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
          className="font-extrabold"
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
