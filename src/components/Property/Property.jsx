import "./Property.scss"
import Heading from "../Heading/Heading"
import Button from "../Button/Button"

import { MdOutlineBedroomParent, MdOutlinePriceChange } from 'react-icons/md';
import { BiBath, BiArea } from 'react-icons/bi';
import { GrLocation } from 'react-icons/gr';

const Property = ({ image, title, location, bedrooms, bathrooms, area, price, propId }) => {
    let number = price.toLocaleString()
    return (
        <div className="property" >
            <img src={image} alt="House 1" className="property__img" />
            <Heading HType={'h5'} hStyle={' property__name'} text={title} />
            <div className="property__location">
                <GrLocation />
                <p>{location}</p>
            </div>
            <div className="property__bedrooms">
                <MdOutlineBedroomParent />
                <p>{bedrooms}</p>
            </div>
            <div className="property__bathrooms">
                <BiBath />
                <p>{bathrooms}</p>
            </div>
            <div className="property__area">
                <BiArea />
                <p>{area} m<sup>2</sup></p>
            </div>
            <div className="property__price">
                <MdOutlinePriceChange />
                <p>{number}€</p>
            </div>
            <Button bStyle={'property__btn'} text={'Contact realtor'} link='contact-us' />
        </div>
    )
}

export default Property