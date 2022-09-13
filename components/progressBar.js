import React from 'react'
import {motion,useScroll} from 'framer-motion'

export default function Progress() {
    const {scrollYProgress}=useScroll();
    
  return (
    <>
        <motion.div
        className='fixed top-0 left-0 right-0 h-2 bg-orange-500 origin-[0%]'
         style={{scaleX:scrollYProgress}}/>

    </>
  )
}
