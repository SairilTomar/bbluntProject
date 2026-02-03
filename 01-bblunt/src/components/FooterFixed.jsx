import React from 'react'
import { BiSolidOffer } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";

const FooterFixed = () => {
  return (
    <div className=''>
    <div className='block md:hidden fixed flex-col gap-2 bottom-30 right-6 z-50 h-11 w-full pl-7 pr-2'>
       <div className='p-4'>
        <div className='h-11
        rounded-3xl w-110 bg-green-200 text-black text-[15px] text-bold 
        flex flex-row gap-2'>
             <div className='pt-3 pl-1.5'>
                 <BiSolidOffer size={20}/></div>
            <div className='pt-3 text-bold text-[14px]'>
                Add 2 more products to unlock BOGO offer
            </div>
        </div>
    </div>
    </div>
    <div className='block md:hidden fixed bottom-2.5'>
        <div className='p-4'>
            <div className='h-15 rounded-3xl w-110  bg-gray-300 text-black flex flex-row gap-2'>
                <div className='flex flex-row gap-5'>
                    <div className='flex flex-col'>
                    <div className='pt-2 pl-9'>
                        <IoHomeOutline size={28}/>
                    </div>
                    <div className='pl-7 text-[15px] text-extrabold'>
                        Home
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='pt-2 pl-13'>
                        <FaRegUser size={28}/>
                    </div>
                    <div className='pl-8 text-[15px] text-extrabold'>
                        Account
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='pt-2 pl-15'>
                        <IoChatboxEllipsesOutline size={28}/>
                    </div>
                    <div className='pl-14 text-[15px] text-extrabold'>
                        Chat
                    </div>
                </div>
                  <div className='flex flex-col'>
                    <div className='pt-2 pl-17 pr-2'>
                        <CiShoppingCart size={30}/>
                    </div>
                    <div className='pl-17 text-[15px] text-extrabold'>
                        Cart
                    </div>
                </div>
                    </div>
                    
               

            </div>

        </div>

    </div>
    </div>
  )
}

export default FooterFixed
