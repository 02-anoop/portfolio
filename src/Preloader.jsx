import React, { useEffect } from 'react'
import { preLoaderAnim } from './animation';
import './CSS/preloader.css'

const Preloader = () => {
useEffect(()=>{
    preLoaderAnim()
},[]);

  return (
    <div className='preloader'>
        <div className='texts-container'>
            <span>Developer .</span>
            <span>Curator .</span>
           
            <span> Freelancer</span>
        </div>
    </div>
  )
}

export default Preloader