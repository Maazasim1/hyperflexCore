import React,{useState} from 'react'
import Image from 'next/image'

export default function FormModal(props) {

  if(props.show)
  {
    return(
        <div className=' bg-black overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[100] w-full md:inset-0 h-modal md:h-full'>
            <button onClick={()=>props.setShow(!props.show)} className='absolute right-7 top-7 text-3xl'>✖</button>
            <div className='flex opacity-100 flex-row  justify-center items-center align-middle'>
                <div className='flex mt-[15vh] rounded-md w-[70vw] h-[80vh] bg-red-700'>
                    <div className='bg-white flex-1'>
                        <form>
                            <input></input>
                        </form>
                    </div>
                    <div className='bg-white flex-1 overflow-hidden'>
                        <Image src='/images/deal.webp' height={960} width={640}/>
                    </div>

                </div>
            </div>


        </div>
    )
  }
}
