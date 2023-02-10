import "./HeaderSection.scss"

import backgroundVideo from "../../assets/videos/background-video.mp4"
import backgroundVideoB from "../../assets/videos/background-video.webm"

import Navbar from "../../components/Navbar/Navbar"
import imageA from "../../assets/images/logo-bbc.png"
import imageB from "../../assets/images/logo-forbes.png"
import imageC from "../../assets/images/logo-techcrunch.png"
import imageD from "../../assets/images/logo-bi.png"

import Heading from "../../components/Heading/Heading"
import Button from "../../components/Button/Button"

const HeaderSection = () => {
    return (
        <section className="header">
            <Navbar />
            <div className="bg-video" >
                <video className="bg-video__content" autoPlay muted loop >
                    <source src={backgroundVideo}
                        // srcset={`${sierraNevadaVideo2} 300w, ${sierraNevadaVideoB2} 800w`} 
                        type="video/mp4" />
                    <source src={backgroundVideoB}
                        // srcset={`${sierraNevadaVideoB2} 300w, ${sierraNevadaVideoB} 800w`} 
                        type="video/webm" />
                    Your browser is not supported!
                </video >
            </div >
            <div className="header__content">
                <Heading HType={'h3'} hStyle={'3'} text={'Marbella`s Premier Real Estate Agency'} />
                <Heading HType={'h1'} hStyle={'1'} text={'The ultimate personal freedom'} />

                <Button link={'properties'} bStyle={'header__btn'} text={'Our properties'} />
                <div className="header__seenon-text">Seen on</div>
                <div className="header__seenon-logos">
                    <img src={imageA} alt="Seen on logo 1" />
                    <img src={imageB} alt="Seen on logo 2" />
                    <img src={imageC} alt="Seen on logo 3" />
                    <img src={imageD} alt="Seen on logo 4" />
                </div>
            </div>
        </section>
    )
}

export default HeaderSection