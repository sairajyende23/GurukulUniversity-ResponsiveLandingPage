import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import play from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        
            <img src={about} alt="" className='about-img'/>  
        
            <img src={play} alt="" className='about-icon' onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
        
            <h3>About University</h3>
        
            <h2>Nurturing Tomorrows Leaders Today</h2>
        
            <p>Welcome to Gurukul, where we are dedicated to nurturing tomorrow's leaders today. With a commitment to excellence in education and a focus on holistic development, we provide a dynamic learning environment that empowers students to excel academically, develop leadership skills, and become global citizens. Through innovative programs, experienced faculty, and a supportive community, we inspire our students to reach their full potential and make a positive impact on the world. Join us as we shape the leaders of tomorrow, today.
                   </p>
        </div>
      
    </div>
  )
}

export default About
