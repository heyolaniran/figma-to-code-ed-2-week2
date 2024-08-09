"use client"
import { CartAmountProps, CartProductProps } from "@/types";
import { getCartProducts } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Cart() {

  const [products, setProducts] = useState<CartProductProps[]>()
  const [subTotalAmount, setSubTotalAmount] = useState<CartAmountProps>()
  const [totalAmount, setTotalAmount] = useState<CartAmountProps>();
  useEffect(() => {
      
    getCartProducts().then((data) => {
      setProducts(data.cartProducts)
      console.log(data)
      setSubTotalAmount(data.subtotalAmount)
      setTotalAmount(data.totalAmount)
    }); 

  }, [])

  console.log(subTotalAmount);
  return (
    <div className="lg:px-8 mt-4 container">
      <div className="mt-4 mb-5 flex justify-between ">
        <h1 className="text-2xl font-bold stroke-2 capitalize items-start">
          {" "}
          Cart({products?.length})
        </h1>

        <button className=" bg-slate-100 rounded-full text-slate-400 flex items-end px-3 py-2 gap-1">
          <Image src={"/cart.svg"} width={20} height={20} alt="" />
          <span className="items-center text-sm"> Clear All </span>
        </button>
      </div>

      <div className="mt-4 mb-3 grid lg:grid-cols-3 grid-cols-1 gap-6">
        <div className=" col-span-2 relative overflow-x-auto">
          <table className="w-full text-sm text-left  text-gray-500 ">
            <thead className="text-xs text-gray-400">
              <tr className="border-b ">
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 justify-center flex py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product,index) => (
                   <tr className="bg-white border-slate-300 border-b mb-2" key={index}>
                   <th
                     scope="row"
                     className="px-6 py-4 font-medium  whitespace-nowrap"
                   >
                     <div className="flex  items-start">
                       <div className="grid grid-cols-2 gap-2">
                         <div className="">
                           <Image
                             src={product.picture}
                             width={60}
                             height={30}
                             alt="c1"
                             className="rounded-xl"
                           />
                         </div>
   
                         <div className="  col-span-1">
                           <h1 className="font-semibold text-black flex items-start text-lg mb-1">
                             {product.name}
                           </h1>
                           <h1 className="text-gray-400 flex items-start text-xs mb-1">
                             Green - Large
                           </h1>
   
                           <span className="text-md font-bold text-black mt-1">
                            
                           </span>
                         </div>
                       </div>
                     </div>
                   </th>
                   <td className="px-6 py-4 text-center items-center">
                     <div className="flex gap-1 justify-center ">
                       <div className=" grid grid-cols-3 gap-1  items-center px-4 py-1 rounded-full bg-slate-100 text-black">
                         <Image
                           src={"/minus.svg"}
                           width={20}
                           height={20}
                           alt=""
                           className="mr-2"
                         />
                         <span>2</span>
                         <Image
                           src={"/plus.svg"}
                           width={20}
                           height={20}
                           alt=""
                           className="ml-2"
                         />
                       </div>
   
                       <div className=" px-4 py-4 justify-center rounded-full bg-slate-100 text-black">
                         <Image src={"/trash.svg"} width={16} height={16} alt="" />
                       </div>
                     </div>
                   </td>
                   <td className="px-6 py-4 text-black font-semibold text-sm">
                     {" "}
                     <p className="flex">
                       <span className="text-xs mt-0.5"></span>
                     </p>{" "}
                   </td>
                 </tr>
              ))}
             

             
            </tbody>
          </table>
        </div>

        <div className="sm:px-16 px-0">
          <div className="border border-slate-200 rounded-xl p-4">
            <h1 className="text-lg font-semibold">Order Summary</h1>

            <div className="flex justify-between mt-4">
              <p className=" text-gray-400 text-sm">Subtotal</p>
              <p className="flex items-center gap-1 text-sm">
                <span className="text-xs">{subTotalAmount?.currencyCode}</span>{subTotalAmount?.amount}
              </p>
            </div>
            <div className="flex justify-between mt-2">
              <p className=" text-gray-400 text-sm">Discount</p>
              <p className="flex items-center text-sm">
                <span className="text-xs">$</span>0
              </p>
            </div>

            <hr className=" bg-slate-400 mt-4" />

            <div className="flex justify-between mt-2">
              <p className=" text-sm font-bold">Total</p>
              <p className="flex items-center font-bold text-sm">
                <span className="text-xs">{totalAmount?.currencyCode}</span>{totalAmount?.amount}
              </p>
            </div>

            <div className="flex justify-center items-center">
              <Link
                href={"/checkout"}
                className=" px-4 py-2.5 mt-2 text-white text-center text-sm bg-black rounded-2xl w-1/2"
              >
                Checkout now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
