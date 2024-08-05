"use client"
import { categories, products } from "@/constants";
import { useState } from "react";



export default function Category () {

    const [active , setActive] = useState<number>(1) ; 
    return (
        <section className=" container w-full mt-14">
            
            <div className="lg:px-24 mt-2">
                <h1 className="text-2xl leading-8 font-bold font-chillax text-black text-center flex justify-center">
                Discover the latest trends in summer fashion. Shop now and refresh your wardrobe with our stylish summer shirts.{" "}
                </h1>
            </div>

            <div className="mt-12 mb-6 px-6 container flex items-center justify-center gap-3">
                {categories.map((category) => (
                    <button key={category.id} className={`px-2.5 py-1.5 rounded-full text-sm border-2 flex gap-2 items-center border-black ${active === category.id ? ' bg-black text-white' :'text-black bg-white'} `}> 
                        {category.name} <span className="text-sm">{category.total}</span>
                    </button>
                ))}
            </div>

           


        </section>
    )
}