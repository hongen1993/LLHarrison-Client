import "./FeaturesSection.scss"
import Feature from "../../components/Feature/Feature"

const FeaturesSection = () => {

    const iconA = 'global'
    const iconB = 'trophy'
    const iconC = 'map-pin'
    const iconD = 'key'
    const iconE = 'presentation'
    const iconF = 'lock'

    const hTextA = 'World`s best luxury homes'
    const hTextB = 'Only the best properties'
    const hTextC = 'All homes in map locations'
    const hTextD = 'New home in one week'
    const hTextE = 'Top 1% realtors'
    const hTextF = 'Secure payments on LL Harrison'

    const pTextA = 'orem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctione cessitatibus pariatur voluptatibus.'

    return (
        <section className="features">
            <Feature icon={iconA} hText={hTextA} pText={pTextA} />
            <Feature icon={iconB} hText={hTextB} pText={pTextA} />
            <Feature icon={iconC} hText={hTextC} pText={pTextA} />
            <Feature icon={iconD} hText={hTextD} pText={pTextA} />
            <Feature icon={iconE} hText={hTextE} pText={pTextA} />
            <Feature icon={iconF} hText={hTextF} pText={pTextA} />
        </section>
    )
}

export default FeaturesSection