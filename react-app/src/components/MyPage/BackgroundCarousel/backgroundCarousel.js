import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../../store/pageElements';
import "./backgroundCarousel.css";

const BackgroundCarousel = ({setBackgroundImg}) => {
    const dispatch = useDispatch();
    const backgroundImages = useSelector((state) => state.pageElements.backgroundImages ? state.pageElements.backgroundImages : null);

    useEffect(() => {
        dispatch(getTemplatePageElements())
    }, [dispatch])

    return (
        <>
            <div className="my-images">
               {backgroundImages &&
               backgroundImages.map((image) => (
                    <div key={image.id} className="image-container">
                        <img className="background-img" onClick={(e) => setBackgroundImg(image.imageUrl)} src={image.imageUrl} alt=""></img>
                    </div>
               ))}
            </div>
        </>
    )
}

export default BackgroundCarousel;
