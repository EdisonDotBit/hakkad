import React from "react";
import google from "../assets/google.png";
import kali from "../assets/kali.png";
import linux from "../assets/linux.png";
import lol from "../assets/lol.png";
import meta from "../assets/meta.png";
import wireshark from "../assets/wireshark.png";
import { NavLink } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="p-10 flex flex-col justify-center items-center font-poppins">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="pb-7 pt-[80px] flex flex-col items-center">
          <h1 className="text-[50px] font-semibold text-center w-[1100px] text-black">
            Website Security Training for IT Students at Rizal Technological
            University
          </h1>
          <p className="w-[700px] text-center pt-1">
            Transform cyber security education with our Management System,
            empowering personalized, interactive learning experiences.
          </p>
        </div>
        <div className="flex gap-2 pb-[150px]">
          <NavLink
            to="/login"
            className="py-4 px-8 bg-[#3f83e8] text-[14px] text-white w-[190px] text-center rounded-md"
          >
            Get Started
          </NavLink>
        </div>

        <div className="flex justify-center gap-[60px] px-[100px] py-[]  max-w-[1600px] w-full">
          <img src={google} alt="" className="h-[60px] w-auto" />
          <img src={kali} alt="" className="h-[60px] w-auto" />
          <img src={linux} alt="" className="h-[60px] w-auto" />
          <img src={lol} alt="" className="h-[60px] w-auto" />
          <img src={meta} alt="" className="h-[60px] w-auto" />
          <img src={wireshark} alt="" className="h-[60px] w-auto" />
        </div>
      </div>
    </>
  );
}

export default Landing;
