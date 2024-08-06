import React from 'react'
import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';

function Projects(props) {
    const [hidden, setHidden] = useState(true);

    const HandleHidden = () => {
        setHidden(false)
    }
    const HandleMouseOut = () => {
        setHidden(true)
    }


    return (
        <>
           
                    <div onMouseOver={HandleHidden} onMouseOut={HandleMouseOut} className=' w-64 h-64 sm:w-52 sm:h-52  text-white'>
                        <img className='h-64 w-64 rounded-lg sm:w-52 sm:h-52 object-cover  hover:opacity-50 cursor-pointer' src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div style={{display: hidden ? "none": "flex"}} className='  flex justify-between items-center relative  w-60 bottom-16 overflow-hidden p-3 '>
                            <div className='leading-4'>
                                <p>{props.project}</p>
                                <p className='font-thin '>{props.tools}</p>
                            </div>
                            <div className='flex gap-2 mr-8'>
                                <a href={props.code}><GitHubIcon /></a>
                                <a href={props.preview}><VisibilityIcon /></a>

                            </div>
                        </div>
                    </div>

               
        </>
    )
}

export default Projects