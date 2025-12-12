import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

export const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if(showMobileMenu) {
      document.body.style.overflow = 'hidden'
    }else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }

  },[showMobileMenu])
  return (
    <div className='top-0 left-0 w-full absolute z-10'>
      <div className='container mx-auto flex items-center justify-between px-6 py-4 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt='' />
        <ul className='hidden md:flex gap-7 text-white'>
          <a href='#Header' className='hover:text-gray-400 cursor-pointer'>Home</a>
          <a href='#About' className='hover:text-gray-400 cursor-pointer'>About</a>
          <a href='#Projects' className='hover:text-gray-400 cursor-pointer'>Projects</a>
          <a href='#Testimonials' className='hover:text-gray-400 cursor-pointer'>Testimonials</a>
        </ul>
        <button className='hidden md:block px-8 rounded-full py-2 bg-white text-black'>
          Sign Up</button>
        <RiMenu3Line className='md:hidden text-2xl text-white cursor-pointer' onClick={() => setShowMobileMenu(true)}/>
      </div>

      {/*-------- sisebar menu --------*/}

      <div className={`md:hidden ${showMobileMenu ? 'w-full fixed' : 'h-0 w-0'} fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all`} onClick={() => setShowMobileMenu(false)}>
        <div className='flex justify-end p-6'>
          <RxCross2 className=' text-4xl cursor-pointer'/>

        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-4 text-lg font-medium '>
        <a href='#Home' className='px-4 py-2 rounded-full inline-block' 
        onClick={() => setShowMobileMenu(false)}>Home</a>
        <a href='#About' className='px-4 py-2 rounded-full inline-block'  onClick={() => setShowMobileMenu(false)}>About</a>
        <a href='#Projects' className='px-4 py-2 rounded-full inline-block'  onClick={() => setShowMobileMenu(false)}>Projects</a>
        <a href='#Testimonals' className='px-4 py-2 rounded-full inline-block'  onClick={() => setShowMobileMenu(false)}>Testimonials</a>
        </ul>
      </div>

    </div>
  )
}
