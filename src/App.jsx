import { useState, useLayoutEffect } from 'react'

import Navbar from './components/Navbar'
import Loading from './components/Loading'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [isLightMode, setIsLightMode] = useState(false)
  const [onPage, setOnPage] = useState('home')
  const [showMenu, setShowMenu] = useState(false)
  const [mousePointer, setMousePointer] = useState(false)
  const theme = document.getElementById("theme")

  useLayoutEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  const changeTheme = () => {
    setIsLightMode(!isLightMode)
    if(!isLightMode) {
      theme.classList.remove('-translate-y-0')
      theme.classList.add(`translate-y-8`)
    }else {
      theme.classList.remove('translate-y-8')
      theme.classList.add(`-translate-y-0`)
    }
  }
  const handleMenuChange = (id) => {
    setOnPage(id)
  }
  const handlemousePointer = (bool) => {
    setMousePointer(bool)
  }
  const handlemousePointerLeave = (bool) => {
    setMousePointer(false)
  }

  return (
    <div 
      className={`transition-all duration-300 z-0 w-full h-[100vh] relative flex flex-col overflow-hidden items-center justify-center ${isLightMode ? 'bg-light text-dark' : 'bg-dark'}`}
    >
    <br /><br />
      <CustomCursor 
        theme={isLightMode}
        mousePointer={mousePointer} 
      />
      {loading ? (
        <Loading />
      ):(<></>)}
      <Navbar 
        theme={isLightMode} 
        menuChange={handleMenuChange} 
        showMenu={showMenu}  
        onPage={onPage}  
        setShowMenu={setShowMenu} 
        setMousePointer={handlemousePointer}
      />
      {onPage == 'home' ? (
        <About 
          theme={isLightMode} 
          setMousePointer={handlemousePointer}
        />
      ) : onPage == 'about' ? (
        <About theme={isLightMode} />
      ) : onPage == 'skills' ? (
        <Skills theme={isLightMode} />
      ) : onPage == 'experience' ? (
        <Experience theme={isLightMode} />
      ) : onPage == 'projects' ? (
        <Projects theme={isLightMode} setMousePointer={handlemousePointer} />
      ) : onPage == 'contact' ? (
        <Contact theme={isLightMode} setMousePointer={handlemousePointer} />
      ) : (
        <></>
      )}
      <Footer theme={isLightMode} />
      <div 
        className={`fixed md:top-20 top-16 md:right-6 right-2 w-8 h-16 z-50 ${isLightMode ? 'bg-dark' : 'bg-light'} bg-opacity-40 rounded-full`}
        onMouseDownCapture={changeTheme}
        onMouseEnter={handlemousePointer} 
        onMouseLeave={handlemousePointerLeave} 
      >
        <img 
          className='absolute w-6 h-6 top-[2px] right-1 z-[99] transition-all duration-300'
          src={`${isLightMode?'sun.png' : 'moon.png'}`} 
          alt="Theme"
          id="theme"
          onMouseDownCapture={changeTheme}
        />
      </div>
    </div>
  )
}

export default App
