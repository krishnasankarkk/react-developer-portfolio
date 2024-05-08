import { useState } from "react"

function Menu(props) {
  console.log(props);
  const [showMenu, setShowMenu] = useState(false)
  
  const handleMouseDown = () => {
    console.log("clicked");
    setShowMenu(!showMenu)
  }

    return (
      <div className="options relative flex flex-col gap-2 items-end p-8 z-50" onMouseDownCapture={handleMouseDown}>
        <div className={`${props.theme ? 'bg-dark' : 'bg-light'} option w-[2rem] h-1 rounded-full`}></div>
        <div className={`${props.theme ? 'bg-dark' : 'bg-light'} option w-[1rem] h-1 rounded-full`}></div>
        {showMenu ? (
          <div className="menu flex flex-row items-center justify-center gap-6 absolute top-6 pr-24 right-4 w-auto h-auto rounded-xl -z-30">
            <span className="transition-all duration-200 hover:scale-110">Resume</span>
            <span className="transition-all duration-200 hover:scale-110">Skills</span>
            <span className="transition-all duration-200 hover:scale-110">Projects</span>
            <span className="transition-all duration-200 hover:scale-110">Blogs</span>
            <span className="transition-all duration-200 hover:scale-110">Contact</span>
          </div>
        ) : (
          <></>
        )}
      </div>
    )
}
export default Menu