import React from 'react'
import { Fade } from "react-awesome-reveal";


function About() {
  return (
    <>
    <Fade fraction={0}>

        <div className='flex items-center sm:flex-col gap-3 mt-10'>
                <img className='w-fit p-3' src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTJqczQ5MWl3ZmY3dGtpa3ZlaWEwZTRpdmwxMW9sdXFrNDY4NWtybSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Y4ak9Ki2GZCbJxAnJD/giphy.webp" alt="gif" />
            <div>
            <h1 className='text-3xl font-semibold text-center'>Who am I</h1>
                <div className='flex flex-col gap-5 sm:p-5'>
                    <p className='w-96'>My name's Daniel and I am an Information Tech Student with a concentration in cyberSecurity at <span className='text-yellow-600'>Kennesaw State University</span></p>
                    <p>During the day, I work on projects and in the evenings, I spend my time playing football⚽️ at a local park.
                       Right now, I am learning React and some react frameworks. 
                    </p>
                </div>
            </div>
        </div>
    </Fade>

    </>
  )
}

export default About