import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div >
            <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
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
                    <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
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
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link href="https://hyperflexcore.com/"><a className="hover:underline">Hyperflex Core™</a></Link>. All Rights Reserved.
                </span>
            </footer>
        </div>
    )
}
