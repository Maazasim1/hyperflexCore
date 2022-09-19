import React, { useState } from "react";
import { Content } from "./objects/content";
import { motion } from 'framer-motion'
import Image from "next/image";
export default function Showcase(props) {





  return (
   <div className="sm:p-20 px-5 sm:pt-25 sm:block hidden">   
      <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{duration:1}}} className="grid justify-center">

      <div className="grid grid-cols-1 row-start-1 col-start-1">
    <div className='max-w-[95%]  z-20 row-start-1 col-start-1'>

        <Image alt='desktop showcase' src='/images/mockups.webp'  height={350} width='550px'  />
    </div>
        <div className="h-[278px] w-[412px] z-10 overflow-hidden row-start-1 col-start-1 mt-5 ml-16 max-h-[90%] max-w-[73%]" >
          <motion.div animate={{ y: [0, -600, 0] }} transition={{ ease: "linear", duration: 50, repeat: Infinity }}>
          <Image alt='previous desktop site full screenshot'   src='/images/elecbrakes.webp' height='2400px' width='400px' />

          </motion.div>

        </div>
      </div>
      
      
      <div className="grid grid-cols-1 row-start-1 col-start-1 z-40 ml-48">
      <div className='z-40 row-start-1 col-start-1'>
        <Image alt='mobile showcase to show previous work' src='/images/mockup_mobile.webp' height={350} width='350px'   />
      </div>
        <div className="rounded-2xl row-start-1 col-start-1 h-[290px] w-[134px] z-30 overflow-hidden mt-8 ml-[108.5px]" >
          <motion.div animate={{ y: [0, -600, 0] }} transition={{ ease: "linear", duration: 50, repeat: Infinity }}>
            <Image alt='previous mobile website full screenshot'   src='/images/elecbrakes_mobile.webp' height={2300} width={350} />

          </motion.div>

        </div>
      </div>
      </motion.div>
    </div>
  );
}
