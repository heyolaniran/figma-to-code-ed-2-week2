import { ShoppingPaymentMethodProps } from "@/types";
import Image from "next/image";

export default function ShoppingPaymentMethod({
  item,
}: {
  item: ShoppingPaymentMethodProps;
}) {
  return (
    <div>
      <input
        type="radio"
        id="hosting-mail"
        name="hosting"
        value=""
        className="hidden peer"
        required
      />
      <label className="inline-flex items-center w-full p-5 text-gray-500 bg-white border peer-checked:border-black border-gray-200 rounded-lg cursor-pointer  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400">
        <div className="block">
          <div className="w-full ">
            <Image src={item.icon} width={20} height={20} alt="" />
          </div>
          <div className="w-full mt-2 text-sm text-gray-500">{item.name}</div>
        </div>
      </label>
    </div>
  );
}
