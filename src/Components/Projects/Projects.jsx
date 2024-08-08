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
           
                    <div onMouseOver={HandleHidden} onMouseOut={HandleMouseOut} className=' w-64 h-64 sm:w-40 sm:h-40  text-white p-1 sm:p-0'>
                        <img className='h-64 w-64 rounded-lg sm:w-40 sm:h-40 object-cover  hover:opacity-50 cursor-pointer' src={props.bg} alt="" />
                        <div style={{display: hidden ? "none": "flex"}} className='  flex border-2 gap-3 sm:justify-normal items-center justify-between relative bottom-16 overflow-hidden p-3 sm:p-1'>
                            <div className='leading-4'>
                                <p>{props.project}</p>
                                <p className='font-thin w-20 '>{props.tools}</p>
                            </div>
                            <div className='flex sm:flex-col mr-8'>
                                <a target='blank' href={props.code}><GitHubIcon /></a>
                                <a target='blank' href={props.preview}><VisibilityIcon /></a>
                            </div>
                        </div>
                    </div>

               
        </>
    )
}

export default Projects