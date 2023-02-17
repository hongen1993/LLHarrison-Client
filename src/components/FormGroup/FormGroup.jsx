const FormGroup = ({ formStyle, value, onChange, inputType, placeholder, labelType, min }) => {
    return (
        <div className={`form__group ${formStyle}`}>
            <input onChange={onChange} value={value} type={inputType} className="form__input" placeholder={placeholder} id={labelType} required min={min} max='10' />
            <label htmlFor={labelType} className="form__label">{placeholder}</label>
        </div>
    )
}

export default FormGroup