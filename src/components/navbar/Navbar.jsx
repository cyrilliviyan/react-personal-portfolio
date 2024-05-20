import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='curved'>
       
        <div className="image">Portfolio</div>
                <ul className='navbar-menu'>
                <Link to='/'><li>Home</li></Link>
                <a   href='#about' >About</ a>
                {/* <a   href='#about' >Service</ a> */}
                   
                <a   href='#protfolio' >Portfolio</ a>
                <a   href='#contact' >Contact us</ a>
                </ul>
            </div>
       
   
  )
}

export default Navbar
