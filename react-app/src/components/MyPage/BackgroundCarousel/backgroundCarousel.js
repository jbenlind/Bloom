import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../../store/pageElements';
import "./backgroundCarousel.css";

const BackgroundCarousel = ({setBackgroundImg, setImageId}) => {
    const dispatch = useDispatch();
    const backgroundImages = useSelector((state) => state.pageElements.backgroundImages ? state.pageElements.backgroundImages : null);

    const [position, setPosition] = useState("center");
    const [currId, setCurrId] = useState(3);

    useEffect(() => {
        dispatch(getTemplatePageElements())
    }, [dispatch])

    const selectImage = (index) => {
        setImageId(index)
        setBackgroundImg(backgroundImages[index -1].imageUrl)
    }

    const slideLeft = () => {
        setCurrId(() => currId === 1 ? 5 : currId - 1)
        if(position === "l1") {
            setPosition("l2")
        } else if(position === "l2") {
            setPosition("l3")
        } else if(position === "l3") {
            setPosition("l4")
        } else if(position === "l4") {
            setPosition("l5")
        } else if(position === "l5") {
            setPosition("l1")
        } else if(position === "center") {
            setPosition("l4")
        } else if(position === "r5") {
            setPosition("l2")
        } else if(position === "r4") {
            setPosition("l3")
        } else if(position === "r3") {
            setPosition("l4")
        } else if(position === "r2") {
            setPosition("l5")
        } else if(position === "r1") {
            setPosition("l1")
        }
    }

    const slideRight = () => {
        setCurrId(() => currId === 5 ? 1 : currId + 1)
        if(position === "r1") {
            setPosition("r2")
        } else if(position === "r2") {
            setPosition("r3")
        } else if(position === "r3") {
            setPosition("r4")
        } else if(position === "r4") {
            setPosition("r5")
        } else if(position === "r5") {
            setPosition("r1")
        } else if(position === "center") {
            setPosition("r4")
        } else if(position === "l5") {
            setPosition("r2")
        } else if(position === "l4") {
            setPosition("r3")
        } else if(position === "l3") {
            setPosition("r4")
        } else if(position === "l2") {
            setPosition("r5")
        } else if(position === "l1") {
            setPosition("r1")
        }
    }

    console.log(currId)

    return (
        <>
            <div className="my-images">
                <div onClick={() => slideLeft()}><i className="arrow-left fas fa-chevron-left"></i></div>
                <div className="back-container">
                    {backgroundImages &&
                    backgroundImages.map((image) => (
                        <div key={image.id}>
                            <img className={position} src={image.imageUrl} alt=""></img>
                        </div>
                    ))}
                </div>
                <div onClick={() => slideRight()}><i className="arrow-right fas fa-chevron-right"></i></div>
            </div>
            <button onClick={(e) => selectImage(currId)} className="select-image">Select Image</button>
        </>
    )
}

export default BackgroundCarousel;
