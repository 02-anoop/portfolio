import React, { useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './CSS/Contact.css';
import JSConfetti from "js-confetti";

const Contact = () => {
  const jsConfetti = new JSConfetti();

  const handleHover1 = () => {
    jsConfetti.addConfetti({
      emojis: ['🍵', '☕', '🧋'],
    });
  };
  
  const handleHover2 = () => {
    jsConfetti.addConfetti({
      emojis: ['💖', '💌', '💗'],
    });
  };
  
  const handleHover3 = () => {
    jsConfetti.addConfetti({
      emojis: ['👁️', '👀'],
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation for the Contact section heading
    gsap.from('.contactline', {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.contactline',
        start: 'top bottom',
        end: 'bottom 50%',
        scrub: 1,
        markers: false,
      },
    });
  
    // GSAP animation for form inputs
    gsap.utils.toArray('.contact1, .contact2, .bless,.maildiv').forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          markers: false,
        },
      });
    });

    // GSAP animation for buttons
    gsap.from('.btn', {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.btn',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        markers: false,
      },
    });

  }, []);

  return (
    <>
      <div className="c">
        <div className="getintouch">
          <div className="get contacthover">GET</div>
          <div className="in contacthover">IN</div>
          <div className="touch contacthover">TOUCH</div>
         
          <div className="for "></div>
        </div>

        <div className="contactpage">
          <h1 className="contactline">Designing with unwavering dedication, pouring <span className="heart"  onMouseEnter={handleHover2}>heart </span> and soul into every pixel</h1>

          <form action="https://formspree.io/f/xqaqpoyb" method="POST">
            <div className="contact1">
              <div className="Name">
                <hr />
                <input placeholder="Name" name="Name" required autoComplete="off"></input>
              </div>
              <div className="mobile">
                <hr />
                <input placeholder="Phone Number" name="Phone Number" autoComplete="off" required></input>
              </div>
            </div>

            <div className="contact1">
              <div className="Name">
                <hr />
                <input placeholder="Country" name="Country" required autoComplete="off"></input>
              </div>
              <div className="mobile">
                <hr />
                <input placeholder="Company's Name" name="Company's Name" required autoComplete="off"></input>
              </div>
            </div>

            <div className="contact2">
              <div className="mail">
                <hr />
                <input type="email" placeholder="Email" name='Email' required autoComplete="off"></input>
              </div>
              <div className="msg">
                <hr />
                <input type="text" placeholder="Describe" name='Message' required autoComplete="off"></input>
              </div>
            </div>

            <div className="cntctbtndiv">
              <button type="submit" className="btn btn-style w-100 contactbtn" >
                <span class="span-mother">
                  <span>S</span>
                  <span>e</span>
                  <span>n</span>
                  <span>d</span>
                </span>
                <span class="span-mother2">
                  <span>S</span>
                  <span>e</span>
                  <span>n</span>
                  <span>d</span>
                </span>
              </button>
            </div>
          </form>
        </div>

          <div className="directmail">
            <div className="mailleft">
              <h1 className="bless">Bless me with your expert <span className="nazar"  onMouseEnter={handleHover3}>nazar  </span> of insights</h1>
              <form action="https://formspree.io/f/xqaqpoyb" method="POST">
                <div className="maildiv">
                  <input type="email" placeholder="Email" name="Email" autoComplete="off"></input>
                  <div className="feed">
                    <input type="text" placeholder="Feedback" name='Feedback' className="feedback" autoComplete="off"></input>
                    <button type="submit" className="btn btn-style w-100 " >
                      <span class="span-mother">
                        <span>S</span>
                        <span>e</span>
                        <span>n</span>
                        <span>d</span>
                      </span>
                      <span class="span-mother2">
                        <span>S</span>
                        <span>e</span>
                        <span>n</span>
                        <span>d</span>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            
          </div>
      
      </div>
    </>
  );
}

export default Contact;
