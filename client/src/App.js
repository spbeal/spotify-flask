import Navbar from "./components/navigationbar/Navbar";
import Home from "./components/pages/Home";
import PageNotFound from "./components/pages/PageNotFound";
import Learn from "./components/pages/Learn";
import {Routes, Route} from 'react-router-dom'
import TopSongs from "./components/pages/TopSongs";
import Sidebar from "./components/navigationbar/Sidebar";


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/Learn' element = {<Learn/>}/>
        <Route path = '/Songs' element = {<TopSongs/>}/>
      </Routes>
    </div>

  );
}

export default App;
{/*
        <Route path = '/' element = {<About/>}/>
        <Route path = '/' element = {<About/>}/>
        <Route path = '/' element = {<Skills/>}/>
        <Route path = '/' element = {<Work/>}/>
        <Route path = '/' element = {<Education/>}/>
        <Route path = '/' element = {<Contact/>}/>
      
      */}