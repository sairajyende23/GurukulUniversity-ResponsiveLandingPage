import React from 'react'
import './Vidioplayer.css'
import aboutvideo from '../../assets/aboutvedio.mp4'

const VideoPlayer = ({playState, setPlayState}) => {
  return (
    <div className={`aboutVideo ${playState?'':'hideVideo'}`}>
      <video muted autoPlay src={aboutvideo} ></video>
    </div>
  )
}

export default VideoPlayer
