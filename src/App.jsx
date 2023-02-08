import "./App.scss";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import Sidebar from "./components/Sidebar/Sidebar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";

import PropertiesPage from "./pages/PropertiesPage/PropertiesPage";
import BuyProcessPage from "./pages/BuyProcessPage/BuyProcessPage";
import AfterSalePage from "./pages/AfterSalePage/AfterSalePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactUs from "./pages/ContactUs/ContactUs";


function App() {
  return (
    <div className="container">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />

        <Route
          path="/properties"
          element={
            <IsAnon>
              <PropertiesPage />
            </IsAnon>
          }
        />
        <Route
          path="/buying-process"
          element={
            <IsAnon>
              <BuyProcessPage />
            </IsAnon>
          }
        />
        <Route
          path="/after-sales-services"
          element={
            <IsAnon>
              <AfterSalePage />
            </IsAnon>
          }
        />
        <Route
          path="/about-us"
          element={
            <IsAnon>
              <AboutUsPage />
            </IsAnon>
          }
        />
        <Route
          path="/contact-us"
          element={
            <IsAnon>
              <ContactUs />
            </IsAnon>
          }
        />


      </Routes>
    </div>
  );
}

export default App;
