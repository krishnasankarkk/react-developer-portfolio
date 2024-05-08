import { useState, useLayoutEffect } from 'react'

import Navbar from './components/Navbar'
import Loading from './components/Loading'
import CustomCursor from './components/CustomCursor'

import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [isHovering, setIsHovering] = useState(true)

  useLayoutEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovering(false);
    }, 500);
  };

  return (
    <div className='w-full h-[100vh] relative flex flex-col overflow-hidden items-center justify-center bg-dark'>
      <CustomCursor hovering={isHovering}/>
      {loading ? (
        <Loading />
      ):(<></>)}
      <Navbar />
      <div className="flex flex-row items-center justify-center gap-4 w-[100%] h-full">
        <p className='text-6xl font-bold' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Hi, I am Krishnasankar</p>
      </div>
      
    </div>
  )
}

export default App
