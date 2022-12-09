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
                <Navitems 
                style={{
                    left : toggle ? "0" : "-100%"
                }}
                handleClick={()=> setToggle(false)}
                className={'flex flex-col md:flex-row transition-all absolute md:static top-0 h-screen md:h-auto w-full md:w-auto bg-[#0a192f] md:bg-none justify-center md:justify-start items-center md:flex md:space-x-4'} 
                />
            </div>
            {/* mobile icon */}
            <div className='block md:hidden z-10' onClick={handleClick}>
                {toggle ? <FaTimes size={25} className='cursor-pointer '/>:<FaBars size={25} className='cursor-pointer '/>}
            </div>
            
            {/* Social icons */}
            <div className='hidden lg:flex fixed top-[35%] left-0 text-gray-300'>
                <Sideicon/>
            </div>
        </div>
    )
}

export default Navbar
