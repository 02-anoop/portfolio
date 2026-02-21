import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './CSS/Nav.css';
import './App.css';

const Nav = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          {isHomePage ? (
            <a href="#landing" onClick={(e) => { e.preventDefault(); scrollToSection('landing'); }} className="nav-item">
              HOME
            </a>
          ) : (
            <NavLink to="/" className="nav-item">
              HOME
            </NavLink>
          )}
        </li>
        <li>
          {isHomePage ? (
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="nav-item">
              PROJECTS
            </a>
          ) : (
            <NavLink to="/#projects" className="nav-item">
              PROJECTS
            </NavLink>
          )}
        </li>
        <li>
          {isHomePage ? (
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="nav-item">
              ABOUT
            </a>
          ) : (
            <NavLink to="/#about" className="nav-item">
              ABOUT
            </NavLink>
          )}
        </li>
        <li>
          {isHomePage ? (
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="nav-item">
              CONTACT
            </a>
          ) : (
            <NavLink to="/#contact" className="nav-item">
              CONTACT
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
