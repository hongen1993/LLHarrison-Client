import "./AddProperties.scss"
import { useState } from "react";
import Select from 'react-select'

import Navbar from "../../components/Navbar/Navbar";
import FooterSection from "../../components/Footer/Footer";
import PropertyAPI from "../../services/property.service";
import Heading from "../../components/Heading/Heading";

import FormGroup from "../../components/FormGroup/FormGroup";
import { useNavigate } from "react-router-dom"
const AddProperties = () => {

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [area, setArea] = useState(0);
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState(0);

    const options = [
        { value: 'Contemporary', label: 'Contemporary' },
        { value: 'Exclusive', label: 'Exclusive' },
        { value: 'Frontline', label: 'Frontline' },
        { value: 'Villa', label: 'Villa' },
        { value: 'Apartment', label: 'Apartment' }
    ]

    const handleImage = (e) => setImage(e.target.value);
    const handleName = (e) => setName(e.target.value);
    const handleLocation = (e) => setLocation(e.target.value);
    const handleBedrooms = (e) => setBedrooms(e.target.value);
    const handleBathrooms = (e) => setBathrooms(e.target.value);
    const handleArea = (e) => setArea(e.target.value);
    const handlePrice = (e) => setPrice(e.target.value);
    const handleCategory = (e) => setCategory(e.target.value);
    // (selectedOption) => {
    //     setCategory(selectedOption);
    // };

    const navigate = useNavigate()

    const handlePropertySubmit = (e) => {

        e.preventDefault();
        const body = { image, name, location, bedrooms, bathrooms, area, price, category };

        PropertyAPI
            .createProperty(body)
            .then(() => {
                navigate("/add-properties");
            })
            .catch((err) => {
                console.log(err.message)
            })
    };

    return (
        <div className="container container__B">
            <Navbar />
            <section className="section-addProperties property">
                <div className="property__add">
                    <form onSubmit={handlePropertySubmit} className="property__form">
                        <Heading HType={'h3'} hStyle={'3'} text={'New property'} />
                        <FormGroup onChange={handleName} formStyle={' property__form-a'} inputType={"text"} placeholder={'Name'} labelType={'Name'} value={name} />
                        {/* <div className={`form__group property__form-b`}>
                        <input onChange={handleImages} value={images} type={'image'} className="form__input" placeholder={'Images'} id={'Images'} name="filefield" multiple="multiple" />
                        <label htmlFor={'Images'} className="form__label">Images</label>
                    </div> */}
                        <FormGroup onChange={handleImage} formStyle={' property__form-b'} inputType={"text"} placeholder={'Images'} labelType={'Images'} value={image} />
                        <FormGroup onChange={handleBathrooms} formStyle={' property__form-a'} inputType={"text"} placeholder={'Bathrooms'} labelType={'Bathrooms'} value={bathrooms} />
                        <FormGroup onChange={handleBedrooms} formStyle={' property__form-b'} inputType={"text"} placeholder={'Bedrooms'} labelType={'Bedrooms'} value={bedrooms} />
                        <FormGroup onChange={handleLocation} formStyle={' property__form-c'} inputType={"text"} placeholder={'Location'} labelType={'Location'} value={location} />
                        <FormGroup onChange={handleArea} formStyle={' property__form-a'} inputType={"text"} placeholder={'Area'} labelType={'Area'} value={area} />
                        <FormGroup onChange={handlePrice} formStyle={' property__form-b'} inputType={"text"} placeholder={'Price'} labelType={'Price'} value={price} />
                        <FormGroup onChange={handleCategory} formStyle={' property__form-b'} inputType={"text"} placeholder={'Category'} labelType={'Category'} value={category} />
                        {/* <div className='form__group property__form-a'>
                        <Select options={options} className="form__input" onChange={handleCategory} />
                    </div> */}
                        <div className="form__group section-signup__form-c">
                            <button className="btn btn--green" type="submit">Add property</button>
                        </div>
                    </form>
                </div>
            </section>
            <FooterSection />
        </div>
    )
}

export default AddProperties