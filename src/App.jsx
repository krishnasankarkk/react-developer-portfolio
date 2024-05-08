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

  return (
    <div className={`w-full h-[100vh] relative flex flex-col overflow-hidden items-center justify-center ${isLightMode ? 'bg-light text-dark' : 'bg-dark'}`}>
      <CustomCursor theme={isLightMode}/>
      {loading ? (
        <Loading />
      ):(<></>)}
      <Navbar theme={isLightMode} />
      <About />
      <Footer />
      <img 
        className='fixed bottom-4 right-4' 
        src={`${isLightMode?'moon.png' : 'sun.png'}`} 
        alt="Theme"
        onMouseDownCapture={changeTheme} />
    </div>
  )
}

export default App
