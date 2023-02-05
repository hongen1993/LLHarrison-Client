import "./StorySection.scss"
import imageA from "../../assets/images/storyA.jpg"
import imageB from "../../assets/images/storyB.jpg"

const StorySection = () => {
    return (
        <section className="story">
            <div className="story__pictures">
                <img src={imageB} alt="Couple with new house" className="story__img--1" />
                <img src={imageA} alt="New house" className="story__img--2" />
            </div>
            <div className="story__content">
                <h3 className="heading-3 mb-sm">HAPPY CUSTOMERS</h3>
                <h2 className="heading-2 heading-2--dark mb-sm">&ldquo;The best decision of our lives&rdquo;</h2>
                <p className="story__text">Great company and we were very happy with Mary. She made our search a joyful experience. If we ever buy again or sell we will go back to them without any doubt!</p>
                <button className="btn">Find your own home</button>
            </div>
        </section>
    )
}
export default StorySection