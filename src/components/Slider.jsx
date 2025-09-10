"use client";
import Image from "next/image";
import { CiShoppingBasket } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { useProductContext } from "@/context/ProductsContext";
import Spiner from "./spiner/Spiner";
const priducts = [
  {
    image: "/images/products/1.png",
    title: "آشپزخانه هوشمند",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    id: 1,
    price: 3000000,
  },
  {
    image: "/images/products/2.png",
    title: "سیستم نوردهی ",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    id: 2,
    price: 3000000,
  },
  {
    image: "/images/products/3.png",
    title: "امنیت هوشمند ",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    id: 3,
    price: 3000000,
  },
  {
    image: "/images/products/4.png",
    title: " تنظیم دما هوشمند",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    id: 4,
    price: 3000000,
  },
  {
    image: "/images/products/1.png",
    title: "آشپزخانه هوشمند",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    id: 5,
    price: 3000000,
  },
  {
    image: "/images/products/3.png",
    title: "امنیت هوشمند ",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    id: 6,
    price: 3000000,
  },
  {
    image: "/images/products/2.png",
    title: "سیستم نوردهی ",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    id: 7,
    price: 3000000,
  },
];

const Slider = () => {
  const { loading } = useProductContext();
  return (
    <section className="  py-10">
      <div className="container mx-auto">
        <h1 className=" text-center text-primary-800 font-bold text-2xl pb-6">
          دسته بندی محصولات
        </h1>
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
          {loading ? <div className="flex justify-center items-center  h-32  ">
                       <Spiner />
                     </div>: priducts.map((item) => (
            <SwiperSlide key={item.id} className=" ">
              <div className="flex flex-col gap-2   p-3 border    border-tertiary-700  rounded-2xl  h-full  ">
                <Image
                  width={280}
                  height={1}
                  alt=""
                  src={item.image}
                  className=""
                />
                <h1 className=" md:text-lg text-base text-primary-800 font-bold whitespace-nowrap">
                  {item.title}
                </h1>
                <p className="  text-sm  text-tertiary-900">{item.des}</p>
                <div className=" flex justify-between items-center">
                  <button className=" text-primary-800 bg-secondary-600 hover:bg-secondary-700 transition-all duration-300 cursor-pointer   p-1 rounded-md">
                  <Link  href="https://mohammadpeyvaste-homex.vercel.app/products">مشاهده</Link>
                  </button>
                  <h2 className="text-primary-800 ">کالا</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
         
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
