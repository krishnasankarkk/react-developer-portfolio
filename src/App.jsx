import { useState, useLayoutEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

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
  const handleMenuChange = (e) => {
    setOnPage(e.currentTarget.id)
  }
  const handlemousePointer = (bool) => {
    setMousePointer(bool)
  }
  const handlemousePointerLeave = (bool) => {
    setMousePointer(false)
  }
  // const rippleContainer = document.getElementById('ripple-container');
  // const ripple1 = document.getElementById('ripple1');
  // const ripple2 = document.getElementById('ripple2');
  // let timeout;
  // const handleMouseDown = (event) => {
  //   clearTimeout(timeout)
  //   const x = event.pageX - rippleContainer.offsetWidth/2;
  //   const y = event.pageY - rippleContainer.offsetHeight/2;
  //   rippleContainer.style.left = x+'px';
  //   rippleContainer.style.top = y+'px' ;
  //   ripple1.classList.remove('ripple')
  //   ripple1.classList.add('ripple')
  //   ripple2.classList.remove('ripple')
  //   ripple2.classList.add('ripple')
  //   rippleContainer.classList.remove('hidden');
  //   timeout = setTimeout(()=>{
  //     rippleContainer.classList.add('hidden');
  //   }, 1500);
  // };

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
        <Contact theme={isLightMode} />
      ) : (
        <></>
      )}
      <Footer theme={isLightMode} />
      <div 
        className={`fixed top-20 right-6 w-8 h-16 z-50 ${isLightMode ? 'bg-dark' : 'bg-light'} bg-opacity-40 rounded-full`}
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
      {/* <div 
        className="ripple-container hidden z-10"
        id='ripple-container'
      >
        <div id='ripple1' className="ripple border-2 border-blue w-1 h-1 rounded-full "></div>
        <div id='ripple2' className="ripple absolute border-2 border-blue opacity-50 w-1 h-1 rounded-full "></div>
      </div> */}
    </div>
  )
}

export default App
