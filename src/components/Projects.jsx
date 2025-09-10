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
    <section className="container mx-auto py-20 px-4">
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
        }}
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center relative w-full   rounded-md">
              <Image
                src={item.image}
                width={400}
                height={300}
                className="w-full md:w-[400px]  h-auto object-cover  shadow-md"
                alt={item.title}
              />
              <div className=" flex justify-between items-center  rounded-md absolute bottom-0 right-0 left-0 bg-black/60 text-white p-4 text-center">
                <h3 className=" text-lg whitespace-nowrap ">
                  {item.title}
                </h3>

                <button className="text-primary-900 text-sm transition hover:bg-secondary-700 bg-secondary-600 py-2 px-3 rounded-md">مشاهده</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
