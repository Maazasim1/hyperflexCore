import React from 'react'
import { Content } from './objects/content'
import Showcase from './Showcase'

export default function Services() {
    return (
        <div className="flex justify-center align-middle">
            <div className='p-36 pr-20'>

                <h1 className="pb-10 text-white font-poppins text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white ">SERVICES</h1>
                <p className="font-poppins text-[20px] font-bold  text-left ">
                    {Content.website}
                </p>
            </div>
            <div className='flex-none pt-20'>
                <Showcase />

            </div>

        </div>
    )
}
