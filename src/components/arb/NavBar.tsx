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
import { useEffect, useState,useId } from "react";
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

  const menuId = useId();

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

  useEffect(() => {
    const closeMenu = () => {
      document.getElementById(menuId)?.classList.add('hidden');
    };
    window.addEventListener('scroll', closeMenu);

    return () => window.removeEventListener('scroll', closeMenu);
  }, [])

  return (
    <Navbar rounded dir="rtl" className="bg-green">
      <NavbarBrand
        href="/arb"
        onClick={() => {
          document.getElementById(menuId)?.classList.add('hidden');
          setActive({
            home: true,
            gallary: false,
            resume: false,
            services: false,
          });
        }}
      >
        <Image
          src={"/icon.png"}
          className="mr-0"
          alt="Tariq Logo"
          width={100}
          height={100}
          style={{ width: "auto", height: "auto" }}
        />
        <div className="flex flex-col">
          <Typography
            component={"h1"}
            className="self-start whitespace-nowrap sm:text-2xl md:text-4xl font-semibold text-white mt-0"
          >
            طارق لويس
          </Typography>
          <Typography
            component={"h2"}
            variant="body1"
            className="self-start whitespace-nowrap sm:text-sm md:text-xl font-semibold text-white"
          >
            النحات والرسام
          </Typography>
        </div>
      </NavbarBrand>
      <div className="flex flex-row flex-wrap justify-between md:order-2 w-100">
        <Dropdown
          label="لغة : عربي"
          dismissOnClick={true}
          color="primary"
          className="font-extrabold sm:mr-10"
        >
          <Dropdown.Item href="/en" className="flex flex-row justify-between">
            English
            <Image
              src={"/icons/uk-icon.png"}
              alt="uk language"
              width={20}
              height={20}
              style={{ width: "auto", height: "auto" }}
            />
          </Dropdown.Item>
          <Dropdown.Item disabled className="flex flex-row justify-between">
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
        <NavbarToggle onClick={()=>{document.getElementById(menuId)?.classList.toggle('hidden');}}/>
      </div>
      <NavbarCollapse id={menuId}>
        <NavbarLink
          className="ml-5 font-extrabold"
          href="/arb"
          as={Link}
          active={active.home}
          onClick={() => {
            document.getElementById(menuId)?.classList.add('hidden');
            setActive({
              home: true,
              gallary: false,
              resume: false,
              services: false,
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
            document.getElementById(menuId)?.classList.add('hidden');
            setActive({
              home: false,
              gallary: true,
              resume: false,
              services: false,
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
            document.getElementById(menuId)?.classList.add('hidden');
            setActive({
              home: false,
              gallary: false,
              resume: true,
              services: false,
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
            document.getElementById(menuId)?.classList.add('hidden');
            setActive({
              home: false,
              gallary: false,
              resume: false,
              services: true,
            });
          }}
        >
          خدمات
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};
export default NavBar;
