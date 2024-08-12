import { ProductCollectionProps } from "@/types";

import Image from "next/image";
import Link from "next/link";
export default function Product({ item }: { item: ProductCollectionProps }) {
  console.log(item);
  return (
    <div
      className={`relative group size-auto overflow-hidden rounded-xl`}
    >

        <Image
          src={item.picture}
          alt={"product"}
          width={1728}
          height={2160}
          quality={100}
          className={
            "size-full object-cover hover:brightness-75 transition-all"
          }
        />

        <div className="absolute py-4 px-2 top-2 left-1">
          <div className="rounded-xl px-4 py-1 text-black bg-white text-center uppercase text-sm font-semibold">
            {" "}
            Get off 20%{" "}
          </div>
        </div>
        

        <div
          className={
            "absolute left-0 w-full grid grid-cols-2 gap-1 opacity-0 bottom-0 group-hover:opacity-100 transition-all p-5 text-xs lg:text-base"
          }
        >
          <Link href={'/cart'} className="rounded-xl w-full px-4 py-2  flex justify-center gap-2 items-center text-black bg-white text-center uppercase lg:text-sm text-xs font-semibold ">
            <Image src={"/shopping-bag.svg"} width={20} height={20} alt="" />{" "}
            Add{" "}
          </Link>
          <Link href={'/cart'} className="rounded-xl w-full px-4 py-2  text-white bg-transparent border border-spacing-1  md:text-sm text-xs border-white text-center uppercase font-semibold ">
            {" "}
            Buy now{" "}
          </Link>
           
        </div>
      
       
         
       
     
    </div>
  );
}
