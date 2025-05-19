import React from "react";
import section6image from "../../assets/Section6 image.webp";
import Button1 from "../../Components/Button1";

const Section6 = () => {
  return (
    <div class="flex flex-col items-center justify-center bg-[#f5f2fd] p-12 pb-32">
      <div class="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:px-24">
        <h1 class="text-center font-rasa text-5xl font-semibold text-primary lg:py-5 xl:text-6xl">
          Customer Use Cases
        </h1>
        <div class="flex gap-12 max-lg:flex-col">
          <div class="w-full lg:w-[45%]">
            <img class="w-full" src={section6image} alt="" />
          </div>
          <div class="flex w-full flex-col justify-between gap-6">
            <h3 class="font-rasa text-2xl font-bold text-primary">
              {" "}
              Busy teams at StartDock rethink time management.
            </h3>
            <p class="font-lato text-sm leading-7 text-primary">
              Learn how this Dutch co-working community addressed poor work-life
              balance, with the help of Quan by zooming into how they schedule
              personal appointments around full-time work.
            </p>
            <Button1 text="Read full use case" />
          </div>
        </div>
        <div class="mt-12 flex gap-12 max-lg:flex-col">
          <div class="flex flex-col gap-6">
            <h3 class="font-rasa text-2xl font-bold text-primary">
              Self-directed teams address underlying issues at Niaga-Covestro.
            </h3>
            <p class="font-lato text-sm leading-7 text-primary">
              how even strong & engaged teams can uncover important insights
              about themselves when they take a structured look at their
              well-being.
            </p>
          </div>
          <div class="flex flex-col gap-6">
            <h3 class="font-rasa text-2xl font-bold text-primary">
              Remote teams use data and structure to connect on a deeper level
              at Bynder.{" "}
            </h3>
            <p class="font-lato text-sm leading-7 text-primary">
              how Quan helped improve manager-employee conversations and HR and
              Senior Leadership to identify more effective company well-being
              offerings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
