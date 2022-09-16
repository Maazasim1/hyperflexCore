import React from 'react'
import Image from 'next/image'

export default function Portfolio() {
  return (
    <div className='p-32'>
        <h1 className="pb-28 sm:text-left text-center text-white font-poppins text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-white ">PORTFOLIO</h1>
        <div className=' rounded-3xl overflow-hidden'>
            <Image src='/images/car_portfolio.webp' width={1366} height={768}/>
        </div>

    </div>
  )
}
