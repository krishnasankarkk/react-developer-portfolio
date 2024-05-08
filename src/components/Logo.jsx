import CustomCursor from "./CustomCursor"

function Logo() {
    return (
      <div className='flex flex-row gap-1 font-bold text-2xl relative w-[18rem] p-8'>
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
        <div className="cursor absolute left-2 bottom-8 h-1 w-4 bg-light rounded-sm"></div>
      </div>
    )
}
export default Logo