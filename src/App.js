import Navbar from "./components/navigationbar/Navbar";
import Home from "./components/pages/Home";
import Learn from "./components/pages/Learn";
import TopSongs from "./components/pages/TopSongs";
import Login from "./Login";
import Dashboard from "./Dashboard";

import {Routes, Route} from 'react-router-dom'
import React, {useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

 const code = new URLSearchParams(window.location.search).get('code')

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


  fetch("/token", {
    method:"POST",
    cache: "no-cache",
    headers:{
        "content_type":"application/json",
    },
    body:JSON.stringify(code)
    }
).then(response => {

return response.json()
})

  
    return code ? <Dashboard/> : <Login/>
  
  }

export default App
