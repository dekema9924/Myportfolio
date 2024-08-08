import React from 'react'
import git from '/src/assets/images/git-icon.svg'
import js from '/src/assets/images/logo-javascript.svg'
import mongodb from '/src/assets/images/mongodb-icon-1.svg'
import mysql from '/src/assets/images/mysql-3.svg'
import nodejs from '/src/assets/images/nodejs-2.svg'
import react from '/src/assets/images/react-2.svg'
import tailwind from '/src/assets/images/tailwind-css-2.svg'
import vite from '/src/assets/images/vite.svg'
import skillsimg from '/src/assets/images/skillsimg.png'
import github from '/src/assets/images/github.svg'





function Skills() {
    return (
        <div>
            <h1 className='text-3xl text-yellow-500 text-center mt-5' style={{fontFamily: "Play"}}>Tools & Platforms</h1>
            <div className='flex flex-row-reverse justify-around  text-white'>
                <div className="p-10 sm:p-3 sm:pl-10 flex  gap-4 sm:gap-10 flex-wrap">
                    <div className="flex items-center gap-2 p-2 rounded-md w-60 sm:w-fit bg-[#179BAE]">
                        <img className="w-7 rounded-full" src={react} alt="" />
                        <p>-</p>
                        <p className="text-white">React</p>
                    </div>
                    <div className="flex items-center gap-2  p-2 rounded-md w-60 sm:w-fit bg-[#179BAE]">
                        <img className="w-7 rounded-full" src={tailwind} alt="" />
                        <p>-</p>
                        <p className="text-white">Tailwind</p>
                    </div> <div className="flex items-center gap-2  p-2 rounded-md w-60 sm:w-fit bg-[#179BAE]">
                        <img className="w-7 rounded-full" src={git} alt="" />
                        <p>-</p>
                        <p className="text-white">Git</p>
                    </div> <div className="flex items-center gap-2  p-2 rounded-md w-60 sm:w-fit bg-[#179BAE]">
                        <img className="w-7 rounded-full" src={github} alt="" />
                        <p>-</p>
                        <p className="text-white">Github</p>
                    </div> <div className="flex items-center gap-2  p-2 rounded-md w-60 sm:w-fit bg-[#179BAE]">
                        <img className="w-7 rounded-full" src={nodejs} alt="" />
                        <p>-</p>
                        <p className="text-white"> Nodejs</p>
                    </div> <div className="flex items-center gap-2  p-2 rounded-md w-60 sm:w-fit bg-[#179BAE]">
                        <img className="w-7 rounded-full" src={mongodb} alt="" />
                        <p>-</p>
                        <p className="text-white">MongoDb</p>
                    </div> <div className="flex items-center gap-2  p-2 rounded-md w-60 sm:w-fit bg-[#179BAE]">
                        <img className="w-7 rounded-full" src={js} alt="" />
                        <p>-</p>
                        <p className="text-white">JavaScript</p>
                    </div> <div className="flex items-center gap-2  p-2 rounded-md w-60 sm:w-fit bg-[#179BAE]">
                        <img className="w-7 rounded-full" src={mysql} alt="" />
                        <p>-</p>
                        <p className="text-white">Mysql</p>
                    </div> <div className="flex items-center gap-2  p-2 rounded-md w-60 sm:w-fit bg-[#179BAE]">
                        <img className="w-7 rounded-full" src={vite} alt="" />
                        <p>-</p>
                        <p className="text-white">Vite</p>
                    </div>

                </div>

                <div>
                    <img className='rotate sm:hidden ml-20' src={skillsimg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Skills