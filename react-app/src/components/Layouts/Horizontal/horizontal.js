import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../../store/pageElements';
import './horizontal.css';

const Horizontal = () => {

    const dispatch = useDispatch();
    const images = useSelector((state) => state.pageElements.backgroundImages ? state.pageElements.backgroundImages : null);

    let image = images.find((image) => image.id === 3)

    useEffect(() => {
        dispatch(getTemplatePageElements())
    }, [dispatch])
     console.log(image)
    return (
        <>
            {image &&
            <img id="backgroundImage" src={image.imageUrl} alt=""></img>}
            <div className="horizontal-top-nav">
                <div className="horizontal-tabs">
                    <button>Wedding Information</button>
                    <button>Venue Information</button>
                    <button>RSVP</button>
                </div>
            </div>
        </>
    )
}

export default Horizontal;
