import React from 'react'
import html from './assets/html.png';
import css from './assets/css.png';
import js from './assets/js.png';
import github from './assets/github.png';
import mongo from './assets/mongo-db.png';
import nodejs from './assets/nodejs.webp';
import vuejs from './assets/vuejs.png';
import reacticon from './assets/react-icon.png';
const Skills = () => {
    return (
        <div name="Skills" className='w-full h-screen bg-[#0a192f] text-gray-300 '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full '>
                <div>
                    <h2 className='text-4xl font-bold border-b-4 inline-block border-pink-600 '>Experience</h2>
                    <p className='py-3'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 gap-4 sm:grid-cols-4 text-center py-8 '>
                    <div className='shadow-lg shadow-[#040c16] hover:scale-[1.1] duration-500 '>
                        <img src={html} className="w-20 mx-auto " />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] hover:scale-[1.1] duration-500 '>
                        <img src={css} className="w-20 mx-auto " />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] hover:scale-[1.1] duration-500 '>
                        <img src={js} className="w-20 mx-auto " />
                        <p className='my-4'>Javascript</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] hover:scale-[1.1] duration-500 '>
                        <img src={reacticon} className="w-20 mx-auto " />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] hover:scale-[1.1] duration-500 '>
                        <img src={github} className="w-20 mx-auto " />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] hover:scale-[1.1] duration-500 '>
                        <img src={nodejs} className="w-20 mx-auto " />
                        <p className='my-4'>NODE JS</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] hover:scale-[1.1] duration-500 '>
                        <img src={mongo} className="w-20 mx-auto " />
                        <p className='my-4'>MONGO DB</p>
                    </div>
                    <div className='shadow-lg shadow-[#040c16] hover:scale-[1.1] duration-500 '>
                        <img src={vuejs} className="w-20 mx-auto " />
                        <p className='my-4'>VUE JS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
