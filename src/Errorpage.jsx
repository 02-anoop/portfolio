import React from 'react'
import './CSS/Error.css'
import { NavLink } from 'react-router-dom'

const Errorpage = () => {
  return (
    <div className='error'>
    <NavLink to='/'><button className='homebtn'>HOME</button></NavLink>
    <div className='err'>
        <div className='errorno'>404
        <span className='errormsg'>THE PAGE YOU ARE LOOKING<br/> FOR DOESN'T EXIST.</span></div>
        </div>
    </div>
  )
}

export default Errorpage