import { BsCheckCircle } from 'react-icons/bs';
import "./Service.scss"

const Service = ({ text }) => {
    return (
        <div className='service'>
            < BsCheckCircle className='guides__check' />
            <p className='service__text'>
                {text}
            </p>
        </div>
    )
}
export default Service