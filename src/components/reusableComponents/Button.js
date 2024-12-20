import React from "react";

const Button = ({ text, className, icon, onclick }) => {
  return (
    <button className={`${className} py-[9px]`} onClick={onclick}>
      <span>{text}</span>
      {icon && <span><img src={icon} alt={text}/></span>}
    </button>
  );
};

export default Button;
