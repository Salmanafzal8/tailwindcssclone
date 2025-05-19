import React from "react";
import Section1img from "../../assets/Section1image.jpg";
import Button1 from "../../Components/Button1";
import Button2 from "../../Components/Button2";
const Section1 = () => {
  return (
    <div className="flex justify-around items-center flex-row mx-auto  max-w-7xl gap-[50px]   min-h-[800px] bg-white ">
      <div className="grid items-center px-[30px] py-[60px] cols-2 h-[10opx] w-[400px]">
        <div className="h-[450px] w-[500px]">
        <img className="h-[450px] w-[100%]" src={Section1img} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-10 h-[450px] w-[500px] pt-10 font-rasa text-[#362a51]">
        <h2 class="text-[35px] font-semibold  leading-[1.2em]">
          Individual therapy and self-care tools aren't enough.
        </h2>
        <p class="text-[28px] font-medium leading-[1.3em]">
          Support the <span className="font-italic">whole</span> team by breaking well-being down into measurable
          quarterly goals and rituals to improve ways of working.
        </p>
        <div className="flex gap-4 flex-row flex-wrap mr-[240px] w-full">
          <Button1 text="Discover how" />
          <Button2 text="The Science Behind Quan" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
