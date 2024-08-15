import React, { useState, useEffect, useRef } from "react";
import gsap from 'gsap';
import './CSS/Faq.css';

const Faqs = ({ ques, ans }) => {
    const [show, setShow] = useState(false);
    const faqRef = useRef(null);
    const answerRef = useRef(null);

    useEffect(() => {
        // GSAP animation for FAQ click interactions
      
        gsap.fromTo(answerRef.current, 
            { height: 0, opacity: 0 }, 
            { height: show ? 'auto' : 0, opacity: show ? 1 : 0, duration: 0.3, ease: 'power2.out' }
        );
    }, [show]);

    return (
        <div className="faq-item" ref={faqRef} onClick={() => setShow(!show)}>
            <div className="main-heading">
                <i className={`fa-solid fa-arrow-right ${show ? 'rotates' : ''}`}></i>
                <h3>{ques}</h3>
            </div>
            <div className="answer" ref={answerRef}>
                {show && <p>{ans}</p>}
            </div>
            <hr />
        </div>
    );
}

export default Faqs;
