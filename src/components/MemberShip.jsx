import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTelegramLine } from "react-icons/ri";
const MemberShip = () => {
  return (
   <section className="max-w-7xl mx-auto py-20 px-6 sm:px-8 md:px-10 xl:px-6 ">
  <div className="flex flex-col items-center gap-7 text-center">
    <h1 className="font-bold text-primary-800 xl:text-3xl lg:text-2xl  text-xl">
      عضویت در باشگاه مشتریان
    </h1>
    <p className="text-tertiary-900 max-w-xl text-sm">
      با عضویت در باشگاه مشتریان از پروژه و محصولات جدید با خبر شوید و کد
      تخفیف ویژه هر ماه را دریافت کنید
    </p>

    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
      <input
        type="text"
        placeholder="آدرس ایمیل خود را وارد کنید ..."
        className="rounded-lg py-2 px-6 outline-none border border-primary-700 w-full sm:w-auto md:text-base text-sm"
      />
      <button className="bg-primary-700 text-primary-50 py-2 px-6 rounded-lg hover:bg-primary-800 md:text-base text-sm  transition">
        عضویت
      </button>
    </div>

    <div className="flex flex-col items-center gap-2">
      <h2 className="text-primary-800 font-bold md:text-base text-sm">کانال‌ها و صفحه‌های ما</h2>
      <span className="flex items-center gap-4 text-primary-800 text-2xl">
        <IoLogoInstagram className="hover:text-primary-500 transition-colors cursor-pointer" />
        <RiTelegramLine className="hover:text-primary-500 transition-colors cursor-pointer" />
      </span>
    </div>
  </div>
</section>

  );
};

export default MemberShip;

