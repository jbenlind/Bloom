import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../../store/pageElements';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const LayoutImageCarousel = () => {
    const dispatch = useDispatch();
    const backgroundImages = useSelector((state) => state.pageElements.backgroundImages ? state.pageElements.backgroundImages : null);

    useEffect(() => {
        dispatch(getTemplatePageElements())
    }, [dispatch])

    const options = {
        showArrows:true,
        showIndicators:true,
        infiniteLoop:true,
        showThumbs:false,
        stopOnHover:true,
        width:1200,
        autoPlay:true,
        transitionTime: 1500,
        interval:9000,
    }

    return (
        <>
            <div className="carousel-container">
                <p className="templates-description">
                    We have many images for you to choose from to keep the
                    customization coming. We want every aspect to be
                    exactly the way you want it!
                </p>
                <Carousel
                 {...options}
                 >
                    {backgroundImages &&
                    backgroundImages.map((image) => (
                    <div key={image.id} className="carousel-container">
                        <img className="templates-image" src={image.imageUrl} alt="" />
                        <div className="image-description">{image.name}</div>
                    </div>
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default LayoutImageCarousel;
