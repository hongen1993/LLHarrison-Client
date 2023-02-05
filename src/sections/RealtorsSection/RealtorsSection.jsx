import "./RealtorsSection.scss"

import realtorA from "../../assets/images/realtor-1.jpg"
import realtorB from "../../assets/images/realtor-2.jpg"
import realtorC from "../../assets/images/realtor-3.jpg"

import Realtor from "../../components/Realtor/Realtor"


const RealtorsSection = () => {

    const nameA = 'Mary Fitzgerald'
    const nameB = 'Michael Leighton'
    const nameC = 'Eloise St. Clair'

    const soldA = '245'
    const soldB = '212'
    const soldC = '198'


    return (
        <section className="realtors">
            <h3 className="heading-3">Top 3 realtors</h3>
            <div className="realtors__list">
                <Realtor image={realtorA} name={nameA} sold={soldA} />
                <Realtor image={realtorB} name={nameB} sold={soldB} />
                <Realtor image={realtorC} name={nameC} sold={soldC} />
            </div>
        </section>
    )
}
export default RealtorsSection