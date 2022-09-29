import React from 'react'

export default function Contact() {
    return (
        <div name='Contact' className='w-full md:h-screen  bg-[#0a192f] flex justify-center item-center p-4 pt-10'>
            <form method='POST' action="https://getform.io/f/04d94570-edb3-460f-9500-9fd486e23543" className='flex flex-col max-w-[700px] w-full '>
                <div className="pb-8">
                    <p className="text-4xl text-gray-300 font-bold inline border-b-4 border-pink-600">Contact</p>
                    <p className='py-4 text-gray-300'>Submit the form below or shoot me an email - myemail@gmail.com</p>
                </div>
                <input type="text" placeholder='Name' className='bg-gray-300 p-2'/>
                <input type="text" placeholder='Email' className='my-4 p-2 bg-gray-300' />
                <textarea name="message" rows="10" placeholder='Message' className='bg-gray-300 p-2'></textarea>
                <button className='text-white border-2 px-4 py-3 my-8 mx-auto hover:bg-pink-600 hover:border-pink-600'>Let's Collaborate</button>
            </form>
        </div>
    )
}
