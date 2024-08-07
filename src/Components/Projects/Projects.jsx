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
                        <img className='h-64 w-64 rounded-lg sm:w-52 sm:h-52 object-cover  hover:opacity-50 cursor-pointer' src={props.bg} alt="" />
                        <div style={{display: hidden ? "none": "flex"}} className='  flex justify-between items-center relative  w-60 bottom-16 overflow-hidden p-3 '>
                            <div className='leading-4'>
                                <p>{props.project}</p>
                                <p className='font-thin '>{props.tools}</p>
                            </div>
                            <div className='flex gap-2 mr-8'>
                                <a target='blank' href={props.code}><GitHubIcon /></a>
                                <a target='blank' href={props.preview}><VisibilityIcon /></a>

                            </div>
                        </div>
                    </div>

               
        </>
    )
}

export default Projects