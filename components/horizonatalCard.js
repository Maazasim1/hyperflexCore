import React from 'react'
import Image from 'next/image'

export default function HorizonatalCard(props) {
    return (
        <div>
            <a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={props.location} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{props.heading}</h5>
                    <p className="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">{props.text}</p>
                </div>
            </a>
        </div>
    )
}
