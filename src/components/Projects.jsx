"use client";

import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const images = [
  {
    id: 1,
    image: "/images/project/pro1.png",
      title: "مجتمع ویلا های ساحلی",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
  {
    id: 2,
    image: "/images/project/pro1.png",
       title: "مجتمع ویلا های ساحلی",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
  {
    id: 3,
    image: "/images/project/pro1.png",
      title: "مجتمع ویلا های ساحلی",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
  {
    id: 4,
    image: "/images/project/pro1.png",
        title: "مجتمع ویلا های ساحلی",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
  {
    id: 5,
    image: "/images/project/pro1.png",
    title: "مجتمع ویلا های ساحلی",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
  {
    id: 6,
    image: "/images/project/pro1.png",
    title: "مجتمع ویلا های ساحلی",
    des: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
  },
];

const Projects = () => {
  const itenCenter = Math.floor(images.length / 2);

  return (
    <section className="px-6 sm:px-8 md:px-10 xl:px-6 max-w-7xl mx-auto py-20 ">
     <h1 className=" text-center text-primary-800 font-bold  pb-6 xl:text-3xl lg:text-2xl  text-xl">پروژه ها</h1>
      <Swiper
    
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
       
        slidesPerView={1}
        initialSlide={itenCenter}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
        }}
        modules={[EffectCoverflow, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 70,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 130,
          },
        }}
      >
        {images.map((item) => (
          <SwiperSlide key={item.id} className="!flex justify-center items-center overflow-hidden">
  <div className="relative w-full md:w-[400px] aspect-[4/3] rounded-md overflow-hidden shadow-md">
    <Image
      src={item.image}
      fill
      className="object-cover"
      alt={item.title}
    />
    <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center bg-black/60 text-white p-4">
      <h3 className="text-lg whitespace-nowrap">{item.title}</h3>
      <button className="text-primary-900 text-sm transition hover:bg-secondary-700 bg-secondary-600 py-2 px-3 rounded-md">
        مشاهده
      </button>
    </div>
  </div>
</SwiperSlide>

        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
