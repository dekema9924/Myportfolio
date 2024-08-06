
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Fade } from "react-awesome-reveal";
import Skills from './Skills';
import Education from './Education';
import Projects from '../Projects/Projects';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
            <Fade direction='left'>
                <div className='m-auto text-white h-80 mt-20 w-11/12 text-center '>
                    <div className=' flex items-center justify-between gap-3 h-16  border-2 pl-5'>
                        <div className='flex gap-1'>
                            <div className='w-2 h-2 bg-red-600  rounded-full  border-black'></div>
                            <div className='w-2 h-2 bg-yellow-600 rounded-full  border-black'></div>
                            <div className='w-2 h-2 bg-green-600 rounded-full  border-black'></div>

                        </div>
                        <div className='mr-10 flex gap-3'>
                            <GitHubIcon className='cursor-pointer  hover:text-blue-800' />
                            <LinkedInIcon className='cursor-pointer text-white hover:text-blue-700' />
                        </div>

                    </div>

                    <div className='border-2 flex flex-col justify-center items-center h-full'>
                        <p className='text-4xl font-bold w-96 leading-10'>Hi, My Name is <span className='text-yellow-500'>Daniel</span></p>
                        <p className='font-semi-bold italic'>An Information Tech Student with a concentration in cybersecurity at <span>Kennesaw State University.</span> </p>
                        <p className='mt-3 text-balance font-semi-bold italic'>I'm passionate about tech life and creating web/mobile apps using the latest the technologies.</p>
                        <div className=' flex gap-4 mt-5'>

                            <button className=" w-30 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded relative">
                                View Resume
                            </button>
                        </div>
                    </div>
                </div>
            </Fade>
            <Education />
            <Skills />
            <h1 className='text-yellow-600 text-3xl text-center'>Projects</h1>
            <p className='text-blue-300 text-center'>Check out some of my personal projects</p>
            <div className='flex gap-16 flex-wrap justify-center sm:justify-start sm:p-5 sm:gap-5 mt-10'>
                <Projects
                    project="Project One"
                    tools="React"
                    code=""
                    preview=""
                />

                <Projects
                    project="Project One"
                    tools="React"
                    code=""
                    preview=""
                />

                <Projects
                    project="Project One"
                    tools="React"
                    code=""
                    preview=""
                />
                <Link className='text-white flex justify-center sm:justify-start h-16  sm:ml-5 mt-5 ' to={'/allprojects'}>
                    <button type="button" class="flex items-center gap-2  px-5 py-2 border-2 border-yellow-600 rounded-lg  hover:text-yellow-800 hover:bg-blue-300 transition-all delay-100">
                        Show More
                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </button>
                </Link>
            </div>



        </>

    )
}

export default Home