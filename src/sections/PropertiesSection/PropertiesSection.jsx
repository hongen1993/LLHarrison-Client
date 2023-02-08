import "./PropertiesSection.scss"

import Property from "../../components/Property/Property"

const PropertiesSection = () => {

    const imgA = 'img/house-1.jpeg'
    const imgB = 'img/house-1.jpeg'
    const imgC = 'img/house-1.jpeg'
    const imgD = 'img/house-1.jpeg'
    const imgE = 'img/house-1.jpeg'
    const imgF = 'img/house-1.jpeg'

    const titleA = 'Beautiful Familiy House'
    const titleB = 'Modern Glass Villa'
    const titleC = 'Beautiful Familiy House'
    const titleD = 'Beautiful Familiy House'
    const titleE = 'Beautiful Familiy House'
    const titleF = 'Beautiful Familiy House'

    const locationA = 'USA'
    const locationB = 'USA'
    const locationC = 'USA'
    const locationD = 'USA'
    const locationE = 'USA'
    const locationF = 'USA'

    const roomsA = 'USA'
    const roomsB = 'USA'
    const roomsC = 'USA'
    const roomsD = 'USA'
    const roomsE = 'USA'
    const roomsF = 'USA'

    const areaA = '325'
    const areaB = 'USA'
    const areaC = 'USA'
    const areaD = 'USA'
    const areaE = 'USA'
    const areaF = 'USA'

    const priceA = '1,200,000'
    const priceB = 'USA'
    const priceC = 'USA'
    const priceD = 'USA'
    const priceE = 'USA'
    const priceF = 'USA'


    return (
        < section className="properties properties__position" >
            <Property image={imgA} title={titleA} location={locationA} rooms={roomsA} area={areaA} price={priceA} />
            <Property image={imgB} title={titleB} location={locationB} rooms={roomsB} area={areaB} price={priceB} />
            <Property image={imgC} title={titleC} location={locationC} rooms={roomsC} area={areaC} price={priceC} />
            <Property image={imgD} title={titleD} location={locationD} rooms={roomsD} area={areaD} price={priceD} />
            <Property image={imgE} title={titleE} location={locationE} rooms={roomsE} area={areaE} price={priceE} />
            <Property image={imgF} title={titleF} location={locationF} rooms={roomsF} area={areaF} price={priceF} />
        </section >
    )
}
export default PropertiesSection