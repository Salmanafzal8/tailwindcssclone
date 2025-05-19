import React from "react";
import heroImage from "../../assets/herosectionimage.jpg"; 
import Button1 from "../../Components/Button1";
import Button2 from "../../Components/Button2";
import { useNavigate } from "react-router-dom";

const Herosection = () => {
  const navigate = useNavigate();
  function handleclick(){
      navigate('/Aboutus');
  }
  return (
    <div
      className="min-h-[700px] bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,
      }}
    >
      <div className="flex flex-col justify-start items-center w-[550px] gap-10 ml-[60px] pt-[120px] font-semibold">
        <h1 className="text-white text-[60px] font-bold">
          Helping busy teams build healthy rituals.
        </h1>
        <p className=" text-white text-[20px]">
          Our science-backed employee well-being software helps managers and
          teams prevent burn-out and enhance team performance.
        </p>
        <div className="flex gap-4 flex-row flex-wrap mr-[240px]">
          <Button1  text="Discover how" />
          <Button2 onClick={handleclick} text="About Us" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
