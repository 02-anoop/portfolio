import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// We leave this empty so it doesn't crash your app if it's still imported somewhere, 
// but it stops forcing your old layout to disappear!
export const animateAboutSection = () => {};

export const preLoaderAnim = () => {
    // 🚀 THE FIX: Tell GSAP to refresh all its measurements as soon as the timeline completes
    const tl = gsap.timeline({
      onComplete: () => {
        ScrollTrigger.refresh();
      }
    });
    
    const counter = { value: 0 };
    const countElement = document.querySelector('.count');
  
    tl
      .to('body', { duration: 0.1, css: { overflowY: 'hidden' } })
      .to('.tagline span', { duration: 0.6, y: 0, opacity: 1, stagger: 0.1, ease: 'power3.out' }, '+=0.3')
      .to(counter, {
        value: 100,
        duration: 2,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (countElement) {
            countElement.textContent = Math.round(counter.value);
          }
        }
      }, '-=0.3')
      .to('.loader-bar', { width: '100%', duration: 2, ease: 'power2.inOut' }, '<')
      .to('.tagline span, .loader-wrapper, .counter', { duration: 0.4, opacity: 0, y: -20, ease: 'power2.in' })
      .to('.preloader', { duration: 0.8, y: '-100%', ease: 'power4.inOut' })
      .to('body', { duration: 0.1, css: { overflowY: 'scroll' } })
      .set('.preloader', { display: 'none' });
};