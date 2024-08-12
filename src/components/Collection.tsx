import Link from "next/link";
import Image from "next/image";
export default function Collection() {
  return (
    <section className=" mb-8">
      <div className=" items-center mt-12">
        <h1 className="lg:text-4xl font-[Chillax-Bold] text-xl text-center mb-2 leading-4 flex justify-center items-center font-bold uppercase">
          Our Collection{" "}
        </h1>

        <p className="text-gray-500 text-sm mt-4 text-center">
          Our latest collection, where classic and contemporary styles converge
          in perfect harmony.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-1 flex flex-col center justify-between p-6 lg:px-8 lg:py-5 group rounded-2xl bg-collection-a bg-right-top bg-no-repeat bg-cover px-10 py-12 min-h-96 h-full ">
          <div className="flex items-center justify-center gap-4"> </div>

          <div className="flex flex-col justify-center items-center gap-6">
            <Link
              href={"/"}
              className="px-4 rounded-2xl py-1 bg-white uppercase font-semibold flex items-center gap-1 text-black"
            >
              Learn more{" "}
              <Image alt="" src={"/arrow.svg"} width={24} height={24} />
            </Link>
          </div>
        </div>
        <div className="col-span-2 h-full min-h-96 flex-row items-center px-10 py-12 rounded-2xl bg-collection-b  bg-right-top bg-cover bg-no-repeat ">
               <h1
                  className={
                    " flex justify-center mb-2 items-center font-[Chillax-Bold] text-3xl lg:text-6xl leading-[60px] text-transparent text-stroke-white text-stroke "
                  }
                >
                  CLASSIC MEN
                </h1>
          <div className="flex items-center text-white text-center justify-center">
            We’re changing the way things get made
          </div>
        </div>
      </div>
    </section>
  );
}
