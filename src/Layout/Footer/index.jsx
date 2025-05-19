import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import Button1 from "../../Components/Button1";
const Footer = () => {
  return (
    <div class="bg-[#362A51] text-[16px] leading-[1.6em] text-white">
      <div class="mx-auto w-full max-w-7xl p-[50px] flex flex-row gap-[280px] ">
        <div class="grid grid-cols-1 gap-x-4 gap-y-12 ">
          <div class="text-amber-400 font-bold text-[30px]">QUAN</div>
          <div>
            Waldorpstraat 5
            <br />
            2521 CA, The Hague, Netherlands
            <br />
            KvK: 80307329
            <br />
            <p className="mt-5">Connect with us!</p>
          </div>
          <div class="flex flex-row gap-12 px-2 text-[14px]">
            <FaFacebookF />
            <FaLinkedinIn />
            <RiTwitterXLine />
            <FaInstagram />

          </div>
        </div>
        <div class="">
          <ul class="flex flex-col gap-6 text-center">
            <li>About us</li>
            <li>Why Well-Being?</li>
            <li>Resources</li>
            <li>Support</li>
            <li>Appp privacy policy</li>
          </ul>
        </div>
        <div class="flex flex-col gap-8">
          <Button1   text="Get Started"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
