import { Link } from "react-router-dom"

const SidebarItem = ({ navLink, children }) => {
    const redirecting = (e) => {
        const checkbox = document.getElementById("navbar-toggle")
        checkbox.checked ? checkbox.checked = false : checkbox.checked = true
        e.preventDefault();
    }

    return (
        <li className="dropdown__item"><Link to={navLink} onClick={redirecting} className="dropdown__link">{children}</Link></li>
    )
}
export default SidebarItem