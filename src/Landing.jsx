import React, { useEffect, useRef } from "react"; // Keep this at the top
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './CSS/Landing.css';

const Landing = () => {
  const cursorRef = useRef(null);
  const landingRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();
    tl.from('.profilepic', { opacity: 0, y: 50, duration: 1, delay: 1 })
      .from('.available', { opacity: 0, y: 50, duration: 1, delay: 1.1 })
      .from('.crafting', { opacity: 0, y: 50, duration: 1, delay: 0.1 })
      .from('.gosh', { opacity: 0, y: 50, duration: 1, delay: 0.1 })
      .from('.hrlanding', { opacity: 0, y: 50, duration: 1, delay: 0.1 });

    const handleMouseMove = (e) => {
      const rect = landingRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      const sizeX = cursorRef.current.offsetWidth / 2;
      const sizeY = cursorRef.current.offsetHeight / 2;

      cursorRef.current.style.left = `${offsetX - sizeX}px`;
      cursorRef.current.style.top = `${offsetY - sizeY}px`;
    };

    const landing = landingRef.current;

    landing.addEventListener("mousemove", handleMouseMove);
    landing.addEventListener("mouseleave", () => {
      cursorRef.current.style.opacity = "0";
    });
    landing.addEventListener("mouseenter", () => {
      cursorRef.current.style.opacity = "1";
    });

    return () => {
      landing.removeEventListener("mousemove", handleMouseMove);
      landing.removeEventListener("mouseleave", () => {});
      landing.removeEventListener("mouseenter", () => {});
    };
  }, []);

  return (
    <div ref={landingRef} className="landing">
      <div className="content-container">
        <div className="text-section">
          <h1 className="crafting">
            <p className="code"><br /> Code. <br /> Design.Innovate. <br /></p>
            Software Engineer & <br />
            Web Developer Creating <br />
            Experiences That Inspire
          </h1>
          <p className="gosh">
            Hey, I’m <span>Anoop!</span> Crafting impactful digital creations and transforming ideas into reality.
          </p>
        </div>
        <div className="profile-section">
          <div className="profilepic">
            <div className="pic"></div>
            <div className="available">
              <div className="green"><div className="greencircle"></div></div>
              Available for work
            </div>
          </div>
        </div>
      </div>
      <hr className="hrlanding" />
      <div ref={cursorRef} className="landingcursor" />
    </div>
  );
};

export default Landing;
