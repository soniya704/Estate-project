import React from 'react'
import { assets } from '../assets/assets';

export const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-800 w-full overflow-hidden' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <img src={assets.logo_dark} alt='' />
                    <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ad commodi autem laboriosam quibusdam voluptate delectus sed odit, a magnam, voluptatum, aliquam libero amet voluptatem soluta tempora. Commodi, consequatur eligendi.</p>

                </div>
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-500'>
                        <a href='#Header' className='hover:text-white'>Home</a>
                        <a href='#About' className='hover:text-white'>About</a>
                        <a href='#Contact' className='hover:text-white'>Contact Us</a>
                        <a href='#' className='hover:text-white'>Privecy Policy</a>
                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                 <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsltter</h3>
                 <p className='text-gray-400 mb-4 max-w-80'>The latest news articles and resources, sent to your inbox weekly</p>
                 <div>
                    <input type='email' placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto'/>
                    <button className='bg-blue-500 text-white px-4 rounded py-2'>Subscribe</button>
                 </div>

                </div>

            </div>
            <div className='border-t border-gray-700 text-center text-gray-500 py-4 mt-10'>
                Copyright 2025 @ Greatstack. All Right Reserved.
            </div>
        </div>
    )
}
