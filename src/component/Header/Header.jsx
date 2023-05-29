import React from 'react'
import "./header.css"
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className='header-container p-0'>
       <div className='header-wrapper'>
        <img src = {Logo}  className='my-logo'/>
        <ul className='nav-element header-nav'>
          <li className='nav-el'>About Us</li>
          <li className='nav-el'>Contact Us</li>
          <li className='pricepackage'>Pricing Packages</li>
          {/* <li className='nav-el'> */}

            <li className='get-started-btn nav-el'>Get Started Now</li>
          {/* </li> */}
          <li className=' nav-el login'>Log In</li>
        </ul>
       
       </div>
    </div>
  )
}

export default Header
