import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logoNew2.png'
import { Link } from 'react-scroll';
import menuicon from '../../assets/menu-icon.png'

const Navbar = () => {
  const[sticky,setSticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 636 ? setSticky(true) : setSticky(false);
    },[])
  });

  const [mobileMenu, setMobileMenu]=useState(false)
  const togglemenu=()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className="logo"/>
        <ul className={mobileMenu?"" : ' hide-menu-icon'}>
            <li><Link to='hero' offset={0} smooth={true} duration={500}>Home</Link></li>
            <li><Link to='programs' offset={-260} smooth={true} duration={500}>Program</Link></li>
            <li><Link to='about' offset={-164} smooth={true} duration={500}>About us</Link></li>
            <li><Link to='campus' offset={-260} smooth={true} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' offset={-275} smooth={true} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' offset={-260} smooth={true} duration={500}>Contact</Link></li>
            <li><button className='btn'><Link to='contact-form' offset={0} smooth={true} duration={500}>Contact us</Link></button></li>

        </ul>
           <img src={menuicon} alt="" className='menu-icon' onClick={togglemenu} />

    </nav>
  )
}

export default Navbar
