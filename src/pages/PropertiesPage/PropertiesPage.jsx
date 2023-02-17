import "./PropertiesPage.scss"

import { useEffect, useState } from 'react'
import PropertyAPI from '../../services/property.service'

import Property from "../../components/Property/Property"
import Navbar from "../../components/Navbar/Navbar"
import Heading from "../../components/Heading/Heading"
import Footer from "../../components/Footer/Footer"
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { MdOutlineFirstPage, MdOutlineLastPage } from 'react-icons/md';


const PropertiesPage = () => {

    const [properties, setProperties] = useState([])
    const [pagination, setPagination] = useState(0)
    const [maxPage, setMaxPage] = useState(0)

    useEffect(() => {
        PropertyAPI
            .getProperties(pagination)
            .then((propertiesDB) => {
                setProperties(propertiesDB.results)
                setMaxPage(propertiesDB.maxPage)
            })
    }, [pagination])

    return (
        <>
            <Navbar />
            < section className="properties properties__positionB" >
                <Heading HType={'h2'} hStyle={'1'} text={'Our properties'} />
                {
                    properties?.map((property) => {
                        return <Property key={property._id} propId={property._id} image={property.image} title={property.name} location={property.location} bedrooms={property.bedrooms} bathrooms={property.bathrooms} area={property.area} price={property.price} />
                    })
                }
                <div className="pagination">
                    <div className="pagination__first" onClick={() => setPagination(0)} >
                        <MdOutlineFirstPage />
                    </div>
                    <div className="pagination__previous" onClick={() => setPagination((currentPage) => currentPage - 1)} >
                        <GrFormPrevious />
                    </div>
                    <div className="pagination__next" onClick={() => setPagination((currentPage) => currentPage + 1)} >
                        <GrFormNext />
                    </div>
                    <div className="pagination__last" onClick={() => setPagination(maxPage)} >
                        <MdOutlineLastPage />
                    </div>
                </div>
            </section >
            <Footer />
        </>
    )
}

export default PropertiesPage