import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from 'gsap';
import './CSS/Landing.css';

const Landing = () => {
  const cursorRef = useRef(null);
  const landingRef = useRef(null);
  const [time, setTime] = useState('');

  /* ── live clock ── */
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
          timeZone: 'Asia/Kolkata',
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  /* ── GSAP entrance ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.l-role-tag', { opacity: 0, y: 20, duration: 0.6, delay: 0.8 })
        .from('.l-heading-line', { opacity: 0, y: 40, duration: 0.7, stagger: 0.12 }, '-=0.3')
        .from('.l-sub', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
        .from('.l-profile-wrap', { opacity: 0, scale: 0.8, duration: 0.8 }, '-=0.6')
        .from('.l-info-bar', { opacity: 0, y: 15, duration: 0.5 }, '-=0.4')
        .from('.l-stats-item', { opacity: 0, y: 20, duration: 0.5, stagger: 0.1 }, '-=0.3')
        .from('.l-scroll', { opacity: 0, duration: 0.6 }, '-=0.2')
        .from('.hrlanding', { opacity: 0, duration: 0.6 }, '-=0.4');
    }, landingRef);
    return () => ctx.revert();
  }, []);

  /* ── landing cursor ── */
  useEffect(() => {
    const landing = landingRef.current;
    const cursor = cursorRef.current;
    if (!landing || !cursor) return;

    const handleMouseMove = (e) => {
      const rect = landing.getBoundingClientRect();
      cursor.style.left = (e.clientX - rect.left - 12) + 'px';
      cursor.style.top = (e.clientY - rect.top - 12) + 'px';
    };
    const hide = () => { cursor.style.opacity = '0'; };
    const show = () => { cursor.style.opacity = '1'; };

    landing.addEventListener('mousemove', handleMouseMove);
    landing.addEventListener('mouseleave', hide);
    landing.addEventListener('mouseenter', show);
    return () => {
      landing.removeEventListener('mousemove', handleMouseMove);
      landing.removeEventListener('mouseleave', hide);
      landing.removeEventListener('mouseenter', show);
    };
  }, []);

  const scrollDown = useCallback(() => {
    const next = document.getElementById('projects');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div ref={landingRef} className="landing" id="landing">

      {/* ── TOP INFO BAR ── */}
      <div className="l-info-bar">
        <div className="l-info-item">
          <span className="l-info-dot" />
          <span>Sikar, Rajasthan</span>
        </div>
        <div className="l-info-item">
          <span className="l-info-label">IST</span>
          <span className="l-info-time">{time}</span>
        </div>
        <div className="l-info-item">
          <span className="l-info-dot l-info-dot--green" />
          <span>Open to work</span>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="content-container">
        <div className="text-section">
          <div className="l-role-tag">
            <span className="l-role-line" />
            <span>SOFTWARE ENGINEER &amp; WEB DEVELOPER</span>
          </div>

          <h1 className="crafting">
            <span className="l-heading-line">Creating</span>
            <span className="l-heading-line">Digital <em className="l-em">Experiences</em></span>
            <span className="l-heading-line">That Inspire</span>
          </h1>

          <p className="l-sub">
            {"Hey, I'm "}
            <strong className="l-name">Anoop</strong>
            {" \u2014 I design & build things for the web. Turning bold ideas into pixel-perfect, blazing-fast realities."}
          </p>
        </div>

        <div className="profile-section">
          <div className="l-profile-wrap">
            <div className="l-profile-ring" />
            <div className="pic" />
            <span className="l-profile-badge">{"⚡"}</span>
            <div className="l-profile-glow" />
          </div>
          <p className="l-profile-caption">{"Based in India \u00B7 UTC+5:30"}</p>
        </div>
      </div>

      {/* ── BOTTOM STATS ── */}
      <div className="l-stats">
        <div className="l-stats-item">
          <span className="l-stats-num">15+</span>
          <span className="l-stats-label">Projects Built</span>
        </div>
        <div className="l-stats-divider" />
        <div className="l-stats-item">
          <span className="l-stats-num">3+</span>
          <span className="l-stats-label">Years Experience</span>
        </div>
        <div className="l-stats-divider" />
        <div className="l-stats-item">
          <span className="l-stats-num">100%</span>
          <span className="l-stats-label">Passion Driven</span>
        </div>
      </div>

      <hr className="hrlanding" />

      {/* ── SCROLL INDICATOR ── */}
      <div className="l-scroll" onClick={scrollDown}>
        <div className="l-scroll-line" />
        <span className="l-scroll-text">SCROLL</span>
      </div>

      <div ref={cursorRef} className="landingcursor" />
    </div>
  );
};

export default Landing;
