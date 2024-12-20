import React from "react";
import Button from "./Button";

const Cards = ({subtext,heading,para,src,className,contentDivStyle}) => {
  return (
    <div className={`flex justify-between items-center bg-shadow bg-[#F8F9FA] ${className}`}>
      <div className={`flex flex-col gap-4 ${contentDivStyle}`}>
        <p className="font-manrope font-normal text-sm/[22px] text-[#323743]">{subtext}</p>
        <h3 className="font-poppins font-bold text-[34px]/[42px] text-[#171A1F]">{heading}</h3>
        <p className="font-manrope font-normal text-sm/[22px] text-[#171A1F]">{para}</p>
        <Button
          text={"Learn More"}
          className="rounded bg-[#E98A14] p-2.5 font-manrope text-[#171A1F] text-base/[21.86px] font-normal flex justify-center items-center gap-2 w-max"
          icon={"/assets/Right.svg"}
        />
      </div>
      <img src={src} alt='system'/>
    </div>
  );
};

export default Cards;
