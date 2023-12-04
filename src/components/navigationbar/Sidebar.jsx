import React, {useState} from 'react'
import Logo from '../../assets/images/pink design fixed.png'
import {FaBars, FaTimes} from "react-icons/fa"



const Sidebar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

return (
  <nav className="fixed w-full h-[80px] flex justify-between items-center px">
  <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-almond text-cinereous-500">
     <div>
        <a href='/'>
          <img src={Logo} alt="Logo" style={{width: '60px'}} />
        </a>
      </div>

      {/* menu */}
      <div>
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
      </div>
      
      
      {/* Hamburger */} 
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes/>}
      </div>

       {/* Mobile menu */}
       <ul className = {
        !nav 
        ? 'hidden' 
        : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
          <li className='py-6 text-4xl'>
          <a href='/'>Home</a>
          </li>
          <li className='py-6 text-4xl'>
          <a href='/'>Learn</a>
          </li>
       </ul>
  </div>
  </nav>

  )
}

export default Sidebar

