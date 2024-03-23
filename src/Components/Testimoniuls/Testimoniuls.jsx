import React, { useRef } from 'react'
import './Testimoniuls.css'
import back_icon from '../../assets/back-icon.png'
import next_icon from '../../assets/next-icon.png'

import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'





const Testimoniuls = () => {

  const slider = useRef();
  let tx = 0;

  const Slidefrwd = ()=>{
    if(tx > -50){
      tx -=25;
    
    
    }
    slider.current.style.transform = ` translateX(${tx}%)`
  }
  const Slidebckwrd = ()=>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

  }


  return (



    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-icon' onClick={Slidefrwd}/>
      <img src={back_icon} alt="" className='back-icon' onClick={Slidebckwrd}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Shweta Kini</h3>
                  <span>Gurukul, Delhi</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Gurukul was one of the best decisions i have ever make. The supporive community, state-of-the-art facilities, and commitement to academic excellence jave truly exceeded my expectations.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Sagar Karekar</h3>
                  <span>Gurukul, Goa</span>
                </div>
              </div>
              <p> I am grateful for my time at Gurukul,choosing Gurukul for my degree was a game-changer. I have grown both personally and professionally during my time here. I am proud to be a part of the Gurukul community</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Angela Williams</h3>
                  <span>Gurukul, Punjab</span>
                </div>
              </div>
              <p>The commitment to academic excellence is palpable, and I have been able to thrive in an environment that prioritizes both learning and personal growth. Gurukul has exceeded all my expectations, and I could not imagine a better place to pursue my degree.</p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Rudra Goyal</h3>
                  <span>Gurukul, Maharashtra </span>
                </div>
              </div>
              <p>My experience at Musisity has been nothing short of exceptional. From day one, I have been surrounded by a supportive community that has helped me thrive academically and personally. Musisity has truly exceeded my expectations, and I am grateful for the opportunity to learn and grow here.</p>
            </div>
          </li>
        </ul>

        
        
      </div> 
    </div>
  )
}

export default Testimoniuls
