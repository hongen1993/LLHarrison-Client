import { BsCheckCircle } from 'react-icons/bs';
import "./Service.scss"

const Service = ({ text }) => {
    return (
        <div className='service'>
            < BsCheckCircle className='guides--check' />
            <p className='service-text'>
                {text}
            </p>
        </div>
    )
}
export default Service