import React from "react";

const CustomAvatar = ({icon,name,add}) => {
  return (
    <div className="">
      <div className="w-16 h-16 rounded-full relative">
        <img src={icon} alt={name} />
        {add && <img src="/assets/add.png" alt="add" className="absolute right-0 bottom-0 z-10"/>}
      </div>
      <h4 className="font-manrope font-bold text-xs/5 text-center mt-2">{name}</h4>
    </div>
  );
};

export default CustomAvatar;
