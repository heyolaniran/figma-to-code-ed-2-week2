"use client"
import { colors, sizes } from "@/constants";
import { useState } from "react";

export default function ProductDetails() {
  
    const [active, setActive] = useState<number>(1)

  return (
    <div className="px-2 py-12">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="col-span-1 flex flex-col center justify-between  group rounded-2xl bg-[url('/product-detail.svg')] lg:bg-right-top bg-center bg-no-repeat bg-cover min-h-96 w-full h-full ">
          <div className="flex items-center justify-center gap-4"> </div>

          <div className="flex flex-col justify-center items-center gap-6"></div>
        </div>
        
        <div className="container px-6 items-start mt-4 ">
            <h1 className="lg:text-4xl text-xl font-bold stroke-1 mb-2">
                Badacore T-shirt 
            </h1>

            <span className="uppercase items-center text-lg lg:text-2xl mb-2 font-bold"> CAD $80 </span>
            <div className="text-md font-semibold mt-2 "> 
                <span>Color : Green </span>

                <div className="mt-2 flex items-start gap-3">
                    {colors.map((item) => (
                        <div className={`rounded-full w-4  h-4 ${item.color}`} key={item.id} />
                    ))}
                </div>

                <div className="mt-2 items-start">
                    <h1 className="text-lg font-semibold">Size :</h1>

                    <div className="mt-2 flex flex-wrap  gap-3">
                        {sizes.map((size) => (
                            <button className={`bg-whitegap-3 px-6 py-1 rounded-full uppercase text-lg border border-black ${active === size.id ? " bg-black text-white" : "text-black bg-white"}`} key={size.id} onClick={() => setActive(size.id)}>
                                {size.name}
                            </button>
                        ))}
                    </div>
                </div>

            </div>

            <div className="mt-2 items-start">
                <h1 className="text-md font-semibold mb-2">Description </h1>

                <p className=" text-sm mt-2 text-slate-400 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
