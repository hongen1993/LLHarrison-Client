import "./StorySection.scss"

import imageA from "../../assets/images/storyA.jpg"
import imageB from "../../assets/images/storyB.jpg"

import Heading from "../../components/Heading/Heading"
import Button from "../../components/Button/Button"

const StorySection = () => {
    return (
        <section className="story">
            <div className="story__pictures">
                <img src={imageB} alt="Couple with new house" className="story__img--1" />
                <img src={imageA} alt="New house" className="story__img--2" />
            </div>
            <div className="story__content">
                <Heading HType={'h3'} hStyle={'3 mb-sm'} text={'HAPPY CUSTOMERS'} />
                <Heading HType={'h2'} hStyle={'2 heading-2--dark mb-sm'} text={'"The best decision of our lives"'} />
                <p className="story__text">Great company and we were very happy with Mary. She made our search a joyful experience. If we ever buy again or sell we will go back to them without any doubt!</p>
                <Button link={'properties'} text={'Find your own property'} />
            </div>
        </section>
    )
}
export default StorySection