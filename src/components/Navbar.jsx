import Logo from "./Logo"
import './Navbar.css'

function Navbar() {
    return (
    <div className='flex flex-row gap-1 items-center justify-between font-bold text-2xl fixed top-0 left-0 bg-dark bg-opacity-70 w-full'>
        <Logo />
        <div className="options relative flex flex-col gap-2 items-end p-8 z-50">
            <div className="option w-[2rem] h-1 bg-light rounded-full"></div>
            <div className="option w-[1rem] h-1 bg-light rounded-full"></div>
            <div className="menu flex flex-row items-center justify-center gap-2 absolute top-6 pr-24 right-4 w-auto h-auto rounded-xl -z-30">
                <span className="transition-all duration-200 hover:translate-x-2 hover:text-blue">Resume</span>
                <span className="transition-all duration-200 hover:translate-x-2 hover:text-blue">Resume</span>
                <span className="transition-all duration-200 hover:translate-x-2 hover:text-blue">Resume</span>
                <span className="transition-all duration-200 hover:translate-x-2 hover:text-blue">Resume</span>
            </div>
        </div>
    </div>
    )
}

export default Navbar