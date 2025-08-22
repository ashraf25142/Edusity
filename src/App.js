import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Gallery from './components/gallery/Gallery'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Vid from './components/vid/vid'

const App = () => {

  const [play,setplay] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title title="OUR PROGRAM" subtitle="What We Offer" />
        <Programs/>
        <About setplay={setplay}/>
        <Title title='GALLERY' subtitle="Campus Photos"/>
        <Gallery />
        <Title title='TESTIMONIALS' subtitle="What Student Says"/>
        <Testimonials/>
        <Title title='Contact Us' subtitle="Get in Touch"/>
        <Contact/>
        <hr/>
        <Footer/>
      </div>
      <Vid play={play} setplay={setplay}/>  
    </div>
  )
}

export default App
