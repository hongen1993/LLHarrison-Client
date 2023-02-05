const Button = ({ bStyle, text }) => {
    return (
        <button className={`btn ${bStyle}`}>{text}</button>
    )
}

export default Button