import { Link } from "react-router-dom"

const SidebarItem = ({ navLink, children }) => {
    return (
        <li className="dropdown__item"><Link to={navLink} className="dropdown__link">{children}</Link></li>
    )
}
export default SidebarItem