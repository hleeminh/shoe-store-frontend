import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";


const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src="assets/slide-1.png" className="aspect-[1.7] md:aspect-auto object-cover"/>
          <div className="absolute font-oswald text-black/[0.8] bg-white/[0.9] uppercase 
          font-medium md:text-[30px] text-[15px] cursor-pointer hover:bg-white md:px-[40px] 
          px-[15px] md:py-[25px] py-[10px] md:bottom-[75px] bottom-[25px] left-0 
          transform overflow-hidden duration-200 hover:scale-110">
            Shop now
          </div>
        </div>
        <div>
          <img src="assets/slide-2.png" className="aspect-[1.7] md:aspect-auto object-cover"/>
          <div className="absolute font-oswald text-black/[0.8] bg-white/[0.9] uppercase 
          font-medium md:text-[30px] text-[15px] cursor-pointer hover:bg-white md:px-[40px] 
          px-[15px] md:py-[25px] py-[10px] md:bottom-[75px] bottom-[25px] left-0 
          transform overflow-hidden duration-200 hover:scale-110">
            Shop now
          </div>
        </div>
        <div>
          <img src="assets/slide-3.png" className="aspect-[1.7] md:aspect-auto object-cover"/>
          <div className="absolute font-oswald text-black/[0.8] bg-white/[0.9] uppercase 
          font-medium md:text-[30px] text-[15px] cursor-pointer hover:bg-white md:px-[40px] 
          px-[15px] md:py-[25px] py-[10px] md:bottom-[75px] bottom-[25px] left-0 
          transform overflow-hidden duration-200 hover:scale-110">
            Shop now
          </div>
        </div>

      </Carousel>
    </div>
  );
};

export default HeroBanner;
