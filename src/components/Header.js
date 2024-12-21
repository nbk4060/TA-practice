import React from "react";

const Header = () => {
  return (
    <div className="w-full max-w-[1194px] mx-auto bg-white rounded-[50px] py-2 px-3 flex justify-between items-center absolute z-10 left-[50%] right-[50%] top-[50px] translate-x-[-50%] ">
      <img src="/assets/logo.png" alt="logo" />
      <ul className="flex space-x-12 items-center font-manrope font-normal text-sm/[26px] text-black cursor-pointer">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">SIS</a>
        </li>
        <li className="font-bold text-[#001242]">
          <a href="#">Digital Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <button className="pl-7 pr-[25px] py-[11px] bg-[#001242] text-white rounded-[30px] flex space-x-1.5 items-center">
        <span>
          <img src="/assets/Phone.svg" alt="phone-icon" />
        </span>
        <span className="text-base/[26px] font-manrope font-normal">Request Demo</span>
      </button>
    </div>
  );
};

export default Header;
