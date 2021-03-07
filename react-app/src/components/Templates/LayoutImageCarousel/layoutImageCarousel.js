import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../../store/pageElements';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const LayoutImageCarousel = () => {
    const dispatch = useDispatch();
    const layouts = useSelector((state) => state.pageElements.pageLayouts ? state.pageElements.pageLayouts : null);

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
            <div className="background-images-container">
                <div className="carousel-container">
                    <Carousel
                        {...options}
                        >
                        {layouts &&
                        layouts.map((layout) => (
                        <div key={layout.id} className="carousel-container">
                            <img className="templates-image" src={layout.imageUrl} alt="" />
                        </div>
                        ))}
                    </Carousel>
                    <p className="templates-description">
                        We have built four templates from you to pick from to
                        make your site you own. Keep scrolling to see the other ways
                        to customize your page.
                    </p>
                </div>
            </div>

        </>
    )
}

export default LayoutImageCarousel;
