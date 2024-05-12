import { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = (props) => {
  const [position, setPosition] = useState({ x: 500, y: 500 });

  // Update cursor position on mouse move
  const updateCursorPosition = (e) => {
    setPosition({ x: e.pageX+1, y: e.pageY+1 });
  };

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
  <div id='cursor' className="fixed z-50 hidden md:block" style={{ left: position.x, top: position.y }}>
    <div className={`${props.theme ? 'bg-blue' : 'bg-green'} absolute w-5 h-5 rounded-full rounded-tl-none rotate-12`} ></div>
  </div>
  );
};

export default CustomCursor;
