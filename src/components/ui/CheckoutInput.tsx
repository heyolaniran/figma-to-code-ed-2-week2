import { InputProps } from "@/types";

export default function CheckoutInput({ item }: { item: InputProps }) {
  return (
    <div>
      <label
        htmlFor={""}
        className="block px-2 capitalize mb-2 text-xs font-medium text-gray-900 dark:text-white"
      >
        {item.label}
      </label>
      <input
        type={item.type}
        id={""}
        className="border border-black text-gray-900 text-xs rounded-full block w-full p-2.5"
        placeholder={item.placeholder}
        required
      />
    </div>
  );
}
