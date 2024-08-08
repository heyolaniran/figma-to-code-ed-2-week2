import Link from "next/link";
import Image from "next/image";
import CheckoutArticle from "./ui/CheckoutArticle";
import ShoppingMethod from "./ui/ShoppingMethod";
export default function Checkout() {
  return (
    <div className="container mb-4">
      <h1 className="text-bold font-bold text-xl mb-2">Checkout</h1>

      <div className="grid xl:grid-cols-2 grid-cols-1  gap-12">
        <div className="">
          <h2 className="text-md font-bold">Your Order </h2>
          <p className="text-sm text-gray-500 mt-1">
            By placing your order, you agree to Ballamas{" "}
            <Link href={""} className="text-black font-bold underline">
              Privacy
            </Link>{" "}
            and{" "}
            <Link href={""} className="text-black font-bold underline">
              Policy
            </Link>
            .
          </p>

          <CheckoutArticle />
          <CheckoutArticle />

          <div className="mt-2">
            <h2 className="text-md font-bold">Discount Code</h2>

            <form className="flex mt-2 gap-2 lg:w-3/4 sm:w-full">
              <input
                type="email"
                id="email"
                className="border w-full border-black text-black text-sm rounded-2xl placeholder:text-black py-2"
                placeholder="Add Discount Code"
              />
              <button className="px-6 py-3 bg-black text-white text-center text-xs rounded-2xl font-semibold">
                Apply
              </button>
            </form>
          </div>
          <small className="text-xs text-gray-400">
            {" "}
            <span className="font-semibold text-black">
              New customer ?{" "}
              <Link href={""} className=" underline">
                Signup{" "}
              </Link>{" "}
            </span>{" "}
            to get better offer{" "}
          </small>
          <div className="p-2 mt-2">
            <div className="flex justify-between mt-4 text-gray-400">
              <p className=" text-gray-400 text-sm">Subtotal</p>
              <p className="flex items-center text-sm">
                <span className="text-xs">$</span>524
              </p>
            </div>
            <div className="flex justify-between mt-2 text-gray-400">
              <p className=" text-gray-400 text-sm">Discount</p>
              <p className="flex items-center text-sm">
                <span className="text-xs">$</span>0
              </p>
            </div>

            <hr className=" bg-slate-400 mt-4" />

            <div className="flex justify-between mt-2">
              <p className=" text-sm font-bold">Order Total</p>
              <p className="flex items-center font-bold text-sm">
                <span className="text-xs">$</span>524
              </p>
            </div>
          </div>
          {/** Shopping Method */}

          <ShoppingMethod />
        </div>

        <div className=""></div>
      </div>
    </div>
  );
}
