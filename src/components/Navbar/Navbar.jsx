import "./Navbar.scss"

import { Link } from "react-router-dom"

import logo from "../../assets/images/logo.png"

const Navbar = () => {
    return (
        <Link className="navbar__title" to="/">
            <img src={logo} alt="LL Harrison logo" className="navbar__logo" />
        </Link>
    )
}

export default Navbar