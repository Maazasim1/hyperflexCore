import React, { useRef } from 'react'
import { postData } from '../lib/userdata/utils';

export default function FormModal(props) {

    //Form refernces

    const name=useRef();
    const email=useRef();

    const handlesubmit=(event)=>{
        event.preventDefault();

        const payload={
            name:name.current.value,
            email:email.current.value
        }

        async function sendData(payload){
            const response = await postData(payload);
            console.log(response);
            
        }

        sendData(payload);
        props.setShow(!props.show);
        

    }

    if (props.show) {
        return (
            <div className=' bg-black overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[100] w-full md:inset-0 h-modal md:h-full'>
                <button onClick={() => props.setShow(!props.show)} className='absolute right-7 top-7 text-3xl'>✖</button>
                <div className=''>
                    <div className="h-screen md:flex">
                        <div
                            className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-orange-600 to-blue-600 i justify-around items-center hidden">
                            <div>
                                <h1 className="text-white font-bold text-4xl font-sans">Hyperflex Core</h1>
                                <p className="text-white mt-1">A glimpse into the future</p>
                            </div>
                            <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                            <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                            <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                            <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                        </div>
                        <div className="flex md:w-1/2 justify-center py-10 items-center bg-black">
                            <form className="bg-black" onSubmit={handlesubmit}>
                                <h1 className="text-gray-400 font-bold text-2xl mb-1">Please fill the form below</h1>
                                <p className="text-sm font-normal text-gray-300 mb-7">A representative will contact you</p>
                                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <input ref={name} className="pl-2 outline-none border-none text-white bg-black" type="text" name="" id="" placeholder="Full name" required/>
                                </div>
                               
                                <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                    <input className="pl-2 outline-none border-none text-white bg-black" type="email" ref={email} name="" id="" placeholder="Email Address" required/>
                                </div>
                                
                                <button type="submit" className="block w-full bg-orange-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}