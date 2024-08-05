"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SubNav() {
  const [open, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="bg-white  px-4 py-2 lg:hidden block">
      <div className="flex items-center justify-between px-6">
        
        <div className="">
            <Image src={open ? '/close.svg' : '/menu.svg'} width={42} height={20} alt="" className={`${open? ' transition ease-in duration-300' : ' transition-all ease-linear duration-300'}`} onClick={() => setIsOpen(!open)} />
        </div>

        <div className="">
          <Image src={ "/logo.svg"} width={150} height={150} alt="" />
        </div>

        <div className="flex items-center gap-2">
          <Image src={"/cart.svg"} width={20} height={20} alt="c" />
          <Image src={"/search.svg"} width={20} height={20} alt="s" />
        </div>
      </div>

      <div className={clsx(
        `relative  h-1/2 text-white lg:hidden bg-black/70 top-0 w-full -translate-y-full transition-all ${open? '': 'hidden'}`, open && "translate-y-0 "
      )}>
        lorem
      </div>
    </nav>
  );
}
