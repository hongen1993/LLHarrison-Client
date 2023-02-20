import "./PropertiesSection.scss"

import { useEffect, useState } from 'react'
import PropertyAPI from '../../services/property.service'

import Property from "../../components/Property/Property"
import data from "../../assets/properties.json"

const PropertiesSection = () => {

    const [properties, setProperties] = useState([])

    useEffect(() => {
        setProperties(data.slice(0, 6))
        // PropertyAPI
        //     .getSixProperties(pagination)
        //     .then((propertiesDB) => {
        //         setProperties(propertiesDB.results)
        //         setMaxPage(propertiesDB.maxPage)
        //     })
    })

    return (
        < section className="properties properties__position" >
            {
                properties.map((property) => {
                    return (
                        <Property key={property._id} propId={property._id} image={property.image} title={property.name} location={property.location} bedrooms={property.bedrooms} bathrooms={property.bathrooms} area={property.area} price={property.price} />
                    )

                })
            }        </section >
    )
}
export default PropertiesSection