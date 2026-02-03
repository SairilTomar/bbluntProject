import React from 'react'
import { BiSolidOffer } from "react-icons/bi";

const FooterFixed = () => {
  return (
    <div className='block md:hidden fixed bottom-6 right-6 z-50 h-11 w-full pl-7 pr-2'>
       <div className='p-4'>
        <div className='h-11
        rounded-2xl w-100 bg-green-200 text-black text-[15px] text-bold 
        flex flex-row gap-2'>
             <div className='pt-3 pl-1.5'>
                 <BiSolidOffer size={20}/></div>
            <div className='pt-3 text-bold text-[14px]'>
                Add 2 more products to unlock BOGO offer
            </div>
    
        </div>

        <div>

        </div>
       </div>
    </div>
  )
}

export default FooterFixed
