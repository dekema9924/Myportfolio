import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import { Fade } from "react-awesome-reveal";
import educationImg from '/src/assets/images/educationbg.png'

function Education() {
    return (
        <>
            <div className=' flex flex-col justify-center pb-10  '>
                <div className='flex items-center justify-center gap-20'>
                    <div className='flex flex-col  gap-4 items-center mt-4'>
                    <h1 className='text-4xl text-yellow-500 mt-20 text-center' style={{fontFamily: "Play"}}>Education</h1>
                        <Fade direction='right'>
                            <div className=' flex items-center gap-3 bg-[#d1dbdb]  w-96 h-32 rounded-lg'>
                                <div className='ml-3 w-16 h-16 text-center pt-4 rounded-full bg-yellow-500 '>
                                    <SchoolIcon />
                                </div>
                                <div className=''>
                                    <p className='text-[#18354b] text-lg '>2014-2018</p>
                                    <p className='font-bold'>Higher Secondary Education</p>
                                    <p className='font-thin text-gray-700'>Winston Churchill HighSchool</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade direction='left' delay={300}>
                            <div className='flex items-center gap-3 bg-[#d1dbdb]  w-96 h-32 rounded-lg'>
                                <div className='ml-3 w-16 h-16 text-center pt-4 rounded-full bg-yellow-500 '>
                                    <SchoolIcon />
                                </div>
                                <div className=''>
                                    <p className='text-[#18354b] text-lg '>2019-2021</p>
                                    <p className='font-bold'>Associates in Biology</p>
                                    <p className='font-thin text-gray-700'>San Antonio College</p>
                                </div>
                            </div>
                        </Fade>

                        <Fade direction='right' delay={400}>
                            <div className='flex items-center gap-3 bg-[#d1dbdb]  w-96 h-32 rounded-lg'>
                                <div className='ml-3 w-16 h-16 text-center pt-4 rounded-full bg-yellow-500'>
                                    <SchoolIcon />
                                </div>
                                <div className=''>
                                    <p className='text-[#18354b] text-lg'><span>2022-</span>Present</p>
                                    <p className='font-bold'>Bachelors of Technology</p>
                                    <p className='font-thin text-gray-700'>Kennesaw State University</p>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className='sm:hidden'>
                        <img className='w-96' src={educationImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education