import React from "react";

const Section2 = () => {
  return (
    <div className=" min-h-[800px]  w-full mx-auto flex  max-w-7xl flex-col gap-10 px-[30px] py-20 text-[#362a51]  bg-[#f0ecfa]">
      <h1 className="text-center font-rasa text-[48px] font-[500]  ">
        How does it work? It’s as easy as…
      </h1>
      <div className="flex flex-row gap-11 pt-8 ">
        <div className="flex flex-col gap-7">
      <div className="relative text-center flex flex-col text-[144px] font-bold text-[#362a51] ">
        <span>1</span>
      </div>
      <h3 class="font-rasa text-[24px] font-medium leading-[1.2em] text-[#362a51]">
        Personal Assessment
      </h3>
      <p class="text-[16px] leading-[28px]">
        Team members complete an evidence-based well-being assessment measuring
        five dimensions: Mind, Body, Meaning, Social-Connectedness and
        Self-Fulfilment - providing invaluable insight on the underlying reasons
        for their current state. Assessments are 100% guaranteed private - no
        one else can see your individual results.
      </p>
      </div>
      <div className="flex flex-col gap-7">
      <div className="relative flex flex-col text-center text-[144px] font-bold text-[#362a51] ">
        <span>2</span>
      </div>
      <h3 class="font-rasa text-[24px] font-medium leading-[1.2em] text-[#362a51]">
        Team Well-Being Retro
      </h3>
      <p class="text-[16px] leading-[28px]">
        The well-being data collected in the assessments are aggregated and
        anonymized, highlighting the team's top well-being strengths and risks
        and their underlying sources. Quan then guides managers and teams
        through quarterly conversations about team well-being, allowing them to
        effectively choose which areas to focus on first, and to build the
        psychological safety they need to openly discuss their ways of working.
      </p>
      </div>
      <div className="flex flex-col gap-7">
      <div className="relative flex flex-col text-center text-[144px] font-bold text-[#362a51] ">
        <span>3</span>
      </div>
      <h3 class="font-rasa text-[24px] font-medium leading-[1.2em] text-[#362a51]">
        Targeted Rituals & Next Steps
      </h3>
      <p class="text-[16px] leading-[28px]">
        Teams select recommended rituals to improve their way of working. These
        easy-to-implement actions are proven to be effective by scientific
        research in organizational and behavioural psychology. Additionally, HR
        and Senior Leadership can identify more effective company well-being
        offerings and steps to better support your people based on aggregate
        well-being data across teams.
      </p>
      </div>
      </div>
    </div>
  );
};

export default Section2;
