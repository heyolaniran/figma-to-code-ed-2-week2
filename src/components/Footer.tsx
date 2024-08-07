import Image from "next/image";
import Link from "next/link";
import { FooterLinks } from "@/constants";
import FooterLink from "./ui/FooterLink";
export default function Footer() {
  return (
    <footer className="bg-black  items-center text-white px-16 py-12">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div className="items-start px-2">
          <div className="mb-4">
            <Image
              src={"/footer-logo.svg"}
              width={150}
              height={150}
              alt="BALLAMAS"
            />
          </div>

          <div className="">
            <h2 className="text-sm mb-2">
              Subscribe to our newsletter for upcoming products and best
              discount for all items
            </h2>

            <div className="">
              <form className="flex gap-2 items-center ">
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border w-full bg-transparent border-gray-300 text-gray-900 text-sm rounded-2xl placeholder:text-white py-2"
                  placeholder="Your email"
                />
                <button className="px-6 py-2.5 bg-white text-black text-center text-xs rounded-2xl font-semibold">
                  Suscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="items-start grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1  gap-2">
          {FooterLinks.map((footerLink) => (
            <FooterLink key={footerLink.id} item={footerLink} />
          ))}
        </div>
      </div>
      <div className="mt-8  text-slate-300 text-sm text-center items-center flex justify-center">
        <p>
          {" "}
          &copy; BALLAMAS {new Date().getFullYear()} by{" "}
          <Link
            href="https://x.com/heyolaniran"
            className="underline underline-offset-1"
          >
            {" "}
            Olaniran{" "}
          </Link>{" "}
        </p>
      </div>
    </footer>
  );
}
