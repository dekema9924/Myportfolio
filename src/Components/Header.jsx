import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Header() {

    const [isActive, setActive] = useState(true)

    const HandleClick = () => {
        setActive((prev) => !prev)
    }


    return (
        <>
            <header className='bg-black text-white flex items-center  justify-between h-16'>
                <div className='w-16 flex items-center justify-center '>
                    <img className='w-10 ml-10 ' src={logo} alt="logo" />
                </div>
                <nav>
                    <ul className='flex gap-14 sm:hidden'>
                    <li class="p-2 px-4 group cursor-pointer text-lg font-thin" href="#">
                            Home
                            <div class="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 "></div>
                        </li>
                        <li class="p-2 px-4 group cursor-pointer text-lg font-thin" href="#">
                            projects
                            <div class="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 "></div>
                        </li>
                        <li class="p-2 px-4 group cursor-pointer text-lg font-thin" href="#">
                            Contact
                            <div class="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 "></div>
                        </li>
                    </ul>
                    {
                        isActive ? <Box className='hidden sm:flex'> <MenuOpenIcon onClick={HandleClick} className='cursor-pointer mr-10' /></Box> :
                            <Box className='hidden sm:flex'><CloseIcon onClick={HandleClick} className='cursor-pointer mr-10' /></Box>

                    }
                </nav>
                <nav className='fixed hidden sm:flex items-center justify-center w-full h-96 top-16  bg-black transition-all delay-200 ' style={{ left: isActive ? "700px" : "0px" }}>
                    <ul className='flex gap-14 flex-col w-full justify-center items-center '>
                        <li class="p-2 px-4 group cursor-pointer text-lg font-thin" href="#">
                            Home
                            <div class="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 "></div>
                        </li>
                        <li class="p-2 px-4 group cursor-pointer text-lg font-thin" href="#">
                            projects
                            <div class="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 "></div>
                        </li>
                        <li class="p-2 px-4 group cursor-pointer text-lg font-thin" href="#">
                            Contact
                            <div class="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 "></div>
                        </li>

                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Header