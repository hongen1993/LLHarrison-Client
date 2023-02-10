import "./AfterSalePage.scss"

import Navbar from "../../components/Navbar/Navbar"
import Heading from "../../components/Heading/Heading"
import Service from "../../components/Service/Service"
import Footer from "../../components/Footer/Footer"


const AfterSalePage = () => {
    return (
        <>
            <Navbar />
            <section className="section-after-sale">
                <div className="section-after-sale--title">
                    <Heading HType={'h2'} hStyle={'3'} text={'After Sale Services'} />
                </div>
                <div className="section-after-sale--content">
                    <div className="section-guide--after after-sales">
                        <div className="after-sales--a">
                            <p>We would like to congratulate you on your property purchase in Sunny Spain! Now that you have been able to successfully obtain your ideal property we are here to secure a smooth transition into the Spanish life.</p>
                            <br />
                            <p>Bromley Estates Marbella provides a complete After Sales Service to ensure customer satisfaction. We are dedicated to maintaining our professional service before, during and after your property purchase.</p>
                        </div>
                        <div className="after-sales--b">
                            <p>Below we compiled a list of the most requested services. When moving or vacationing in a new country, there could be a learning curve to “how things work in Spain” We are here to assist you with any requests you may have and will direct you to only the most reputable of companies.</p>
                            <br />
                            <p>We have established a network of companies and collaborators who have been assisting our clients over the years.</p>
                        </div>
                    </div>
                    <Heading HType={'h2'} hStyle={'1 after'} text={'Services'} />
                    <div className="guides--content">
                        <p className="guides--text after-text">LL Harrison will be able to assist you with the following After Sale Services.</p>
                        <div className="guides--features">
                            <Service text={' Property and Health insurance'} />
                            <Service text={'Furniture packages'} />
                            <Service text={'Handymen'} />
                            <Service text={'Currency exchange'} />
                            <Service text={'Interior design'} />
                            <Service text={'Property Management'} />
                            <Service text={'Builders'} />
                            <Service text={'Kitchen suppliers'} />
                            <Service text={'Satellite/Internet services'} />
                            <Service text={'Car rental'} />
                            <Service text={'Advice on Schools and Banking'} />
                            <Service text={'Home security'} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default AfterSalePage