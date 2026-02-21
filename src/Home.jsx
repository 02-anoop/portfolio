import React, { useRef, useCallback } from 'react';
import Nav from './Nav';
import Landing from './Landing';
import Newprojects from './Newprojects';
import About from './About';
import Blogs from './Blogs';
import Contact from './Contact';
import Footer from './Footer';
import Preloader from './Preloader';
import './CSS/Divider.css';

/* ── Fun interactive strip (Contact → Footer) ── */
const BottomStrip = () => {
  const tickerText = 'DESIGN \u2022 DEVELOP \u2022 DEPLOY \u2022 REPEAT \u2022 DREAM \u2022 BUILD \u2022 SHIP \u2022 GROW \u2022\u00A0';

  const pills = [
    { emoji: '\u{1F680}', text: 'Fast Delivery' },
    { emoji: '\u{1F3A8}', text: 'Pixel Perfect' },
    { emoji: '\u{1F4AC}', text: 'Clear Communication' },
    { emoji: '\u26A1', text: 'Always Online' },
    { emoji: '\u{1F4A1}', text: 'Creative Solutions' },
    { emoji: '\u{1F91D}', text: 'Long-term Partner' },
  ];

  const handlePillMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mx', x + '%');
    e.currentTarget.style.setProperty('--my', y + '%');
  }, []);

  const scrollToContact = useCallback(() => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="bottom-strip">
      <div className="bs-topline" />

      <div className="bs-cta">
        <h2 className="bs-cta-title">
          {"Got a project? Let's make it "}
          <span className="bs-yellow">unforgettable.</span>
        </h2>
        <p className="bs-cta-sub">
          I turn ideas into experiences that people remember.
        </p>
      </div>

      <div className="bs-stats">
        {pills.map((pill, i) => (
          <div key={i} className="bs-pill" onMouseMove={handlePillMove}>
            <span className="bs-pill-emoji">{pill.emoji}</span>
            <span className="bs-pill-text">{pill.text}</span>
          </div>
        ))}
      </div>

      <div className="bs-btn-wrap">
        <button className="bs-magnet-btn" onClick={scrollToContact}>
          <span className="bs-btn-text">{"Let's work together"}</span>
          <span className="bs-btn-arrow">{'\u2197'}</span>
        </button>
      </div>

      <div className="bs-ticker">
        <div className="bs-ticker-track">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="bs-ticker-item">{tickerText}</span>
          ))}
        </div>
      </div>

      <div className="bs-watermark">LET'S GO</div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Preloader/>
      <Nav />
      
      {/* Removed the extra <section> wrappers. The components handle themselves! */}
      <Landing />
      <About />
      <Newprojects />
      <Blogs />
      <Contact />

      <BottomStrip />
      <Footer />
    </>
  );
}

export default Home;