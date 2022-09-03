import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='fixed -left-16 top-64 -rotate-90'>

    <div  className='flex  justify-center space-x-5'>
        <Link href="https://www.linkedin.com/company/hyperflex-core/">
            <a className='text-xs hover:bg-white p-2 hover:text-black' target='_blank'>
            LINKEDIN
            </a>
        </Link>
        <Link href="mailto:mazzasimq1@gmail.com" >
            <a target='_blank' className='text-xs hover:bg-white p-2 hover:text-black'>
            EMAIL
            </a>
        </Link>
        <Link href="https://www.linkedin.com/company/hyperflex-core/" >
            <a target='_blank' className='text-xs hover:bg-white p-2 hover:text-black'>
            FACEBOOK
            </a>
        </Link>


    </div>
    </div>
  )
}
