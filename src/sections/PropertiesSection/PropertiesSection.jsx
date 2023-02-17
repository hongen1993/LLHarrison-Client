import "./PropertiesSection.scss"

import { useEffect, useState } from 'react'
import PropertyAPI from '../../services/property.service'

import Property from "../../components/Property/Property"

const PropertiesSection = () => {

    const [properties, setProperties] = useState([])
    const [pagination, setPagination] = useState(0)
    const [maxPage, setMaxPage] = useState(0)

    useEffect(() => {
        PropertyAPI
            .getSixProperties(pagination)
            .then((propertiesDB) => {
                setProperties(propertiesDB.results)
                setMaxPage(propertiesDB.maxPage)
            })
    }, [pagination])

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