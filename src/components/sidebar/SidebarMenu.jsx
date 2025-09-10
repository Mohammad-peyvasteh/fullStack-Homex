'use client'
import React from "react";
import { useProductContext } from "@/context/ProductsContext";
import { ImCross } from "react-icons/im";


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


const SidebarMenu = () => {
  const {
   
    showMenu,
    setShowMenu,
    
  } = useProductContext();
  return (
    <div
      className={`container mx-auto md:hidden fixed top-0 right-0 h-full  w-[55%] md:w-80 bg-white shadow-lg transform transition-transform z-40 ${
        showMenu ? "translate-x-0" : "translate-x-full"
      }`}
    >
        <div className=" flex justify-between items-center px-1 py-2">
            <p className=" text-primary-800 text-xl">Homex</p>
            <span>
                <ImCross onClick={()=>setShowMenu(false)}/>
            </span>

        </div>
        <div className=" flex flex-col gap-3 ">
            {menu.map((item)=>(
                <div key={item.id}>
                    <p className=" hover:text-primary-700 duration-75 cursor-pointer">{item.title}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default SidebarMenu;
