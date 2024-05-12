import { useState } from "react"
import Resume from '../assets/Resume - Krishnasankar.pdf'

function Menu(props) {
  
  const handleMouseDown = () => {
    props.setShowMenu(!props.showMenu)
    const option1 = document.getElementById('option1')
    const option2 = document.getElementById('option2')
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
      <div className="options relative z-0 text-xl">
        <div className="flex flex-col gap-2 items-end p-8 z-0" onMouseDownCapture={handleMouseDown}>
          <div id="option1" className={`${props.theme ? 'bg-dark' : 'bg-light'} w-[2rem] h-1 rounded-full`}></div>
          <div id="option2" className={`${props.theme ? 'bg-dark' : 'bg-light'} w-[1rem] h-1 rounded-full`}></div>
        </div>
        {props.showMenu ? (
          <div className={`${props.theme?'bg-light md:bg-[#00000000]':'bg-dark md:bg-[#00000000]'} menu flex flex-col md:flex-row items-start  justify-start pt-40 gap-6 absolute p-6 md:p-6 md:top-0 md:right-20 top-2 -right-2 h-[100vh] md:h-auto w-auto rounded-xl -z-10`}>
            <a
              href={Resume} 
              download="Resume-Krishnasankar.pdf"
              className={`transition-all duration-200 hover:scale-110 ${props.theme ? 'hover:text-blue' : 'hover:text-green'} cursor-none flex flex-row items-center justify-start gap-2 mr-4`}
              onMouseEnter={handleResumeEnter}
              onMouseLeave={handleResumeLeave}
            >
              Resume
              <img id="download" className="w-4 h-4" src={`${props.theme ? 'down-black.png' : 'down-white.png'}`} alt="" />
            </a>
            <span 
              className={`transition-all duration-200 hover:scale-110 ${props.theme ? 'hover:text-blue' : 'hover:text-green'}`}
              onMouseDownCapture={props.menuChange}
              id="skills"
            >
            Skills</span>
            <span 
              className={`transition-all duration-200 hover:scale-110 ${props.theme ? 'hover:text-blue' : 'hover:text-green'}`}
              onMouseDownCapture={props.menuChange}
              id="experience"
            >Experience</span>
            <span 
              className={`transition-all duration-200 hover:scale-110 ${props.theme ? 'hover:text-blue' : 'hover:text-green'}`}
              onMouseDownCapture={props.menuChange}
              id="projects"
            >Projects</span>
            {/* <span className={`transition-all duration-200 hover:scale-110 ${props.theme ? 'hover:text-blue' : 'hover:text-green'}`}>Blogs</span> */}
            <span 
              className={`transition-all duration-200 hover:scale-110 ${props.theme ? 'hover:text-blue' : 'hover:text-green'}`}
              onMouseDownCapture={props.menuChange}
              id="contact"
            >Contact</span>
          </div>
        ) : (
          <></>
        )}
      </div>
    )
}
export default Menu