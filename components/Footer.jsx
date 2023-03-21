import React from "react";
import { FaFacebookF, FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="bg-slate-800 pt-14 pb-3 text-white">
      <Wrapper className="flex justify-between gap-[45px] md:gap-0 md:flex-row flex-col">
        {/* top-left */}
        <div className="flex gap-[20px] md:gap-[75px] lg:gap-[100px] md:flex-row flex-row">
          <div className="flex flex-col gap-3 ">
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              Find a store
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              become a partner
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              sign up for email
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              send us feedback
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              student discount
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              Get help
            </div>
            <div className="hover:text-white text-white/[0.8] text-sm cursor-pointer">
              Order Status
            </div>
            <div className="hover:text-white text-white/[0.8] text-sm cursor-pointer">
              Delivery
            </div>
            <div className="hover:text-white text-white/[0.8] text-sm cursor-pointer">
              Returns
            </div>
            <div className="hover:text-white text-white/[0.8] text-sm cursor-pointer">
              Payment Options
            </div>
            <div className="hover:text-white text-white/[0.8] text-sm cursor-pointer">
              Contact Us
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              About nike
            </div>
            <div className="hover:text-white text-white/[0.8] text-sm cursor-pointer">
              News
            </div>
            <div className="hover:text-white text-white/[0.8] text-sm cursor-pointer">
              Careers
            </div>
            <div className="hover:text-white text-white/[0.8] text-sm cursor-pointer">
              Investors
            </div>
            <div className="hover:text-white text-white/[0.8] text-sm cursor-pointer">
              Sustainability
            </div>
          </div>
        </div>

        {/* top-right */}
        <div className="flex gap-6 justify-center">
          <div
            className="flex justify-center items-center w-12 h-12 rounded-full text-slate-800 bg-white/[0.8] hover:bg-white cursor-pointer"
            onClick={() => window.open("https://facebook.com", "_blank")}
          >
            <FaFacebookF size={20} />
          </div>
          <div
            className="flex justify-center items-center w-12 h-12 rounded-full text-slate-800 bg-white/[0.8] hover:bg-white cursor-pointer"
            onClick={() => window.open("https://tiktok.com", "_blank")}
          >
            <FaTiktok size={20} />
          </div>
          <div
            className="flex justify-center items-center w-12 h-12 rounded-full text-slate-800 bg-white/[0.8] hover:bg-white cursor-pointer"
            onClick={() => window.open("https://youtube.com", "_blank")}
          >
            <FaYoutube size={20} />
          </div>
          <div
            className="flex justify-center items-center w-12 h-12 rounded-full text-slate-800 bg-white/[0.8] hover:bg-white cursor-pointer"
            onClick={() => window.open("https://instagram.com", "_blank")}
          >
            <FaInstagram size={20} />
          </div>
        </div>
      </Wrapper>
      <Wrapper className="flex justify-between items-center mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        <div className="text-[12px] text-center md:text-left">
          <div className="cursor-pointer text-white/[0.8] hover:text-white">
            Hotline: 035.455.1119 - 012.345.6789
          </div>
          <div className="cursor-pointer text-white/[0.8] hover:text-white">
            Address: Thuy Nguyen, Hai Phong, Viet Nam
          </div>
        </div>
        <div className="flex md:flex-col flex-col">
          <div className="flex text-[12px] text-center md:text-left md:gap-5 gap-2">
            <div className="cursor-pointer text-white/[0.8] hover:text-white">
              Guides
            </div>
            <div className="cursor-pointer text-white/[0.8] hover:text-white">
              Terms of Sale
            </div>
            <div className="text-[12px] text-white/[0.8] hover:text-white cursor-pointer">
              Terms of Use
            </div>
            <div className="text-[12px] text-white/[0.8] hover:text-white cursor-pointer">
              Privacy Policy
            </div>
          </div>
          <div className="flex md:justify-end justify-center cursor-pointer text-white/[0.8] hover:text-white text-[12px] text-center md:text-left">
            © 2023 Nike, Inc. All Rights Reserved
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
