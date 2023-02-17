import { Routes, Route } from "react-router-dom";
import "./App.scss";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import Sidebar from "./components/Sidebar/Sidebar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import IsAdmin from "./components/IsAdmin/IsAdmin";

import PropertiesPage from "./pages/PropertiesPage/PropertiesPage";
import BuyProcessPage from "./pages/BuyProcessPage/BuyProcessPage";
import AfterSalePage from "./pages/AfterSalePage/AfterSalePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import AddProperties from "./pages/AddProperties/AddProperties";
import PropertiesCategoryPage from "./pages/PropertiesCategoryPage/PropertiesCategoryPage";
import PropertyPage from "./pages/PropertyPage/PropertyPage";



function App() {
  return (
    <div >
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
          path="/add-properties"
          element={
            <IsAdmin>
              <AddProperties />
            </IsAdmin>
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
            <PropertiesPage />
          }
        />
        <Route
          path="/properties-categories"
          element={
            <PropertiesCategoryPage />
          }
        />
        <Route
          path="/buying-process"
          element={
            <BuyProcessPage />
          }
        />
        <Route
          path="/after-sales-services"
          element={
            <AfterSalePage />
          }
        />
        <Route
          path="/about-us"
          element={
            <AboutUsPage />
          }
        />
        <Route
          path="/contact-us"
          element={
            <ContactUsPage />
          }
        />

        <Route
          path="/property/:id"
          element={
            <PropertyPage />
          }
        />

      </Routes>
    </div>
  );
}

export default App;
