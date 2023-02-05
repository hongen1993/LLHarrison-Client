import Heading from "../Heading/Heading"

const Realtor = ({ image, name, sold }) => {
    return (
        <>
            <img src={image} alt={name} className="realtors__img" />
            <div className="realtors__details">
                <Heading HType={'h4'} hStyle={'4 heading-4--light'} text={name} />
                <p className="realtors__sold">{sold} houses sold</p>
            </div>
        </>
    )
}

export default Realtor

