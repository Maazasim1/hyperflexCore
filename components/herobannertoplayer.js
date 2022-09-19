import React, { useState } from 'react'
import { motion } from 'framer-motion'
import FormModal from './formModal';
export default function Herobannertoplayer() {
    const [show, setShow] = useState(false);


    const slogans = [
        "Agile",
        "Robust",
        "Design",
        "Automation",
        "Portable",
        "Engineering"
    ]


    const itemVariants = {
        initial: { x: "-100vw", opacity: 0 },
        animate: { x: 0, opacity: 1 },
    };

    return (
        <>
            <FormModal show={show} setShow={setShow} />
            <div className='z-10 font-poppins justify-center font-extrabold text-left items-center  w-full h-full relative pt-56 pl-32'>
                <h1 className='text-white text-6xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-700'>
                    A Glimpse Into The Future,
                </h1>
                <div className='mt-10 text-4xl h-10 overflow-hidden'>

                    <ul>
                        {
                            slogans.map((slogan, i) => {
                                return (
                                    <motion.li
                                        key={i}
                                        initial={{ y: 0 }}
                                        animate={{ y: [0, -170, 0] }}
                                        transition={{ ease: "linear", duration: 5, repeat: Infinity }}

                                    >
                                        {slogan}.
                                    </motion.li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='flex space-x-10 pt-36'>
                    <button className='font-mono bg-gradient-to-r from-orange-500 to-blue-700 p-5 rounded-lg text-white' onClick={() => setShow(!show)}>Book Free Consultation</button>


                </div>
            </div>
        </>
    )
}
