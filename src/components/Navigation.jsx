import React from "react";
import logo from "../assets/iconpng.png";
import logo2 from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div className="flex relative items-center py-5 px-[100px] z-10 font-inter">
        <div className="">
          <img src={logo} alt="logo" className="h-auto w-[100px]" />
        </div>

        <div className="mx-5 text-black flex">
          <NavLink
            to="/Home"
            className=" mx-5 text-[15px] hover:underline underline-offset-8 decoration-[#3f83e8]"
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            className=" mx-5 text-[15px] hover:underline underline-offset-8 decoration-[#3f83e8]"
          >
            About Cybershield
          </NavLink>
          <NavLink
            to="/Contact"
            className=" mx-5 text-[15px] hover:underline underline-offset-8 decoration-[#3f83e8]"
          >
            Contact
          </NavLink>
        </div>
        <div className="absolute right-[100px] text-white flex gap-2">
          <NavLink
            to="/LoginPage"
            className="bg-[#3f83e8] py-2 px-6 rounded-md text-[14px] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Login
          </NavLink>
          <NavLink
            to="/SignUpPage"
            className="bg-[#3f83e8] py-2 px-6 rounded-md text-[14px] hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            Register
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navigation;
