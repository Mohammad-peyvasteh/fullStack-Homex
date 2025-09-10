import React from "react";
import { useProductContext } from "@/context/ProductsContext";
import { ImCross } from "react-icons/im";
import Image from "next/image";
const Sidebar = () => {
  const {
    getTotalPrice,
    cartItems,
    showSidebar,
    setShowSidebar,
    incrementQty,
    decrementQty,
  } = useProductContext();
  return (
    <div
      className={`fixed top-0 right-0 h-full  w-[55%] md:w-80 bg-white shadow-lg transform transition-transform z-40 ${
        showSidebar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4 border-b font-bold text-lg flex  justify-between items-center">
        سبد خرید
        <button onClick={() => setShowSidebar(false)}>
          <ImCross />
        </button>
      </div>

      <div className="p-4">
        جمع کل:
        <span>{getTotalPrice().toLocaleString()} تومان</span>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-64px)]">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">سبد خالیه</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center  p-2 rounded"
            >
              <div className="flex flex-col gap-2">
                <Image
                  src={item.image}
                  width={150}
                  height={1}
                  alt={item.title}
                />
                <span>{item.title}</span>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => decrementQty(item.id)}
                    className="bg-tertiary-500 px-2 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => incrementQty(item.id)}
                    className="bg-tertiary-500 px-2 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;

