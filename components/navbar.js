import React from 'react'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div>
            <div className='fixed top-0 w-full z-10'>

                <div className="w-[100vw] flex flex-row p-10 px-16 sticky z-10">
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

                        <a className='pt-4 pl-5 font-poppins font-extrabold'>
                            SERVICES
                        </a>
                        <a className='pt-4 pl-5 font-poppins font-extrabold'>
                            PORTFOLIO
                        </a>
                        <a className='pt-4 pl-5 font-poppins font-extrabold'>
                            CLIENTS
                        </a>
                        <a className='bg-gradient-to-r from-orange-500 to-blue-700 p-4 ml-14  rounded-md text-white font-poppins font-bold'>
                            Book Consultation
                        </a>

                    </div>




                </div>
            </div>

            <span className="flex h-3 w-3 fixed top-9 right-11 z-10">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
        </div>
    )
}
