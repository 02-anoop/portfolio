import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './CSS/Contact.css';
import JSConfetti from "js-confetti";

const Contact = () => {
  const jsConfettiRef = useRef(null);
  const [activeField, setActiveField] = useState(null);
  const [time, setTime] = useState('');
  const marqueeRef = useRef(null);
  const glowRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    jsConfettiRef.current = new JSConfetti();
    return () => {
      if (jsConfettiRef.current) {
        jsConfettiRef.current.clearCanvas();
      }
    };
  }, []);

  const handleHover2 = useCallback(() => {
    jsConfettiRef.current?.addConfetti({
      emojis: ['\u{1F496}', '\u{1F48C}', '\u{1F497}', '\u2728', '\u{1FAF6}'],
    });
  }, []);

  const handleHover3 = useCallback(() => {
    jsConfettiRef.current?.addConfetti({
      emojis: ['\u{1F441}\uFE0F', '\u{1F440}', '\u{1F52E}'],
    });
  }, []);

  const handleRocket = useCallback(() => {
    jsConfettiRef.current?.addConfetti({
      emojis: ['\u{1F680}', '\u2B50', '\u{1F4AB}', '\u{1F31F}'],
    });
  }, []);

  const handleCoffee = useCallback(() => {
    jsConfettiRef.current?.addConfetti({
      emojis: ['\u2615', '\u{1F375}', '\u{1F9CB}', '\u{1F369}'],
    });
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    if (!section || !glow) return;

    let rafId = null;
    const onMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        glow.style.left = (e.clientX - rect.left) + 'px';
        glow.style.top = (e.clientY - rect.top) + 'px';
        rafId = null;
      });
    };

    section.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      section.removeEventListener('mousemove', onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.git-letter', {
      y: 120,
      rotationX: -90,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)',
      stagger: 0.05,
      scrollTrigger: { trigger: '.getintouch', start: 'top 80%' },
    });

    gsap.from('.contactline', {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.contactline', start: 'top 85%' },
    });

    gsap.from('.form-field', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: { trigger: '.contactpage', start: 'top 70%' },
    });

    gsap.from('.fun-strip', {
      scaleX: 0,
      duration: 1,
      ease: 'power3.inOut',
      scrollTrigger: { trigger: '.fun-strip', start: 'top 90%' },
    });

    gsap.from('.bless', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.bless', start: 'top 80%' },
    });

    gsap.from('.maildiv', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.maildiv', start: 'top 80%' },
    });

    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 20,
        ease: 'none',
        repeat: -1,
      });
    }
  }, []);

  const fieldLabels = useMemo(
    () => ({
      Name: '01',
      Phone: '02',
      Country: '03',
      Company: '04',
      Email: '05',
      Message: '06',
    }),
    []
  );

  const fields = useMemo(
    () => [
      { name: 'Name', placeholder: 'Your Name', type: 'text' },
      { name: 'Phone', placeholder: 'Phone Number', type: 'tel', formName: 'Phone Number' },
      { name: 'Country', placeholder: 'Country', type: 'text' },
      { name: 'Company', placeholder: "Company's Name", type: 'text', formName: "Company's Name" },
      { name: 'Email', placeholder: 'Email', type: 'email', full: true },
      { name: 'Message', placeholder: 'Tell me about your project...', type: 'text', formName: 'Message', full: true },
    ],
    []
  );

  return (
    <div className="c" id="contact" ref={sectionRef}>
      <div className="mouse-glow" ref={glowRef} />

      <div className="getintouch">
        <div className="git-row">
          {'GET IN TOUCH'.split('').map((char, i) => (
            <span
              key={i}
              className={'git-letter' + (char === ' ' ? ' git-space' : '')}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
        <div className="git-sub">
          <span className="git-dash">{'\u2014'}</span>
          <span>
            {"Let's build something "}
            <em>incredible</em>
            {' together'}
          </span>
          <div className="git-clock">{time}</div>
        </div>
      </div>

      <div className="marquee-strip">
        <div className="marquee-track" ref={marqueeRef}>
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="marquee-item">
              {'OPEN FOR WORK \u2022 FREELANCE \u2022 COLLABORATION \u2022 FULL-TIME \u2022 LET\u2019S TALK \u2022\u00A0'}
            </span>
          ))}
        </div>
      </div>

      <div className="contactpage">
        <h1 className="contactline">
          {'Designing with unwavering dedication, pouring '}
          <span className="heart" onMouseEnter={handleHover2}>
            heart{' '}
          </span>
          {'and soul into every pixel'}
        </h1>

        <form
          action="https://formbold.com/s/3dqNb"
          method="POST"
          className="contact-form"
        >
          <div className="form-grid">
            {fields.map((field) => (
              <div
                key={field.name}
                className={'form-field' + (field.full ? ' full' : '') + (activeField === field.name ? ' active' : '')}
                onClick={() => document.getElementById('field-' + field.name).focus()}
              >
                <div className="field-num">{fieldLabels[field.name]}</div>
                <div className="field-body">
                  <input
                    id={'field-' + field.name}
                    type={field.type}
                    name={field.formName || field.name}
                    placeholder={field.placeholder}
                    required
                    autoComplete="off"
                    onFocus={() => setActiveField(field.name)}
                    onBlur={() => setActiveField(null)}
                  />
                  <div className="field-line" />
                </div>
              </div>
            ))}
          </div>

          <div className="cntctbtndiv">
            <button
              type="submit"
              className="send-btn"
              onMouseEnter={handleRocket}
            >
              <span className="send-text">Send it</span>
              <span className="send-arrow">{'\u2197'}</span>
            </button>
            <span className="btn-hint">( I reply fast, promise )</span>
          </div>
        </form>
      </div>

      <div className="fun-strip">
        <div className="fun-inner">
          <div className="fun-card" onMouseEnter={handleCoffee}>
            <span className="fun-emoji">{'\u2615'}</span>
            <span className="fun-label">Buy me a coffee?</span>
          </div>
          <div className="fun-divider" />
          <div className="fun-card">
            <span className="fun-emoji">{'\u{1F4CD}'}</span>
            <span className="fun-label">Sikar, Rajasthan</span>
          </div>
          <div className="fun-divider" />
          <div className="fun-card">
            <span className="fun-emoji">{'\u26A1'}</span>
            <span className="fun-label">{'Usually replies in <2hrs'}</span>
          </div>
          <div className="fun-divider" />
          <div className="fun-card">
            <span className="fun-emoji">{'\u{1F4E7}'}</span>
            <span className="fun-label">anoopsaini.0905@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="directmail">
        <div className="dm-bg-text">FEEDBACK</div>
        <div className="mailleft">
          <h1 className="bless">
            {'Bless me with your expert '}
            <span className="nazar" onMouseEnter={handleHover3}>
              nazar{' '}
            </span>
            {'of insights'}
          </h1>
          <form action="https://formbold.com/s/3dqNb" method="POST">
          
            <div className="maildiv">
              <input
                type="email"
                placeholder="Your email"
                name="Email"
                autoComplete="off"
                required
              />
              <div className="feed">
                <textarea
                  placeholder="Drop your thoughts here..."
                  name="Feedback"
                  className="feedback"
                  rows="4"
                />
                <button type="submit" className="feed-btn">
                  <span>Send feedback</span>
                  <span className="feed-arrow">{'\u2192'}</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
