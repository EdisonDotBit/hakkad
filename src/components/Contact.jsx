import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

 function Contact() {
  return (
    <>
  
    <div className="flex flex-col bg-gray-50 font-['Roboto'] dark:bg-gray-900 dark:border-[#e5e7eb]">
      <div className="flex justify-center p-5">
        <NavLink to="/Home"><img src={logo} alt="logo" className="w-auto h-[100px]" /></NavLink>
      </div>
        
      <div className="flex flex-col p-[5px] space-y-4">
        <h1 className="text-center text-4xl font-bold leading-tight tracking-tight text-gray-700 dark:text-white">Send us a message</h1>
        <p className="text-center text-xl text-gray-700 dark:text-white">We appreciate your feedback.</p>
      </div>

      <div className="space-y-4 w-full flex justify-center">
        <form action="#" className="flex flex-col p-6 space-y-4 xsm:w-screen sm:w-1/3">
          <input type="text" placeholder="Name" className="text-" required/>
          <input type="email" placeholder="Email" className="" required/>
          <textarea name="" id="" cols="30" rows="5" placeholder="Message" required></textarea>
          <button className="bg-blue-700 text-xl p-2 text-orange-100 hover:bg-gray-700">Send</button>
        </form>
      </div>
    </div>

    </>
  )
}

export default Contact;