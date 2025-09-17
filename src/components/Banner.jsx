import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="px-6 sm:px-8   max-w-7xl pt-40 py-5 mx-auto xl:px-6">
    <div className="flex items-center gap-10 justify-center">
  <div className="hidden xl:block ">
    
    <Image
      width={320}
      height={480}
      alt=" "
      src="/images/baner/baner2.png"
    />
  </div>
  <div className="relative">
    <div className=" absolute z-20 inset-0 w-full bg-blue-400/15 object-cover rounded-xl">
    <div className=" absolute inset-x-0 bottom-0  backdrop-blur-sm rounded-sm pr-3 py-2">
      <h2 className=" text-white font-bold md:text-3xl sm:text-2xl text-xl ">هومکس ,</h2>
      <p className=" text-blue-200">خانه ای که با شما فکر میکند</p>

    </div>

    </div>
    <Image
      width={927}
      height={480}
      alt=" "
      src="/images/baner/baner1.png"
    />
  </div>
</div>

    </section>
  );
};

export default Banner;

