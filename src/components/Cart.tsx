import Image from "next/image";
export default function Cart() {
  return (
    <div className="lg:px-8 mt-4 container">
      <div className="mt-4 mb-5 flex justify-between ">
        <h1 className="text-2xl font-bold stroke-2 capitalize items-start">
          {" "}
          Cart(3)
        </h1>

        <button className=" bg-slate-100 rounded-full text-slate-400 flex items-end px-3 py-2 gap-1">
          <Image src={"/cart.svg"} width={20} height={20} alt="" />
          <span className="items-center text-sm"> Clear All </span>
        </button>
      </div>

      <div className="mt-4 mb-3 grid lg:grid-cols-3 grid-cols-1 gap-4">
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
              <tr className="bg-white border-slate-300 border-b mb-2">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  <div className="flex  items-start">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="">
                        <Image
                          src={"/cart-1.svg"}
                          width={60}
                          height={30}
                          alt="c1"
                          className="rounded-xl"
                        />
                      </div>

                      <div className="  col-span-1">
                        <h1 className="font-semibold text-black flex items-start text-lg mb-1">
                          T-Shirt
                        </h1>
                        <h1 className="text-gray-400 flex items-start text-xs mb-1">
                          Green - Large
                        </h1>

                        <span className="text-md font-bold text-black mt-1">$80</span>
                      </div>
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4 text-center items-center">
                    <div className="flex gap-1 justify-center ">
                        <div className=" grid grid-cols-3 gap-1  items-center px-4 py-1 rounded-full bg-slate-100 text-black">
                            <Image src={'/minus.svg'} width={20} height={20} alt="" className="mr-2" />
                            <span>2</span>
                            <Image src={'/plus.svg'} width={20} height={20} alt="" className="ml-2" />
                            
                        </div>

                        <div className=" px-4 py-4 justify-center rounded-full bg-slate-100 text-black">
                            <Image src={'/trash.svg'} width={16} height={16} alt="" />
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 text-black font-semibold text-sm"> <p className="flex"><span className="text-xs mt-0.5">$</span> 2999</p> </td>
              </tr>
              
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
