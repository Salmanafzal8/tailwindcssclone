import React from "react";

const Button1 = ({ text,style }) => {
  return (
    <div>
      <button style={style} className="font-lato text-[15px] px-[30px] py-[10px] rounded-[12px] transition-all duration-200 text-center flex-shrink-0 line-clamp-1 bg-[#fee622] text-[#362a51] shadow-[0_5px_0_0_#ffcd35] hover:shadow-[0_0_0_0_#ffcd35] hover:bg-[#ffcd35]">
        {text}
      </button>
    </div>
  );
};

export default Button1;
