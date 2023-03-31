import React, {useState, useEffect} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BiArrowBack } from "react-icons/bi";
import { fetchDataFromApi } from "@/utils/api";

// const banners = [
//   { id: 1, src: "assets/slide-1.png" },
//   { id: 2, src: "assets/slide-2.png" },
//   { id: 3, src: "assets/slide-3.png" },
// ];

const HeroBanner = () => {

    const [data, setData] = useState({})

    useEffect(() => {
      fetchProducts()
    }, [])

    const fetchProducts = async () => {
      const banners = await fetchDataFromApi("/api/banners?populate=*");
      setData(banners)
    }
    
    // console.log(data?.data?.[0]?.attributes?.url?.data?.[0].attributes.url)

  return (
    
    <div
      className="relative text-white text-[20px] w-full max-w-[1360px] 
      mx-auto transform overflow-hidden duration-200 hover:scale-105 cursor-pointer"
    >
      <Carousel autoPlay={true} infiniteLoop={true}>
        {data?.data?.map((item, index) => (
          <div key={index}>
            <img
              src={item.attributes.url.data?.[0].attributes.url}
              className="aspect-[1.7] md:aspect-auto object-cover"
            />
            <div
              className="absolute font-oswald text-black/[0.8] bg-white/[0.9] uppercase 
          font-medium md:text-[30px] text-[15px] cursor-pointer hover:bg-white md:px-[40px] 
          px-[15px] md:py-[25px] py-[10px] md:bottom-[75px] bottom-[25px] left-0 
          transform overflow-hidden duration-200 hover:scale-110"
              onClick={() => {
                document.documentElement.scrollTop = 1050;
              }}
            >
              MUA NGAY !
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
