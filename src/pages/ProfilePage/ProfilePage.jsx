import "./ProfilePage.scss";

import Heading from "../../components/Heading/Heading";
import Navbar from "../../components/Navbar/Navbar";
import FooterSection from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { BiEdit } from 'react-icons/bi';

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function ProfilePage() {

  const { user, logOutUser } = useContext(AuthContext);
  const dateOfBirth = user.birthdate.substring(0, 10);
  const fullName = user.name + ' ' + user.surname

  return (
    <div className="container container__B">
      <Navbar />
      <section className="section-profile">
        <div className="profile">
          <div className="profile__data">
            {user.role === 'ADMIN' &&
              <div className="profile__add"><Link to='/add-properties'><IoMdAddCircleOutline /></Link></div>
            }
            <div className="profile__edit"><BiEdit /></div>
            <div className="profile__exit" onClick={logOutUser}><AiOutlineCloseCircle /></div>
            <Heading HType={'h3'} hStyle={'3'} text={fullName} />
            <p>Email address: {user.email}</p>
            <p>Date of birth: {dateOfBirth}</p>
            <p>Phone number: +{user.phoneNumber}</p>
          </div>
          <div className="profile__favourites">
            <Heading HType={'h3'} hStyle={'3'} text='Favourites' />
            <div className="profile__favourite">
              <img className='profile__img' id='profile__img' src={'image'}></img>
              <div className="profile__content">
                <h3 className="heading-3">{'text'}</h3>
              </div>
            </div>
          </div>
        </div>
      </section >
      <FooterSection />
    </div>
  );
}

export default ProfilePage;