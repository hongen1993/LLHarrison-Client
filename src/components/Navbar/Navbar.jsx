import "./Navbar.scss"
import { Link } from "react-router-dom"

import logo from "../../assets/images/logo.png"

const Navbar = () => {
    return (
        <div className="navbar__title">
            <Link to='/'>
                <img src={logo} alt="LL Harrison logo" className="navbar__logo" />
            </Link>
        </div>
    )
}

export default Navbar