import { Link } from "react-router-dom"

import "./Footer.scss"

const FooterSection = () => {
    return (
        < footer className="footer" >
            <ul className="nav">
                <li className="nav__item"><Link to="/properties" className="nav__link">Your dream home</Link></li>
                <li className="nav__item"><Link to="/buying-process" className="nav__link">Buying process</Link></li>
                <li className="nav__item"><Link to="/after-sales-services" className="nav__link">After Sales Services</Link></li>
                <li className="nav__item"><Link to="/about-us" className="nav__link">About us</Link></li>
                <li className="nav__item"><Link to="/contact-us" className="nav__link">Contact us</Link></li>
                <li className="nav__item"><Link to="/#" className="nav__link">Come work with us!</Link></li>
            </ul>
            <p className="copyright">
                &copy; Copyright 2023
            </p>
        </footer >
    )
}
export default FooterSection
