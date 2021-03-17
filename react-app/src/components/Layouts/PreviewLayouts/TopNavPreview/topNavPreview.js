import React, { useState, useEffect } from "react";
import "./topNavPreview.css";

const TopNavPreview = ({imageId, colorPalette}) => {

    const [standardColor, setStandardColor] = useState("");
    const [standardBorder, setStandardBorder] = useState("basic-black");
    const [primaryColor, setPrimaryColor] = useState("");
    const [primaryName, setPrimaryName] = useState("");
    const [secondaryColor, setSecondColor] = useState("");

    useEffect(() => {
        if(imageId === 1 || imageId === 4 || imageId === 5) {
            setStandardColor("standard-one")
            setStandardBorder("basic-white")
        } else if(imageId === 2 || imageId === 3) {
            setStandardColor("")
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
    }, [imageId, setStandardColor, colorPalette])


    return (
        <>
            <div className="top-nav-preview">
                <div className="preview-tabs">
                    <button id={colorPalette === 2 ? primaryName : standardBorder} className="preview-button">k & p</button>
                    <button id={colorPalette === 2 ? primaryColor : standardColor} className="preview-button">venue</button>
                    <button id={colorPalette === 2 ? primaryColor : standardColor} className="preview-button">ceremony</button>
                    <button id={colorPalette === 2 ? primaryColor : standardColor} className="preview-button">RSVP</button>
                </div>
                <div className="card-preview">
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

export default TopNavPreview
