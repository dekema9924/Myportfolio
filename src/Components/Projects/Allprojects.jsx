import React from 'react'
import puzzle from '/src/assets/images/puzzle.png'
import MovieFilterIcon from '@mui/icons-material/MovieFilter';

function Allprojects() {
    return (
        <>
            <div className='mt-20 p-10 text-gray-400'>
                <p className='w-[500px] sm:w-96'>On my free time, I work on projects to build and improve my skills as a developer.
                    There is no better way to get experience than real-life projects. Explore my repositories of
                    my most proud projects.
                </p>
                <div>
                    <h1 className='text-yellow-600 text-3xl mt-3' style={{fontFamily: "Play"}}>Projects</h1>


                        <div className='flex flex-wrap w-[990px] sm:w-full sm:flex-col gap-5 mt-3'>
                            <a href="https://fabulous-manatee-886d54.netlify.app/">
                                <div className='flex w-96 sm:w-full  items-center gap-5 bg-[#1c3852] hover:border-2 hover:border-[#244b6f]'>
                                    <img className='w-20  p-3 rounded-md' src="https://www.svgrepo.com/show/502425/entertainment.svg" alt="" />
                                    <div>
                                        <p className='text-white'>Tflix</p>
                                        <p className='text-gray-400'>React/NodeJs MovieSite</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://fashionstore2.netlify.app/">
                                <div className='flex w-96  sm:w-full items-center gap-5 bg-[#1c3852] hover:border-2 hover:border-[#244b6f]'>
                                    <img className='w-20  p-3 rounded-md' src="https://www.svgrepo.com/show/375806/fashion.svg" alt="" />
                                    <div>
                                        <p className='text-white'>FashionStore</p>
                                        <p className='text-gray-400'>Clothing Brand Landing page</p>
                                    </div>
                                </div>
                            </a> <a href="https://employee2.netlify.app/">
                                <div className='flex w-96  sm:w-full items-center gap-5 bg-[#1c3852] hover:border-2 hover:border-[#244b6f]'>
                                    <img className='w-20  p-3 rounded-md' src="https://www.svgrepo.com/show/281676/employee.svg" alt="" />
                                    <div>
                                        <p className='text-white'>Employee Management</p>
                                        <p className='text-gray-400'>Search Employee details</p>
                                    </div>
                                </div>
                            </a>
                            <a href="https://adviceapisite.netlify.app/">
                                <div className='flex w-96 sm:w-full  items-center gap-5 bg-[#1c3852] hover:border-2 hover:border-[#244b6f]'>
                                    <img className='w-20  p-3 rounded-md' src="https://www.svgrepo.com/show/375534/api-analytics.svg" alt="" />
                                    <div>
                                        <p className='text-white'>React Advice</p>
                                        <p className='text-gray-400'>Advice Api</p>
                                    </div>
                                </div>
                            </a>
                            <a  href="https://dekema9924.github.io/Eccommerce-site/">
                                <div className='flex w-96 sm:w-full   items-center gap-5 bg-[#1c3852] hover:border-2 hover:border-[#244b6f]'>
                                    <img className='w-20  p-3 rounded-md' src="https://www.svgrepo.com/show/288473/online-shop-ecommerce.svg" alt="" />
                                    <div>
                                        <p className='text-white'>Eccomerce Product</p>
                                        <p className='text-gray-400'>FrontEnd Mentor Challenge</p>
                                    </div>
                                </div>
                            </a>

                        </div>
              
                </div>
            </div>
        </>
    )
}

export default Allprojects