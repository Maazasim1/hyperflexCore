import React from 'react'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className="flex flex-row p-10 px-16 sticky">
            <div className='flex justify-start flex-grow'>
                <Image

                    src="/images/Logo.png"
                    width={50}
                    height={50}
                />

                <a className='pl-10 pt-3 font-poppins font-extrabold'>
                    HYPERFLEX CORE
                </a>
            </div>
            <div className='flex justify-end'>

                <a className='pl-5 font-poppins font-extrabold'>
                    SERVICES
                </a>
                <a className='pl-5 font-poppins font-extrabold'>
                    PORTFOLIO
                </a>
                <a className='pl-5 font-poppins font-extrabold'>
                    CLIENTS
                </a>

            </div>



        </div>
    )
}
