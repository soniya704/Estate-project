import React, { useEffect, useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { projectsData } from '../assets/assets';
import { motion} from "framer-motion"


export const Projects = () => {

    const [currectIndex, setCurrectIndex] = useState(0);
    const [cardToShow, setCardToShow] = useState(1)

    const nextProject = () => {
        setCurrectIndex((prevIndex) => (prevIndex + 1) % projectsData.length)

    }
    
    const prevProject = () => {
        setCurrectIndex((prevIndex) =>  prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)

    }

    useEffect(() => {
        const updateCardToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardToShow(projectsData.length)
            }else {
                setCardToShow(1)
            }
        }
            updateCardToShow()

            window.addEventListener('resize', updateCardToShow)
            return () =>  window.removeEventListener('resize', updateCardToShow)
        

    },[])
    return (
        <motion.div
        initial={{opacity:0, x: -200}}
        transition={{duration: 1}}
        whileInView={{opacity:1, x: 0}}
        viewport={{once: true}}
        
        className='container mx-auto px-6 my-20 py-4 pt-10 md:px-20 lg:px-32 overflow-hidden w-full' id='Projects'>
            <h1 className='text-2xl sm:text-4xl text-center mb-2 font-bold'>Projects
                <span className='underline underline-offset-4 decoration-1 under font-light'> Completed </span></h1>
            <p className='text-gray-500 text-center mb-8 mx-auto max-w-80'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

            {/* slider button*/}
            <div className='flex justify-end items-center mb-8 '>
                <button className='bg-gray-200 mr-2 p-3 rounded' aria-level='Previous project' onClick={prevProject}>
                    <FaChevronLeft />
                </button>
                <button className='bg-gray-200 mr-2 p-3 rounded' aria-level='Next project' 
                onClick={nextProject}>
                    <FaChevronRight />
                </button>
            </div>

            {/* project slider container */}

            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform: `translateX(-${(currectIndex * 100) / cardToShow}%)`}}>
                    {
                        projectsData.map((product, index) => (
                            <div key={index} className='w-full relative flex-shrink-0 sm:w-1/4'>
                                <img src={product.image} alt='' />
                                <div className='flex left-0 right-0 bottom-5 justify-center absolute'>
                                    <div className='inlne-block bg-white px-4 w-3/4 py-2 shadow-md'>
                                        <h1 className='text-xl font-semibold text-gray-800'>
                                            {product.title}
                                        </h1>
                                        <p className='text-gray-500 text-sm'>
                                            {product.price} <span className='px-1'>|</span>{product.location}
                                        </p>

                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>

        </motion.div>
    )
}
