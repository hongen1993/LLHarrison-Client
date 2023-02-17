import "./LoginPage.scss";

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

import authService from "../../services/auth.service";

import Navbar from "../../components/Navbar/Navbar";
import Heading from "../../components/Heading/Heading";
import FooterSection from "../../components/Footer/Footer";
import FormGroup from "../../components/FormGroup/FormGroup";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };
    authService
      .login(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <>
      <Navbar />
      <section className="section-login">
        <div className="section-login__form">
          <Heading HType={'h3'} hStyle={'3'} text={'Login'} />
          <form onSubmit={handleLoginSubmit} className="login-form">
            <FormGroup onChange={handleEmail} inputType={"email"} placeholder={'Email'} labelType={'Email'} />
            <FormGroup onChange={handlePassword} inputType={"password"} placeholder={'Password'} labelType={'Password'} />
            <div className="form__group">
              <button className="btn btn--green">Submit</button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <Link to={"/signup"} className="to-signup"> Don't have an account yet?</Link>
          </form>
        </div>
      </section>

      <FooterSection />
    </>
  );
}

export default LoginPage;
