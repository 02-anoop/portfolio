import React, { useEffect, useRef } from 'react';
import "./CSS/cursor.css"; // Assuming you have a CSS file for the cursor

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const offsetX = e.clientX;
      const offsetY = e.clientY;

      const sizeX = cursorRef.current.offsetWidth / 2;
      const sizeY = cursorRef.current.offsetHeight / 2;

      cursorRef.current.style.left = `${offsetX - sizeX}px`;
      cursorRef.current.style.top = `${offsetY - sizeY}px`;
    };

    const handleMouseEnter = () => {
      cursorRef.current.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursorRef.current.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor"></div>;
};

export default Cursor;
