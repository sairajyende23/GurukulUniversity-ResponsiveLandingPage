import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimoniuls from './Components/Testimoniuls/Testimoniuls'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  
  const [playState,setPlayState]=useState(false);




  return (
    <div>
      <Navbar />
      <Hero />
      
      <div className="container">
      <Title title='our PROGRAM' subtitle="What We Offer"/>
      <Programs />
      
      <About setPlayState={setPlayState}/>
      <Title title='GALLERY' subtitle="Campus Photos"/>
      
      <Campus />
      <Title title='TESTIMONIALS' subtitle="What Students Says"/>
      <Testimoniuls />
      <Title title='Contact us' subtitle="Get in Touch"/>
      <Contact />
      <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      
      
    </div>
  )
}

export default App
