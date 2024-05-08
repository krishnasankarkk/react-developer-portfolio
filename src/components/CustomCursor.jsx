import { useState, useEffect } from 'react';
import './CustomCursor.css';

const CustomCursor = (props) => {
  console.log(props);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  const updateCursorPosition = (e) => {
    setPosition({ x: e.pageX+5, y: e.pageY+1 });
  };

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
  <div className="fixed z-50" style={{ left: position.x, top: position.y }}>
    <div className={`${props.theme ? 'bg-[#000000bb]' : 'bg-[#ffffffbb]'} absolute w-5 h-5 rounded-full rounded-tl-none rotate-12`} ></div>
  </div>
  );
};

export default CustomCursor;
