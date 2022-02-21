import React, { useState } from 'react'
import logo from '../Images/logo.png'
import { Link} from 'react-scroll'
import './NavBar.css';

const NavBar = () => {

  const[nav, setNav]=useState(false)
  
  const changeBackground =()=>{

    if(window.scrollY >= 50){
        setNav(true)
    }
    else{
        setNav(false)
    }

  }

  window.addEventListener('scroll',changeBackground);

  return (
    <nav className={nav ? "nav active" : nav}>

      <Link to='#' className='logo'>
        <img src={logo} alt=''  smooth={true} duration={1000}/>
      </Link>

      <input className='menu-btn' type='checkbox' id='menu-btn'/>
      <label className='menu-icon' htmlFor='menu-btn'>
        <span className='nav-icon'></span>
      </label>

      <ul className='menu'>
        <li><Link to='home' smooth={true} duration={1000}>Home</Link></li>
        <li><Link to='features' smooth={true} duration={1000}>Features</Link></li>
        <li><Link to='offer' smooth={true} duration={1000}>Offer</Link></li>
        <li><Link to='about' smooth={true} duration={1000}>About</Link></li>
        <li><Link to='contact' smooth={true} duration={1000}>Contact</Link></li>
      </ul>

    </nav>
  )
}

export default NavBar