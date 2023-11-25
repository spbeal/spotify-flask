import Navbar from "./components/navigationbar/Navbar";
import Home from "./components/pages/Home";
import Learn from "./components/pages/Learn";
import {Routes, Route} from 'react-router-dom'
import TopSongs from "./components/pages/TopSongs";
import React, {useState, useEffect } from 'react'

function App() {
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
    <div className="App">
      {/* <Navbar/> */}

    {(typeof data.members === 'undefined') ? (
        <p> Loading... </p>
      ) : (
        data.members.map((member, i) => (
          <p key ={i}>{member}</p>
        ))
      )}

      {/* <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/Learn' element = {<Learn/>}/>
        <Route path = '/Songs' element = {<TopSongs/>}/>
      </Routes> */}
    </div>

  )
}

export default App
