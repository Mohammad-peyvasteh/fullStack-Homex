"use client";

import Image from "next/image";
import { CiShoppingBasket } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useProductContext } from "@/context/ProductsContext";
import Spiner from "../spiner/Spiner";

const DisCoiunt = () => {
  const { items ,loading,addToCart} = useProductContext();

  return (
    <section className="pt-45 pb-10 px-6 sm:px-8 md:px-10 xl:px-6 max-w-7xl mx-auto ">
      <div className="bg-secondary-400 rounded-md flex sm:flex-row flex-col  items-center justify-between gap-6 p-4 lg:p-6 overflow-hidden">
        {/* متن جشنواره */}
        <div className=" lg:w-1/3 flex flex-col items-center gap-2 text-center lg:text-start">
          <h1 className="text-primary-50 text-2xl lg:text-3xl font-bold">
            جشنواره
          </h1>
          <p className="text-primary-50 text-base lg:text-lg">
            شگفتانه در پاییز!
          </p>
          <p className="text-primary-900 text-2xl lg:text-3xl font-bold">
            هومکس
          </p>
          <p className="text-xl lg:text-2xl text-primary-50">50%</p>
          <p className="text-primary-50 text-base lg:text-lg">تخفیف ویژه</p>
          <button className="bg-primary-50 text-primary-800 px-4 py-1 rounded hover:bg-primary-100 transition">
            بیشتر
          </button>
        </div>

        {/* اسلایدر محصولات */}
        <div className="w-full  overflow-hidden">
          <Swiper
            loop={true}
            modules={[Navigation, Pagination]}
            spaceBetween={17}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 2, },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
              1220:{ slidesPerView: 4 }
            }}
            className="max-w-full"
          >
         {loading &&  <div className="flex justify-center items-center  h-32  ">
             <Spiner />
           </div>}

            {items.slice(8, 14).map((item) => (
              <SwiperSlide key={item.id} className="">
                <div className="  flex flex-col gap-2 bg-primary-50 p-3 rounded-2xl h-full shadow-md">
                  <Image
                    width={280}
                    height={200}
                    alt={item.title}
                    src={item.image}
                    className=" rounded"
                  />
                  <h1 className="text-primary-800 font-bold text-base md:text-lg">
                    {item.title}
                  </h1>
                  <p className="text-tertiary-900 text-sm line-clamp-2">
                    {item.des}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <button  onClick={() => addToCart(item)} className="text-primary-50 bg-primary-800 hover:bg-primary-900 p-2 rounded-md transition">
                      <CiShoppingBasket />
                    </button>
                    <h2 className="text-primary-700 text-sm md:text-base">
                      {item.price}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default DisCoiunt;
