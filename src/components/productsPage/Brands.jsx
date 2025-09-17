import Image from "next/image";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
const brands = [
  {
    id: 1,
    des: "محصولات هوشمند  و به صرفه شیائومی",
    Image: "/images/brands/1.png",
  },
  {
    id: 2,
    des: "  های Arlo نت گیئر  محصولات و دوربین ",
    Image: "/images/brands/2.png",
  },
  {
    id: 3,
    des: " محصولات و سیستم  های امنیتی هانی ول",
    Image: "/images/brands/3.png",
  },
  {
    id: 4,
    des: "    محصولات و سیستم  های روشنایی فیلیپس",
    Image: "/images/brands/4.png",
  },
];

const Brands = () => {
  return (
    <section className=" px-6 sm:px-8 md:px-10 xl:px-6 max-w-7xl mx-auto py-10 ">
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-3">
        {brands.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-between gap-3 border border-tertiary-700 p-3"
          >
            <Image width={230} height={1} src={item.Image} alt=""/>
            <p className=" text-primary-800 text-sm text-center">{item.des}</p>

            <button className=" hover:bg-primary-900 duration-75 cursor-pointer flex items-center gap-2 bg-primary-800 text-primary-50 py-1 px-2 rounded-md">
              <p>بیشتر</p>
              <span>
                <FaArrowLeftLong />
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
