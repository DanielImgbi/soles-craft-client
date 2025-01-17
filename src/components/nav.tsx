"use client";
import React, { useState, CSSProperties } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { toPascalCase } from "@/lib/utils";
import { usePathname } from "next/navigation";

type NavProps = {
  style?: CSSProperties;
};

const NavBar = ({ style }: NavProps) => {
  const navLinks = ["home", "products", "administration"];
  const path = usePathname();
  const [toggleNav, setToggleNav] = useState(false);

  const handleNavToggle = () => {
    setToggleNav((prevState) => !prevState);
  };

  return (
    <div
      style={style}
      className="flex items-center justify-between gap-2 bg-[#222] p-3 shadow-sm shadow-gray-400  z-50 w-screen"
    >
      <div className="flex gap-3 items-center ">
        <span className="p-2 border border-transparent hover:border-white block lg:hidden">
          <FaBars className="block lg:hidden " onClick={handleNavToggle} />
        </span>
        <span className="text-2xl text-black font-bold lg:text-4xl mr-10 lg:mx-10">
          Soles<span className="font-semibold text-yellow-600">Craft</span>
        </span>
      </div>

      <ul className="px-6 space-x-10 hidden lg:flex">
        {navLinks.map((item, i) => (
          <li key={item + i}>
            <Link
              href={`${item === "home" ? "/" : item}`}
              className={`${
                path === `/${item}` ? "text-yellow-600" : ""
              } font-bold hover:text-yellow-600`}
              style={style}
            >
              {toPascalCase(item)}
            </Link>
          </li>
        ))}
      </ul>

      {toggleNav && (
        <aside className="h-screen w-screen absolute flex flex-col gap-5 text-black   top-0 left-0 z-40 ">
          <div className="h-full w-[80%] bg-[#f1f0f0]">
            <div className="flex items-center justify-between gap-2 px-3 py-4 shadow-sm">
              <span className="text-2xl font-bold lg:text-4xl px-2">
                Soles
                <span className="font-semibold text-yellow-600">Craft</span>
              </span>

              <span
                className="p-2 text-2xl  font-semibold border border-black hover:border-black"
                onClick={handleNavToggle}
              >
                X
              </span>
            </div>

            <ul className="flex flex-col gap-3 px-5 py-7">
              {navLinks.map((item, i) => (
                <li key={item + i}>
                  <Link
                    href={`${item === "home" ? "/" : item}`}
                    className={`${
                      path === `/${item}` ? "text-yellow-600" : ""
                    } font-bold hover:text-yellow-600`}
                    onClick={handleNavToggle}
                  >
                    {toPascalCase(item)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      )}
    </div>
  );
};

export default NavBar;
