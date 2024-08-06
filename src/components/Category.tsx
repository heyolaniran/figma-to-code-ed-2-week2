"use client";
import { categories, products } from "@/constants";
import { useState } from "react";
import Product from "./ui/Product";

export default function Category() {
  const [active, setActive] = useState<number>(1);
  return (
    <section className=" container w-full mt-14 pb-12">
      <div className="lg:px-24 mt-2">
        <h1 className="text-2xl leading-8 font-bold font-chillax text-black text-center flex justify-center">
          Discover the latest trends in summer fashion. Shop now and refresh
          your wardrobe with our stylish summer shirts.{" "}
        </h1>
      </div>

      <div className="mt-12 mb-6 px-2  container flex flex-wrap justify-center items-center gap-3">
        {categories.map((category) => (
          <button
            onClick={() => setActive(category.id)}
            key={category.id}
            className={`px-2.5 py-1.5 rounded-full text-sm border-2 flex gap-2 items-center border-black ${active === category.id ? " bg-black text-white" : "text-black bg-white"} `}
          >
            {category.name} <span className="text-sm">{category.total}</span>
          </button>
        ))}
      </div>

      <div className="mt-2  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 gap-4">
        {products.map((product) => (
          <div className=" my-4 pb-4">
            <Product item={product} />

            <div className="mt-2 px-6 pb-2">
              <h1 className="text-md font-bold leading-4">
                {" "}
                {product.name}{" "}
              </h1>

              <h2 className="text-gray-400 font-semibold leading-4 text-xl items-center"><span className="text-sm">$</span>{product.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
