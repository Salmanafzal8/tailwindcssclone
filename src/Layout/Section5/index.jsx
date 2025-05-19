import React from "react";
import section5image from "../../assets/Section5image.webp";
import { FaQuoteRight } from "react-icons/fa";


const Section5 = () => {
  return (
    <div class="mx-auto flex max-w-[800px] flex-col items-center gap-6 p-12 pb-20">
      <div class="relative flex h-full items-center">
        <div class="absolute -left-8 top-1/2 flex size-12 -translate-y-1/2 transform items-center justify-center rounded-lg bg-amber-300 text-white  shadow-[0_5px_0_0_#000000]">
        <FaQuoteRight />
        </div>
                <img class="size-32 rounded-full" src={section5image} alt="" />
      </div>
      <h3 class="text-center font-rasa text-3xl font-bold text-primary lg:text-6xl">Don't just say well-being is important. Measure it and manage it.</h3>
    <div class="w-fit rounded-xl bg-black px-3 py-1 text-xs text-white">Arosha Brouwer, CEO & Co-Founder </div>
    </div>
  );
};

export default Section5;
