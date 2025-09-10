import Image from 'next/image';
import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
const Footer = () => {
  return (
  <footer className=' bg-primary-800 '>
    <div className=' mx-auto container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10 gap-10 md:gap-5 '>
        <div className=' flex md:items-center  flex-col gap-3'>
            <h1 className='  text-primary-50 md:text-lg text-base'>درباره ما</h1>
            <p className=' text-[10px] text-primary-50'>در هومکس، ما به هوشمندسازی خانه‌ها و ساختمان‌ها با استفاده از جدیدترین تکنولوژی‌های روز دنیا متعهد هستیم. تیم متخصص ما با ارائه راهکارهای نوآورانه و سفارشی، راحتی، امنیت و بهره‌وری انرژی را به خانه‌های شما می‌آورد. با هومکس، زندگی هوشمند را تجربه کنید.</p>
            <h1 className=' md:text-lg text-base text-primary-50'>آدرس </h1>
            <p className=' text-sm text-primary-50'> خیابان آزادی، نبش خیابان بهبودی، پلاک 123، طبقه 5</p>

        </div>
        {/*  */}
        <div className=' flex flex-col md:items-center gap-5'>
            <h1 className='md:text-lg text-base text-primary-50'>تماس با ما</h1>
            <div className=' flex  gap-3 text-primary-50 '>
            
              <span className=' md:text-lg text-base'><IoCallOutline/></span>
                <p>09217509248</p>
            </div>
            <div  className='text-primary-50 flex  gap-3'>
              
              <span className=' md:text-lg text-base'><MdOutlineMailOutline/></span>
              <p>mohammadpeyvasteh@gmail.com</p>
            </div>
            <button className='text-primary-900 transition hover:bg-secondary-700 bg-secondary-600 py-2 px-4 rounded-md md:w-auto w-[90px]'>پشتیبانی</button>

        </div>
        {/*  */}
        <div className=' flex md:items-center  flex-col gap-5 md:text-lg text-base text-primary-50'>
          <h2>سرویس ها</h2>
          <h3>محصولات</h3>
          <h3>اعطای نمایندگی</h3>
          <h3>گارانتی</h3>
          

          

        </div>

    </div>
    <div  className=' container mx-auto text-center border-t py-5 border-primary-50 '>
    <p className='text-primary-50 text-sm'>تمامی حقوق سایت متعلق به شرکت  هومکس می باشد .</p>
    </div>

  </footer>
  )
}

export default Footer