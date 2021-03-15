import React, { useState } from "react";
import "./topNavPreview.css";

const TopNavPreview = ({imageId}) => {

    const [background, setBackground] = useState(0)


    return (
        <>
             <div className="top-nav-preview">
                <div className="preview-tabs">
                    <button id="preview-underline" className="preview-button">k & p</button>
                    <button className="preview-button">venue</button>
                    <button className="preview-button">ceremony</button>
                    <button className="preview-button">RSVP</button>
                </div>
                <div className="card-preview">
                    <div className='top-half-preview'>
                        <img className="profile-image-preview" src="https://bloombucketjesse.s3.us-east-2.amazonaws.com/profile-example.jpg" alt=""></img>
                        <h1 className="couple-names-preview">karen and paul</h1>
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
