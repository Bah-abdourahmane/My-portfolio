import React, {useState} from 'react'
import logo from '../assets/logo.png'
import { FaBars, FaTimes, FaTwitter, FaGithub, FaLinkedinIn, FaFacebook, FaLinkedin } from 'react-icons/fa'
import Navitems from './Navitems'
import Sideicon from './Sideicon'
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = ()=>{
        setToggle(!toggle);
    }
    return (
        <div className='fixed w-full h-[80px] flex justify-between md:px-[2rem] px-5 items-center bg-[#0a192f]  text-gray-300 '>
            {/* <h1>Dre<span>~abdola</span></h1> */}
            <a href="#" className='z-10'>
                <img src={logo} alt="" style={{ width: '130px' }}/>
            </a>
            <div>
                <Navitems className={'hidden md:flex md:space-x-4'} />
            </div>
            {/* mobile icon */}
            <div className='block md:hidden z-10' onClick={handleClick}>
                {toggle ? <FaTimes size={25} className='cursor-pointer '/>:<FaBars size={25} className='cursor-pointer '/>}
            </div>
            {/* Tablette and mobile menu */}
            <div className={toggle ? 'absolute left-0 top-0 w-full h-screen bg-[#0a192f] flex justify-center items-center transition opacity-[1] ease-linear duration-1000 ': 'hidden opacity-0'}>
                <Navitems handleClick={handleClick} className='text-center'/>
            </div>

            {/* Social icons */}
            <div className='hidden lg:flex fixed top-[35%] left-0 text-gray-300'>
                <Sideicon/>
            </div>
        </div>
    )
}

export default Navbar
