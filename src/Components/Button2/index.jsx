import React from "react";

const Button2 = ({ text, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="font-lato text-[15px] px-[30px] py-[10px] rounded-[12px] transition-all duration-200 text-center flex-shrink-0 line-clamp-1 bg-[#362a51] text-[#fee622] shadow-[0_5px_0_0_#ffcd35] hover:shadow-[0_0_0_0_#ffcd35] hover:bg-[#ffcd35] hover:text-[#362a51]">
        {text}
      </button>
    </div>
  );
};

export default Button2;
