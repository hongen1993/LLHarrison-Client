import "./Property.scss"
import Heading from "../Heading/Heading"
import Button from "../Button/Button"

const Property = ({ image, title, location, rooms, area, price }) => {
    return (
        <div className="property">
            <img src={image} alt="House 1" className="property__img" />
            <svg className="property__like">
                {/* <use xlink:href="img/sprite.svg#icon-heart-full"></use> */}
            </svg>
            <Heading HType={'h5'} hStyle={' property__name'} text={title} />
            <div className="property__location">
                <svg>
                    {/* <use xlink:href="img/sprite.svg#icon-map-pin"></use> */}
                </svg>
                <p>{location}</p>
            </div>
            <div className="property__rooms">
                <svg>
                    {/* <use xlink:href="img/sprite.svg#icon-profile-male"></use> */}
                </svg>
                <p>{rooms}</p>
            </div>
            <div className="property__area">
                <svg>
                    {/* <use xlink:href="img/sprite.svg#icon-expand"></use> */}
                </svg>
                <p>{area} m<sup>2</sup></p>
            </div>
            <div className="property__price">
                <svg>
                    {/* <use xlink:href="img/sprite.svg#icon-key"></use> */}
                </svg>
                <p>{price}€</p>
            </div>
            <Button bStyle={'property__btn'} text={'Contact realtor'} />
        </div>
    )
}

export default Property