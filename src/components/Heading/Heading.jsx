const Heading = ({ HType, hStyle, text }) => {
    return (
        <HType className={`heading-${hStyle}`}>{text}</HType>
    )
}

export default Heading