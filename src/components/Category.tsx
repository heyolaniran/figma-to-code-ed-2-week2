"use client";
import { categories, products } from "@/constants";
import { useState } from "react";

export default function Category() {
  const [active, setActive] = useState<number>(1);
  return (
    <section className=" container w-full mt-14">
      <div className="lg:px-24 mt-2">
        <h1 className="text-2xl leading-8 font-bold font-chillax text-black text-center flex justify-center">
          Discover the latest trends in summer fashion. Shop now and refresh
          your wardrobe with our stylish summer shirts.{" "}
        </h1>
      </div>

      <div className="mt-12 mb-6 px-2  container flex flex-wrap justify-center items-center gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-2.5 py-1.5 rounded-full text-sm border-2 flex gap-2 items-center border-black ${active === category.id ? " bg-black text-white" : "text-black bg-white"} `}
          >
            {category.name} <span className="text-sm">{category.total}</span>
          </button>
        ))}
      </div>

      <div className="mt-2  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-2">
        {products.map((product) => (
          <div className="flex justify-center items-center border rounded-xl bg-[url('/product.svg')] bg-cover bg-no-repeat bg-center">
            {product.name}
          </div>
        ))}
      </div>
    </section>
  );
}
