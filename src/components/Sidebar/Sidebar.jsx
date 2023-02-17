import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { HashLink } from 'react-router-hash-link';

import logo from "../../assets/images/logo-blue.ico"

import { MdAccountCircle } from 'react-icons/md';
import { BiCategory } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { GrContact } from 'react-icons/gr';
import { GoHome } from "react-icons/go";

function Sidebar() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
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
          <Link to="/login" className="icon">
            {" "}
            <AiOutlineStar />
          </Link>
          <HashLink to="/#section-categories" className="icon">
            <BiCategory />
          </HashLink>
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
          <Link to="/login" className="icon">
            {" "}
            <AiOutlineStar />
          </Link>
          <HashLink to="/#section-categories" className="icon">
            {" "}
            <BiCategory />
          </HashLink>
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
  );
}

export default Sidebar;
