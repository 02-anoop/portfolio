import React, { useEffect } from 'react'
import { preLoaderAnim } from './animation';
import './CSS/preloader.css'

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim()
  }, []);

  return (
    <div className='preloader'>
      <div className='preloader-content'>
        <div className='tagline'>
          <span>Developer</span>
          <span className='dot'>•</span>
          <span>Designer</span>
          <span className='dot'>•</span>
          <span>Creator</span>
        </div>
        <div className='loader-wrapper'>
          <div className='loader-bar'></div>
        </div>
        <div className='counter'>
          <span className='count'>0</span>
          <span className='percent'>%</span>
        </div>
      </div>
    </div>
  )
}

export default Preloader