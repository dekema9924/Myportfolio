
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ScrollAnimation from 'react-animate-on-scroll';
import { Fade } from "react-awesome-reveal";


function Home() {
    return (
        <>
            <Fade direction='left'>
                <div className='m-auto  h-80 mt-3 w-11/12 text-center '>
                    <div className=' flex items-center gap-3 border-2 pl-5'>
                        <div className='flex gap-1'>
                            <div className='w-2 h-2 bg-red-600  rounded-full  border-black'></div>
                            <div className='w-2 h-2 bg-yellow-600 rounded-full  border-black'></div>
                            <div className='w-2 h-2 bg-green-600 rounded-full  border-black'></div>

                        </div>
                        <hr className='w-16 border-2  border-black border-t-0' />
                        <div>
                            <GitHubIcon className='cursor-pointer  hover:text-blue-800' />
                            <LinkedInIcon className='cursor-pointer text-blue-800 hover:text-black' />
                        </div>

                    </div>

                    <div className='border-2 flex flex-col justify-center items-center h-full'>
                        <p className='text-4xl font-bold w-96 leading-10'>Hi, My Name is <span className='text-blue-800'>Daniel</span></p>
                        <p className='font-semi-bold italic text-green-900'>Web Developer</p>
                        <div className=' flex gap-4 mt-5'>
                      
                            <button class=" w-30 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                View Resume
                            </button>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default Home