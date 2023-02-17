import "./CategoriesSection.scss"
import Category from "../../components/Category/Category"

import imageA from "../../assets/images/cat-1.jpg"
import imageB from "../../assets/images/cat-2.jpg"
import imageC from "../../assets/images/cat-3.jpg"
import imageD from "../../assets/images/cat-4.jpg"
import imageE from "../../assets/images/cat-5.jpg"
import imageF from "../../assets/images/cat-6.jpg"

const CategoriesSection = () => {

    const categoryA = 'New properties'
    const categoryB = 'Contemporary developments'
    const categoryC = 'Exclusive properties'
    const categoryD = 'Villa selection'
    const categoryE = 'Frontline beach'
    const categoryF = 'Luxury Apartments'

    return (
        <section className="categories" id='section-categories'>
            <Category text={categoryA} image={imageA} link='properties-categories' />
            <Category text={categoryB} image={imageB} link='properties-categories' />
            <Category text={categoryC} image={imageC} link='properties-categories' />
            <Category text={categoryD} image={imageD} link='properties-categories' />
            <Category text={categoryE} image={imageE} link='properties-categories' />
            <Category text={categoryF} image={imageF} link='properties-categories' />

        </section>
    )
}

export default CategoriesSection