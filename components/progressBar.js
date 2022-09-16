import React from 'react'
import {motion,useScroll} from 'framer-motion'

export default function Progress() {
    const {scrollYProgress}=useScroll();
    
  return (
    <>
        <motion.div
        className='fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-600 to-blue-600 origin-[0%] z-50'
         style={{scaleX:scrollYProgress}}/>

    </>
  )
}
