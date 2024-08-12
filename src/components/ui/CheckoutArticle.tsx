import { CheckoutProductProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutArticle({
  item,
}: {
  item: CheckoutProductProps;
}) {
  return (
    <div className="flex justify-between px-4 mt-4 gap-6 items-center">
      <div className="grid grid-cols-2">
        <div className="">
          <Image
            src={item.picture}
            width={60}
            height={30}
            alt="c1"
            className="rounded-xl"
          />
        </div>
        <div className="  col-span-1">
          <h1 className="font-semibold text-black flex items-start text-lg mb-1">
            {item.name}
          </h1>
          <h1 className="text-gray-400 flex items-start text-xs mb-1">
            Color : Green - Large
          </h1>
        </div>
      </div>
      <div className=" px-8 items-end">
        <p className="font-bold text-lg flex items-center gap-1">
          <span className="text-sm">{item.currency}</span>
          {item.price}
        </p>
      </div>
    </div>
  );
}
