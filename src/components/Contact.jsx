import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import Navigation from "./Navigation"

 function Contact() {
  return (
    <section>
    <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <Navigation/>
    <div className="flex flex-col py-20  font-['Roboto'] dark:bg-gray-900 dark:border-[#e5e7eb]">        
      <div className="flex flex-col p-[5px] space-y-4">
        <h1 className="text-center text-4xl font-bold leading-tight tracking-tight text-gray-700 dark:text-white">Send us a message</h1>
        <p className="text-center text-xl text-gray-700 dark:text-white">We appreciate your feedback.</p>
      </div>

      <div className="space-y-4 w-full flex justify-center">
        <form action="#" className="flex flex-col p-6 space-y-4 xsm:w-screen sm:w-1/3">
          <input type="text" placeholder="Name" className="text-"/>
          <input type="text" placeholder="Email" className="" />
          <textarea name="" id="" cols="30" rows="5" placeholder="Message"></textarea>
          <button className="bg-blue-700 text-xl p-2 text-orange-100 hover:bg-gray-700">Send</button>
        </form>
      </div>
    </div>

    </section>
  )
}

export default Contact;