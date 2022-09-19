import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <div >
            <footer className="p-4 bg-zinc-800 rounded-lg shadow md:px-6 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">



                    <div className='p-32'>
                        <h1 className=' font-poppins font-extrabold text-3xl pb-3'>
                            Karachi,Pakistan
                        </h1>
                        <p className='font-poppins font-bold'>
                            +92 311 2286006

                        </p>
                        <Link href='mailto:mazzasimq1@gmail.com'>
                            <a className='hover:text-orange-600'>
                                mazzasimq1@gmail.com
                            </a>
                        </Link>


                    </div>
                    <div className='overflow-hidden flex-shrink-0'>
                        <Image alt='picture of a map showing current location of company' src='/images/map.webp' height={600} width={650} />
                    </div>
                        <span className="flex h-3 w-3 relative -top-[4.5rem] right-[13.2rem] z-50">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                        </span>
                    <ul className="flex flex-wrap items-center mb-6 text-sm  sm:mb-0 text-gray-400">
                        <li>
                            <Link href='#Services'>
                                <a className="mr-4 hover:underline md:mr-6 ">Services</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#Portfolio'>
                                <a className="mr-4 hover:underline md:mr-6">Portfolio</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#Clients'>
                                <a className="mr-4 hover:underline md:mr-6 ">Clients</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
                <span className="block text-sm  sm:text-center text-gray-400">© 2022 <Link href="https://hyperflexcore.com/"><a className="hover:underline">Hyperflex Core™</a></Link>. All Rights Reserved.
                </span>
            </footer>
        </div>
    )
}
