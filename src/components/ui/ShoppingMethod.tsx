export default function ShoppingMethod() {
  return (
    <div className="grid  grid-cols-1 mt-4 gap-3">
      <div className="w-full flex items-center ps-4 border peer-checked:border-2 border-black rounded-xl ">
        <input
          id="bordered-radio-1"
          type="radio"
          value=""
          name="bordered-radio"
          className="w-4 h-4 text- bg-gray-100 border-gray-300 focus:ring-gray-950 text-black  peer-checked:ring-gray-950 "
        />
        <label
          htmlFor="bordered-radio-1"
          className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          <div className="flex justify-between items-center px-2">
            <div className="">
              <h1 className="text-md">Name</h1>
              <p className="text-gray-400"> Description</p>
            </div>
            <div className="px-4">$0</div>
          </div>
        </label>
      </div>
    </div>
  );
}
