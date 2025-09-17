import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { IoCubeOutline } from "react-icons/io5";
import { MdPeopleOutline } from "react-icons/md";
import Link from "next/link";

const icons = [
  {
    title: " پروژه های موفق",
    icons: <IoHomeOutline />,
    id: 1,
  },
  {
    title: "  نمایندگی های فعال ",
    icons: <CiShop />,
    id: 2,
  },
  {
    title: "محصولات",
    icons: <IoCubeOutline />,
    id: 3,
     src:"/products"
  },
  {
    title: " مشتریان وفادار ",
    icons: <MdPeopleOutline />,
    id: 4,
  },
];

const IconsButtons = () => {
  return (
    <section className="px-6 sm:px-8 md:px-10 xl:px-6  max-w-7xl mx-auto  py-8">
      <div className="  grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 lg:gap-8 ">
        {icons.map((item) => (
          <Link href={item.src || "#"} key={item.id}>
          <div  className="hover:bg-primary-900 duration-300 cursor-pointer transition flex flex-col items-center gap-2 bg-primary-700 py-4 text-tertiary-50 rounded-xl ">
            <span className=" lg:text-5xl  text-4xl">{item.icons}</span>
            <h1>{item.title}</h1>
          </div>
        </Link>
      ))}
      </div>
    </section>
  );
};

export default IconsButtons;
