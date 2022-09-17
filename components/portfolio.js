import React from 'react'
import { Content } from './objects/content'
import Work from './work'

export default function Portfolio() {

  return (
    <div id='Portfolio' className='p-32'>
      <h1 className="pb-28 sm:text-left text-center text-white font-poppins text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white ">PORTFOLIO</h1>
      <Work mainImageUrl='/images/car_portfolio.webp' secondImageUrl='/images/mockup_mobile_car.webp' title="CAR CLEANERS" content={Content.carcleaners} tech='React, NGINX, NODE.JS, GOOGLE CLOUD ,GOOGLE SCRIPT' subheading='Modern and edgy website for a pakistan based car cleaning startup'/>
      <Work mainImageUrl='/images/adlibitum.webp' secondImageUrl='/images/adlibitum_mobile.webp' title="ADLIBITUM" content={Content.adlibitum} tech='React, Nextjs, Vercel, Tailwind CSS' subheading='A very  fast and professional website for the folks at adlibitum'/>
      

    </div>
  )
}
