import "./GallerySection.scss"
import galleryA from "../../assets/images/gal-1.jpg"
import galleryB from "../../assets/images/gal-2.jpg"
import galleryC from "../../assets/images/gal-3.jpg"
import galleryD from "../../assets/images/gal-4.jpg"
import galleryE from "../../assets/images/gal-5.png"
import galleryF from "../../assets/images/gal-6.jpg"
import galleryG from "../../assets/images/gal-7.jpg"
import galleryH from "../../assets/images/gal-8.jpg"
import galleryI from "../../assets/images/gal-9.jpg"
import galleryJ from "../../assets/images/gal-10.jpg"
import galleryK from "../../assets/images/gal-11.jpg"
import galleryL from "../../assets/images/gal-12.jpg"
import galleryM from "../../assets/images/gal-13.jpg"
import galleryN from "../../assets/images/gal-14.jpg"



const GallerySection = () => {
    return (
        <section className="gallery">
            <figure className="gallery_item gallery__item--1">
                <img src={galleryA} alt="Gallery 1" className="gallery__img" />
            </figure>
            <figure className="gallery_item gallery__item--2">
                <img src={galleryB} alt="Gallery 2" className="gallery__img" />
            </figure>
            <figure className="gallery_item gallery__item--3">
                <img src={galleryC} alt="Gallery 3" className="gallery__img" />
            </figure>
            <figure className="gallery_item gallery__item--4">
                <img src={galleryD} alt="Gallery 4" className="gallery__img" />
            </figure>
            <figure className="gallery_item gallery__item--5">
                <img src={galleryE} alt="Gallery 5" className="gallery__img" />
            </figure>
            <figure className="gallery_item gallery__item--6">
                <img src={galleryF} alt="Gallery 6" className="gallery__img" />
            </figure>
            <figure className="gallery_item gallery__item--7">
                <img src={galleryG} alt="Gallery 7" className="gallery__img" />
            </figure>
            <figure className="gallery_item gallery__item--8">
                <img src={galleryH} alt="Gallery 8" className="gallery__img" />
            </figure>
            <figure className="gallery_item gallery__item--9">
                <img src={galleryI} alt="Gallery 9" className="gallery__img" />
            </figure>
            <figure className="gallery_item gallery__item--10">
                <img src={galleryJ} alt="Gallery 10" className="gallery__img" />
            </figure>
            <figure className="gallery_item gallery__item--11">
                <img src={galleryK} alt="Gallery 11" className="gallery__img" />
            </figure>
            <figure className="gallery_item gallery__item--12">
                <img src={galleryL} alt="Gallery 12" className="gallery__img" />
            </figure>
            <figure className="gallery_item gallery__item--13">
                <img src={galleryM} alt="Gallery 13" className="gallery__img" />
            </figure>
            <figure className="gallery_item gallery__item--14">
                <img src={galleryN} alt="Gallery 14" className="gallery__img" />
            </figure>
        </section>
    )
}

export default GallerySection