import React, { useState } from "react";
import { Content } from "./objects/content";
import { motion } from 'framer-motion'

export default function Showcase(props) {





  return (
   <div className="p-20">   
      <motion.div initial={{opacity:0}} whileInView={{opacity:1,transition:{duration:1}}} className="grid justify-center">

      <div className="grid grid-cols-1 row-start-1 col-start-1">

        <img src='/images/mockups.png'  height='250px' width='550px' className='max-w-[95%]  z-40 row-start-1 col-start-1' />
        <div className="h-[278px] w-[412px] z-30 overflow-hidden row-start-1 col-start-1 mt-5 ml-16 max-h-[90%] max-w-[73%]" >
          <motion.img animate={{ y: [0, -600, 0] }} transition={{ ease: "linear", duration: 50, repeat: Infinity }}  src='/images/elecbrakes.webp' height='2300px' width='550px' />

        </div>
      </div>
      
      
      <div className="grid grid-cols-1 row-start-1 col-start-1 z-40 ml-48">

        <img src='/images/mockup_mobile.png' height='150px' width='350px'  className='z-40 row-start-1 col-start-1' />
        <div className="rounded-2xl row-start-1 col-start-1 h-[290px] w-[134px] z-30 overflow-hidden mt-8 ml-[110px]" >
          <motion.img animate={{ y: [0, -600, 0] }} transition={{ ease: "linear", duration: 50, repeat: Infinity }}  src='/images/elecbrakes_mobile.webp' height={2300} width={350} />

        </div>
      </div>
      </motion.div>
    </div>
  );
}
