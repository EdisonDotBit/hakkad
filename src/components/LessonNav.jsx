import logo from '../assets/iconpng.png'
import React, { useState } from 'react';
import Beginner from "../assets/badge1.png";
import { NavLink } from 'react-router-dom';

function LessonNav() {
    const [profileEditDisplayed, setProfileEditDisplayed] = useState(false);
    const toggleProfileEdit = () => {
        setProfileEditDisplayed(!profileEditDisplayed);
    };

    return (
    <section>
        <div className='flex bg-white relative items-center py-3 px-[100px] z-10 font-inter'>
            <div className=''>
                <img src={logo} alt="logo" className='h-auto w-[80px]'/>
            </div>

            <div className='flex gap-10 ml-5'>
                <NavLink to="/Student" className='text-[14px]'>Dashboard</NavLink>
                <NavLink to="/Student/Quiz" className='text-[14px]'>Quiz</NavLink>
                <NavLink to="/Student/Leaderboard" className='text-[14px]'>Leaderboard</NavLink>
            </div>
            <div className="absolute top-0 h-full items-center right-[100px] flex">

                <a href="" className={`flex items-center bg-[#EBF3FF] py-1 px-5 rounded-full mr-3 ${
                    location.pathname == "/Student/Quiz"
                      ? "hidden"
                      : "flex"
                }`}
                >   
                  <p className="font-medium text-[#0F57C1] mr-2">81 pts</p>
                  <img src={Beginner} alt="badges" className="w-auto h-10" />
                </a>
                
                <div className="relative text-center">
                  <div className={profileEditDisplayed ? "bg-white border border-customBlue py-2 px-2 absolute top-[5vh] right-0 rounded-xl" : "hidden"}>
                    <h1 className="text-2xl font-medium mb-2 text-customBlue">Hi Julius!</h1>
                    <button className="bg-customBlue text-white p-5 w-[200px] shadow-2xl rounded-lg text-[13px]">Edit Profile</button>
                  </div>
                  <a href="#" className="relative bg-[#0F57C1] p-2 px-4 text-xl font-bold text-white rounded-full" onClick={toggleProfileEdit}>J</a>
                </div>
              </div>
        </div>  
    </section>
    )
}

export default LessonNav