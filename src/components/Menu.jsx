import { useState } from "react"
import Resume from '../assets/Resume - Krishnasankar.pdf'

function Menu(props) {
  const [showMenu, setShowMenu] = useState(false)
  
  const handleMouseDown = () => {
    setShowMenu(!showMenu)
    const option1 = document.getElementById('option1')
    const option2 = document.getElementById('option2')
    console.log(showMenu);
    if(!showMenu){
      option1.classList.add('selected')
      option2.classList.add('selected')
    }else{
      option1.classList.remove('selected')
      option2.classList.remove('selected')
    }
  }
  const handleResumeEnter = () => {
    const downloadImage = document.getElementById('download')
    downloadImage.src = props.theme ? 'down-blue.png' : 'down-green.png'
  }
  const handleResumeLeave = () => {
    const downloadImage = document.getElementById('download')
    downloadImage.src = props.theme ? 'down-black.png' : 'down-white.png'
  }

    return (
      <div className="options relative z-50 text-xl">
        <div className="flex flex-col gap-2 items-end p-8 z-50" onMouseDownCapture={handleMouseDown}>
          <div id="option1" className={`${props.theme ? 'bg-dark' : 'bg-light'} w-[2rem] h-1 rounded-full`}></div>
          <div id="option2" className={`${props.theme ? 'bg-dark' : 'bg-light'} w-[1rem] h-1 rounded-full`}></div>
        </div>
        {showMenu ? (
          <div className={`${props.theme?'bg-light':'bg-dark'} menu flex flex-col md:flex-row items-center justify-start gap-6 absolute p-6 md:top-0 md:right-20 top-24 right-2 h-[100vh] md:h-auto w-auto rounded-xl -z-30`}>
            <a
              href={Resume} 
              download="Resume-Krishnasankar.pdf"
              className={`transition-all duration-200 hover:scale-110 ${props.theme ? 'hover:text-blue' : 'hover:text-green'} flex flex-row items-center justify-start gap-2 mr-4`}
              onMouseEnter={handleResumeEnter}
              onMouseLeave={handleResumeLeave}
            >
            <img id="download" className="w-4 h-4" src={`${props.theme ? 'down-black.png' : 'down-white.png'}`} alt="" />
            Resume</a>
            <span className={`transition-all duration-200 hover:scale-110 ${props.theme ? 'hover:text-blue' : 'hover:text-green'}`}>Skills</span>
            <span className={`transition-all duration-200 hover:scale-110 ${props.theme ? 'hover:text-blue' : 'hover:text-green'}`}>Projects</span>
            {/* <span className={`transition-all duration-200 hover:scale-110 ${props.theme ? 'hover:text-blue' : 'hover:text-green'}`}>Blogs</span> */}
            <span className={`transition-all duration-200 hover:scale-110 ${props.theme ? 'hover:text-blue' : 'hover:text-green'}`}>Contact</span>
          </div>
        ) : (
          <></>
        )}
      </div>
    )
}
export default Menu