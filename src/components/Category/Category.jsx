import "./Category.scss"

import { BsTagFill } from 'react-icons/bs';

const Category = ({ image, text }) => {

    return (
        <div className="category">
            <img className='category__img' id='category__img' src={image}></img>
            <div className="category__content">
                <BsTagFill className="category__icon" />
                <h3 className="heading-3">{text}</h3>
            </div>
        </div >
    )
}

export default Category