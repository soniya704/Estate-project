import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { motion} from "framer-motion"


export const Contact = () => {

  const [result, setResult] = React.useState('')


  return (
    <motion.div
    initial={{opacity:0, x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    className='text-center w-full p-5 overflow-hidden lg:px-32 py-20' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Contact
        <span className='underline underline-offset-4 decoration-1 under font-light'> With Us </span></h1>
      <p className='text-gray-500 mx-auto mb-12 text-center max-w-80 '>Ready To Make a Move? Let's Build Your Future Together</p>

      <form className='max-w-2xl mx-auto pt-8 text-gray-700'>
        <div className='flex flex-wrap'>
          <div className='w-full md:w-1/2 text-left'>
            Your Name
            <input type='' placeholder='Your name' name='Name' className='w-full border border-gray-400 rounded px-4 mt-2 py-3' required />
          </div>

          <div className='w-full md:w-1/2 text-left md:pl-4 '>
            Your Email
            <input type='' placeholder='Your name' name='Email' className='w-full border border-gray-400 rounded px-4 mt-2 py-3' required />
          </div>
        </div>
        <div className='my-5 text-left'>
          Message
          <textarea name='Message' placeholder='Message' className='w-full border border-gray-400 rounded px-4 mt-2 py-3 h-48 resize-none'></textarea>
        </div>
        <button className='bg-blue-500 text-white mb-10 rounded px-12 py-2'>
          Send Message

        </button>
      </form>

    </motion.div>
  )
}
