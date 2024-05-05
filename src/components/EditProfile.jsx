import { NavLink } from 'react-router-dom';
import LessonNav from './LessonNav'
import { IoIosArrowDown } from "react-icons/io";

function EditProfile() {
  return (
    <section>
        <div className='h-screen '>
            <LessonNav/>
            <div className=' h-auto p-[10vh] flex justify-center items-center'>
                <div className='bg-white p-10 w-[500px]  flex flex-col items-center gap-3'>
                    <h1 className='text-2xl text-customBlue font-semibold'>Update Profile</h1>
                    <div className='p-4 w-full max-w-[500px] flex flex-col gap-2'>
                        <div className='relative text-white w-full flex-col flex items-center text-center bg-customBlue rounded-xl px-2 py-2'>
                            <h1 className='italic text-[14px]'>Name</h1>
                            <h1 className='text-[20px]'>Julius Matatag</h1>
                            <NavLink>
                                <IoIosArrowDown className='w-auto h-5 mt-2 hover:scale-125 transition-all'/>
                            </NavLink>
                        </div>
                        <div className='relative text-white w-full flex-col flex items-center text-center bg-customBlue rounded-xl px-2 py-2'>
                            <h1 className='italic text-[14px]'>Email Address</h1>
                            <h1 className='text-[20px]'>Julius_Matatag@gmail.com</h1>
                            <NavLink>
                                <IoIosArrowDown className='w-auto h-5 mt-2 hover:scale-125 transition-all'/>
                            </NavLink>
                        </div>
                        <NavLink className='relative text-white w-full flex-col flex items-center text-center bg-customBlue rounded-xl px-2 py-3 hover:scale-110 transition-all'>
                            <h1 className='text-[15px]'>Change Password</h1>
                        </NavLink>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default EditProfile