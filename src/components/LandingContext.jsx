import React from "react";
import gamified from "../assets/gamified.png";
import learn from "../assets/learning.png";

function LandingContext() {
  return (
    <>
      <div className="p-10 flex flex-col justify-center items-center font-poppins relative">
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="pt-[70px] p-5 w-full flex justify-center px-[500px] gap-10">
          <div className="max-w-[300px] max-h-[300px] min-w-[300px] w-[500px] h-[500px]">
            <img src={gamified} alt="" />
          </div>
          <div className=" max-w-[600px] min-w-[600px]  w-[600px]">
            <h1 className="text-6xl text-[#3f83e8]">
              Byte-sized gamified lessons
            </h1>
            <div className="w-[100px] h-1 rounded-full my-3 bg-[#3f83e8]"></div>
            <p className="w-[600px] text-[14px] text-[#747474]">
              {" "}
              Learning cyber security on TryHackMe is fun and addictive. Earn
              points by answering questions, taking on challenges and maintain
              your hacking streak through short lessons.
            </p>
            <button className="text-[13px] bg-[#3f83e8] text-white py-3 px-10 my-4 rounded-xl hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300">
              Start Quiz
            </button>
          </div>
        </div>

        <div className="pt-[70px] p-5 w-full flex justify-center px-[500px] gap-10">
          <div className=" max-w-[600px] min-w-[600px]  w-[600px]">
            <h1 className="text-6xl text-[#3f83e8]">Learn and Practice</h1>
            <div className="w-[100px] h-1 rounded-full my-3 bg-[#3f83e8]"></div>
            <p className="w-[500px] text-[14px] text-[#747474]">
              {" "}
              Learn by following a structured paths and reinforce your skills in
              a real-world environment by completing guided, objective-based
              tasks and challenges.{" "}
            </p>
            <button className="text-[13px] bg-[#3f83e8] text-white py-3 px-10 my-4 rounded-xl hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300">
              Start Larning
            </button>
          </div>
          <div className="max-w-[300px] max-h-[300px] min-w-[300px] w-[500px] h-[500px]">
            <img src={learn} alt="" />
          </div>
        </div>
        <div className="py-[100px] text-center">
          <h1 className="font-bold text-4xl">
            Ready to start learning cyber security?
          </h1>
          <button className="py-4 rounded-xl px-10 bg-[#3f83e8] text-white text-[14px] my-7 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300">
            Join for FREE
          </button>
        </div>
      </div>
    </>
  );
}

export default LandingContext;
