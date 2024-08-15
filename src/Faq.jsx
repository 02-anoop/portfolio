import React, { useEffect, useState } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './CSS/Faq.css';
import { Faqdata } from "./Faqdata";
import Faqs from "./Faqs";
import { defaults } from "autoprefixer";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
    const [data, setData] = useState(Faqdata);

    useEffect(() => {
        // GSAP animation for FAQ items
        gsap.from('.faqhead',{
            y:50,
            duration:1,
            scrollTrigger:{
                trigger:'.faqhead',
                start:'top 80%',
                end:'bottom 50%',
                scrub:1,
                markers:false
            }
        })
        
        gsap.utils.toArray('.faq-item').forEach((element) => {
            gsap.from(element, {
                opacity: 0,
                y: 50,
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                    markers: false, // Set to true for debugging purposes
                },
            });
        });
    }, []);

    return (
        <section className="main-div">
            <h1 className="faqhead">FAQ's</h1>
            {data.map((currElem) => {
                const { id, ques, ans } = currElem;
                return <Faqs key={id} ques={ques} ans={ans} />;
            })}
        </section>
    );
}

export default Faq;
