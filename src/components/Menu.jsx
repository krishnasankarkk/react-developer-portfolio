import Resume from '../assets/pdf/Resume - Krishnasankar.pdf'

function Menu(props) {
  
  const handleToggleMenu = (e) => {
    if(e.currentTarget.id)
      props.menuChange(e.currentTarget.id)
    props.setShowMenu(!props.showMenu)
    const option1 = document.getElementById('option1')
    const option2 = document.getElementById('option2')
    if(!props.showMenu){
      option1.classList.add('selected')
      option2.classList.add('selected')
    }else{
      option1.classList.remove('selected')
      option2.classList.remove('selected')
    }
  }
  const handleMousePointer = () => {
    props.setMousePointer(true)
  }
  const handleMousePointerLeave = () => {
    props.setMousePointer(false)
  }
  const handleResumeEnter = () => {
    handleMousePointer()
    const downloadImage = document.getElementById('download')
    downloadImage.src = props.theme ? 'down-blue.png' : 'down-green.png'
  }
  const handleResumeLeave = () => {
    handleMousePointerLeave()
    const downloadImage = document.getElementById('download')
    downloadImage.src = props.theme ? 'down-black.png' : 'down-white.png'
  }

    return (
      <div className="options relative z-0 text-xl">
        <div 
          className="flex flex-col gap-2 items-end md:p-8 p-4 z-0" 
          onMouseDownCapture={handleToggleMenu}
          onMouseEnter={handleMousePointer} 
          onMouseLeave={handleMousePointerLeave} 
        >
          <div id="option1" className={`${props.theme ? 'bg-dark' : 'bg-light'} w-[2rem] h-1 rounded-full`}></div>
          <div id="option2" className={`${props.theme ? 'bg-dark' : 'bg-light'} w-[1rem] h-1 rounded-full`}></div>
        </div>
        {props.showMenu ? (
          <div className={`${props.theme?'bg-light md:bg-[#00000000]':'bg-dark md:bg-[#00000000]'} menu flex flex-col md:flex-row items-start  justify-start pt-40 gap-6 absolute p-6 md:p-6 md:top-0 md:right-20 top-2 -right-2 h-[100vh] md:h-auto w-auto rounded-xl -z-10`}>
            <a
              href={Resume}
              target='_blank'
              className={`hover:scale-110 ${props.theme ? 'hover:text-blue' : 'hover:text-green'} cursor-none flex flex-row items-center justify-start gap-2 mr-4`}
              onMouseEnter={handleResumeEnter}
              onMouseLeave={handleResumeLeave}
            >
              Resume
              <img id="download" className="w-4 h-4  transition-all duration-300" src={`${props.theme ? 'down-black.png' : 'down-white.png'}`} alt="" />
            </a>
            <span 
              className={`menu-item hover:scale-110 ${props.onPage == 'about' ? `${props.theme ? 'text-blue' : 'text-green'}` : ''} ${props.theme ? 'hover:text-blue' : 'hover:text-green'}`}
              onMouseDownCapture={handleToggleMenu}
              id="about"
              onMouseEnter={handleMousePointer} 
              onMouseLeave={handleMousePointerLeave} 
            >
            About</span>
            <span 
              className={`menu-item hover:scale-110 ${props.onPage == 'skills' ? `${props.theme ? 'text-blue' : 'text-green'}` : ''} ${props.theme ? 'hover:text-blue' : 'hover:text-green'}`}
              onMouseDownCapture={handleToggleMenu}
              id="skills"
              onMouseEnter={handleMousePointer} 
              onMouseLeave={handleMousePointerLeave} 
            >
            Skills</span>
            <span 
              className={`menu-item hover:scale-110 ${props.onPage == 'experience' ? `${props.theme ? 'text-blue' : 'text-green'}` : ''} ${props.theme ? 'hover:text-blue' : 'hover:text-green'}`}
              onMouseDownCapture={handleToggleMenu}
              id="experience"
              onMouseEnter={handleMousePointer} 
              onMouseLeave={handleMousePointerLeave} 
            >Experience</span>
            <span 
              className={`menu-item hover:scale-110 ${props.onPage == 'projects' ? `${props.theme ? 'text-blue' : 'text-green'}` : ''} ${props.theme ? 'hover:text-blue' : 'hover:text-green'}`}
              onMouseDownCapture={handleToggleMenu}
              id="projects"
              onMouseEnter={handleMousePointer} 
              onMouseLeave={handleMousePointerLeave} 
            >Projects</span>
            <span 
              className={`menu-item hover:scale-110 ${props.onPage == 'contact' ? `${props.theme ? 'text-blue' : 'text-green'}` : ''} ${props.theme ? 'hover:text-blue' : 'hover:text-green'}`}
              onMouseDownCapture={handleToggleMenu}
              id="contact"
              onMouseEnter={handleMousePointer}
              onMouseLeave={handleMousePointerLeave}
            >Contact</span>
          </div>
        ) : (
          <></>
        )}
      </div>
    )
}
export default Menu