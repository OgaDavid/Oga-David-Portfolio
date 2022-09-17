import React from 'react'
import { useRef } from 'react'

const Navbar = () => {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav");
    }

  return (
    <nav>
        <div className="navbar">
            <div className="logo">
                <h1>David Oga<span className='blue-clr'>.</span></h1>
            </div>
            <div className="navlinks responsive-nav" ref={navRef}>
                
                <ul>
                    <li><a href="#about">About Me </a></li>
                    <li><a href="#stack">Stack</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                    <i class="fa-solid fa-xmark fa-2x nav-close nav-btn" onClick={showNavbar}></i>
                </ul>           
            </div>
            <i class="fa-solid fa-bars fa-2x nav-bars nav-btn" onClick={showNavbar}></i>
        </div>
    </nav>
  )
}

export default Navbar