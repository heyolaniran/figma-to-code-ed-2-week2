import { leftLinks, rightLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className=" px-16 pb-4  pt-4 text-black">
      <div className="flex items-center border pb-4 border-t-0 border-l-0 border-r-0 flew justify-between ">
        <div className="">
          {leftLinks.map((link) => (
            <Link key={link.id} href={link.href} className="px-2">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="">
          <Image src={"/logo.svg"} width={150} height={150} alt="" />
        </div>

        <div className="flex items-center">
          {rightLinks.map((link) => (
            <Link key={link.id} href={link.href} className="px-2">
              {link.name === "Account" ? (
                <span className="gap-2 flex items-center">
                  {" "}
                  <Image src={"/user.svg"} width={18} height={18} alt="" />{" "}
                  {link.name}{" "}
                </span>
              ) : (
                link.name
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
