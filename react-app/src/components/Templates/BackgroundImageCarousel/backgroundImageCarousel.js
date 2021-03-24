import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../../store/pageElements';
import "./backImg.css";
const LayoutImageCarousel = () => {
    const dispatch = useDispatch();
    const backgroundImages = useSelector((state) => state.pageElements.backgroundImages ? state.pageElements.backgroundImages : null);

    const [position, setPosition] = useState("center-l");
    const [currId, setCurrId] = useState(3);

    useEffect(() => {
        dispatch(getTemplatePageElements())
    }, [dispatch])

    const slideLeft = () => {
        setCurrId(() => currId === 1 ? 5 : currId - 1)
        if(position === "l1-l") {
            setPosition("l2-l")
        } else if(position === "l2-l") {
            setPosition("l3-l")
        } else if(position === "l3-l") {
            setPosition("l4-l")
        } else if(position === "l4-l") {
            setPosition("l5-l")
        } else if(position === "l5-l") {
            setPosition("l1-l")
        } else if(position === "center-l") {
            setPosition("l4-l")
        } else if(position === "r5-l") {
            setPosition("l2-l")
        } else if(position === "r4-l") {
            setPosition("l3-l")
        } else if(position === "r3-l") {
            setPosition("l4-l")
        } else if(position === "r2-l") {
            setPosition("l5-l")
        } else if(position === "r1-l") {
            setPosition("l1-l")
        }
    }

    const slideRight = () => {
        setCurrId(() => currId === 5 ? 1 : currId + 1)
        if(position === "r1-l") {
            setPosition("r2-l")
        } else if(position === "r2-l") {
            setPosition("r3-l")
        } else if(position === "r3-l") {
            setPosition("r4-l")
        } else if(position === "r4-l") {
            setPosition("r5-l")
        } else if(position === "r5-l") {
            setPosition("r1-l")
        } else if(position === "center-l") {
            setPosition("r4-l")
        } else if(position === "l5-l") {
            setPosition("r2-l")
        } else if(position === "l4-l") {
            setPosition("r3-l")
        } else if(position === "l3-l") {
            setPosition("r4-l")
        } else if(position === "l2-l") {
            setPosition("r5-l")
        } else if(position === "l1-l") {
            setPosition("r1-l")
        }
    }

    return (
        <>
             {/* {backgroundImages.length > 0 &&
            <h1 className="image-names">{backgroundImages[currId - 1].name}</h1>} */}
            <div className="carousel-container">
                <div className="my-images-tem">
                    <div onClick={() => slideLeft()}><i className="arrow-left fas fa-chevron-left"></i></div>
                    <div className="i-container">
                        {backgroundImages &&
                        backgroundImages.map((image) => (
                            <div key={image.id}>
                                <img className={position} src={image.imageUrl} alt=""></img>
                            </div>
                        ))}
                    </div>
                    <div onClick={() => slideRight()}><i className="arrow-right fas fa-chevron-right"></i></div>
                </div>
                <p className="templates-description">
                    We keep the customization coming with different background images. We want every aspect to be
                    exactly the way you want it!
                </p>
            </div>
        </>
    )
}

export default LayoutImageCarousel;
