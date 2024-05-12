import Logo from "./Logo"
import Menu from "./Menu"
import './Navbar.css'

function Navbar(props) {
    return (
    <div className={`transition-all duration-300 ${props.theme ? 'bg-light' : 'bg-dark'} bg-opacity-90 flex flex-row gap-1 items-center justify-between font-bold text-2xl fixed top-0 left-0 w-full z-50`}>
        <Logo 
            theme={props.theme} 
            menuChange={props.menuChange}
        />
        <Menu 
            theme={props.theme} 
            menuChange={props.menuChange}
            showMenu={props.showMenu}  
            onPage={props.onPage}  
            setShowMenu={props.setShowMenu} 
            setMousePointer={props.setMousePointer}  
        />
    </div>
    )
}

export default Navbar