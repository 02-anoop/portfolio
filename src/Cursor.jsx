import React, { useEffect, useRef } from 'react';
import "./CSS/cursor.css";

const Cursor = () => {
  const cursorRef = useRef(null);
  const cursorMidRef = useRef(null);
  const cursorOuterRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const midPos = useRef({ x: 0, y: 0 });
  const outerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Inner cursor - fastest follow
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.2;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.2;
      
      // Mid cursor - medium follow speed
      midPos.current.x += (mousePos.current.x - midPos.current.x) * 0.12;
      midPos.current.y += (mousePos.current.y - midPos.current.y) * 0.12;
      
      // Outer cursor - slowest follow for trail effect
      outerPos.current.x += (mousePos.current.x - outerPos.current.x) * 0.08;
      outerPos.current.y += (mousePos.current.y - outerPos.current.y) * 0.08;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorPos.current.x}px`;
        cursorRef.current.style.top = `${cursorPos.current.y}px`;
      }
      
      if (cursorMidRef.current) {
        cursorMidRef.current.style.left = `${midPos.current.x}px`;
        cursorMidRef.current.style.top = `${midPos.current.y}px`;
      }
      
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.left = `${outerPos.current.x}px`;
        cursorOuterRef.current.style.top = `${outerPos.current.y}px`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor-inner"></div>
      <div ref={cursorMidRef} className="cursor-mid"></div>
      <div ref={cursorOuterRef} className="cursor-outer"></div>
    </>
  );
};

export default Cursor;
