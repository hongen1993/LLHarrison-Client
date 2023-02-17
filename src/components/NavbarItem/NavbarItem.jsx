import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const NavbarItem = ({ navLink, children }) => {
    const [checked, setChecked] = useState(true)
    const navigate = useNavigate()

    const checkbox = () => {
        setChecked(false)
        setTimeout(() => {
            navigate(navLink)
        }, 1000);
    }
    return (
        <li className="dropdown__item"><Link onClick={checkbox} className="dropdown__link">{children}</Link></li>
    )

}
export default NavbarItem 