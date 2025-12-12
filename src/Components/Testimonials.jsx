import React from 'react'
import { assets, testimonialsData } from '../assets/assets';
import { motion} from "framer-motion";

export const Testimonials = () => {
  return (
    <motion.div
    initial={{opacity:0, x:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl text-center mb-2 font-bold'>Customer 
            <span className='underline underline-offset-4 decoration-1 under font-light'> Testimonials </span></h1>
        <p className='text-gray-500 text-center mx-auto mb-12 max-w-80'>Real Stories From Those who Found Home With Us</p>
        <div className='flex flex-wrap justify-center gap-8'>
            {testimonialsData.map((testimonial, index) => (
                <div key={index} className='max-w-[300px]  shadow-2xl rounded px-8 py-12 text-center'>
                    <img src={testimonial.image} alt='testimonial.alt' className='w-20 h-20 mx-auto rounded-full mb-4'/>
                    <h2 className='text-xl text-gray-800 font-medium'>{testimonial.name}</h2>
                    <p className='text-gray-500 text-sm mb-4'>{testimonial.title}</p>
                    <div className='text-red-500 flex justify-center mb-4 gap-1'>
                        {
                            Array.from({length: testimonial.rating}, (item, index) => (
                                <img key={index} src={assets.star_icon} alt='' />

                            ))
                        }
                    </div>
                    <p className='text-gray-700'>{testimonial.text}</p>
                </div>
            ))}
        </div>
    </motion.div>
  )
}
