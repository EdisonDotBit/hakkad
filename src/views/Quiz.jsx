import { LuSwords,LuShield } from "react-icons/lu";
import { PiSuitcase } from "react-icons/pi";
import Beginner from "../assets/badge1.png"

function Quiz() {
  return (
    <>
      <div className="h-full w-full p-5 flex justify-center items-center flex-col">
        <div className="py-5 w-full  text-center text-[#0F57C1]">
          <h1 className="text-6xl font-medium ">QUIZ TIME</h1>
          <p className="pt-2 px-[400px]">Take a quiz to learn and earn more points for every correct answer you get!</p>
        </div>

        <a href="" className="flex items-center bg-[#EBF3FF] py-1 px-5 rounded-full my-1 mb-5">
          <p className="font-medium text-[#0F57C1] mr-2">81 pts</p>
          <img src={Beginner} alt="badges" className="w-auto h-10" />
        </a>
        
        <div className="p-5 flex flex-wrap gap-5 justify-center">
          <button className="bg-white py-5 w-[300px] rounded-xl shadow border-2 border-[#0f57c1] text-[#0f57c1] font-medium hover:bg-[#0f57c1] hover:text-white transition-all flex items-center text-center flex-col justify-center"><LuSwords   className="my-1 text-2xl"/>Intro to Offensive Security</button>

          <button className="bg-white py-5 w-[300px] rounded-xl shadow border-2 border-[#0f57c1] text-[#0f57c1] font-medium hover:bg-[#0f57c1] hover:text-white transition-all flex items-center text-center flex-col justify-center"><LuShield   className="my-1 text-2xl"/>Intro to Defensive Security</button>
          
          <button className="bg-white py-5 w-[300px] rounded-xl shadow border-2 border-[#0f57c1] text-[#0f57c1] font-medium hover:bg-[#0f57c1] hover:text-white transition-all flex items-center text-center flex-col justify-center"><PiSuitcase className="my-1 text-2xl"/>Careers in Cyber</button>
        </div>
      </div>
    </>
  )
}

export default Quiz