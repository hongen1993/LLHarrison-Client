import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { HashLink } from 'react-router-hash-link';

import logo from "../../assets/images/logo-blue.ico"
import SidebarItem from "../SidebarItem/SidebarItem";

import { MdAccountCircle } from 'react-icons/md';
import { BiCategory } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { GrContact } from 'react-icons/gr';
import { GoHome } from "react-icons/go";

function Sidebar() {
  const { isLoggedIn } = useContext(AuthContext);

  const listLink1 = '/profile'
  const listLink2 = '/properties'
  const listLink3 = '/buying-process'
  const listLink4 = '/after-sales-services'
  const listLink5 = '/about-us'
  const listLink6 = '/contact-us'

  const listText1 = 'Login'
  const listText2 = 'Our Properties'
  const listText3 = 'Buying Process'
  const listText4 = 'After Sales Services'
  const listText5 = 'About Us'
  const listText6 = 'Contact Us'

  return (
    <>
      <nav className="sidebar">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        {isLoggedIn && (
          <div className="sidebar__icons">
            <Link to="/profile" className="icon">
              {" "}
              <MdAccountCircle />
            </Link>
            <Link to="/properties" className="icon">
              {" "}
              <GoHome />
            </Link>
            <Link to="/after-sales-services" className="icon">
              {" "}
              <AiOutlineStar />
            </Link>
            {<HashLink to="/#section-categories" className="icon">
              <BiCategory />
            </HashLink>}
            <Link to="/about-us" className="icon">
              {" "}
              <BsInfoCircle />
            </Link>
            <Link to="/contact-us" className="icon">
              {" "}
              <GrContact />
            </Link>
          </div>
        )}

        {!isLoggedIn && (
          <div className="sidebar__icons">
            <Link to="/login" className="icon">
              {" "}
              <MdAccountCircle />
            </Link>
            <Link to="/properties" className="icon">
              {" "}
              <GoHome />
            </Link>
            {<Link to="/after-sales-services" className="icon">
              {" "}
              <AiOutlineStar />
            </Link>}
            {<HashLink to="/#section-categories" className="icon">
              {" "}
              <BiCategory />
            </HashLink>}
            <Link to="/about-us" className="icon">
              {" "}
              <BsInfoCircle />
            </Link>
            <Link to="/contact-us" className="icon">
              {" "}
              <GrContact />
            </Link>
          </div>
        )}
      </nav>
      <div className="dropdown">
        <input type="checkbox" className='dropdown__checkbox' id="dropdown-toggle" />
        <label htmlFor="dropdown-toggle" className="dropdown__button">
          <span className="dropdown__icon">&nbsp;</span>
        </label>

        <div className="dropdown__background">&nbsp;</div>

        <nav className="dropdown__nav">
          <ul className="dropdown__list">
            <SidebarItem navLink={listLink1} children={listText1} />
            <SidebarItem navLink={listLink2} children={listText2} />
            <SidebarItem navLink={listLink3} children={listText3} />
            <SidebarItem navLink={listLink4} children={listText4} />
            <SidebarItem navLink={listLink5} children={listText5} />
            <SidebarItem navLink={listLink6} children={listText6} />
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
