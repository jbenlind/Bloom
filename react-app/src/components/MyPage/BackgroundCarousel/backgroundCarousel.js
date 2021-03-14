import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../../store/pageElements';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./backgroundCarousel.css";

const BackgroundCarousel = () => {
    const dispatch = useDispatch();
    const backgroundImages = useSelector((state) => state.pageElements.backgroundImages ? state.pageElements.backgroundImages : null);

    useEffect(() => {
        dispatch(getTemplatePageElements())
    }, [dispatch])

    const options = {
        showArrows:true,
        showIndicators:true,
        infiniteLoop:true,
        stopOnHover:true,
        width:500,
        transitionTime: 1500,
        showThumbs:true,
    }

    return (
        <>
            <div>
                <Carousel
                 {...options}
                 >
                    {backgroundImages &&
                    backgroundImages.map((image) => (
                    <div key={image.id}>
                        <img className="background-image" src={image.imageUrl} alt="" />
                    </div>
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default BackgroundCarousel;
