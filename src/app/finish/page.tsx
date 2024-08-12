import Image from "next/image";

export default function page() {
  return (
    <div className="h-svh flex justify-center text-center items-center container px-4">
      <div className="">
        <div className="justify-center flex mb-2">
          <Image src={"/success.svg"} width={64} height={64} alt="success" />
        </div>

        <h1 className="font-semibold text-xl">Thanks you for your Order !</h1>
        <span className="text-slate-400 text-md mt-2">
          The order confirmation has been sent to jonhdoe@gmail.com
        </span>
      </div>
    </div>
  );
}
