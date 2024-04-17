import React from 'react'
import './index.css' 
import Card from './pages/Card'
import video from './assets/bg2.mp4'
const App = () => {
  return (
    <div className='container'> 
      <video className='video' autoPlay loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Card/>
    </div>
  )
}

export default App