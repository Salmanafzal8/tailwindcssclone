import React from "react";
import "./Navbar.css"
import { LuSearch } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#31274A] px-5 py-3 flex justify-between items-center">
      <div className="text-yellow-400 text-[35px] flex flex-row font-extrabold">
        <LuSearch className="font-extrabold mt-[10px] text-[40px]" />
        uan.
      </div>
      <div className="flex items-center space-x-8 text-[20px] font-semibold text-white text-sm">
        <NavLink to="/">Home</NavLink>
        <NavLink  className="hover:text-yellow-600" to="/Aboutus">
          Aboutus
        </NavLink>
        <NavLink className="hover:text-yellow-600" to="/Product">
          Product
        </NavLink>
        <NavLink className="hover:text-yellow-600" to="/Science">
          Science
        </NavLink>
        <NavLink className="hover:text-yellow-600" to="/Resources">
          Resources
        </NavLink>
        <NavLink className="hover:text-yellow-600" to="/Signin">
          Signin
        </NavLink>
        <button className="bg-yellow-400 hover:bg-yellow-600 text-black font-semibold px-5 py-2 rounded-xl shadow-md">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
