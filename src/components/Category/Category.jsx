import "./Category.scss"

import { Link } from "react-router-dom";
import { BsTagFill } from 'react-icons/bs';

const Category = ({ image, text, link }) => {

    return (
        <div className="category">
            <Link to={link}>
                <img className='category__img' id='category__img' src={image}></img>
                <div className="category__content">
                    <BsTagFill className="category__icon" />
                    <h3 className="heading-3">{text}</h3>
                </div>
            </Link>
        </div >
    )
}

export default Category