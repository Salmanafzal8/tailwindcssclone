import React from "react";
import logo1 from "../../assets/section3logo1.webp";
import logo2 from "../../assets/section3logo2.webp";
import logo3 from "../../assets/section3logo3.webp";
import logo4 from "../../assets/SECTION3LOGO4.webp";
import logo5 from "../../assets/section3logo5.webp";
import logo6 from "../../assets/Section3logo6.webp";
import section3image1 from "../../assets/Section3image1.webp";
import section3image2 from "../../assets/Section3image2.webp";
import section3image3 from "../../assets/Section3image3.webp";

const Section3 = () => {
  return (
    <div class="mx-auto max-w-7xl flex-col items-center gap-10 px-[30px] py-20 ">
      <h3 class="pb-1 pt-4 text-center font-rasa text-3xl font-bold text-primary">
        Trusted by
      </h3>
      <div className="mt-16 flex flex-row items-center justify-center gap-[130px] w-full h-1 p-6">
        <img className="grayscale-[100%] brightness-50" src={logo1} alt="" />
        <img className="grayscale-[100%] brightness-50" src={logo2} alt="" />
        <img className="grayscale-[100%] brightness-50" src={logo3} alt="" />
        <img className="grayscale-[100%] brightness-50" src={logo4} alt="" />
        <img className="grayscale-[100%] brightness-50" src={logo5} alt="" />
        <img className="grayscale-[100%] brightness-50" src={logo6} alt="" />
      </div>
      <div class="flex gap-6  mt-10 px-[50px] max-lg:flex-col ">
        <div class="flex w-full flex-col items-center gap-12">
          <img src={section3image1} alt="" />
          <p class="font-lato text-sm leading-7">
            "Even though we have a very tight team and an open culture - through
            Quan, individuals were able to discus topics which impacted them but
            they never really unearthed them because they are so committed to
            our mission."
          </p>
          <div class="ml-20 flex w-full flex-col items-start gap-1.5 border-l border-black pl-6">
            <p class="text-sm font-bold text-gray-400">Kelly Hall</p>
            <p class="text-sm font-bold text-gray-400">
              Managing Director, Niaga @ Covestro
            </p>
          </div>
        </div>
        <div class="flex w-full flex-col items-center gap-12">
          <img src={section3image2} alt="" />
          <p class="font-lato text-sm leading-7">
            "The Quan framework helps to bring topics to the surface that
            normally would get less or no attention, and take effective action
            on them."
          </p>
          <div class="ml-20 flex w-full flex-col items-start gap-1.5 border-l border-black pl-6">
            <p class="text-sm font-bold text-gray-400">Ruben Vermaak

</p>
            <p class="text-sm font-bold text-gray-400">
              Head of L&D @ Bynder
            </p>
          </div>
        </div>
        <div class="flex w-full flex-col items-center gap-12">
          <img src={section3image3} alt="" />
          <p class="font-lato text-sm leading-7">
            "Quan's employee well-being solution was the perfect answer for our
            marketing leadership team to demonstrate our commitment to our team
            and to empower our managers to make well-being a priority. Quan is
            outstanding. Their software really demonstrates why well-being
            should be seen as an organizational priority for any business."
          </p>
          <div class="ml-20 flex w-full flex-col items-start gap-1.5 border-l border-black pl-6">
            <p class="text-sm font-bold text-gray-400">Jill Murray</p>
            <p class="text-sm font-bold text-gray-400">
              CMO @ Arcadis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
