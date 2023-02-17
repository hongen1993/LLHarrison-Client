import { Link } from "react-router-dom"

import "./Button.scss"

const Button = ({ link, bStyle, text }) => {
    return (
        <button className={`btn ${bStyle}`}>
            <Link to={`/${link}`}>{text}</Link>
        </button>
    )
}

export default Button