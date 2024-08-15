import React, { useEffect } from "react";
import gsap from 'gsap';
import './CSS/Skills.css';

const Skills = () => {
    useEffect(() => {
        gsap.utils.toArray(".line").forEach((element) => {
            gsap.from(element, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "bottom 80%", // Start animation when the bottom of the element reaches 80% from the top of the viewport
                    end: "top 60%", // End animation when the top of the element reaches 60% from the top of the viewport
                    scrub: 1, // Smooth scrubbing effect
                    markers: false, // Set to true for debugging purposes
                },
            });
        });
    }, []); 
    return (
        <div className="myservices">
            <div className="line line1">
                <p>
                    MY <i className="fa-solid fa-arrow-right-long"></i>
                </p>
                <p >
                    SERVICES
                </p>
            </div>
            <div className="line line2">
                <p className="word fancy">
                    <span className="letter">U</span>
                    <span className="letter">I</span>
                    <span className="letter">/</span>
                    <span className="letter">U</span>
                    <span className="letter">X</span>
                </p>
                <p >
                    DESIGN
                </p>
            </div>
            <div className="line line3">
                <p >
                    WEB
                </p>
                <p className="word fancy">
                    <span className="letter">D</span>
                    <span className="letter">E</span>
                    <span className="letter">V</span>
                    <span className="letter">E</span>
                    <span className="letter">L</span>
                    <span className="letter">O</span>
                    <span className="letter">P</span>
                    <span className="letter">M</span>
                    <span className="letter">E</span>
                    <span className="letter">N</span>
                    <span className="letter">T</span>
                </p>
            </div>
            <div className="line line4">
                <p className="word fancy">
                    <span className="letter">R</span>
                    <span className="letter">E</span>
                    <span className="letter">S</span>
                    <span className="letter">P</span>
                    <span className="letter">O</span>
                    <span className="letter">N</span>
                    <span className="letter">S</span>
                    <span className="letter">I</span>
                    <span className="letter">V</span>
                    <span className="letter">E</span>
                </p>
                <p >
                    DESIGN
                </p>

            </div>
            <hr/>
        </div>
    );
}

export default Skills;
