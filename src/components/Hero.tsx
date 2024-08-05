import Image from "next/image";
import Link from "next/link";


export default function Hero() {

    return (
        <section className="container mt-8 w-full">
            <div className="rounded-2xl  text-white hero">
                <div className="my-4 relative flex px-4 justify-center py-5 items-center">
                    <div className="hidden lg:block flex-grow border-t mx-4 border-white"></div>
                    <span className="mx-16">We bring new fashion to the world</span>
                    <div className=" lg:block hidden flex-grow border-t mx-4 border-white"></div>
                </div>

                <div className="mt-2  items-center font-chillax">
                    <h1 className="text-3xl text-center flex justify-center leading-9 font-bold uppercase">
                     DISCOVER THE LATEST FASHION TRENDS HERE {" "}
                    </h1>

                    <span className="mt-8 text-sm text-center flex justify-center items-center align-middle">
                     Discover a world of fashion with our meticulously curated outfits. Shop now to update your wardrobe with chic and stylish outfits.
                    </span>
                </div>

                <div className="mt-12 flex justify-center items-center gap-2">

                    <Link href={'/'} className="bg-white rounded-2xl px-4 py-2 text-black text-sm font-semibold">
                        Start shopping
                    </Link>

                    <Link href={'/'} className=" rounded-full w-10 h-10 bg-white flex items-center text-center justify-center" >
                        <Image src={'/arrow.svg'} className="text-black" width={24} height={24} alt="a" />
                    </Link>
                    
                </div>
            </div>
        </section>
    )
}