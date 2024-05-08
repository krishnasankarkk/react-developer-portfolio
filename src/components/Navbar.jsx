import Logo from "./Logo"
import Menu from "./Menu"
import './Navbar.css'

function Navbar(props) {
    return (
    <div className={`${props.theme ? 'bg-light text-dark': 'bg-dark'} flex flex-row gap-1 items-center justify-between font-bold text-2xl fixed top-0 left-0 bg-opacity-70 w-full`}>
        <Logo theme={props.theme} />
        <Menu theme={props.theme} />
    </div>
    )
}

export default Navbar