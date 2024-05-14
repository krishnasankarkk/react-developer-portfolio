function Logo(props) {
  const handleToggleMenu = (e) => {
    if(e.currentTarget.id)
      props.menuChange(e.currentTarget.id)
  }
    return (
      <div 
        className='flex flex-row gap-1 font-bold text-sm md:text-2xl relative w-[18rem] md:p-8 p-4'
        onMouseDownCapture={handleToggleMenu}
        id="home"
      >
        <span className="letter">k</span>
        <span className="letter">r</span>
        <span className="letter">i</span>
        <span className="letter">s</span>
        <span className="letter">h</span>
        <span className="letter">n</span>
        <span className="letter">a</span>
        <span className="letter">s</span>
        <span className="letter">a</span>
        <span className="letter">n</span>
        <span className="letter">k</span>
        <span className="letter">a</span>
        <span className="letter">r</span>
        <span className="letter">.</span>
        <span className="letter">d</span>
        <span className="letter">e</span>
        <span className="letter">v</span>
        {/* <div className={`${props.theme?'bg-dark':'bg-light'} cursor absolute left-2 bottom-8 h-[0.1rem] md:h-1 w-4 rounded-sm`}></div> */}
      </div>
    )
}
export default Logo 