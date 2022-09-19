import React from 'react'
import Image from 'next/image'
export default function Executives() {
  return (
    <div className='p-32'>
        <h1 className="pb-16 sm:text-left text-center text-white font-poppins text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white ">LEADERSHIP BOARD</h1>
        <div className='flex flex-row justify-center space-x-7 pb-24'>
            <div className='self-center rounded-full overflow-hidden w-[40vh] border-solid border-[#222] border-[10px] bg-[#ccc] height-[50vh]'>
                <Image alt='maaz asim co founder picture' width={300} height={300} objectFit='fill' src="/images/maaz_exec.webp"></Image>

            </div>
            <div className='w-[50vw]'>
                <h1 className='font-poppins font-extrabold text-5xl pb-5 '>MAAZ ASIM</h1>
                <h2 className='font-poppins font-extrabold text-2xl pb-5 text-orange-600'>CO FOUNDER</h2>
                <p className='font-poppins text-zinc-400 font-extralight'>At Hyperflex-Core, we see digital solutions as a means to improve all areas of our lives. We strive to deliver the best results for our customers, make a big difference in our digital services, and provide maximum ease of use.

Our approach is simple. We focus on listening to our clients' needs and ideas, providing strategic and people-centered advice to improve their ideas, and delivering the highest quality results.

Ultimately, we are your trusted partner. Avoid unnecessary technical details. We act as a reassuring link between your software and your business. Bring your organization closer to your customers through advanced digitization.</p>
            </div>

        </div>
        
        <div className='flex flex-row justify-center space-x-7'>
            <div className='w-[50vw]'>
                <h1 className='font-poppins font-extrabold text-5xl pb-5 '>SALMAAN ALI</h1>
                <h2 className='font-poppins font-extrabold text-2xl pb-5 text-orange-600'>CO FOUNDER</h2>
                <p className='font-poppins text-zinc-400 font-extralight'>I founded Hyperflex Core with a clear goal. It is a company that brings software and people closer by developing solutions optimized for ease of use. It facilitates any task or process, requirement or problem.
Having worked in the smart user IT field for many years, I always envisioned what I would like my software to look like if I were the user. This allowed me to align my design thinking with the user's point of view. My goal has always been to create the most efficient, easy to use and aesthetically pleasing software solutions.
I instilled this vision into Hyperflex Core and helped make people's lives easier on a larger scale. We know how difficult it can be to manage files and keep track of information on a piece of paper. Without the adoption of digital tactics, it is almost impossible to monitor consumer engagement and focused goals. To serve businesses through efficient systems, our team is committed to helping businesses We are committed to harnessing the potential of automated digital communication that allows us to collaborate while browsing the web. There are many services available to help you organize and manage your data.</p>
            </div>
            <div className='self-center rounded-full  flex justify-center items-center overflow-hidden w-[40vh] border-solid border-[#222] border-[10px] bg-[#ccc] height-[50vh]'>
                <Image alt='syed salman ali co founder picture' width={300} height={300} objectFit='fill' src="/images/salman_exec.webp"></Image>

            </div>

        </div>


    </div>
  )
}
