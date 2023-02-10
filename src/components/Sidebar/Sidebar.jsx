import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

import logo from "../../assets/images/logo-blue.ico"

import { MdAccountCircle } from 'react-icons/md';
import { BiCategory } from 'react-icons/bi';
import { AiOutlineStar } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { GrContact } from 'react-icons/gr';
import { GoHome } from "react-icons/go";

function Sidebar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="sidebar">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>

          <Link to="/profile">
            <button>Profile</button>
            {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
          </Link>

          <span>{user && user.name}</span>
        </>
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
          <Link to="/categories" className="icon">
            {" "}
            <BiCategory />
          </Link>
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
