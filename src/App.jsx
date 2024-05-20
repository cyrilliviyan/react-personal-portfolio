import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

import Home from './pages/home/Home';
import About from './components/about/About';
function App() {


  return (
    <>
       
       <div className="app-home">
        
          
          <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          
        </Routes>
       </div>
    </>
  )
}

export default App
