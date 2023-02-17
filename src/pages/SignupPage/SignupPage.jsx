import "./SignupPage.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";

import Heading from "../../components/Heading/Heading";
import FormGroup from "../../components/FormGroup/FormGroup";
import Navbar from "../../components/Navbar/Navbar";
import FooterSection from "../../components/Footer/Footer";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);

  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleSurname = (e) => setSurname(e.target.value);
  const handleBirthdate = (e) => setBirthdate(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name, surname, birthdate, phoneNumber };
    authService
      .signup(requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="container container__B">
      <Navbar />
      <section className="section-signup">
        <form onSubmit={handleSignupSubmit} className="section-signup__form form">
          <Heading HType={'h3'} hStyle={'3'} text={'Sign Up'} />
          <FormGroup onChange={handleName} formStyle={' section-signup__form-a'} inputType={"text"} placeholder={'Name'} labelType={'Name'} value={name} />
          <FormGroup onChange={handleSurname} formStyle={' section-signup__form-b'} inputType={"text"} placeholder={'Surname'} labelType={'Surname'} value={surname} />
          <FormGroup onChange={handleEmail} formStyle={' section-signup__form-c'} inputType={"email"} placeholder={'Email Address'} labelType={'Email Address'} value={email} />
          <div className={`form__group section-signup__form-a`}>
            <input onChange={handleBirthdate} value={birthdate} type='date' className="form__input font-color-secondary" placeholder='Date of birth' id='Date of birth' />
            <label htmlFor='Date of birth' className="form__label">Date of birth</label>
          </div>
          <FormGroup onChange={handlePhoneNumber} formStyle={' section-signup__form-b'} inputType={"tel"} placeholder={'Phone Number'} labelType={'Phone Number'} value={phoneNumber} />
          <FormGroup inputType={"password"} formStyle={' section-signup__form-a '} placeholder={'Password'} labelType={'Password'} />
          <FormGroup onChange={handlePassword} formStyle={' section-signup__form-b'} inputType={"password"} placeholder={'Re-type Password'} labelType={'Re-type Password'} value={password} />

          <div className="form__group section-signup__form-c">
            <button className="btn btn--green" type="submit">Sign Up</button>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <Link to={"/login"} className="to-login"> Already have account?</Link>
        </form>

      </section>
      <FooterSection />

    </div>
  );
}

export default SignupPage;
