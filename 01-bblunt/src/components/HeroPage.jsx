import React from 'react'
import desktopImg from  './../assets/Images/desktopImg.webp'
import MobileImg from  './../assets/Images/MobileImg.webp'
const HeroPage = () => {
  return (
   
      <div className="w-full">
      <picture>
        {/* Mobile Image */}
        <source media="(max-width: 767px)" srcSet={MobileImg} />

        {/* Desktop Image */}
        <img
          src={desktopImg}
          alt="Hero Banner"
          className="w-full"
        />
      </picture>
    </div>
   
  )
}

export default HeroPage
