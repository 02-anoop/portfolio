import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./CSS/Skills.css";

gsap.registerPlugin(ScrollTrigger);

const skillLines = [
  { left: "MY", right: "SKILLS", hasIcon: true },
  { left: "UI/UX", right: "DESIGN", fancy: "left" },
  { left: "WEB", right: "DEVELOPMENT", fancy: "right" },
  { left: "RESPONSIVE", right: "DESIGN", fancy: "left" },
  { left: "CREATIVE", right: "SOLUTIONS", fancy: "right" },
];

const Skills = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".sk-line").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 60,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          delay: i * 0.06,
        });
      });

      gsap.from(".sk-hr", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: ".sk-hr", start: "top 92%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div className="sk-section" ref={ref}>
      <div className="sk-lines">
        {skillLines.map((line, i) => (
          <div key={i} className={`sk-line${i === 0 ? " sk-line--header" : ""}`}>
            <span className={`sk-word${line.fancy === "left" ? " sk-fancy" : ""}`}>
              {line.hasIcon && <span className="sk-icon">{"\u2197"}</span>}
              {line.left.split("").map((ch, ci) => (
                <span key={ci} className="sk-letter">{ch}</span>
              ))}
            </span>
            <span className="sk-dot" />
            <span className={`sk-word${line.fancy === "right" ? " sk-fancy" : ""}`}>
              {line.right.split("").map((ch, ci) => (
                <span key={ci} className="sk-letter">{ch}</span>
              ))}
            </span>
          </div>
        ))}
      </div>
      <hr className="sk-hr" />
    </div>
  );
};

export default Skills;
