import "./AboutUsPage.scss"

import Navbar from "../../components/Navbar/Navbar"
import Feature from "../../components/Feature/Feature"
import Heading from "../../components/Heading/Heading"
import Footer from "../../components/Footer/Footer"

import { MdOutlineShareLocation } from 'react-icons/md';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiOutlineSketch } from 'react-icons/ai';
import { AiOutlineTrophy } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { SiSpeedtest } from 'react-icons/si';

const AboutUsPage = () => {

    const iconA = <AiOutlineSketch className="feature__icon" />
    const iconB = <AiOutlineHome className="feature__icon" />
    const iconC = <MdOutlineShareLocation className="feature__icon" />
    const iconD = <SiSpeedtest className="feature__icon" />
    const iconE = <AiOutlineTrophy className="feature__icon" />
    const iconF = <AiOutlineCheckCircle className="feature__icon" />

    const hTextA = 'Marbella`s best luxury homes'
    const hTextB = 'Only the best properties'
    const hTextC = 'All homes in best locations'
    const hTextD = 'New home in one week'
    const hTextE = 'Top 1% realtors'
    const hTextF = 'Best 100% guaranted'

    const pTextA = 'We are unrivalled company with strong focus on providing Real Estate services that go beyond our customer`s expectation.'
    const pTextB = 'We been selected Marbella`s most luxury properties, with the best exclusive representative of the Costa del Sol.'
    const pTextC = 'Our homes selected are in the best locations of Marbella, with security 24hours and near every needs.'
    const pTextD = 'We are honoured to assist over 200 families a year, from 30 countries across the globe to succeed in finding ideal property.'
    const pTextE = 'Our staff are fully up to date with the latest developments, luxury listings and all financial and legal aspects pertaining to the sector.'
    const pTextF = 'Real Estate agency based on delivering an unrivalled service to our international customer base, through loyalty and integrity.'
    return (
        <>
            <Navbar />
            <section class="section-about-us">
                <Heading HType={'h2'} hStyle={'3'} text={'About us'} />
            </section>
            <section className="features">
                <Feature icon={iconA} hText={hTextA} pText={pTextA} />
                <Feature icon={iconB} hText={hTextB} pText={pTextB} />
                <Feature icon={iconC} hText={hTextC} pText={pTextC} />
                <Feature icon={iconD} hText={hTextD} pText={pTextD} />
                <Feature icon={iconE} hText={hTextE} pText={pTextE} />
                <Feature icon={iconF} hText={hTextF} pText={pTextF} />
            </section>
            <Footer />
        </>
    )
}

export default AboutUsPage