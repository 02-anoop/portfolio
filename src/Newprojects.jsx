import React, { useEffect, useState } from 'react';
import './CSS/Newprojects.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './CSS/Allprojects.css'

gsap.registerPlugin(ScrollTrigger);

const Newprojects = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  useEffect(() => {
    // Animate projects section when component mounts
    animateProjectsSection();

    // Cleanup function to remove event listeners and destroy ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  const animateProjectsSection = () => {
    // Animate each project item
    gsap.from('.workrow > *', {
      scrollTrigger: {
        trigger: '.workarea',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        anticipatePin: 1,
      },
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      stagger: 0.2, // Stagger for a more natural effect
    });
  };

  const handleMouseMove = (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  };

  return (
    <>
     
        <div>
          <div className='workarea' id='workarea'>
            <div className='workrow'>
              <h1>
                FEAT. WORK<i className='fa-solid fa-arrow-right-long'></i>
              </h1>
              <div id='workimages' className='workimages'>
                <div className='row1'>
                  <div className='work1 workdiv'>
                    <div className='cnt cnt1'></div>
                    <a href='https://dribbble.com/shots/24583777-Dynamic-UI-design-with-delicious-animations' className='prolink'>View Project<i className="fa-solid fa-arrow-right-long"></i></a>
                  </div>

                  <div className='work2 workdiv'>
                    <div className='cnt cnt2'></div>
                    <a href='https://github.com/Arvindsaura/Cybernauts' className='prolink'>View Project<i className="fa-solid fa-arrow-right-long"></i></a>
                  </div>
                </div>
                <div className='row2'>
                  <div className='work3 workdiv'>
                    <div className='cnt cnt3'></div>
                    <a href='https://github.com/Arvindsaura/NIRVANA' className='prolink'>View Project<i className="fa-solid fa-arrow-right-long"></i></a>
                  </div>
                  <div className='work1 work6 workdiv'>
                    <div className='cnt cnt4'></div>
                    <a href='https://dribbble.com/shots/24583758-Educational-Website-Landing-Page' className='prolink'>View Project<i className="fa-solid fa-arrow-right-long"></i></a>
                  </div>
                </div>
                <div className='row3'>
                  <div className='work4 workdiv'>
                    <div className='cnt cnt5'></div>
                    <a href='https://dribbble.com/shots/24583737-Zomato-Clone-Figma-design' className='prolink'>View Project<i className="fa-solid fa-arrow-right-long"></i></a>
                  </div>
                  <div className='work5 workdiv'>
                    <div className='cnt cnt6'></div>
                    <a href='https://dribbble.com/shots/24583766-Weather-App-Figma-Design' className='prolink'>View Project<i className="fa-solid fa-arrow-right-long"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Newprojects;
