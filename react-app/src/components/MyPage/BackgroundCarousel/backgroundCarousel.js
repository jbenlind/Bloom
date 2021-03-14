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

    const slideImage = () => {
        let position = document.getElementsByClassName("background-img");
        position.classList.add("animation-left")
    }

    return (
        <>
            <div className="my-images">
                <div onClick={() => slideImage()}><i class="arrow fas fa-chevron-left"></i></div>
                <div className="back-container">
                    {backgroundImages &&
                    backgroundImages.map((image) => (
                        <div key={image.id}>
                            <img className="background-img" onClick={(e) => setBackgroundImg(image.imageUrl)} src={image.imageUrl} alt=""></img>
                        </div>
                    ))}
                </div>
                <div><i class="arrow fas fa-chevron-right"></i></div>
            </div>
        </>
    )
}

export default BackgroundCarousel;
