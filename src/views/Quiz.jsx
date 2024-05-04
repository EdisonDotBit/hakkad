
function Quiz() {
  return (
    <>
      <div className="h-full w-full p-5 flex justify-center items-center flex-col">
        <div className="py-5 w-full  text-center text-[#0F57C1]">
          <h1 className="text-6xl font-medium ">QUIZ TIME</h1>
          <p className="pt-2 px-[400px]">Take a quiz to learn and earn more points for every correct answer you get!</p>
        </div>
        <div className="p-5 flex gap-5 justify-center">
          <button className="bg-white py-5 w-[300px] rounded-xl shadow border-2 border-[#0f57c1] text-[#0f57c1] font-medium hover:bg-[#0f57c1] hover:text-white transition-all">Intro to Offensive Security</button>
          <button className="bg-white py-5 w-[300px] rounded-xl shadow border-2 border-[#0f57c1] text-[#0f57c1] font-medium hover:bg-[#0f57c1] hover:text-white transition-all">Intro to Defensive Security</button>
          <button className="bg-white py-5 w-[300px] rounded-xl shadow border-2 border-[#0f57c1] text-[#0f57c1] font-medium hover:bg-[#0f57c1] hover:text-white transition-all">Careers in Cyber</button>
        </div>
      </div>
    </>
  )
}

export default Quiz