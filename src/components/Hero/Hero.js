import React from 'react'
import './hero.css'
import dark_arrow from "../../assets/dark-arrow.png" 

function Hero() {
    return (
        <div className='landing-page' id='hero'>
            <div className='landing-page-text'>
                <h1>We Ensure Better Education for a better world</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
                <button className='btn'>Explore more <img src={dark_arrow} alt=''/></button>
            </div>
        </div>
    )
}

export default Hero
