import React, { useState, useEffect } from "react";
import "./topNavPreview.css";

const TopNavPreview = ({imageId}) => {

    const [standardColor, setStandardColor] = useState("");

    useEffect(() => {
        if(imageId === 1 || imageId === 4 || imageId === 5) {
            setStandardColor("standard-one")
        } else if(imageId === 2 || imageId === 3) {
            setStandardColor("")
        }
    }, [imageId, setStandardColor])


    return (
        <>
             <div className="top-nav-preview">
                <div className="preview-tabs">
                    <button id={standardColor} className="preview-button-name">k & p</button>
                    <button id={standardColor} className="preview-button">venue</button>
                    <button id={standardColor} className="preview-button">ceremony</button>
                    <button id={standardColor} className="preview-button">RSVP</button>
                </div>
                <div className="card-preview">
                    <div className='top-half-preview'>
                        <img className="profile-image-preview" src="https://bloombucketjesse.s3.us-east-2.amazonaws.com/profile-example.jpg" alt=""></img>
                        <h2 className="couple-names-preview">karen and paul</h2>
                    </div>
                        <p className="invitation-preview">joyfully invite you to their<br></br> wedding celebration</p>
                        <div className="vertical-line-preview"></div>
                        <p className="invitation-preview">September 23, 2023</p>
                </div>
            </div>
        </>
    )
}

export default TopNavPreview
