

import React from 'react'
import react from '/src/assets/images/react-2.svg'
import tailwind from '/src/assets/images/tailwind-css-2.svg'

function Footer() {
    return (
        <>
            <div className='flex flex-col items-center text-white mt-10 py-5'>
                <p className='text-white font-thin'>Built with: </p>


                <div className='flex items-center gap-5 '>
                    <div className='h-16 flex flex-col justify-center font-thin'>
                        <p><img className='w-7' src={react} alt="" /></p>
                        <p>React</p>
                    </div>
                    <div className=' h-16 flex flex-col justify-center pt-3 font-thin'>
                        <p><img className='w-7' src={tailwind} alt="" /></p>
                        <p>Tailwind</p>
                    </div>
                </div>

                <p className='text-gray-400 font-thin'>Creator: Daniel Ekema.</p>

            </div>
        </>
    )
}

export default Footer