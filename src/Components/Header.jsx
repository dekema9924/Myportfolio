import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function Header() {

    const [isActive, setActive] = useState(true)
    const HandleClick = () => {
        setActive((prev) => !prev)
    }


    return (
        <>
            <header className='bg-[#145da0] flex items-center text-white fixed  top-0 w-full bottom-30 justify-between h-16 z-50'>
                <div className='w-16 flex items-center justify-center '>
                    <img className='w-10 ml-10 ' src={logo} alt="logo" />
                </div>
                <nav>
                    <ul className='flex gap-14 sm:hidden'>
                        <Link to={'/'} className="p-2 px-4 group cursor-pointer text-lg font-thin" >
                            Home
                            <div className="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 "></div>
                        </Link>
                        <Link to={'/allprojects'} className="p-2 px-4 group cursor-pointer text-lg font-thin" >
                            projects
                            <div className="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 "></div>
                        </Link>
                        <Link to={'/about'} className="p-2 px-4 group cursor-pointer text-lg font-thin" >
                            About
                            <div className="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 "></div>
                        </Link>
                    </ul>
                    {
                        isActive ? <Box className='hidden sm:flex'> <MenuOpenIcon onClick={HandleClick} className='cursor-pointer mr-10' /></Box> :
                            <Box className='hidden sm:flex'><CloseIcon onClick={HandleClick} className='cursor-pointer mr-10' /></Box>
                    }
                </nav>
                <nav className='fixed hidden text-white sm:flex items-center justify-center w-full h-96 top-16 z-50  bg-[#145da0] transition-all delay-200 ' style={{ left: isActive ? "700px" : "0px" }}>
                    <ul className='flex gap-14 flex-col w-full justify-center items-center '>
                        <Link onClick={()=>setActive(true)} to={'/'} className="p-2 px-4 group cursor-pointer text-lg font-thin">
                            Home
                            <div className="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 "></div>
                        </Link>
                        <Link onClick={()=>setActive(true)}  to={'/allprojects'} className="p-2 px-4 group cursor-pointer text-lg font-thin" >
                            projects
                            <div className="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 "></div>
                        </Link>
                        <Link to={'/about'} onClick={()=>setActive(true)} className="p-2 px-4 group cursor-pointer text-lg font-thin" >
                            About
                            <div className="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 "></div>
                        </Link>

                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Header