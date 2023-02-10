import "./ContactUs.scss"
import { useState } from "react"

import Navbar from "../../components/Navbar/Navbar"
import Heading from "../../components/Heading/Heading"

import Footer from "../../components/Footer/Footer"
import FormGroup from "../../components/FormGroup/FormGroup"

const ContactUs = () => {

    const [nameInput, setNameInput] = useState(0);
    const [surnameInput, setSurnameInput] = useState(0);
    const [phoneNumberInput, setphoneNumberInput] = useState(0);
    const [emailInput, setEmailInput] = useState(false);
    const [nationalityInput, setNationalityInput] = useState(0);
    const [propertyTypeInput, setPropertyTypeInput] = useState(0);
    const [budgetInput, setBudgetInput] = useState(0);
    const [messageInput, setMessageInput] = useState(0);


    const handleName = (event) => {
        event.preventDefault();
        const name = event.target.value
        setNameInput(name.length)
    }

    const handleSurname = (event) => {
        event.preventDefault();
        const surname = event.target.value
        setSurnameInput(surname.length)
    }

    const handlePhoneNumber = (event) => {
        event.preventDefault();
        const phoneNumber = event.target.value
        setphoneNumberInput(phoneNumber.length)
    }

    const handleEmail = (event) => {
        event.preventDefault();
        const email = event.target.value
        const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
        if (regexExp.test(email)) setEmailInput(true)
    }

    const handleNationality = (event) => {
        event.preventDefault();
        const nationality = event.target.value
        setNationalityInput(nationality.length)
    }

    const handlePropertyType = (event) => {
        event.preventDefault();
        const propertyType = event.target.value
        setPropertyTypeInput(propertyType.length)
    }

    const handleBudget = (event) => {
        event.preventDefault();
        const budget = event.target.value
        setBudgetInput(budget.length)
    }

    const handleMessage = (event) => {
        event.preventDefault();
        const message = event.target.value
        setMessageInput(message.length)
    }

    return (
        <>
            <Navbar />
            <section className="section-contact-us">
                <div className="section-contact-us--title">
                    <Heading HType={'h2'} hStyle={'3'} text={'Contact us'} />
                </div>
                <div className="section-contact-us--content">
                    <Heading HType={'h2'} hStyle={'1'} text={'Get In Touch'} />
                    <form action="#" className="form">
                        <FormGroup formStyle={'col-3'} onChange={handleName} inputType={"text"} placeholder={'Name'} labelType={'name'} />
                        <FormGroup formStyle={'col-3'} onChange={handleSurname} inputType={"text"} placeholder={'Surname'} labelType={'surname'} />
                        <FormGroup formStyle={'col-3'} onChange={handlePhoneNumber} inputType={"tel"} placeholder={'Telephone number'} labelType={'Telephone number'} />
                        <FormGroup formStyle={'col-6'} onChange={handleEmail} inputType={"email"} placeholder={'Email'} labelType={'email'} />
                        <FormGroup formStyle={'col-6'} onChange={handleNationality} inputType={"text"} placeholder={'Nationality'} labelType={'nationality'} />
                        <div className='form__group col-6 select'>
                            <select className="form__input">
                                <option value="0" label="Type of property" selected="selected">Type of property</option>
                                <option value="0" label="Apartment">Apartment</option>
                                <option value="0" label="Villa">Villa</option>
                                <option value="0" label="Townhouse">Townhouse</option>
                            </select>
                        </div>
                        <FormGroup formStyle={'col-6'} onChange={handleBudget} inputType={"number"} placeholder={'Budget'} labelType={'budget'} />
                        <FormGroup formStyle={'col-12'} onChange={handleMessage} inputType={"text-area"} placeholder={'Message'} labelType={'message'} />
                        <div className="form__group mg-bottom-md">
                            <div className="form__radio-group">
                                <input type="checkbox" className="form__radio-input" id="schedule" name="schedule" />
                                <label for="schedule" className="form__radio-label">
                                    <span className="form__radio-button"></span>
                                    Schedule a Viewing
                                </label>
                            </div>
                            <div className="form__radio-group">
                                <input type="checkbox" className="form__radio-input" id="agree" name="agree" />
                                <label for="agree" className="form__radio-label">
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
        </>
    )
}

export default ContactUs