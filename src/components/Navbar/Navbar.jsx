import "./Navbar.scss"

import logo from "../../assets/images/logo.png"

const Navbar = () => {
    return (
        <div className="navbar__title">
            <img src={logo} alt="LL Harrison logo" className="navbar__logo" />
        </div>
    )
}

export default Navbar