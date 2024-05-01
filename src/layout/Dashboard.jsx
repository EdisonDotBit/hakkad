import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FiLayout , FiAward , FiHelpCircle , FiLogOut } from "react-icons/fi"
import Beginner from '../assets/badge1.png'

function Dashboard() {
  return (
   <section>
    <div className='w-full max-h-[1080px] h-[825px]'>
        <div className='flex h-full border-[1px] border-[#CDCDCD]'>
            <div className='relative h-full w-[300px] flex flex-col border-r-[1px] border-[#CDCDCD]'>
                <NavLink to="" className="flex justify-center my-3">
                    <img src={logo} alt="Logo" className='h-auto w-[200px]' />
                </NavLink>
                <div className='group'>
                    <NavLink to="/Student/Dashboard" className='py-5 flex text-[#0F57C1] bg-[#EBF3FF] border-r-4 border-[#0F57C1]' >
                        <div className='flex items-center text-[15px] ml-11 font-medium'><FiLayout className='mr-2 h-auto w-6'/> Dashboard</div>
                    </NavLink>
                </div>
                <div className='group'>
                    <NavLink to="/Student/Quiz" className='py-5 flex text-[#CFCFCF] bg-white border-r-4 border-none  group-hover:bg-[#EBF3FF]'>
                        <div className='flex items-center text-[15px] ml-11 font-medium'><FiHelpCircle className='mr-2 h-auto w-6'/> Quiz</div>
                    </NavLink>
                </div>
                <div className='group'>
                    <NavLink to="/Student/Leaderboard" className='py-5 flex text-[#CFCFCF] bg-white border-r-4 border-none group-hover:bg-[#EBF3FF]'>
                        <div className='flex items-center text-[15px] ml-11 font-medium'><FiAward className='mr-2 h-auto w-6'/> Leaderboard</div>
                    </NavLink>
                </div>
                <div className='group'>
                    {/* Logout btn */}
                    <NavLink to="/" className='absolute bottom-0 py-5 flex w-full justify-center bg-white border-r-4 border-none group-hover:bg-[#FFF1F1]'>
                        <div className='flex items-center text-[#cf2525] text-[15px] font-medium'><FiLogOut className='mr-2 h-auto w-6'/> Signout</div>
                    </NavLink>
                </div>
            </div>

            <div className='w-full h-full flex flex-col'>
                <div className='relative flex items-center w-full h-[140px] border-b-[1px] border-[#CDCDCD]'>
                    <h1 className='ml-10 text-2xl font-medium text-[#0F57C1]'>Dashboard</h1>

                    <div className='absolute top-0 h-full items-center right-[50px] flex'>
                        <a href="" className='flex items-center bg-[#EBF3FF] py-1 px-5 rounded-full mr-3 '>
                            <p className='font-medium text-[#0F57C1] mr-2'>81 pts</p>
                            <img src={Beginner} alt="badges" className='w-auto h-10'/>
                        </a>
                        <a href="" className='bg-[#0F57C1] p-2 px-4 text-xl font-bold text-white rounded-full'>K</a>
                    </div>
                </div>

                {/* For Outlet */}
                <div className='w-full h-full p-5'>
                    <Outlet/>
                </div>

            </div>
        </div>
   </div>
   </section>
  )
}

export default Dashboard