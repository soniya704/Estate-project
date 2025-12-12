import React from 'react'
import { Navbar } from './Navbar';
import { motion} from "framer-motion"

export const Header = () => {
  return (
    <div className='min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden' style={{ backgroundImage: "url('header_img.png')" }} id='Header'>
      <Navbar />
      <motion.div
      initial={{opacity: 0, y: 100}}
      transition={{duration: 1.5}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      className=' container mx-auto px-6 py-4 text-white md:px-20 lg:px-32 text-center'>
        <h2 className='text-5xl sm:6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-3'>Explores homes that fit your dreams</h2>
        <div className='space-x-6 mt-16'>
          <a href='#Projects' className='border border-white px-8 py-3 rounded'>Projects</a>
          <a href='#Contact' className='bg-blue-500 px-8 py-3 rounded'>contact Us</a>
        </div>
      </motion.div>

    </div>
  )
}
