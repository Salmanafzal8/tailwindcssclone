import React from "react";
import section7image from "../../assets/Section7image.png";
import Button1 from "../../Components/Button1";
import Button2 from "../../Components/Button2";

const Section7 = () => {
  return (
    <div class="bg-[#463a6a]">
      <div class="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 px-[30px] text-center text-white ">
        <img class="-mt-20 w-[300px]" src={section7image} alt="" />
        <h1 class="font-rasa text-[48px] font-semibold leading-[1.1em] ">
          Ready to get started?
        </h1>
        <p class="max-w-3xl font-rasa text-[20px] leading-[1.2em]">
          Start identifying and addressing your team's underlying problems and
          unhealthy habits before they become issues.
        </p>
        <div class="mb-20 mt-10 flex flex-row gap-4">
          <Button1 text="Get Started"/>
          <Button2 text="Learn More"/>
        </div>
      </div>
    </div>
  );
};

export default Section7;
