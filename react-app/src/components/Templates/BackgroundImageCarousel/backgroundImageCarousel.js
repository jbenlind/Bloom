import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../../store/pageElements';

const LayoutImageCarousel = () => {
    const dispatch = useDispatch();
    const backgroundImages = useSelector((state) => state.pageElements.backgroundImages ? state.pageElements.backgroundImages : null);

    useEffect(() => {
        dispatch(getTemplatePageElements())
    }, [dispatch])
    return (
        <>
           <div className="template-image-container">
                    {backgroundImages &&
                    backgroundImages.map((image) => (
                        <div key={image.id}>
                            <div className="image-description">{image.name}</div>
                            <img className="template-image" src={image.imageUrl} alt=""></img>
                        </div>
                    ))}
                </div>
        </>
    )
}

export default LayoutImageCarousel;
