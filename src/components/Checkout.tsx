import Link from "next/link";
import Image from "next/image";
import CheckoutArticle from "./ui/CheckoutArticle";
import ShoppingMethod from "./ui/ShoppingMethod";
import CheckoutInput from "./ui/CheckoutInput";
import ShoppingPaymentMethod from "./ui/ShoppingPaymentMethod";
import { inputs } from "@/constants";
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

        {/** Payment Details  */}
        <div className="items-start">
          <h1 className="text-lg font-bold">Payment details</h1>
          <span className="text-sm text-gray-500">
            Complete your pursache by providing your payment details
          </span>

          <div className="">
            <h2 className="mt-4 font-bold">Shipping Address</h2>

            <div className="grid  xl:grid-cols-2 md:grid-cols-2 gap-2 mb-4 mt-4 grid-cols-1">
              <CheckoutInput
                item={{
                  label: "first Name",
                  placeholder: "First Name",
                  type: "text",
                }}
              />
              <CheckoutInput
                item={{
                  label: "first Name",
                  placeholder: "First Name",
                  type: "text",
                }}
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-2 mb-4 mt-4 grid-cols-1">
               {
                inputs.map((input, index) => (
                  <CheckoutInput item={input} key={index} />
                ))
               }
            </div>
            

            {/** Selected Payment Method */}
            <div className="">
              <h1 className="text-md px-2 py-2 font-bold capitalize">
                {" "}
                Selected payment Method{" "}
              </h1>

              <div className="grid grid-cols-2 gap-2">
                <ShoppingPaymentMethod
                  item={{
                    icon: "/credit-card.svg",
                    name: "Debit / Credit Card",
                  }}
                />
                <ShoppingPaymentMethod
                  item={{ icon: "/bank.svg", name: "Virtual Account" }}
                />
              </div>
            </div>

            <div className="relative mt-4">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border  rounded-full "
                placeholder="Search Mockups, Logos..."
                required
              />
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>

            <div className="grid xl:grid-cols-2 md:grid-cols-2 gap-2 mb-4 mt-4 grid-cols-1">
              <CheckoutInput
                item={{
                  label: "",
                  placeholder: "Expiration Date",
                  type: "date",
                }}
              />
              <CheckoutInput
                item={{ label: "", placeholder: "Code", type: "number" }}
              />
            </div>

            <div className="mt-2">
              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="checkbox"
                >
                  <input
                    type="checkbox"
                    className="before:content[''] mx-2 peer  relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="checkbox"
                  />
                  <span className="text-xs font-normal items-center">
                    Use Shipping address as Billing Address
                  </span>
                </label>
              </div>

              <div className="mt-2 flex justify-center">
                <Link
                  href={"/sold"}
                  className="px-6 py-2 rounded-full flex justify-center items-center  xl:w-1/2 bg-black text-white"
                >
                  Pay $547.00 &rarr;{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
