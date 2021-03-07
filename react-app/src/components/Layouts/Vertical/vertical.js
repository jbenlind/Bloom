import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplatePageElements } from '../../../store/pageElements';
import './vertical.css';

const Vertical = () => {

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
            <div className="vertical-top-nav">
                <div className="vertical-tabs">
                    <button id="underline" className="vertical-button">k & p</button>
                    <button className="vertical-button">venue</button>
                    <button className="vertical-button">ceremony</button>
                    <button className="vertical-button">RSVP</button>
                </div>
                <div className="vertical-card">
                    <div className='top-half'>
                        <img className="profile-image" src="https://bloombucketjesse.s3.us-east-2.amazonaws.com/profile-example.jpg" alt=""></img>
                        <h1 className="couple-names">karen and paul</h1>
                    </div>
                        <p className="invitation">joyfully invite you to their<br></br> wedding celebration</p>
                        <div className="vertical-line"></div>
                        <p className="invitation">September 23, 2023</p>
                </div>
            </div>
        </>
    )
}

export default Vertical;
