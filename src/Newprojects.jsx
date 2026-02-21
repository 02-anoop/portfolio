import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './CSS/Newprojects.css';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: "01",
    title: "Restaurant Management System",
    status: "Completed",
    desc: "A full-stack web application to manage restaurant operations including authentication, order processing, kitchen workflow, inventory, billing, and reporting using a modular backend architecture.",
    tech: ["Java", "JDBC/Servlets", "SQL"],
    link: "https://github.com/02-anoop"
  },
  {
    id: "02",
    title: "Trip Planner",
    status: "Completed",
    desc: "A responsive frontend application focused on delivering a clean and interactive trip-planning user experience with modern UI practices.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/02-anoop"
  },
  {
    id: "03",
    title: "Employee Management System",
    status: "Completed",
    desc: "A backend-driven system for managing employee records, roles, and organizational data with efficient CRUD operations and database integration.",
    tech: ["MERN Stack"],
    link: "https://github.com/02-anoop"
  },
  {
    id: "04",
    title: "Trading Bot Using RL",
    status: "Ongoing",
    desc: "An intelligent trading system that learns optimal trading strategies from market data using reinforcement learning and reward-based optimization.",
    tech: ["Python", "Reinforcement Learning", "Deep Learning"],
    link: "https://github.com/02-anoop"
  },
  {
    id: "05",
    title: "Lung Nodule Detection",
    status: "Ongoing",
    desc: "A deep learning–based medical imaging project aimed at detecting lung nodules from CT scans to assist in early diagnosis.",
    tech: ["Python", "Deep Learning", "CNNs"],
    link: "https://github.com/02-anoop"
  }
];

const Newprojects = () => {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const track = trackRef.current;
      
      // Calculate how far the track needs to move to the left
      const getScrollAmount = () => {
        let trackWidth = track.scrollWidth;
        // Move width of track minus the viewport width, plus a tiny margin
        return -(trackWidth - window.innerWidth + window.innerWidth * 0.05); 
      };

      // The Horizontal Scroll Animation
      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none"
      });

      // Pin the wrapper and scrub the animation based on scroll position
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: () => `+=${getScrollAmount() * -1}`, // Scroll distance equals the movement distance
        pin: true,
        animation: tween,
        scrub: 1, // Smooth scrubbing
        invalidateOnRefresh: true // Recalculates on window resize
      });

      // Intro Fade-in Animation for the Header
      gsap.from(".np-header", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 80%",
        }
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="np-wrapper" ref={wrapperRef} id="projects">
      <div className="np-sticky-container">
        
        {/* Fixed Header while scrolling */}
        <div className="np-header">
          <h2 className="np-title">
            Feat. Work <span className="np-arrow">↗</span>
          </h2>
          <div className="np-scroll-hint">
            <span className="np-line"></span> SCROLL TO EXPLORE
          </div>
        </div>

        {/* The Moving Track */}
        <div className="np-track" ref={trackRef}>
          {projectsData.map((project, idx) => {
            const isOngoing = project.status === "Ongoing";
            
            return (
              <div key={idx} className="np-card">
                <div className="np-card-top">
                  <div className="np-card-meta">
                    <span className="np-card-id">P—0{idx + 1}</span>
                    <div className={`np-status ${isOngoing ? "status-ongoing" : "status-done"}`}>
                      <span className="np-status-dot"></span>
                      {project.status}
                    </div>
                  </div>
                  
                  <h3 className="np-card-title">{project.title}</h3>
                  <p className="np-card-desc">{project.desc}</p>
                </div>

                <div className="np-card-bottom">
                  <div className="np-tech-tags">
                    {project.tech.map((tech, tIdx) => (
                      <span key={tIdx} className="np-tag">{tech}</span>
                    ))}
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="np-view-link">
                    View Repository <span className="np-link-arrow">↗</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Newprojects;