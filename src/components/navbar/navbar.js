import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu-icon.png'
import navbar from "./navbar.css"
import { Link } from 'react-scroll';

function Navbar() {

    const [sticky,setsticky]= useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setsticky(true) : setsticky(false);
        })
    })

    const [side , setside] = useState(false)

    function sidebar(){
        side ? setside(false) : setside(true)
    }

    return (
        <nav className={`container ${sticky? 'dark-nav' : ''}`}>
            <img src={logo} alt=''/>
            <img src={menu} alt='' onClick={sidebar} className='menu'/>
            <ul className={` ${side?'show-sidebar':''}`}>
                <li><Link to='hero' offset={0} duration={500} smooth={true}>Home</Link></li>
                <li><Link to='program' offset={-260} duration={500} smooth={true}>Program</Link></li>
                <li><Link to='about' offset={-150} duration={500} smooth={true}>About Us</Link></li>
                <li><Link to='gallery' offset={-260} duration={500} smooth={true}>Campus</Link></li>
                <li><Link to='testimonials' offset={-260} duration={500} smooth={true}>Testimonials</Link></li>
                <li><Link className='btn button' to='contact' offset={-260} duration={500} smooth={true}>Contact US</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
