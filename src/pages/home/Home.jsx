import React from 'react'
import About from '../../components/about/About'
import Explore from '../../components/explore/Explore';
import Protfolio from '../../components/prtfolio/Protfolio';
import Contact from '../../components/contact/Contact';
import Navbar from '../../components/navbar/Navbar'
import './Home.css';
function Home() {
  return (
    <div className='home'> 
            <Navbar></Navbar>
            <Explore></Explore> 
           <About></About>
           <Protfolio/>
           <Contact></Contact>
           
    </div>
  )
}

export default Home
