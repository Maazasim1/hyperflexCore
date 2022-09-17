import React from 'react'
import Reviewcards from './reviewcards'

export default function Clients() {
  return (
    <div id="Clients" className='p-32'>
        <h1 className="pb-28 sm:text-left text-center text-white font-poppins text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white ">
        TESTIMONIALS
        </h1>
    <div className='flex flex-row justify-center space-x-9'>

      <Reviewcards review="Hyperflex Core, was awesome to work with. they did exactly what they told me they would do and in a timely manner. I plan to work with them on many future projects." name="Ashley Joy" />
      <Reviewcards review="HyperFlex Core has done very good work - they put in the time and effort to deliver the best possible result." name="Ajdin Balihodzic" designation='Orior Media'/>
      <Reviewcards review="I gave hyperflex core a blank canvas to work on and they exceeded my expectaions." name="Syed Huzaifa Karim" designation='Car Cleaners'/>
      
    </div>


    </div>
  )
}
