import "./ContactUsPage.scss"
import { useState } from "react"
import Select from 'react-select'

import Navbar from "../../components/Navbar/Navbar"
import Heading from "../../components/Heading/Heading"

import Footer from "../../components/Footer/Footer"
import FormGroup from "../../components/FormGroup/FormGroup"

const ContactUsPage = () => {

    const [name, setName] = useState(0);
    const [surname, setSurname] = useState(0);
    const [phoneNumber, setphoneNumber] = useState(0);
    const [email, setEmail] = useState(false);
    const [nationality, setNationality] = useState(0);
    const [propertyType, setPropertyType] = useState(0);
    const [budget, setBudget] = useState(0);
    const [message, setMessage] = useState(0);

    const options = [
        { value: 'Apartment', label: 'Apartment' },
        { value: 'Villa', label: 'Villa' },
        { value: 'Townhouse', label: 'Townhouse' }
    ]

    const handleName = (event) => {
        event.preventDefault();
        const name = event.target.value
        setName(name.length)
    }

    const handleSurname = (event) => {
        event.preventDefault();
        const surname = event.target.value
        setSurname(surname.length)
    }

    const handlePhoneNumber = (event) => {
        event.preventDefault();
        const phoneNumber = event.target.value
        setphoneNumber(phoneNumber.length)
    }

    const handleEmail = (event) => {
        event.preventDefault();
        const email = event.target.value
        const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
        if (regexExp.test(email)) setEmail(true)
    }

    const handleNationality = (event) => {
        event.preventDefault();
        const nationality = event.target.value
        setNationality(nationality.length)
    }

    const handlePropertyType = (event) => {
        event.preventDefault();
        const propertyType = event.target.value
        setPropertyType(propertyType.length)
    }

    const handleBudget = (event) => {
        event.preventDefault();
        const budget = event.target.value
        setBudget(budget.length)
    }

    const handleMessage = (event) => {
        event.preventDefault();
        const message = event.target.value
        setMessage(message.length)
    }

    return (
        <div className="container container__B">
            <Navbar />
            <section className="section-contact-us">
                <div className="section-contact-us__title">
                    <Heading HType={'h2'} hStyle={'3'} text={'Contact us'} />
                </div>
                <div className="section-contact-us__content">
                    <Heading HType={'h2'} hStyle={'1'} text={'Get In Touch'} />
                    <form action="#" className="form">
                        <FormGroup formStyle={'col-3'} onChange={handleName} inputType={"text"} placeholder={'Name'} labelType={'name'} />
                        <FormGroup formStyle={'col-3'} onChange={handleSurname} inputType={"text"} placeholder={'Surname'} labelType={'surname'} />
                        <FormGroup formStyle={'col-3'} onChange={handlePhoneNumber} inputType={"tel"} placeholder={'Telephone number'} labelType={'Telephone number'} />
                        <FormGroup formStyle={'col-6'} onChange={handleEmail} inputType={"email"} placeholder={'Email'} labelType={'email'} />
                        <FormGroup formStyle={'col-6'} onChange={handleNationality} inputType={"text"} placeholder={'Nationality'} labelType={'nationality'} />
                        <div className='form__group col-6 select font-color-secondary'>
                            <Select options={options} className="form__input" />
                        </div>
                        <FormGroup formStyle={'col-6'} onChange={handleBudget} inputType={"number"} placeholder={'Budget'} labelType={'budget'} />
                        <FormGroup formStyle={'col-12'} onChange={handleMessage} inputType={"text-area"} placeholder={'Message'} labelType={'message'} />
                        <div className="form__group mg-bottom-md">
                            <div className="form__radio-group">
                                <input type="checkbox" className="form__radio-input" id="schedule" name="schedule" />
                                <label htmlFor="schedule" className="form__radio-label">
                                    <span className="form__radio-button"></span>
                                    Schedule a Viewing
                                </label>
                            </div>
                            <div className="form__radio-group">
                                <input type="checkbox" className="form__radio-input" id="agree" name="agree" />
                                <label htmlFor="agree" className="form__radio-label">
                                    <span className="form__radio-button"></span>
                                    By sending this form you are agreeing to receive information related to properties on the Costa Del Sol & with the Privacy Policy
                                </label>
                            </div>
                        </div>
                        <div className="form__group">
                            <button className="btn btn--green">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ContactUsPage