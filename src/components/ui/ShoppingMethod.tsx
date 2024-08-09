import { ShoppingMethodProps } from "@/types";

export default function ShoppingMethod({
  method,
  index,
}: {
  method: ShoppingMethodProps;
  index: number;
}) {
  return (
    <div className="grid  grid-cols-1 mt-4 gap-3">
      <div className="w-full flex items-center ps-4 border peer-checked:border-2 border-black rounded-xl ">
        <input
          id={`radio-${index}`}
          type="radio"
          name="bordered-radio"
          className={` w-4 h-4 bg-gray-100 border-gray-300 focus:ring-gray-950 text-black  peer-checked:ring-gray-950 `}
        />
        <label
          htmlFor={`radio-${index}`}
          className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <div className="flex justify-between items-center px-2">
            <div className="">
              <h1 className="text-md font-semibold">{method.name}</h1>
              <p className="text-gray-400">{method.description}</p>
            </div>
            <div className="px-4 font-bold text-sm flex items-center ">
              <span className="text-xs">$</span>
              {method.price}
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}
