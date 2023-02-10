import HeaderSection from "../../sections/HeaderSection/HeaderSection"
import RealtorsSection from "../../sections/RealtorsSection/RealtorsSection"
import CategoriesSection from "../../sections/CategoriesSection/CategoriesSection"
import StorySection from "../../sections/StorySection/StorySection"
import PropertiesSection from "../../sections/PropertiesSection/PropertiesSection"
import GallerySection from "../../sections/GallerySection/GallerySection"
import Footer from "../../components/Footer/Footer"

function HomePage() {
  return (
    <>
      <HeaderSection />
      <RealtorsSection />
      <CategoriesSection />
      <StorySection />
      <PropertiesSection />
      <GallerySection />
      <Footer />
    </>
  );
}

export default HomePage;
