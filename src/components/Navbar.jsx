import Logo from "./Logo"
import Menu from "./Menu"
import './Navbar.css'

function Navbar(props) {
    return (
    <div className={`flex flex-row gap-1 items-center justify-between font-bold text-2xl fixed top-0 left-0 w-full z-50`}>
        <Logo theme={props.theme} />
        <Menu theme={props.theme} />
    </div>
    )
}

export default Navbar