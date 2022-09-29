import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Hero = () => {
    return (
        <div name='Home' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='h-full max-w-[1000px] px-8 mx-auto flex flex-col justify-center items-cente'>
                <p className='text-pink-600 '>Hi my name is</p>
                <h1 className='text-4xl font-bold sm:text-6xl '>Bah Abdourahmane</h1>
                <h2 className='text-4xl sm:text-6xl font-bold text-gray-500 '>I'm a Full Stact Developer.</h2>
                <p className='text-gray-500 py-4 max-w-[700px] '>I'm a full-stack developer specializing in bulding (and occasionally designing) exceptional digital experiencees. Currently, I'm focused on bulding responsive full-stact web applications.</p>
                <div className='my-2'>
                    <button className='flex group items-center px-6 border-2 py-3 hover:bg-pink-600 hover:border-pink-600 duration-500 '>
                        View Work 
                        <span className='group-hover:rotate-90 duration-300 ml-3'>
                            <HiArrowNarrowRight size={20}/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
