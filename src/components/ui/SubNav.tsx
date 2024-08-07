"use client";
import { leftLinks, rightLinks } from "@/constants";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SubNav() {
  const [open, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="bg-white sticky    px-4 py-2 lg:hidden block">
      <div className="flex items-center justify-between px-6">
        <div className="">
          <Image
            src={open ? "/close.svg" : "/menu.svg"}
            width={42}
            height={20}
            alt=""
            className={`${open ? " transition ease-in duration-300" : " transition-all ease-linear duration-300"}`}
            onClick={() => setIsOpen(!open)}
          />
        </div>

        <div className="">
          <Image src={"/logo.svg"} width={150} height={150} alt="" />
        </div>

        <div className="flex items-center gap-2">
          <Image src={"/cart.svg"} width={20} height={20} alt="c" />
          <Image src={"/search.svg"} width={20} height={20} alt="s" />
        </div>
      </div>

      <div
        className={clsx(
          `relative  h-1/2 text-dark z-50 items-center lg:hidden bg-white  w-full -translate-y-full transition-all ${open ? "" : "hidden"}`,
          open && "translate-y-0 ",
        )}
      >
        <div className="mb-2">
          {
            leftLinks.map((link) => (
              <Link href={link.href} key={link.id} className="flex justify-center items-center mt-2">{link.name}</Link>
            ))
          }
          {
            rightLinks.map((link) => (
              <Link href={link.href} key={link.id} className="flex justify-center items-center mt-2">
                {link.name === "Account" ? (
                  <span className="gap-1 flex items-center">
                    {" "}
                    <Image
                      src={"/user.svg"}
                      width={18}
                      height={18}
                      alt=""
                    />{" "}
                    {link.name}{" "}
                  </span>
                ) : (
                  link.name
                )}
              </Link>
            ))
          }
        </div>

        <div className="py-2">
          <Link href={'/'} className="flex items-center justify-center uppercase">Faq</Link>
          <Link href={'/'} className="flex items-center justify-center capitalize">Contact Us</Link>
        </div>
      
      </div>
    </nav>
  );
}
