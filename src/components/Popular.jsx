'use client'
import Image from "next/image";
import { CiShoppingBasket } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useProductContext } from "@/context/ProductsContext";
import Spiner from "./spiner/Spiner";


const Popular = () => {
 const {items,loading,addToCart} =useProductContext()
    return(
   <section className="  py-10">
        <div className="px-6 sm:px-8 md:px-10 xl:px-6 max-w-7xl mx-auto">
          <h1 className=" text-center text-primary-800 font-bold text-2xl pb-6">محبوب ترین ها</h1>
          <Swiper
         
            modules={[Navigation, Pagination]}
           
            slidesPerView={2}
            className=""
            spaceBetween={17}
           
              breakpoints={{
              600: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1220:{ slidesPerView: 5 }
            }}
          >
          {loading &&  <div className="flex justify-center items-center  h-32  ">
    <Spiner />
  </div>}
            {items.slice(0, 5).map((item) => (
              <SwiperSlide key={item.id} className=" ">
                <div className="flex flex-col gap-2  bg-primary-50 p-3   rounded-2xl  h-full  ">
                  <Image
                    width={280}
                    height={1}
                    alt=""
                    src={item.image}
                    className=""
                  />
                  <h1 className=" md:text-lg text-base text-primary-800 font-bold">
                    {item.title}
                  </h1>
                  <p className="  text-sm  text-tertiary-900">{item.des}</p>
                  <div className=" flex justify-between items-center">
                    <button   onClick={() => addToCart(item)} className=" text-primary-50 bg-primary-800 transition-all duration-300 cursor-pointer hover:bg-primary-900  p-1 rounded-md">
                      <CiShoppingBasket/>
                    </button>
                    <h2 className=" text-primary-700">{item.price}</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>)
};

export default Popular;
