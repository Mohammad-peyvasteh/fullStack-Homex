import React from 'react'
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FiTruck } from "react-icons/fi";
import { CiDiscount1 } from "react-icons/ci";
import { MdWork } from "react-icons/md";
const items=[
    {
        title:"گفت و گو",
        icons:<IoChatboxEllipsesOutline/>,
        id:1,

    },
    {
        title:"ارسال کالا",
        icons:<FiTruck/>,
        id:2,

    },
   {
        title:"تخفیفه ویژه",
        icons:<CiDiscount1/>,
        id:3,

    },
   {
        title:"خدمات پس از فروش",
        icons:<MdWork/>,
        id:4,

    },
]

const Icons = () => {
  return (
    <section className=' bg-primary-50 py-15 '>
        <div className='px-6 sm:px-8 md:px-10 xl:px-6 mx-auto max-w-7xl '>
            <div className=' grid md:grid-cols-4 grid-cols-2 gap-3 md:gap-6 lg:gap-8  '>
                {items.map((item)=>(
                    <div key={item.id} className=' hover:bg-primary-900 duration-300 cursor-pointer transition flex flex-col items-center bg-primary-800 py-5 rounded-2xl    '>
                        <span className=' lg:text-5xl text-4xl   text-primary-50'>{item.icons}</span>
                        <h1 className='text-primary-50 md:text-base text-sm'>{item.title}</h1>

                    </div>
                ))}

            </div>

        </div>

    </section>
  )
}

export default Icons
