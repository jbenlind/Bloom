import React, { useState, useEffect } from "react";
import "./leftNavPreview.css";

const LeftNavPreview = ({imageId, colorPalette}) => {

    const [primaryColor, setPrimaryColor] = useState("");
    const [standardBorder, setStandardBorder] = useState("basic-black");
    const [secondaryColor, setSecondColor] = useState("");
    const [primaryName, setPrimaryName] = useState("");


    useEffect(() => {
        if(imageId === 1 || imageId === 4 || imageId === 5) {
            setStandardBorder("basic-white")
        } else if(imageId === 2 || imageId === 3) {
            setStandardBorder("basic-black")
        }

        if(colorPalette === 2 && imageId === 1) {
            setPrimaryColor("primary-one")
            setSecondColor("secondary-one")
            setPrimaryName("primary-one-name")
        } else if(colorPalette === 2 && imageId === 2) {
            setPrimaryColor("primary-two")
            setSecondColor("secondary-two")
            setPrimaryName("primary-two-name")
        } else if(colorPalette === 2 && imageId === 3) {
            setPrimaryColor("primary-three")
            setSecondColor("secondary-three")
            setPrimaryName("primary-three-name")
        } else if(colorPalette === 2 && imageId === 4) {
            setPrimaryColor("primary-four")
            setSecondColor("secondary-four")
            setPrimaryName("primary-four-name")
        }else if(colorPalette === 2 && imageId === 5) {
            setPrimaryColor("primary-five")
            setSecondColor("secondary-five")
            setPrimaryName("primary-five-name")
        }
    }, [imageId, colorPalette])

    return (
        <>
            <div className="left-nav-preview">
                <div className="left-nav-preview-tabs">
                    <button id={colorPalette === 2 ? primaryName : standardBorder} className="preview-button">k & p</button>
                    <button id={colorPalette === 2 ? primaryColor : ""} className="preview-button">venue</button>
                    <button id={colorPalette === 2 ? primaryColor : ""} className="preview-button">ceremony</button>
                    <button id={colorPalette === 2 ? primaryColor : ""} className="preview-button">RSVP</button>
                </div>
                <div className="left-preview-card">
                    <div className='top-half-preview'>
                        <img className="profile-image-preview" src="https://bloombucketjesse.s3.us-east-2.amazonaws.com/profile-example.jpg" alt=""></img>
                        <h2 id={colorPalette === 2 ? secondaryColor : ""} className="couple-names-preview">karen and paul</h2>
                    </div>
                        <p id={colorPalette === 2 ? primaryColor : ""} className="invitation-preview">joyfully invite you to their<br></br> wedding celebration</p>
                        <div id={colorPalette === 2 ? secondaryColor : ""} className="vertical-line-preview"></div>
                        <p id={colorPalette === 2 ? primaryColor : ""} className="invitation-preview">September 23, 2023</p>
                </div>
            </div>
        </>
    )
}

export default LeftNavPreview;
