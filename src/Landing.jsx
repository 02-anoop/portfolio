import React, { useEffect, useState } from "react";
import gsap from 'gsap';
import './CSS/Landing.css';

const Landing = () => {
  const [profile, setProfile] = useState('');
  const [hoverCount, setHoverCount] = useState(0);
  const [cursorX, setCursorX] = useState(-20);
  const [cursorY, setCursorY] = useState(-20);

  useEffect(() => {
    // Initialize GSAP timeline for landing animations
    const tl = gsap.timeline();

    // Landing animations
    tl.from('.profilepic', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 1, // Adjusted delay for closer timing
    })
    .from('.available', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 1.1, // Adjusted delay for closer timing
    })
    .from('.crafting', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.1, // Adjusted delay for closer timing
    })
    .from('.gosh', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.1, // Adjusted delay for closer timing
    })
    .from('.hrlanding', {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.1, // Adjusted delay for closer timing
    })
    

    // Mouse move handler
    const handleMouseMove = (e) => {
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    };

    // Event listener for mouse move
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array to run effect only once on mount

  const messages = [
    'Click on me!', 'Click on me!', 'do it again', 'yes go on!',
    "don't know why I created this😃", 'anyway', 'drop me an email 💌if you like',
    'still playing with this 😂', 'you can stop now', 'seriously',
    'check out the website now', 'bas bhot ho gya ab🙏'
  ];

  const profileMessageChange = () => {
    setHoverCount(prevCount => {
      const newCount = prevCount + 1;
      setProfile(messages[newCount % messages.length]);
      return newCount;
    });
  };

  return (
    <div className="landing">
      <div className="profilepic" onClick={profileMessageChange}>
        <div className="pic"></div>
        <div className="profilemessage">{profile}</div>
      </div>
      <div className="available">
        <div className="green"><div className="greencircle"></div></div>
        Available for work
      </div>
      <h1 className="crafting">
        Crafting  <span> Digital </span>experiences  in web Development and Design.
      </h1>
      <p className="gosh">
        Oh gosh, almost forgot to say my name.
        This is <span>ARVIND!</span> based on Earth.
      </p>
      <hr className="hrlanding" />
      <div className="landingcursor" style={{ left: cursorX + 'px', top: cursorY + 'px' }} />
    </div>
  );
};

export default Landing;
