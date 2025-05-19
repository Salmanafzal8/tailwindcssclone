import React from "react";
import backgroundImage from "../../assets/section4backgroundimage.jpg";
import Button1 from "../../Components/Button1";

const Section4 = () => {
  return (
    <div
      className="min-h-[600px] bg-cover bg-center relative text-white flex flex-col items-center py-10 "
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${backgroundImage})`,
      }}
    >
      <h1 class="font-rasa text-5xl font-semibold lg:py-5 xl:text-6xl">
        Who Is Quan For?
      </h1>
      <div className="mt-6 flex w-full gap-12 p-10 max-lg:flex-col">
      <div class="mt-6 flex w-full gap-12 max-lg:flex-col">
        <div class="flex w-full flex-col gap-6 rounded-xl bg-[#f5f2fd] text-black  p-10">
          <div class="flex items-center justify-between">
            <h3 class="pb-1 pt-4 font-rasa text-3xl font-bold text-primary">
              For teams{" "}
            </h3>
            <div class="flex size-10 items-center justify-center  border-black rounded-full border-4 border-primary">
              <div class="size-4 rounded-full bg-black bg-primary"> </div>
            </div>
          </div>
          <p class="mt-4 font-lato text-sm leading-7 text-primary">
            Your problem isn’t underperformance - you’re worried that some team
            members are too engaged and may potentially burn-out. Do you need a
            simple way to address underlying problems and identify better ways
            of working?
          </p>
        </div>
      </div>
            <div class="mt-6 flex w-full gap-12 max-lg:flex-col">
        <div class="flex w-full flex-col gap-6 rounded-xl bg-[#f5f2fd] text-black  p-10">
          <div class="flex items-center justify-between">
            <h3 class="pb-1 pt-4 font-rasa text-3xl font-bold text-primary">
              For teams{" "}
            </h3>
            <div class="flex size-10 items-center justify-center rounded-full border-black bg-black border-4 border-primary">
              <div class="size-4 rounded-full bg-white bg-primary"> </div>
            </div>
          </div>
          <p class="mt-4 font-lato text-sm leading-7 text-primary">
            Your problem isn’t underperformance - you’re worried that some team
            members are too engaged and may potentially burn-out. Do you need a
            simple way to address underlying problems and identify better ways
            of working?
          </p>
          <Button1 text="Learn more" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Section4;
