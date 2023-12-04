import {Routes, Route} from 'react-router-dom'

import Navbar from "./components/navigationbar/Navbar";
import Sidebar from './components/navigationbar/Sidebar';
import Home from "./components/pages/Home";
import Learn from "./components/pages/Learn";
import TopSongs from "./components/pages/TopSongs";

import React, {useState, useEffect } from 'react'

export default function Dashboard() {
    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("/members").then(
          res => res.json()
        ).then(
          data => {
            setData(data)
            console.log(data)
          }
        )
      }, [])

  return (
    (
        <div className="App">
          {/* <Navbar/> */}
          {/* <Sidebar/> */}
          <Routes>
            <Route path = '/' element = {<Home/>}/>
            <Route path = '/Learn' element = {<Learn/>}/>
            <Route path = '/Songs' element = {<TopSongs/>}/>
          </Routes>

          <TopSongs/>
    
        </div>
      )
      
  )
}
