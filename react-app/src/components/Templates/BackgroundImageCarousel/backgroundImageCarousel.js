import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../../store/pageElements';
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
        interval:6000,
    }

    return (
        <>
            <div className="carousel-container">
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
                <p className="templates-description">
                    We keep the customization coming with different background images. We want every aspect to be
                    exactly the way you want it!
                </p>
            </div>
        </>
    )
}

export default LayoutImageCarousel;
