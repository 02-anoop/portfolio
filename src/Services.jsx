import React, { useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./CSS/Service.css";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    // GSAP animation for the .servehead element
    gsap.from('.servehead', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.servehead',
        start: "bottom bottom", // Animation starts when the bottom of the element hits the bottom of the viewport
        end: "top 90vh", // Animation ends when the top of the element reaches 80% of the viewport height
        scrub: 1, // Smooth scrubbing effect
        markers: false, // Set to true for debugging purposes
      },
    });

    // GSAP animation for each .serv element
    gsap.utils.toArray(".serv").forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom", // Animation starts when the bottom of the element hits the bottom of the viewport
          end: "bottom top", // Animation ends when the top of the element reaches 80% of the viewport height
          scrub: 1, // Smooth scrubbing effect
          markers: false, // Set to true for debugging purposes
        },
      });
    });
  }, []);

  return (
    <>
      <div className="services">
        <h1 className="servehead">MY SKILLS</h1>
        <div className="servicemain">
        <h1></h1>
          <div className="serv service1">
            <p className="skillname" id="skill1">HTML</p>
          </div>
          <div className="serv service2">
            <p className="skillname" id="skill2">RESPONSIVE DESIGNS</p>
          </div>
          <div className="serv service3">
            <p className="skillname" id="skill3">JAVASCRIPT</p>
          </div>
          <div className="serv service4">
            <p className="skillname" id="skill4">NODE.JS</p>
          </div>
          <div className="serv service5">
            <p className="skillname" id="skill5">REACT.JS</p>
          </div>
          <div className="serv service6">
            <p className="skillname" id="skill6">UI/UX</p>
          </div>
          <div className="serv service7">
            <p className="skillname" id="skill7">CSS</p>
          </div>
          <div className="serv service8">
            <p className="skillname" id="skill8">GRAPHIC DESIGNING</p>
          </div>
          <div className="serv service9">
            <p className="skillname" id="skill9">LANDING PAGE DESIGNS</p>
          </div>
          <div className="serv service10">
            <p className="skillname" id="skill10">PYTHON</p>
          </div>
          <div className="serv service11">
            <p className="skillname" id="skill11">C/C++</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
