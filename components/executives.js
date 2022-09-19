import React from 'react'
import Image from 'next/image'
export default function Executives() {
  return (
    <div className='p-32'>
        <h1 className="pb-16 sm:text-left text-center text-white font-poppins text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white ">LEADERSHIP BOARD</h1>
        <div className='flex flex-row justify-center space-x-7 pb-24'>
            <div className='rounded-full overflow-hidden w-[40vh] border-solid border-[#222] border-[10px] bg-[#ccc] height-[50vh]'>
                <Image alt='maaz asim co founder picture' width={300} height={300} objectFit='fill' src="/images/maaz_exec.webp"></Image>

            </div>
            <div className='w-[50vw]'>
                <h1 className='font-poppins font-extrabold text-5xl pb-5 '>MAAZ ASIM</h1>
                <h2 className='font-poppins font-extrabold text-2xl pb-5 text-orange-600'>CO FOUNDER</h2>
                <p className='font-poppins text-zinc-400 font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget facilisis sapien. Quisque lectus ante, volutpat vitae congue et, feugiat a justo. Praesent ac ante non dui dictum suscipit. Sed vitae maximus massa. Proin in nibh sed arcu dictum sagittis. Donec vitae eros in justo pretium laoreet sit amet ut ipsum. Sed bibendum ligula egestas, laoreet urna quis, maximus enim. Fusce scelerisque interdum libero, ac vestibulum nisl consectetur suscipit.</p>
            </div>

        </div>
        
        <div className='flex flex-row justify-center space-x-7'>
            <div className='w-[50vw]'>
                <h1 className='font-poppins font-extrabold text-5xl pb-5 '>SALMAAN ALI</h1>
                <h2 className='font-poppins font-extrabold text-2xl pb-5 text-orange-600'>CO FOUNDER</h2>
                <p className='font-poppins text-zinc-400 font-extralight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget facilisis sapien. Quisque lectus ante, volutpat vitae congue et, feugiat a justo. Praesent ac ante non dui dictum suscipit. Sed vitae maximus massa. Proin in nibh sed arcu dictum sagittis. Donec vitae eros in justo pretium laoreet sit amet ut ipsum. Sed bibendum ligula egestas, laoreet urna quis, maximus enim. Fusce scelerisque interdum libero, ac vestibulum nisl consectetur suscipit.</p>
            </div>
            <div className='rounded-full  flex justify-center items-center overflow-hidden w-[40vh] border-solid border-[#222] border-[10px] bg-[#ccc] height-[50vh]'>
                <Image alt='syed salman ali co founder picture' width={300} height={300} objectFit='fill' src="/images/salman_exec.webp"></Image>

            </div>

        </div>


    </div>
  )
}
