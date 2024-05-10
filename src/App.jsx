import { useState, useLayoutEffect } from 'react'

import Navbar from './components/Navbar'
import Loading from './components/Loading'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import About from './components/About'

import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [isLightMode, setIsLightMode] = useState(false)

  useLayoutEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [])

  const changeTheme = () => {
    setIsLightMode(!isLightMode)
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
      className={`z-0 w-full h-[100vh] relative flex flex-col overflow-hidden items-center justify-center ${isLightMode ? 'bg-light text-dark' : 'bg-dark'}`}
    >
      <CustomCursor theme={isLightMode}/>
      {loading ? (
        <Loading />
      ):(<></>)}
      <Navbar theme={isLightMode} />
      <About theme={isLightMode} />
      <Footer theme={isLightMode} />
      <img 
        className='fixed top-20 right-6 z-50'
        src={`${isLightMode?'moon.png' : 'sun.png'}`} 
        alt="Theme"
        onMouseDownCapture={changeTheme} />
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
