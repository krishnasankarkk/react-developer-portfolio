import { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = (props) => {
  const [position, setPosition] = useState({ x: 500, y: 500 });

  // Update cursor position on mouse move
  const updateCursorPosition = (e) => {
    setPosition({ x: e.pageX+1, y: e.pageY+5 });
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
    <div className={`pointer-events-none bg-blue ${props.mousePointer ? 'pointer border-blue' : ''} absolute transition-all duration-1000 w-4 h-4 rounded-full rotate-12`} ></div>
  ) : (
    <div className={`pointer-events-none bg-green ${props.mousePointer ? 'pointer border-green' : ''} absolute transition-all duration-1000 w-4 h-4 rounded-full rotate-12`} ></div>
  )}
  </div>
  );
};

export default CustomCursor;
