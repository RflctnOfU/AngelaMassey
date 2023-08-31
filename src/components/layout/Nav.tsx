"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Burger1 from "../ui/Burger1";

const links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/calendar",
    name: "Calendar",
  },
  {
    path: "/album",
    name: "Album",
  },
  {
    path: "/photos",
    name: "Photos",
  },
  {
    path: "/audio",
    name: "Audio",
  },
  {
    path: "/astralis",
    name: "Astralis",
  },
  {
    path: "/teaching",
    name: "Teaching",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

export default function Nav() {
  const [isActive, setIsActive] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);
  const menuChange = () => {
    setIsMobile((prev) => !prev);
    console.log(isMobile);
  };
  return (
    <>
      <div className="flex justify-between items-center bg-[url(/images/test/4.png)] bg-cover bg-center bg-no-repeat z-50 fixed w-full h-16">
        <div className="px-4">Logo Here</div>
        <nav className="flex max-md:justify-end md:justify-between items-center ">
          <div className="max-md:hidden w-auto md:gap-2 lg:gap-4">
            {links.map((link) => {
              return (
                <Link
                  href={link.path}
                  key={link.name}
                  className="lg:px-2 md:px-1"
                >
                  {link.name.toUpperCase()}
                </Link>
              );
            })}
          </div>
          <button className="max-md:block md:hidden">
            <Burger1 mobile={menuChange} />
          </button>
        </nav>
      </div>
      <div
        className={`z-[5] flex flex-col gap-4 h-screen items-center bg-[url(/images/test/3.png)] bg-cover bg-center bg-no-repeat  bg-opacity-[95] w-full duration-700 fixed bottom-0 ease-in-out py-4  ${
          isMobile
            ? "top-[64px] opacity-100 bg-opacity-100"
            : "-top-[100vh] opacity-0 bg-opacity-0"
        }`}
      >
        {links.map((link) => {
          return (
            <div
              className={`w-full flex justify-center ${
                isActive === link.name
                  ? " bg-slate-300 bg-opacity-20"
                  : "text-neutral-200"
              } p-1`}
              key={link.name}
            >
              <Link href={link.path}>{link.name.toUpperCase()}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
