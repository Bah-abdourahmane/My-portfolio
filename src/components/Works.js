import React from 'react'
import site1 from './assets/site1.jfif'
import site2 from './assets/site2.jpg'
import site3 from './assets/site3.webp'
import site4 from './assets/site4.jpg'
import site5 from './assets/site5.jpg'
import site6 from './assets/site6.webp'

const Works = () => {
    return (
        <div name='Work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600  '>Work</p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
                    
                    <div style={{backgroundImage: `url(${site2}) `}} className='shadow-lg shadow-[#040c16] rounded-md  group content-div  w-full h-full'>
                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#709dffcc] to-[#5752e5cc] w-full h-full flex flex-col justify-center items-center'>
                            <span className='text-2xl font-bold tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="#" className='text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Demo</a>
                                <a href="#" className='text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Code</a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${site1}) `}} className='shadow-lg shadow-[#040c16] rounded-md  group content-div  w-full h-full'>
                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#709dffcc] to-[#5752e5cc] w-full h-full flex flex-col justify-center items-center'>
                            <span className='text-2xl font-bold tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="#" className='text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Demo</a>
                                <a href="#" className='text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Code</a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${site3}) `}} className='shadow-lg shadow-[#040c16] rounded-md  group content-div  w-full h-full'>
                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#709dffcc] to-[#5752e5cc] w-full h-full flex flex-col justify-center items-center'>
                            <span className='text-2xl font-bold tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="#" className='text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Demo</a>
                                <a href="#" className='text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Code</a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${site4}) `}} className='shadow-lg shadow-[#040c16] rounded-md  group content-div  w-full h-full'>
                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#709dffcc] to-[#5752e5cc] w-full h-full flex flex-col justify-center items-center'>
                            <span className='text-2xl font-bold tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="#" className='text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Demo</a>
                                <a href="#" className='text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Code</a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${site5}) `}} className='shadow-lg shadow-[#040c16] rounded-md  group content-div  w-full h-full'>
                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#709dffcc] to-[#5752e5cc] w-full h-full flex flex-col justify-center items-center'>
                            <span className='text-2xl font-bold tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="#" className='text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Demo</a>
                                <a href="#" className='text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Code</a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${site6}) `}} className='shadow-lg shadow-[#040c16] rounded-md  group content-div  w-full h-full'>
                        {/* Hover effect */}
                        <div className='opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#709dffcc] to-[#5752e5cc] w-full h-full flex flex-col justify-center items-center'>
                            <span className='text-2xl font-bold tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="#" className='text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Demo</a>
                                <a href="#" className='text-center rounded-lg bg-white px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Code</a>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default Works
