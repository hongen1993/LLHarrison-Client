import "./App.scss";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";

import Sidebar from "./components/Sidebar/Sidebar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";

import HeaderSection from "./sections/HeaderSection/HeaderSection"
import RealtorsSection from "./sections/RealtorsSection/RealtorsSection"
import FeaturesSection from "./sections/FeaturesSection/FeaturesSection"
import StorySection from "./sections/StorySection/StorySection"
import HomesSection from "./sections/HomesSection/HomesSection"
import GallerySection from "./sections/GallerySection/GallerySection"
import FooterSection from "./sections/FooterSection/FooterSection"

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
      </Routes>
      <HeaderSection />
      <RealtorsSection />
      <FeaturesSection />
      <StorySection />
      <HomesSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
}

export default App;
