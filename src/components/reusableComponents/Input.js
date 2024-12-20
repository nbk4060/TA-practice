import React from "react";

const Input = ({
  label,
  type,
  placeholder,
  name,
  value,
  onchange = () => {},
}) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <label className="font-manrope font-bold text-base/[26px] text-white">
        {label}
      </label>
      <input
        className="rounded-[3px] border border-[#BDC1CA] font-manrope font-normal text-base/[26px] text-[#BDC1CA] py-[7px] px-4 w-full focus:outline-none"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onchange}
      />
    </div>
  );
};

export default Input;
