import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FiLayout , FiAward , FiHelpCircle , FiLogOut , FiCheckCircle , FiClock , FiLock } from "react-icons/fi"
import Beginner from '../assets/beginner.png'
import Lesson1 from '../assets/Lesson1.png'
import Lesson2 from '../assets/Lesson2.png'
import Lesson3 from '../assets/Lesson3.png'
import NotAvail from '../assets/NotAvail.png'

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
                    <a href='' className='py-5 flex bg-[#EBF3FF] border-r-4 border-[#0F57C1]'>
                        <div className='flex items-center text-[#0F57C1] text-[15px] ml-11 font-medium'><FiLayout className='mr-2 h-auto w-6'/> Dashboard</div>
                    </a>
                </div>
                <div className='group'>
                    <a href="" className='py-5 flex bg-white border-r-4 border-none group-hover:bg-[#EBF3FF]'>
                        <div className='flex items-center text-[#CFCFCF] text-[15px] ml-11 font-medium'><FiHelpCircle className='mr-2 h-auto w-6'/> Quiz</div>
                    </a>
                </div>
                <div className='group'>
                    <a href="" className='py-5 flex bg-white border-r-4 border-none group-hover:bg-[#EBF3FF]'>
                        <div className='flex items-center text-[#CFCFCF] text-[15px] ml-11 font-medium'><FiAward className='mr-2 h-auto w-6'/> Leaderboard</div>
                    </a>
                </div>
                <div className='group'>
                    <a href="" className='absolute bottom-0 py-5 flex w-full justify-center bg-white border-r-4 border-none group-hover:bg-[#FFF1F1]'>
                        <div className='flex items-center text-[#cf2525] text-[15px] font-medium'><FiLogOut className='mr-2 h-auto w-6'/> Leaderboard</div>
                    </a>
                </div>
            </div>

            <div className='w-full h-full flex flex-col'>
                <div className='relative flex items-center w-full h-[140px] border-b-[1px] border-[#CDCDCD]'>
                    <h1 className='ml-10 text-2xl font-medium text-[#0F57C1]'>Dashboard</h1>

                    <div className='absolute top-0 h-full items-center right-[50px] flex'>
                        <a href="" className='flex items-center bg-[#EBF3FF] py-1 px-5 rounded-full mr-3 '>
                            <p className='font-medium text-[#0F57C1] mr-2'>331pts</p>
                            <img src={Beginner} alt="badges" className='w-auto h-10'/>
                        </a>
                        <a href="" className='bg-[#0F57C1] p-2 px-4 text-xl font-bold text-white rounded-full'>K</a>
                    </div>
                </div>

                {/* For Outlet */}
                <div className='w-full h-full p-5'>
                    <div className='bg-white w-full h-full flex flex-col'>
                        
                        <div className='flex w-full'>
                            <div className='p-5 w-full flex items-center justify-center'>
                                <div className='p-2 rounded-full bg-[#FFE2C0]'>
                                    <FiClock className='h-auto w-11 text-[#FFB424]'/>
                                </div>
                                <div className='flex-col ml-4'>
                                    <h1 className='text-2xl font-medium'>In Progress</h1>
                                    <p className='text-sm text-[#A3A3A3]'>1 Courses</p>
                                </div>
                            </div>
                            
                            <div className='p-5 w-full flex items-center justify-center'>
                                <div className='p-2 rounded-full bg-[#D8FFD9]'>
                                    <FiCheckCircle className='h-auto w-11 text-[#13C10F]'/>
                                </div>
                                <div className='flex-col ml-4'>
                                    <h1 className='text-2xl font-medium'>Completed</h1>
                                    <p className='text-sm text-[#A3A3A3]'>2 Courses</p>
                                </div>
                            </div>      
                        </div>

                        <div className='w-full h-full p-10 flex gap-10 flex-wrap justify-center'>

                            {/* Lesson Box Container */}
                            <div className='overflow-hidden flex flex-col bg-white w-[200px] h-[230px] rounded-lg shadow'>
                                <div className=' w-full'>
                                    <img src={Lesson1} alt="lesson1" />
                                </div>

                                <div className='p-2 w-full'>
                                    <h1 className='font-medium text-[15px]'>Intro to Offensive Security</h1>
                                    <p className='text-[12px] text-[#A3A3A3]'>3 Chapters</p>
                                </div>

                                <div className='px-2'>
                                    <div className='flex text-[12px] text-[#FFB424] font-medium'>
                                        <p className='mr-1'>28%</p>
                                        <p>Pending</p>
                                    </div>
                                    <div className='relative overflow-hidden bg-[#FFE2C0] w-full pt-2 mt-[6px] rounded-full'>
                                        <div className='absolute top-0 w-[25%] rounded-full h-full bg-[#FFB424]'></div>
                                    </div>
                                </div>
                            </div>

                            <div className='overflow-hidden flex flex-col bg-white w-[200px] h-[230px] rounded-lg shadow'>
                                <div className=' w-full'>
                                    <img src={Lesson2} alt="lesson2" />
                                </div>

                                <div className='p-2 w-full'>
                                    <h1 className='font-medium text-[15px]'>Intro to Defensive Security</h1>
                                    <p className='text-[12px] text-[#A3A3A3]'>3 Chapters</p>
                                </div>

                                <div className='px-2'>
                                    <div className='flex text-[12px] text-[#13C10F] font-medium'>
                                        <p className='mr-1'>100%</p>
                                        <p>Complete</p>
                                    </div>
                                    <div className='relative overflow-hidden bg-[#D8FFD9] w-full pt-2 mt-[6px] rounded-full'>
                                        <div className='absolute top-0 w-[100%] rounded-full h-full bg-[#13C10F]'></div>
                                    </div>
                                </div>
                            </div>

                            <div className='overflow-hidden flex flex-col bg-white w-[200px] h-[230px] rounded-lg shadow'>
                                <div className=' w-full'>
                                    <img src={Lesson3} alt="lesson3" />
                                </div>

                                <div className='p-2 w-full'>
                                    <h1 className='font-medium text-[15px]'>Careers in Cyber</h1>
                                    <p className='text-[12px] text-[#A3A3A3]'>3 Chapters</p>
                                </div>

                                <div className='px-2'>
                                    <div className='flex text-[12px] text-[#13C10F] font-medium'>
                                        <p className='mr-1'>100%</p>
                                        <p>Complete</p>
                                    </div>
                                    <div className='relative overflow-hidden bg-[#D8FFD9] w-full pt-2 mt-[6px] rounded-full'>
                                        <div className='absolute top-0 w-[100%] rounded-full h-full bg-[#13C10F]'></div>
                                    </div>
                                </div>
                            </div>


                            {/* Not Available Containers */}
                            <div className='relative overflow-hidden flex flex-col bg-white w-[200px] h-[230px] rounded-lg shadow opacity-70'>
                                <FiLock className='absolute top-20 left-20 w-auto h-10 text-red-500' />
                                <div className=' w-full'>
                                    <img src={NotAvail} alt="NotAvail" />
                                </div>

                                <div className='p-2 w-full'>
                                    <h1 className='font-medium text-[15px]'>Web Application Security</h1>
                                    <p className='text-[12px] text-[#A3A3A3]'>3 Chapters</p>
                                </div>

                                <div className='px-2'>
                                    <div className='flex text-[12px] text-[#CF2525] font-medium'>
                                        <p className='mr-1'>0</p>
                                        <p>Not Available Yet</p>
                                    </div>
                                    <div className='relative overflow-hidden bg-[#FFF1F1] w-full pt-2 mt-[6px] rounded-full'>
                                        <div className='absolute top-0 w-[0] rounded-full h-full bg-[#FFB424]'></div>
                                    </div>
                                </div>
                            </div>

                            <div className='relative overflow-hidden flex flex-col bg-white w-[200px] h-[230px] rounded-lg shadow opacity-70'>
                                <FiLock className='absolute top-20 left-20 w-auto h-10 text-red-500' />
                                <div className=' w-full'>
                                    <img src={NotAvail} alt="NotAvail" />
                                </div>

                                <div className='p-2 w-full'>
                                    <h1 className='font-medium text-[15px]'>Security Operation</h1>
                                    <p className='text-[12px] text-[#A3A3A3]'>3 Chapters</p>
                                </div>

                                <div className='px-2'>
                                    <div className='flex text-[12px] text-[#CF2525] font-medium'>
                                        <p className='mr-1'>0</p>
                                        <p>Not Available Yet</p>
                                    </div>
                                    <div className='relative overflow-hidden bg-[#FFF1F1] w-full pt-2 mt-[6px] rounded-full'>
                                        <div className='absolute top-0 w-[0] rounded-full h-full bg-[#FFB424]'></div>
                                    </div>
                                </div>
                            </div>

                            <div className='relative overflow-hidden flex flex-col bg-white w-[200px] h-[230px] rounded-lg shadow opacity-70'>
                                <FiLock className='absolute top-20 left-20 w-auto h-10 text-red-500' />
                                <div className=' w-full'>
                                    <img src={NotAvail} alt="NotAvail" />
                                </div>

                                <div className='p-2 w-full'>
                                    <h1 className='font-medium text-[15px]'>Network Security</h1>
                                    <p className='text-[12px] text-[#A3A3A3]'>3 Chapters</p>
                                </div>

                                <div className='px-2'>
                                    <div className='flex text-[12px] text-[#CF2525] font-medium'>
                                        <p className='mr-1'>0</p>
                                        <p>Not Available Yet</p>
                                    </div>
                                    <div className='relative overflow-hidden bg-[#FFF1F1] w-full pt-2 mt-[6px] rounded-full'>
                                        <div className='absolute top-0 w-[0] rounded-full h-full bg-[#FFB424]'></div>
                                    </div>
                                </div>
                            </div>

                            {/* Add More Item Here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
   </section>
  )
}

export default Dashboard