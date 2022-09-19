import React from 'react'
import {motion} from 'framer-motion'
import { Content } from './objects/content'
import Image from 'next/image'
export default function Work(props) {
  return (
    <div className='pt-20'>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 } }} className='block'>
        <div className='relative'>
          <div className='relative shadow-2xl shadow-gray-700  rounded-3xl overflow-hidden'>
            <Image alt='this image shows previous work' src={props.mainImageUrl} width={1366} height={768} />
          </div>
        </div>
      </motion.div>
      <div className='scale-[.87]'>

        <div className='h-1 bg-gradient-to-r from-orange-600 to-blue-600 origin-[0%] scale-x-[0.1] mt-24'></div>

        <div className='flex space-y-4 justify-center items-center flex-row'>
          <div className='shrink w-[80%]'>

            <div>
              <h2 className='font-poppins font-extrabold text-5xl pt-10 pb-10'>{props.title}</h2>
              <p className='uppercase font-poppins pb-16 font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600'>{props.subheading}</p>
              <p className='pb-10 uppercase font-poppins font-semibold text-[20px] text-gray-400'>
                result
              </p>
              <p className=' font-poppins font-semibold pb-10 text-[20px]'>
                {props.content}
              </p>
            </div>
            <div>
              <p className='text-[20px] font-poppins font-extrabold uppercase text-gray-400'>Technologies <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600'>{props.tech}</span></p>
            </div>
          </div>
          <div className='overflow-hidden flex-grow'>
            <Image alt='previous work for mobile devices' src={props.secondImageUrl} width={700} height={700} />
          </div>

        </div>
      </div>

    </div>
  )
}
