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
            </ul>
            <div className="copyright">
                <p>Developed by <Link to='https://www.linkedin.com/in/hongen-shyu-barcel/'>Hong-en SB</Link></p>
                <p>All rights reserved &copy; Copyright 2023</p>
            </div>
        </footer >
    )
}
export default FooterSection
