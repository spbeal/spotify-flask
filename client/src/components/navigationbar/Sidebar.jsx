import React, {useState} from 'react'
import Logo from '../../assets/images/pink design fixed.png'
import {FaBars, FaTimes} from "react-icons/fa"



const Sidebar = () => {
    // const [nav, setNav] = useState(false);
    // const handleClick = () => setNav(!nav);

  return (
    <div className=" bg-almond text-cinereous-500">
        <div id = "mySidebar" class="sidebar"></div>
    </div>
  )
}

export default Sidebar

