import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div>
            <div className='fixed top-0 w-full z-50'>

                <div className="w-[100vw] flex flex-row p-10 px-16 sticky z-50">
                    <div className='flex justify-start flex-grow'>
                        <Image

                            src="/images/Logo.webp"
                            width={64}
                            height={60}
                            alt='hyperflex core logo'
                        />

                        <a href='#' className='pl-10 pt-3 font-poppins font-extrabold'>
                            HYPERFLEX CORE
                        </a>
                    </div>
                    <div className='flex justify-end'>
                        <Link href='#Services'>

                        <a  className='pt-4 pl-5 font-poppins font-extrabold cursor-pointer'>
                            SERVICES
                        </a>
                        
                        </Link>
                        <a href='#Portfolio' className='pt-4 pl-5 font-poppins font-extrabold'>
                            PORTFOLIO
                        </a>
                        <a href='#Clients' className='pt-4 pl-5 font-poppins font-extrabold'>
                            CLIENTS
                        </a>
                        <a href='#Consultation' className=' bg-gradient-to-r from-orange-500 to-blue-700 p-4 ml-14  rounded-md text-white font-mono font-bold'>
                            Book Free Consultation
                        </a>

                    </div>




                </div>
            </div>

            <span className="flex h-3 w-3 fixed top-9 right-11 z-50">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
        </div>
    )
}
