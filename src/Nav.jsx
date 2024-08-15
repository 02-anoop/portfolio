import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './CSS/Nav.css'
import './App.css'


const Nav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  return (
    <>
      <div className="navbar" onClick={toggleMenu}>
        {menuVisible ? (
          <ul className="menu-items">
            <li><NavLink to="/">Home</NavLink></li>
            <li><a href=".about">About</a></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
          </ul>
        ) : (
          <span>MENU</span>
        )}
      </div>
      
    </>
  );
}

export default Nav;
