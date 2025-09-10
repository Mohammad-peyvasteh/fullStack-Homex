"use client";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { CiShoppingBasket } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { useProductContext } from "@/context/ProductsContext";
import Sidebar from "./sidebar/Sidebar";
import Link from "next/link";
import SidebarMenu from "./sidebar/SidebarMenu";
const menu = [
  {
    id: 1,
    title: "فهرست",
  },
  {
    id: 2,
    title: "مقالات",
  },
  {
    id: 3,
    title: "تماس با ما",
  },
  {
    id: 4,
    title: "درباره ما",
  },
];

const Navbar = () => {
  const { cartItems, showSidebar, setShowSidebar, showMenu, setShowMenu } =
    useProductContext();
  return (
    <header
      className="bg-primary-50  
         fixed w-full z-20
      "
    >
      <SidebarMenu/>
      <Sidebar />
      <div className=" container mx-auto py-5 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0">
        <div className=" flex justify-between md:justify-start items-center md:gap-6 ">
          <span className="md:hidden text-3xl text-primary-800">
            <IoMdMenu onClick={() => setShowMenu(!showMenu)} />
          </span>

          <Link href="/">
            <Image
              className=" lg:w-auto md:w-[60px] w-[50px]"
              alt=""
              src="/images/logo/logo.png"
              width={70}
              height={20}
            />
          </Link>
          <div className="  md:flex hidden gap-4  ">
            {menu.map((item) => (
              <div key={item.id}>
                <h1 className="text-primary-800 whitespace-nowrap lg:text-lg font-bold transition cursor-pointer hover:text-primary-900 duration-300">
                  {item.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
        {/* */}
        <div className=" flex items-center justify-between md:justify-end gap-3 ">
          <div className="flex items-center bg-white rounded-full  p-1 ">
            <input
              type="text"
              className="outline-none border-none"
              placeholder="جست و جو .."
            />
            <span className=" bg-primary-800 text-primary-50 rounded-full p-1 ">
              <CiSearch />
            </span>
          </div>
          <div className=" ">
            <span className=" flex items-center gap-3 text-primary-800  ">
              <FiPhone className=" hidden md:block text-xl " />
              <div className="relative ">
                <CiShoppingBasket
                  className=" text-primary-800 text-3xl"
                  onClick={() => setShowSidebar(!showSidebar)}
                />
                {cartItems.length > 0 && (
                  <div className="absolute top-0  right-0 bg-white text-primary-800 text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                  </div>
                )}
              </div>

              <FaRegUserCircle className="text-xl" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
