import { FooterLinksType } from "@/types";
import Link from "next/link";

export default function FooterLink({ item }: { item: FooterLinksType }) {
  return (
    <div className="">
      <h1 className="font-semibold text-md mb-4 flex justify-center">
        {item.name}
      </h1>

      {item.links.map((link) => (
        <div className="" key={link.id}>
          <Link href={link.href} className="my-1 text-sm flex justify-center ">
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
