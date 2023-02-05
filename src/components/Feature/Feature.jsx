import "./Feature.scss"
import Heading from "../Heading/Heading"

const Feature = ({ icon, hText, pText }) => {
    const hStyle = '4 heading-4--dark'

    return (
        <div className="feature">
            <svg className="feature__icon">
                {/* <use xlink:href={`img/sprite.svg#icon-${icon}`}></use> */}
            </svg>
            <Heading HType={'h4'} hStyle={hStyle} text={hText} />
            <p className="feature__text">{pText}</p>
        </div>
    )
}

export default Feature