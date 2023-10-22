import React from 'react'
import ReactPlayer from 'react-player'
import video from '../video/video1637901789.mp4'
const MyVideo = () => {
  return (
    <div style={{marginLeft:'20%'}}>
        <ReactPlayer url={video} controls={true} />
    </div>
  )
}

export default MyVideo