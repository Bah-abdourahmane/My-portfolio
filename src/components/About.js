import React from 'react'

const About = () => {
    return (
        <div  name='About' className='w-full h-screen bg-[#0a192f] text-gray-300 '>
            <div className='max-w-[1000px] h-full mx-auto flex flex-col justify-center items-center'>
                <div className='w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold border-b-4 inline-block border-pink-600 '>About</p>
                    </div>
                </div>

                <div className='w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='text-4xl font-bold sm:text-right '>
                        <p>Hi. I'm Bah, nice to meet you. Please take a look around.</p>
                    </div>

                    <div>
                        <p>
                            I am passionate about buildind excellent software that mproves the lives of those around mr. I specialize in creating software for clients ranging from individuals and small businesses all the way to large entreprise corporations. What would you do if you had a software expert available at your fingettips?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
