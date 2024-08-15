import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateAboutSection = () => {
  gsap.from('.ab', {
    scrollTrigger: {
      trigger: '.ab',
      start: 'top 80%',
      end: 'bottom top',
      scrub: 1,
      anticipatePin: 1,
    },
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
  });

  gsap.from('.anchor', {
    scrollTrigger: {
      trigger: '.anchor',
      start: 'top 80%',
      end: 'bottom top',
      scrub: 1,
      anticipatePin: 1,
    },
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
  });

  gsap.from('.ylw', {
    scrollTrigger: {
      trigger: '.ylw',
      start: 'top 80%',
      end: 'bottom top',
      scrub: 1,
      anticipatePin: 1,
    },
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
  });

  gsap.from('.greetings', {
    scrollTrigger: {
      trigger: '.greetings',
      start: 'top 90%',
      end: 'bottom top',
      scrub: 1,
      anticipatePin: 1,
    },
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
  });

  gsap.from('.descrip', {
    scrollTrigger: {
      trigger: '.descrip',
      start: 'top 80%',
      end: 'bottom top',
      scrub: 1,
      anticipatePin: 1,
    },
    y: 100,
    opacity: 0,
    duration: 2.5,
    ease: 'power3.out',
  });

  gsap.from('.end p', {
    scrollTrigger: {
      trigger: '.end p',
      start: 'top 80%',
      end: 'bottom top',
      scrub: 1,
      anticipatePin: 1,
    },
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
  });
};

export const preLoaderAnim = () => {
    const tl = gsap.timeline();
  
    tl
     
      .to('.landing', {
        duration: 0.05,
        css: { overflowY: 'hidden', height: '90vh' },
      })
      .to('.texts-container', {
        duration: 0,
        opacity: 1,
        ease: 'Power3.easeOut',
      })
      .from('.texts-container span', {
        duration: 1.5,
        delay: 1,
        y: 70,
        skewY: 10,
        stagger: 0.4,
        ease: 'Power3.easeOut',
      })
      
      .to('.landing', {
        duration: 0.05,
        css: { overflowY: 'hidden', height: 'unset' },
      })
      .to('body', {
        duration: 0.1,
        css: { overflowY: 'scroll' },
        ease: 'power3.inOut',
      })
      .to('.preloader', {
        duration: 0.5,
        opacity: 0,
        ease: 'Power3.easeOut',
        onComplete: () => {
          document.querySelector('.preloader').style.display = 'none';
        },
      });
};
