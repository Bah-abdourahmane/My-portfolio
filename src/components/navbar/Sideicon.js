import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Icons = [
    {nom : "Linkedin", path:'#', logo : <FaLinkedin size={30}/>, color: 'bg-blue-600'},
    {nom : "GitHub", path:'#', logo : <FaGithub size={30}/>, color: 'bg-[#333]'},
    {nom : "Facebook", path:'#', logo : <FaFacebook size={30}/>, color: 'bg-[#3b5998]'},
    {nom : "Twitter", path:'#', logo : <FaTwitter size={30}/>, color: 'bg-[#55acee]'}
]

const Sideicon = () => {
    return (
        <ul>
            {Icons.map((icon, index)=>(
                <li key={index} className={`${icon.color} flex justify-between items-center w-[160px] h-[60px] ml-[-100px] p-4 hover:ml-[-10px] duration-300`}>
                    <a href={icon.path} className='flex justify-between items-center w-full'>
                        {icon.nom} {icon.logo}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Sideicon
