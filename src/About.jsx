import React, { useEffect } from "react";
import './CSS/About.css';
import JSConfetti from "js-confetti";
import Nav from './Nav';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { animateAboutSection } from './animation'; // Import the animation function

const About = () => {
  const jsConfetti = new JSConfetti();

  const handleHover3 = () => {
    jsConfetti.addConfetti({
      emojis: ['👋'],
    });
  };

  useEffect(() => {
    animateAboutSection(); // Call the animation function on component mount
  }, []);

  return (
    <>
      <div className="about">
        
        
          <p className="greetings">GREETINGS</p>
          <div className="h1first ylw">
            <div >HELLO </div>
            <div className="flx">I'M <div className="yellow1"></div> ANOOP &</div>
            <div className="flx" >I DESIGN<div className="yellow2"></div>  STUFF</div>
            
          </div>
          <p className="descrip">
            I'M PASSIONATE ABOUT WEB DEVELOPMENT, DESIGN AND UI/UX ,WORKING WITH TECHNOLOGIES LIKE PYTHON ,C AND C++ AND TOOLS LIKE FIGMA. MY CREATIVE PURSUITS ALSO EXTENDS TO VIDEO EDITING ,WHERE I BRING IDEAS TO LIFE THROUGH VISUAL STORYTELLINGd.EACH PROJECT IS AN OPPORTUNITY TO INNOVATE AND REFINE MY SKILLS. I FOCUS ON BLENDING FUNCTIONALITY WITH CREATIVITY TO DELIVER IMPACTFUL AND MEMORABLE EXPERIENCES WHETHER IT'S A WEBSITE , APP INTERFACE OR VIDEO.
          </p>
        </div>
     
      <div className="end">
        <p>
          IT'S GREAT YOU HAVE REACHED HERE!!<br />
          <span onMouseEnter={handleHover3}>WAVE HI!</span>
          <hr className="abthr"/>
        </p>
      </div>
    </>
  );
}

export default About;
