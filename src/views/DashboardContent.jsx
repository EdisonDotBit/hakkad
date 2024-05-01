import { NavLink } from 'react-router-dom'
import Lesson1 from '../assets/Lesson1.png'
import Lesson2 from '../assets/Lesson2.png'
import Lesson3 from '../assets/Lesson3.png'
import NotAvail from '../assets/NotAvail.png'
import { FiCheckCircle , FiClock , FiLock } from "react-icons/fi"

function DashboardContent() {
  return (
    <>
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

                        <div className='w-full h-full p-10 flex gap-8 flex-wrap justify-center'>

                            {/* Lesson Box Container */}
                            <div className='overflow-hidden flex flex-col bg-white w-[200px] h-[230px] rounded-lg shadow'>

                                <div className='relative w-full'>
                                    <div className='absolute flex items-center justify-center top-0 bg-[#ebf3ff5b] w-full h-full opacity-0 hover:opacity-100 transition-all'>
                                        <NavLink to="" className="text-[#0F57C1] font-medium bg-white shadow-xl py-2 px-5 text-[13px] rounded-lg">Start Learning</NavLink>
                                    </div>
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
                                <div className='relative w-full'>
                                    <div className='absolute flex items-center justify-center top-0 bg-[#ebf3ff5b] w-full h-full opacity-0 hover:opacity-100 transition-all'>
                                        <NavLink to="" className="text-[#0F57C1] font-medium bg-white shadow-xl py-2 px-5 text-[13px] rounded-lg">Start Learning</NavLink>
                                    </div>
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
                                <div className='relative w-full'>
                                    <div className='absolute flex items-center justify-center top-0 bg-[#ebf3ff5b] w-full h-full opacity-0 hover:opacity-100 transition-all'>
                                        <NavLink to="" className="text-[#0F57C1] font-medium bg-white shadow-xl py-2 px-5 text-[13px] rounded-lg">Start Learning</NavLink>
                                    </div>
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
    </>
  )
}

export default DashboardContent