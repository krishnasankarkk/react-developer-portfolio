import { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = (props) => {
  const [position, setPosition] = useState({ x: 500, y: 500 });

  // Update cursor position on mouse move
  const updateCursorPosition = (e) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div 
    id='cursor' 
    className="fixed z-50 hidden md:block transition-all duration-75" 
    style={{ left: position.x, top: position.y }}
  >
  {props.theme ? (
    <div className={`pointer-events-none ${props.mousePointer ? 'border-[.4rem] scale-150 duration-150 border-blue bg-dark' : 'bg-blue'} absolute transition-all duration-1000 w-4 h-4 rounded-full rotate-12`} ></div>
  ) : (
    <div className={`pointer-events-none ${props.mousePointer ? 'border-[.4rem] scale-150 duration-150 border-green bg-dark' : 'bg-green '} absolute transition-all duration-1000 w-4 h-4 rounded-full rotate-12`} ></div>
  )}
  </div>
  );
};

export default CustomCursor;
