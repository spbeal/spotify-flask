
import React, {useState} from 'react'
import Logo from '../../assets/images/pink design fixed.png'
import {FaBars, FaTimes} from "react-icons/fa"
// import {HiOutlineMail} from 'react-icons/hi'
// import {BsFillPersonLinesFill} from 'react-icons/bs'
// import {Link} from 'react-scroll'

{/*cinerous cambridge_blue emerald celadon almond */}

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-almond text-cinereous-500">
       <div>
          <a href='/'>
            <img src={Logo} alt="Logo" style={{width: '60px'}} />
          </a>
        </div>

        {/* menu */}
            <ul className='hidden md:flex text-lg mx-8 gap-x-5 cursor-pointer'>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/Learn'>Learn</a>
                </li>
                <li>
                  <a href='/Songs'>Songs</a>
                </li>
                {/* <li>
                  <a href='/Learn'>Learn</a>
                </li>
                <li>
                  <a href='/Learn'>Learn</a>
                </li> */}

            </ul>

        {/* Hamburger */} 
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes/>}
        </div>

         {/* Mobile menu */}
         <ul className = {
          !nav 
          ? 'hidden' 
          : ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
          }
        >
            <li className='py-6 text-4xl'>
            <a href='/'>Home</a>
            <a href='/'>Learn</a>
            </li>
         </ul>
    </div>
  )
}

export default Navbar