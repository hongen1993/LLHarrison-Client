import "./BuyProcessPage.scss"

import Navbar from "../../components/Navbar/Navbar"
import Heading from "../../components/Heading/Heading"
import Service from "../../components/Service/Service"
import Footer from "../../components/Footer/Footer"

const BuyProcessPage = () => {
    return (
        <>
            <Navbar />
            <div className="section-buy-process">
                <div className="section-buy-process__title">
                    <Heading HType={'h2'} hStyle={'1'} text={'Buying process'} />
                    <div className="step">
                        <div className="step__one">
                            <Heading HType={'h3'} hStyle={'3'} text={'Step 1: Reservation contract'} />
                            <p>Once you have found a property you like, and wish to move forward with the purchase, the first step is to draw up a 'reservation contract'. The reservation contract is standard procedure when buying a property in Spain - used to reserve the property for a specified period of time (whilst your lawyer conducts due diligence).Sets out the basic terms and conditions of the purchase.</p>
                        </div>
                        <div className="step__two">
                            <Heading HType={'h3'} hStyle={'3'} text={'Step 2: Private purchase contract'} />
                            <p>Having conducted a full and thorough due diligence, your lawyer will inform you of their findings and if you still wish to buy discuss moving forward with a private purchase contract which sets out the terms and conditions of the sale.Will be prepared by your lawyer and include: - a legal declaration, stating they are legally positioned to sell the property. - property address - property dimensions and the property's features.</p>
                        </div>
                    </div>
                </div>
                <div className="section-buy-process__guides guides">
                    <Heading HType={'h2'} hStyle={'1'} text={'Contact Bromley Estates for further guidance'} />
                    <div className="guides__content">
                        <p className="guides__text">Below we have compiled a list of the most commonly requested services. When moving or vacationing in a new country, there could be a learning curve to “how things work in Spain” We are here to assist you with any requests you may have and will direct you to only the most reputable of companies.</p>
                        <div className="guides__features">
                            <Service text={' Property and Health insurance'} />
                            <Service text={'Currency exchange'} />
                            <Service text={'Builders'} />
                            <Service text={'Furniture packages'} />
                            <Service text={'Arrangement of NIE number'} />
                            <Service text={'Interior design'} />
                            <Service text={'Kitchen suppliers'} />
                            <Service text={'Contracting water & electricity'} />
                            <Service text={'Handymen'} />
                            <Service text={'Advice on Schools and Banking'} />
                            <Service text={'Property Management'} />
                            <Service text={'Satellite/Internet services'} />
                            <Service text={'Car rental'} />
                            <Service text={'Home security'} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BuyProcessPage