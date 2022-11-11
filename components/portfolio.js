import React from 'react'
import { Content } from './objects/content'
import Work from './work'

export default function Portfolio() {

  return (
    <div id='Portfolio' className='sm:p-32 p-10'>
      <h1 className="sm:pb-28 pb-1 text-left  text-white font-poppins text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white ">PORTFOLIO</h1>
      <Work mainImageUrl='/images/car_portfolio.webp' secondImageUrl='/images/mockup_mobile_car.webp' title="CAR CLEANERS" content={Content.carcleaners} tech='React, NGINX, NODE.JS, GOOGLE CLOUD ,GOOGLE SCRIPT' subheading='Modern and edgy website for a pakistan based car cleaning startup'/>
      <Work mainImageUrl='/images/adlibitum.webp' secondImageUrl='/images/adlibitum_mobile.webp' title="ADLIBITUM" content={Content.adlibitum} tech='React, Nextjs, Vercel, Tailwind CSS' subheading='A very  fast and professional website for the folks at adlibitum'/>
      <Work mainImageUrl='/images/mechanic4u_desk.webp' secondImageUrl='/images/mechanic4u_mob.webp' title="MECHANIC4U" content={Content.mechanic4u} tech='React, Nextjs, Vercel, Tailwind CSS,GOOGLE SHEETS,GOOGLE CLOUD,GOOGLE ANALYTICS' subheading='A verY modern and minimalist website with very fast performance for mechanic4u'/>
      

    </div>
  )
}
