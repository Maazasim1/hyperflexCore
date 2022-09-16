import React from 'react'
import { Content } from './objects/content'
import Showcase from './Showcase'

export default function Services() {
    return (
        <div className=''>

            <div className="flex w-full h-full self-center content-center justify-center sm:flex-row flex-col ">
                <div className='sm:p-36 sm:pr-20 p-10'>
                    <h1 className="pb-10 sm:text-left text-center text-white font-poppins text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white ">SERVICES</h1>
                    <h4 className='pb-10 sm:text-left text-white font-poppins text-5xl font-bold'>Web Development</h4>
                    <p className="font-poppins text-[20px] font-semibold text-center sm:text-left ">
                        {Content.website}
                    </p>
                </div>
                <div className='sm:flex-none pt-20'>
                    <Showcase />
                </div>
            </div>
            <div className="flex w-full h-full self-center content-center justify-center sm:flex-row flex-col ">
                <div className='sm:flex-none pt-20'>
                    <Showcase />
                </div>
                <div className='sm:p-36 sm:pr-20 p-10'>
                    <h4 className='pb-10 sm:text-left text-white font-poppins text-5xl font-bold'>App Development</h4>
                    <p className="font-poppins text-[20px] font-semibold text-center sm:text-left ">
                        {Content.app}
                    </p>
                </div>
            </div>
        </div>
    )
}
