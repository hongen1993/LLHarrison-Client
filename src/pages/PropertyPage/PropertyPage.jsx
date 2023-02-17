import "./PropertyPage.scss"

import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import PropertyAPI from '../../services/property.service'

import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Heading from "../../components/Heading/Heading"
import Button from "../../components/Button/Button"

const PropertyPage = () => {
    const [property, setProperty] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        PropertyAPI
            .getPropertyById(id)
            .then((propertiesDB) => {
                setProperty(propertiesDB.property)
            })
            .catch((err) => {
                console.log(err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        // Cambiar por un spinner https://react-bootstrap.github.io/components/spinners/ :O
        return <h1>Loading...</h1>
    }
    let number = property.price.toLocaleString()

    return (
        <div className="container container__B">
            <Navbar />
            <section className="section-property property-page" >
                <div className="property-page__img">
                    <Heading HType={'h3'} hStyle={'3'} text={property.name} />
                    <img src={property.image} />
                </div>
                <div className="property-page__content">
                    <Heading HType={'h3'} hStyle={'3'} text='Property Highlights' />
                    <div className="property-page__highlights">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Reference</td>
                                    <td>{property._id.slice(0, 8).toUpperCase()}</td>
                                </tr>
                                <tr>
                                    <td>Bedrooms</td>
                                    <td>{property.bedrooms}</td>
                                </tr>
                                <tr>
                                    <td>Bathrooms</td>
                                    <td>{property.bathrooms}</td>
                                </tr>
                                <tr>
                                    <td>Build size</td>
                                    <td>{property.area}m<sup>2</sup></td>
                                </tr>
                                <tr>
                                    <td>Enery Rating</td>
                                    <td>N/A</td>
                                </tr>
                                <tr>
                                    <td>Location</td>
                                    <td>{property.location}</td>
                                </tr>
                                <tr>
                                    <td>Category</td>
                                    <td>{property.category}</td>
                                </tr>
                                <tr>
                                    <td>Price</td>
                                    <td>{number}€</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Button bStyle={'property__btn'} text={'Contact realtor'} link='contact-us' />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default PropertyPage