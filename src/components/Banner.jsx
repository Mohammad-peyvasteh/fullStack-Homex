import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className=" container pt-40 mx-auto">
      <div className=" flex items-center justify-around">
        <div className=" hidden xl:block">
        <Image
            width={300}
            height={200}
            alt=" "
            src="/images/baner/baner2.png"
            className=""

          />
            
        </div>
        <div>
          <Image
            width={870}
            height={200}
            alt=" "
            src="/images/baner/baner1.png"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
