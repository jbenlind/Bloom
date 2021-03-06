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
                <div className="horizontal-card">
                    <div className='top-half'>
                        <img className="profile-image" src="https://bloombucketjesse.s3.us-east-2.amazonaws.com/profile-example.jpg" alt=""></img>
                        <h1 className="couple-names">karen and paul</h1>
                    </div>
                        <p className="invitation">joyfully invite you to their<br></br> wedding celebration</p>
                        <div className="vertical-line"></div>
                        <p className="invitation">September 23, 2023</p>
                </div>
                <div className="horizontal-tabs">
                    <button id="underline" className="horizontal-button">k & p</button>
                    <button className="horizontal-button">venue</button>
                    <button className="horizontal-button">ceremony</button>
                    <button className="horizontal-button">RSVP</button>
                </div>
            </div>
        </>
    )
}

export default Horizontal;
