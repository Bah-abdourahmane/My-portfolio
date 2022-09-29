import React from 'react'
import { Link } from 'react-scroll'
const Links = [
    {name : 'Home',path : '#'},
    {name : 'About',path : '#About'},
    {name : 'Skills',path : '#Skills'},
    {name : 'Work',path : '#Work'},
    {name : 'Contact',path : '#Contact'}
]
const Navitems = ({className,handleClick}) => {
    return (
        <ul className={className}>
            {Links.map((link, index)=>(
                <li key={index} className='my-6 p-3 text-4xl md:my-0 md:py-0 md:text-base hover:text-gray-500 duration-150 ease-linear cursor-pointer'>
                    <Link onClick={handleClick} to={link.name} smooth={true} duration={500} >{link.name}</Link>
                </li>
            ))}
        </ul>
    )
}

export default Navitems
