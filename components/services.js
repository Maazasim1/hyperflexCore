import React from 'react'
import { Content } from './objects/content'
import Image from 'next/image'
import {motion} from 'framer-motion';
import Showcase from './showcase';
export default function Services() {
    return (
        <div id='Services' className=''>

            <div className="flex justify-center sm:flex-row flex-col ">
                <div className='sm:px-36 pt-36 sm:pr-20 p-12'>
                    <h1 className="pb-10 sm:text-left text-center text-white font-poppins text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white ">SERVICES</h1>
                    <h2 className='pb-10 sm:text-left text-white font-poppins text-4xl sm:text-5xl font-bold'>Web Development</h2>
                    <p className="font-poppins text-[15px] sm:text-[20px] font-semibold text-left ">
                        {Content.website}
                    </p>
                </div>
                <div className='sm:flex-none pt-20'>
                    <Showcase />
                </div>
            </div>
            <div className="flex justify-center sm:flex-row flex-col ">
                <div className='sm:flex-none pt-0 sm:block hidden'>
                    <motion.div className='p-20' initial={{opacity:0}} whileInView={{opacity:1,transition:{duration:1}}}>
                        <Image alt='ios mockup of portfolio' src='/images/mockup_mobile_ios.webp' width={300} height={300}/>
                        <Image alt='android mockup of portfolio' src='/images/mockup_mobile_android.webp' width={150} height={300}/>

                    </motion.div>
                </div>
                <div className='sm:p-36 sm:pr-20 p-12'>
                    <h2 className='pb-10 text-left text-white font-poppins text-4xl sm:text-5xl font-bold'>App Development</h2>
                    <p className="font-poppins text-15px sm:text-[20px] font-semibold text-left ">
                        {Content.app}
                    </p>
                </div>
            </div>
            <div className="flex justify-center sm:flex-row flex-col">
                <div className='sm:px-36 sm:pr-20 p-10 mr-20'>
                    <h2 className='pb-10 text-left text-white font-poppins text-4xl sm:text-5xl font-bold'>Machine Learning and Data science</h2>
                    <p className="font-poppins sm:text-[20px] text-[15px] font-semibold text-left ">
                        {Content.machineLearningDatascience}
                    </p>
                </div>
                <div className='sm:flex-none pt-20 sm:block hidden'>
                    <motion.div className='px-20' initial={{opacity:0}} whileInView={{opacity:1,transition:{duration:1}}}>
                        <Image alt='a picture showing machine learning and artificial intelligence' src='/images/machineLearning.webp' width={400} height={400}/>

                    </motion.div>
                </div>
            </div>
            <div className="flex justify-center sm:flex-row flex-col ">
                <div className='sm:flex-none pt-20 sm:block hidden'>
                    <motion.div className='pl-20' initial={{opacity:0}} whileInView={{opacity:1,transition:{duration:1}}}>
                        <Image alt='a web app showing automation inside a company' src='/images/mockups_automate.webp' width={550} height={350}/>

                    </motion.div>
                </div>
                <div className='sm:px-36 sm:pr-20 p-10 mr-20'>
                    <h2 className='pb-10 text-left text-white font-poppins text-4xl sm:text-5xl font-bold'>Automation</h2>
                    <p className="font-poppins smLtext-[20px] text-[15px] font-semibold text-left ">
                        {Content.automation}
                    </p>
                </div>
            </div>
        </div>
    )
}
