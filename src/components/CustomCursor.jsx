import { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = ({hovering}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  const updateCursorPosition = (e) => {
    setPosition({ x: e.pageX, y: e.pageY-20 });
  };

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
  <div className={`fixed bg-blue w-5 h-5 rounded-full rounded-tl-none z-50 transition-transform rotate-12 duration-150 ${hovering ? 'scale-150 rounded-tl-full' : 'scale-1'}`} style={{ left: position.x, top: position.y }}></div>
  );
};

export default CustomCursor;
