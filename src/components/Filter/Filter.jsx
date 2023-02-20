import { useEffect, useState } from 'react'
// import PropertyAPI from '../../services/property.service'

import Property from "../../components/Property/Property"
import Heading from "../../components/Heading/Heading"
import "./Filter.scss"
import data from "../../assets/properties.json"

const Filter = () => {
    const [search, setSearch] = useState('')
    const [properties, setProperties] = useState([])
    const [category, setCategory] = useState()

    useEffect(() => {
        // PropertyAPI
        //     .getCategoriesProp()
        //     .then((propertiesDB) => {
        let contemporaryProp = data.filter((property) => property.category.includes(category))
        category ? setProperties(contemporaryProp) : setProperties(data)
        // })
    }, [category])
    return (
        <>
            < section className="properties properties__positionB" >
                <Heading HType={'h2'} hStyle={'1'} text={'Search by name'} />
                <input className="properties__inputA" type="text" placeholder="Search here" onChange={(e) => setSearch(e.target.value)} />
                <div className='properties__filterButton'>
                    <button onClick={() => { setCategory('Villa Selection') }}>Villa Selection</button>
                    <button onClick={() => { setCategory('Apartment') }}>Apartment</button>
                    <button onClick={() => { setCategory('Contemporary Properties') }}>Contemporary Properties</button>
                    <button onClick={() => { setCategory('Exclusive Developments') }}>Exclusive Properties</button>
                    <button onClick={() => { setCategory('Frontline Beach') }}>Frontline Beach</button>
                </div>
                {
                    properties?.filter((property) => {
                        if (search.toLowerCase() === '') {
                            return property
                        } else {
                            return property.name.toLowerCase().includes(search.toLowerCase())
                        }
                    }).map((property) => {
                        return <Property key={property._id} propId={property._id} image={property.image} title={property.name} location={property.location} bedrooms={property.bedrooms} bathrooms={property.bathrooms} area={property.area} price={property.price} />
                    })
                }
            </section >
        </>
    )
}
export default Filter