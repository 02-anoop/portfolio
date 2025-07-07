import React from 'react';
import { NavLink } from 'react-router-dom';
import './CSS/Nav.css';  // Your navbar CSS
import './App.css';  // Additional styles if needed

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-item">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="nav-item">
            PROJECTS
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-item">
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-item">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
