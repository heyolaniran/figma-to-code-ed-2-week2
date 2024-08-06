import { productType } from "@/types";
import Image from "next/image";
export default function Product({ item }: { item: productType }) {
  return (
    <div
      className={`bg-[url('/product.svg')] bg-center  bg-cover bg-no-repeat rounded-2xl min-h-96 h-full`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-8 lg:py-5 group">
        <div className=" justify-center items-center gap-4 ">
          {item.promo && (
            <div className="rounded-xl px-4 py-1 text-black bg-white text-center uppercase text-sm font-semibold">
              {" "}
              Get off 20%{" "}
            </div>
          )}
        </div>

        <div className=" hidden group-hover:flex  w-full  gap-2 items-center ">
          <button className="rounded-xl px-4 py-2 w-1/2 flex justify-center gap-2 items-center text-black bg-white text-center uppercase lg:text-sm text-xs font-semibold ">
            <Image src={"/shopping-bag.svg"} width={20} height={20} alt="" />{" "}
            Add{" "}
          </button>
          <button className="rounded-xl px-4 py-2 w-1/2 text-white bg-transparent border border-spacing-1  md:text-sm text-xs border-white text-center uppercase font-semibold ">
            {" "}
            Buy now{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
